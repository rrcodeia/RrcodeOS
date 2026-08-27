---
name: atendimento
description: >
  SAC Inteligente e humanizado. Responde a dúvidas, contorna objeções, resolve reclamações 
  e atende clientes usando o tom de voz e as regras do negócio.
  Use quando o usuário colar a mensagem de um cliente e disser "/atendimento", "responde isso", "SAC".
---

# /atendimento — O SAC de Bolso

Donos de negócios locais, e-commerces e influenciadores perdem horas tentando ser educados no WhatsApp com clientes difíceis. Esta skill faz o trabalho sujo.

## Workflow

1. Leia a mensagem bruta do cliente enviada pelo usuário (pode ser um print extraído, um áudio transcrito ou texto copiado).
2. Se a mensagem envolver uma reclamação grave (ex: pedido atrasado), pergunte rapidamente ao operador: *"Qual a resolução real que podemos dar? (ex: estorno, brinde, prazo real)"*. Se for dúvida simples, assuma e responda.
3. Consulte o arquivo `preferencias.md` e `empresa.md` para garantir que o tom de voz da resposta seja idêntico ao da marca.
4. **Estrutura da Resposta:**
   - **Empatia Inicial:** Valide a dor ou a dúvida (nunca comece dizendo "não").
   - **A Resolução:** Dê a resposta clara, sem enrolação.
   - **Encerramento Positivo:** Feche com simpatia (um emoji alinhado com a marca).
5. Gere a resposta formatada perfeitamente para ser copiada e colada no WhatsApp ou Instagram Direct.

## Regras
- Jamais use linguagem robótica de telemarketing ("senhor", "estaremos verificando").
- Mantenha respostas curtas. Ninguém lê textão no WhatsApp.
- Se não tiver informações sobre o produto para responder a dúvida, peça os detalhes ao usuário antes de alucinar respostas falsas.

