---
name: comercial
description: >
  A Máquina de Vendas. Fluxo interativo e passo a passo que unifica Diagnóstico, Precificação e Proposta Comercial B2B.
---

# /comercial — O Closer (RrcodeOS)

## Objetivo
Transformar anotações brutas de uma reunião em um fechamento certeiro, guiando o usuário passo a passo: do diagnóstico à precificação, até a proposta final.

## Regra de Ouro: Interatividade
NUNCA execute todas as etapas de uma vez. Execute uma etapa, mostre o resultado e PERGUNTE se o usuário deseja prosseguir para a próxima.

## Fluxo de Execução

### Etapa 1: Diagnóstico e Estratégia (Aguardar Input)
- **Gatilho:** Quando o usuário acionar `/comercial`, peça as anotações sobre o lead.
- **Ação:** Analise o negócio do lead.
  - **🥊 Raio-X de Concorrentes:** Liste quem são os 3 maiores rivais deles e o que estão fazendo melhor.
  - **Diagnóstico Real:** O que o lead acha que quer VS o que ele realmente precisa.
  - **Funil:** O que o operador (RrcodeOS) deve vender para dar resultado rápido.
- **Parada (Checkpoint):** Entregue o Diagnóstico e pergunte: *"Quer que eu calcule a Precificação sugerida para esse projeto?"*

### Etapa 2: Precificação e Ancoragem
- **Ação:** Com base no escopo definido na Etapa 1, calcule:
  - O preço sugerido para o serviço (setup inicial + fee mensal).
  - Quanto o cliente deve separar para tráfego (se aplicável).
  - 3 Argumentos de Ancoragem (como justificar o preço provando o ROI).
- **Parada (Checkpoint):** Entregue a Precificação e pergunte: *"O valor está bom? Quer que eu gere a Proposta Comercial (PDF/Markdown) pronta para enviar?"*

### Etapa 3: A Proposta Comercial
- **Ação:** Gere uma proposta persuasiva estruturada com:
  1. O Problema (O gargalo atual).
  2. A Solução (O Escopo RrcodeOS).
  3. O Raio-X da Concorrência (Gatilho de urgência).
  4. O Investimento (Preços da Etapa 2).
  5. Próximos Passos (Fechamento).

