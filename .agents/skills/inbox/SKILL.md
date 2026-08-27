---
name: inbox
description: >
  A Caixa de Entrada Inteligente (Brain Dump). Processa pensamentos desconexos, links,
  textos copiados e roteia para o local correto (Backlog, Leads, Dashboard).
  Use quando o usuário disser "/inbox", "anota isso", "processa", ou jogar um texto solto e confuso.
---

# /inbox — O Cérebro Auxiliar

O usuário é bombardeado de informações o dia todo. O objetivo desta skill é permitir que ele apenas jogue coisas desconexas no chat e você as organize no arquivo certo.

## Workflow

1. Receba a entrada bruta do usuário (pode ser uma ideia, um link de referência, uma mensagem de cliente encaminhada, etc).
2. Analise a natureza do conteúdo:
   - É uma **ideia de automação** ou algo pra fazer depois? -> Envie para o `BACKLOG.md`.
   - É um **cliente interessado** ou lead novo? -> Envie para o `LEADS.md` (Seção Urgente ou Morno).
   - É uma **referência, história ou gancho de conteúdo**? -> Envie para o `COFRE.md`.
   - É uma **meta nova**? -> Envie para o `DASHBOARD.md`.
3. Use `replace_file_content` (ou append) para adicionar a informação de forma estruturada no arquivo correto.
4. Responda apenas com a confirmação da triagem. Exemplo:

> *"✅ Peguei. Era um Lead novo, então já adicionei no **LEADS.md** (seção Quente) pra você não esquecer."*
ou
> *"✅ Processado. Guardei essa ideia incrível lá no **BACKLOG.md** para virar skill depois."*

