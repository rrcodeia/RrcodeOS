---
name: rotina
description: >
  Programa o RrcodeOS para rodar tarefas em background de forma recorrente (piloto automático).
  Use para monitorar concorrentes toda semana, gerar relatórios mensais ou fazer 
  varreduras de mercado sem que o operador precise pedir.
---

# /rotina — Automação em Background (RrcodeOS)

## Objetivo
Transformar o RrcodeOS em um funcionário que trabalha sozinho enquanto o operador faz outras coisas. Essa skill instrui a IA a usar a ferramenta nativa de agendamento (cron jobs ou timers) para rodar processos críticos do negócio no piloto automático.

## Como funciona?

Quando o usuário disser: *"Cria uma rotina pra rodar o relatório toda sexta"*, *"Monitora o Instagram do concorrente X toda semana"*:

### 1. Entendimento do Gatilho
Defina a frequência exata (ex: "toda sexta às 18h", "a cada 7 dias", "daqui a 3 horas").

### 2. Definição do Escopo (A Missão)
O que o RrcodeOS deve fazer quando o tempo chegar?
- É rodar a skill `/relatorio-ads`?
- É fazer um `search_web` sobre as avaliações do Google Meu Negócio do cliente?
- É fazer um web scraping de um site concorrente para ver se os preços mudaram?

### 3. Execução do Agendamento (Ferramenta Nativa)
Você deve utilizar a ferramenta nativa `schedule` (cron) do seu ecossistema.
Configure o `CronExpression` adequadamente e, no `Prompt` de notificação, passe a instrução completa do que você mesmo (ou outro subagente) deverá fazer quando a notificação chegar.
*Importante:* Marque `IsDaemon=true` se for uma rotina perpétua (ex: relatórios semanais que o operador quer manter vivos para sempre).

### 4. Feedback ao Operador
Após agendar, comunique o operador de forma clara:
> "Rotina ativada no piloto automático. A partir de agora, toda [frequência], eu acordarei sozinho, executarei a missão e deixarei o resultado pronto no seu `BACKLOG.md` (ou na pasta do cliente)."

## Casos de Uso Comuns (Proponha se o usuário estiver em dúvida)
- **O Guardião de SEO:** Uma rotina mensal que verifica se os 3 principais concorrentes locais lançaram páginas ou ofertas novas.
- **Fechamento de Caixa:** Toda sexta-feira gerar o `/relatorio-ads` mastigado para enviar aos clientes da Agência.
- **Garimpo de Leads:** Uma rotina que varre o Google Maps de uma cidade a cada 15 dias buscando novos CNPJs abertos no nicho alvo.
