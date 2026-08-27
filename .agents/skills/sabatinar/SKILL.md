---
name: sabatinar
description: >
  O "Comitê de Si Mesmo". Invoca subagentes para criticar, validar e encontrar furos
  em uma ideia bruta do usuário (novo produto, post polêmico, decisão financeira).
  Use quando o usuário disser "/sabatinar", "/brainstorm", "tive uma ideia, avalia", "o que acha disso".
---

# /sabatinar — Comitê de Validação

Empreendedores solo não têm equipe para debater ideias. Esta skill resolve isso criando uma "reunião de diretoria" simulada por subagentes.

## Workflow

1. Peça a ideia bruta para o usuário (se ele já não enviou).
2. Use a ferramenta `invoke_subagent` para invocar concorrentemente 3 subagentes (usando um modelo pro se possível), definindo os seguintes papéis (Role):
   - **O Advogado do Diabo (Crítico):** Focado em encontrar furos, falhas lógicas e motivos pelos quais a ideia vai dar errado.
   - **O Diretor Criativo:** Focado em como deixar a ideia mais sexy, viral e atraente para o público (lendo a persona do negócio).
   - **O Diretor Financeiro:** Focado em custos, tempo de execução e ROI (Retorno sobre Investimento). Vale a pena fazer isso agora?
3. Envie a ideia para os subagentes no prompt de invocação.
4. Aguarde a resposta dos 3.
5. Consolide as opiniões em um documento estilo "Ata de Reunião" (`ATA_REUNIAO.md` na pasta `saidas/` ou diretamente no chat, se for curto).
6. Devolva um resumo:

```markdown
# 👨‍💼 Comitê RrcodeOS (Análise de Ideia)

**A Ideia:** [Resumo curto]

🔥 **O que o Advogado do Diabo pontuou:** 
- Risco 1...

✨ **O que o Criativo sugeriu:** 
- Melhoria 1...

💰 **O Veredito do Financeiro:** 
- Ponto 1...

**Conclusão da IA:** [Sua conclusão, como orquestrador, recomendando executar ou não]. O que você decide?
```

