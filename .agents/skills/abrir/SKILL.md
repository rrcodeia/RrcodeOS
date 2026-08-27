---
name: abrir
description: >
  Abre uma sessão de trabalho carregando a memória do negócio e o Dashboard.
  Lê DASHBOARD.md e LEADS.md na raiz (se existirem) e devolve um briefing matinal
  pro usuário. Use quando o usuário disser "abrir", "começar o dia" ou "/abrir".
---

# /abrir — Abertura de sessão e Briefing Matinal

O objetivo é dar ao operador a clareza exata de onde o negócio parou e o que precisa ser feito hoje.

## Workflow

1. O Antigravity já carregou automaticamente os arquivos da pasta `.agents/rules/` no seu contexto.
   
2. Se a memória (`empresa.md` etc) estiver vazia, diga: *"As regras ainda não foram preenchidas. Quer rodar `/instalar`?"* e pare.

3. Use a tool `view_file` para ler os seguintes arquivos na raiz do projeto, se existirem:
   - `DASHBOARD.md`
   - `LEADS.md` (Para ver urgências no CRM)

4. Responda com um briefing claro, inspirador e acionável. Formato sugerido:

```markdown
# Bom dia! ☕ (ou Boa tarde/noite)
**[Nome da Empresa]** carregada e pronta.

## 🎯 Foco Principal (Baseado no Dashboard / Estratégia)
[Escreva o foco principal em 1 frase baseada no que leu]

## 🔥 Urgências (Baseado no LEADS.md, se existir)
- [Liste 1 a 3 leads ou clientes quentes que precisam de atenção hoje]

## 📌 Lembretes
- Lembre-se de usar `/inbox` para ideias soltas.
- No final do dia, rode **`/fechar`** para eu atualizar o diário e salvar tudo!

O que vamos fazer primeiro?
```

## Regras
- Mantenha curto e encorajador.
- Se `LEADS.md` ou `DASHBOARD.md` não existirem ou estiverem vazios, não mencione que faltam. Apenas resuma o que você tem.
