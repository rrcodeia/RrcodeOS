---
name: fechar
description: >
  Skill de fim de expediente. Resume o dia, anota o progresso, prepara o 
  dia seguinte, varre arquivos temporários e oferece o /salvar.
  Use quando o usuário disser "/fechar", "encerrar o dia", "terminar por hoje".
---

# /fechar — Encerramento de Expediente Estratégico

O objetivo desta skill é atuar como um "fechamento de caixa", consolidando o trabalho do dia, limpando o ambiente e preparando o RrcodeOS para amanhã, mas passando o controle do backup final para o usuário.

## Workflow

1. Diga *"Encerrando o dia! Vou organizar nosso progresso e limpar a casa."*
2. **Higiene do Workspace:** Analise o ambiente em busca de arquivos temporários, rascunhos inúteis ou lixo residual criado nas operações de hoje (arquivos temporários, de teste abandonados, etc.). Se houver, remova-os (usando comandos de deleção como `Remove-Item` no PowerShell).
3. **Resumo e Log Diário:** Com base no contexto do chat de hoje, gere um resumo gerencial claro do que foi feito/alcançado no dia. 
   - Use a ferramenta `run_command` para criar ou adicionar esse resumo ao arquivo `LOG.md` (na raiz do RrcodeOS). Coloque o cabeçalho com a data de hoje.
4. **Ponte para o Futuro:** Pergunte ativamente ao usuário: 
   > *"O que ficou pendente ou qual deve ser a nossa prioridade número um para amanhã logo no primeiro horário?"*
   - Aguarde a resposta e registre no arquivo `DASHBOARD.md` (na raiz) sob a seção "Próximos Passos" ou "Prioridades", para que o sistema (e o usuário) se lembrem logo no próximo `/abrir`.
5. **Oferta de Backup (/salvar):** Por fim, passe a bola. Pergunte ao usuário: 
   > *"Tudo registrado e organizado! Deseja que eu execute a skill `/salvar` agora para fazer o commit e empacotar nosso trabalho?"*
   - Se ele disser sim, invoque o fluxo da skill `/salvar`. Se disser não, encerre desejando um bom descanso.
