---
name: agente-whatsapp
description: >
  A Fábrica de Robôs de Atendimento. Gera o Cérebro (System Prompt), a árvore de decisão 
  e o manual de montagem para assistentes de WhatsApp que agendam horários e vendem 24/7.
---

# /agente-whatsapp — Fábrica de Automação IA (RrcodeOS)

## Objetivo
O serviço mais fácil e lucrativo para vender no comércio local hoje é a automação de WhatsApp. Esta skill transforma você em um Arquiteto de Automação. Ela gera toda a inteligência do robô, para que você apenas "copie e cole" em ferramentas No-Code e entregue o bot funcionando para o cliente.

## Fluxo de Execução

Quando o usuário disser que fechou um contrato de automação de WhatsApp ou rodar `/agente-whatsapp`:

### 1. Mapeamento do Cérebro
Peça ao usuário as regras do negócio do cliente:
- Qual o nome da empresa e o tom de voz do atendente? (Ex: Rústico para barbearia, acolhedor para clínica).
- Quais são os serviços e os preços?
- Onde fica a agenda? (Ex: Google Calendar, sistema próprio, ou apenas passar pro humano?).
- Qual o objetivo final? (Agendar horário, tirar dúvida, enviar cardápio?).

### 2. Geração do Prompt de Sistema (O Cérebro da IA)
Gere um **System Prompt** robusto e à prova de falhas para ser injetado na API da OpenAI (Assistant) ou no Typebot.
O prompt deve conter:
- Regra de Persona (Quem você é).
- Regra de Limites (O que você NÃO faz, ex: "Nunca dê descontos").
- Base de Conhecimento (Tabela de preços, endereço, horários).
- Comando de Fechamento (Como finalizar o agendamento).

### 3. A Receita de Montagem (Para o Iniciante)
O operador do RrcodeOS pode não saber programar. Entregue um passo a passo simples de como ele vai montar isso usando ferramentas No-Code:
1. **O Front-end:** "Crie uma conta no Typebot ou ManyChat."
2. **O Back-end:** "Use o Make.com ou o Zapier para conectar a conta do WhatsApp Business."
3. **A Inteligência:** "No bloco de IA, cole o System Prompt gerado acima."
4. **A Agenda:** "Configure o módulo do Google Calendar para ler horários livres."

### 4. Entrega e Instruções de Upsell
Avise o operador: "O Cérebro do bot está pronto. Salve na pasta do cliente. Lembre-se: cobre um valor de Setup (ex: R$ 1.000) pela criação e um valor Mensal (ex: R$ 300) pela manutenção do servidor e da API da OpenAI."

