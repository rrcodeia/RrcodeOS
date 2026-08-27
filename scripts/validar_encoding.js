/**
 * RrcodeOS — Script de Validação de Encoding e Integridade
 *
 * Garante que todos os arquivos de texto do projeto estejam em UTF-8 válido (sem BOM),
 * sem mojibake e sem corrupção de caracteres.
 *
 * Execução:
 *   node scripts/validar_encoding.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const ignoredDirs = new Set(['.git', 'node_modules', '.venv', 'dist', 'build', '.system_generated']);
const textExtensions = new Set([
  '.md', '.txt', '.json', '.yaml', '.yml', '.py', '.ts', '.js',
  '.html', '.css', '.sh', '.ps1', '.bat', '.csv', '.env', '.gitignore',
  '.editorconfig', '.gitattributes'
]);

const mojibakePatterns = [
  'Ã¡', 'Ã©', 'Ã­', 'Ã³', 'Ãº', 'Ã£', 'Ãµ', 'Ã§', 'Ã€', 'Ã‰', 'Ã“',
  'â€“', 'â€”', 'â€œ', 'â€', 'Â°', 'Â§', 'ï¿½', '\ufffd',
  'Ã¢', 'Ã´', 'Ã®', 'Ã»', 'ÃŠ', 'ÃŽ', 'Ã”', 'Ã›'
];

function getAllFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else if (entry.isFile()) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function isValidUTF8(buf) {
  try {
    const decoder = new TextDecoder('utf-8', { fatal: true });
    decoder.decode(buf);
    return true;
  } catch (e) {
    return false;
  }
}

function isBinary(buf) {
  const checkLen = Math.min(buf.length, 8000);
  for (let i = 0; i < checkLen; i++) {
    if (buf[i] === 0) return true;
  }
  return false;
}

function runValidation() {
  console.log('🔍 Iniciando varredura de integridade e encoding no RrcodeOS...');
  const files = getAllFiles(rootDir);
  
  let validCount = 0;
  let skippedBinary = 0;
  const errors = [];
  const warnings = [];

  for (const file of files) {
    const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file);

    const buf = fs.readFileSync(file);
    if (buf.length === 0) {
      warnings.push(`[ARQUIVO VAZIO 0 BYTES] ${relPath}`);
      continue;
    }

    if (isBinary(buf)) {
      skippedBinary++;
      continue;
    }

    // 1. Validar UTF-8 estrito
    if (!isValidUTF8(buf)) {
      errors.push(`[INVALID UTF-8] ${relPath} — Contém bytes inválidos para UTF-8 (possível ANSI/Windows-1252).`);
      continue;
    }

    // 2. Checar presença de UTF-8 BOM
    if (buf.length >= 3 && buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
      errors.push(`[UTF-8 COM BOM] ${relPath} — Contém assinatura BOM (0xEF 0xBB 0xBF). Salve em UTF-8 no-BOM.`);
    }

    // 3. Checar Mojibake / Replacement chars
    const text = buf.toString('utf8');
    if (text.includes('\ufffd')) {
      errors.push(`[CORRUPÇÃO \\ufffd] ${relPath} — Contém caractere de substituição Unicode (corrupção prévia).`);
    }

    if (relPath !== 'scripts/validar_encoding.js') {
      const foundMojibake = mojibakePatterns.filter(p => text.includes(p));
      if (foundMojibake.length > 0) {
        warnings.push(`[POSSÍVEL MOJIBAKE] ${relPath} — Padrões encontrados: ${JSON.stringify(foundMojibake)}`);
      }
    }

    // 4. Validar frontmatter se for skill
    if (relPath.startsWith('.agents/skills/') && relPath.endsWith('SKILL.md')) {
      const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (!match) {
        errors.push(`[FRONTMATTER INVÁLIDO] ${relPath} — Frontmatter YAML ausente ou malformatado.`);
      }
    }

    validCount++;
  }

  console.log('\n========================================');
  console.log(`✅ Arquivos de texto UTF-8 válidos: ${validCount}`);
  console.log(`📦 Arquivos binários ignorados: ${skippedBinary}`);
  console.log(`⚠️ Avisos: ${warnings.length}`);
  console.log(`❌ Erros de encoding/estrutura: ${errors.length}`);
  console.log('========================================\n');

  if (warnings.length > 0) {
    console.log('--- AVISOS ---');
    warnings.forEach(w => console.log('  ⚠️ ' + w));
    console.log('');
  }

  if (errors.length > 0) {
    console.log('--- ERROS DETECTADOS ---');
    errors.forEach(e => console.log('  ❌ ' + e));
    console.log('\n💥 Falha na validação de integridade. Corrija os erros acima.');
    process.exit(1);
  } else {
    console.log('🎉 Todos os arquivos de texto estão em UTF-8 estrito e íntegros!');
    process.exit(0);
  }
}

runValidation();
