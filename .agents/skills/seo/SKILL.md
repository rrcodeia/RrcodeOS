---
name: seo
description: >
  A Máquina de Aquisição (Evoluída). Executa um fluxo completo de SEO, GMB, Tráfego Orgânico (GEO) e Google Ads
  com o histórico de aprendizado (feedbacks passados) para gerar um Masterplan altamente convertido.
---

# /seo — A Máquina de Aquisição Premium (RrcodeOS)

## Objetivo
Criar uma estratégia de dominação de buscas (Orgânico + Local + Ads) que não seja genérica. A skill orquestra múltiplos agentes para trabalhar em paralelo, e o mais importante: ela **aprende** com o que deu certo no passado para o operador e para o cliente.

## Fluxo de Execução Autônoma

Quando o usuário pedir `/seo` para um cliente:

### 1. Calibração de Inteligência (Leitura de Memória)
Antes de pesquisar fora, olhe para dentro:
- Leia o `.agents/rules/preferencias.md` do Operador (o que funciona para a Agência).
- Leia o `contexto.md` do Cliente (na pasta do cliente). 
- **O diferencial Premium:** Busque por anotações de "Feedbacks", "O que deu certo", "O que o cliente não gosta". Use isso como filtro obrigatório para as próximas etapas. (Ex: se no passado, para esse nicho, campanhas no Google Maps funcionaram melhor que conteúdo de Blog, o peso da estratégia deve focar no Maps).

### 2. Orquestração de Subagentes (Trabalho em Paralelo)
O SEO tem muitas frentes. Não faça uma de cada vez. Use a ferramenta `invoke_subagent` para disparar **3 agentes simultâneos**:

* **Agente 1 (Inteligência de Mercado):** 
  - Missão: Usar ferramentas de pesquisa web para descobrir quem são os 3 maiores concorrentes na região do cliente. Onde eles são fracos? (Ex: site lento, sem Google Meu Negócio, avaliações ruins).
  - Entrega: Arquivo `seo/01-brechas-da-concorrencia.md`.

* **Agente 2 (Mestre de Conteúdo, GEO & Multicanal):**
  - Missão: Mapear as palavras-chave com maior intenção de compra. Montar a estrutura de Conteúdo focada em dominar buscadores (Google, YouTube) e Motores de IA (GEO - Generative Engine Optimization).
  - Ação: Estruturar respostas diretas e baseadas em fatos para IA, além de gerar a matriz orgânica para YouTube (roteiros de retenção) e Blogs (estrutura On-Page).
  - Missão: Estruturar as campanhas de Google Ads Search. Criar as copies (textos dos anúncios) baseadas *exatamente* nos diferenciais que o Agente 1 encontrou e no tom de voz do cliente.
  - Entrega: Arquivo `seo/03-google-ads.md`.

### 3. A Entrega do Masterplan
Enquanto os subagentes finalizam o trabalho, consolide tudo num arquivo executivo: `seo/Masterplan_Estrategico.md`.
Apresente o resultado ao usuário destacando as oportunidades ocultas encontradas pela IA.

### 4. O Loop de Aprendizado Contínuo (O Fator Ouro)
Finalize a execução exigindo feedback:
> "O Masterplan está na mesa. Quando essas campanhas rodarem e os clientes começarem a chegar, volte aqui e me diga o que converteu mais (ex: 'O anúncio de urgência trouxe 10 leads, o artigo do blog não trouxe nenhum'). Eu vou gravar isso na matriz do RrcodeOS para usarmos como inteligência pura nos seus próximos clientes desse nicho."

Se o usuário fornecer um feedback de performance, use a ferramenta de edição de arquivos para gravar essa lição no `contexto.md` do cliente imediatamente.
