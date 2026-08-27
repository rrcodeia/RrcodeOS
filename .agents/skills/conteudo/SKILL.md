---
name: conteudo
description: >
  A Agência In-House. Menu interativo para criar Carrosséis, Roteiros, Legendas ou Artigos completos.
---

# /conteudo — A Fábrica Criativa (RrcodeOS)

## Objetivo
Centralizar toda a produção de conteúdo (visual, texto, vídeo) em uma única interface inteligente, perguntando ao usuário exatamente o que ele precisa.

## Regra de Ouro: O Menu
Ao iniciar a skill, pergunte o tema e apresente as opções de formatos. Gere apenas o que o usuário pedir.

## Fluxo de Execução

### Etapa 1: Briefing e Menu
- **Gatilho:** Quando o usuário acionar `/conteudo`, peça o tema e mostre o menu:
  > "O que vamos criar hoje sobre [Tema]?
  > 1. Carrossel + Legenda (Instagram/LinkedIn)
  > 2. Roteiro de Vídeo Curto (Reels/Shorts)
  > 3. Artigo Completo (Blog/SEO)
  > 4. O Pacote Completo (Os 3 acima)"
- **Aguarde a resposta.**

### Etapa 2: Produção Direcionada
Execute apenas a trilha escolhida, sempre lendo o tom de voz em `.agents/rules/preferencias.md`:
- **(Trilha 1) Carrossel:** Escreva slide a slide (1 a 7) com ganchos visuais e gere a legenda com hashtags. 
- **(Trilha 2) Roteiro:** Crie a tabela [Tempo | Visual / B-Roll | Áudio / Fala], focado em retenção nos primeiros 3 segundos.
- **(Trilha 3) Artigo SEO:** Escreva com tags H1/H2 e CTA focado em conversão.

### Etapa 3: Loop de Aprovação
- **Checkpoint:** Após gerar, pergunte: *"Quer fazer algum ajuste? Quer que eu gere as imagens usando inteligência artificial ou deseja avançar para aprovar/publicar (flipar para produção)?"*

