---
name: relatorio-premium
description: >
  Relatório Automático e Mensagem de Retenção. Analisa os dados da semana (Ads, Vendas, Acessos) 
  e gera o report técnico para a Agência E o relatório mastigado de ROI em formato WhatsApp
  para o Cliente. Pronto para ser agendado com /schedule.
---

# /relatorio-premium — O Retentor de Clientes (RrcodeOS)

## Objetivo
Agências e Freelancers perdem clientes não por falta de resultado, mas por **falta de comunicação de valor**. Esta skill automatiza a prestação de contas, garantindo que o cliente receba um resumo executivo provando o ROI, enquanto o dono da agência recebe as métricas técnicas.

## Fluxo de Execução Autônoma

Quando rodar o `/relatorio-premium` na pasta de um cliente (ou via cron job):

### 1. Coleta e Cruzamento
O RrcodeOS usa ferramentas locais para ler os arquivos de dados brutos (CSVs exportados do Meta/Google ou relatórios do Analytics) na pasta do cliente. Em seguida, cruza esses dados com o `contexto.md` do cliente para lembrar qual era a META (ex: "Meta do João é custo por lead abaixo de R$ 15").

### 2. Orquestração de Subagentes (Dupla Visão)
O Antigravity usará `invoke_subagent` para disparar **2 subagentes simultâneos**:

* **Agente 1 (O Analista Técnico Interno):** 
  - Missão: Encontrar gargalos técnicos. Onde estamos perdendo dinheiro? Qual palavra-chave negativar? O CTR caiu?
  - Entrega: Arquivo `relatorios/SemanaX-Tecnico.md` contendo um checklist exato do que o operador precisa ajustar nas campanhas na segunda-feira.

* **Agente 2 (O Gerente de Sucesso do Cliente - CX):**
  - Missão: Traduzir "tecniquês" para a língua de negócios. O cliente não quer saber o CPM, ele quer saber quanto investiu e quantos orçamentos recebeu.
  - Entrega: O texto perfeito, no tom de voz da agência (lido no `preferencias.md`), formatado para WhatsApp ou E-mail.

### 3. A Entrega Final na Interface
O RrcodeOS apresenta na tela:
1. **[Alerta Crítico]** (Markdown GitHub-style) se o Agente 1 encontrou dinheiro sendo queimado à toa.
2. **O Box de Mensagem:** Um bloco de texto mastigado e formatado, pronto para o dono da agência dar `Ctrl+C` e enviar no WhatsApp do cliente às 17h da sexta-feira. (Ex: *"Fala João, ótima semana! Investimos R$500 e geramos 32 conversas de orçamento. Custo de R$15 por lead (dentro da nossa meta). Para semana que vem, vamos pausar o criativo X que cansou e testar uma oferta nova. Tamo junto!"*).

### 4. A Escala (O Piloto Automático)
Sempre termine a skill ensinando a automação de tempo:
> "Para não precisar lembrar de me pedir isso na correria, digite `/schedule` no chat agora e me programe para rodar essa skill toda sexta-feira às 15h. Seu único trabalho será salvar o CSV na pasta, e eu já te deixo a mensagem do WhatsApp pronta na tela."
