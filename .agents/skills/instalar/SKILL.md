---
name: instalar
description: >
  Instala o RrcodeOS no negócio do usuário. Entrevista sobre empresa, tom de voz,
  foco atual e identidade visual, e preenche a memória base em `.agents/rules/`.
  Copia os arquivos de interface (Dashboard, Log, Cofre) baseados no perfil.
  Use quando o usuário clonar o repositório e pedir "/instalar" ou "primeiro setup".
---

# /instalar — Instalação inicial do RrcodeOS

Esse é o primeiro comando que o usuário roda depois de clonar o repositório. Não pode falhar e não pode soar burocrático. Trata como conversa de descoberta — pergunta uma coisa por vez, escuta de verdade, não enfileira tudo. 

## Fase 1 — Escolha do perfil e Arquitetura

Perguntar qual perfil mais combina com o negócio do operador. A resposta guiará a arquitetura:

1. **Agência** — Estrutura em `Clientes/`.
2. **Empresa** — Estrutura em `Setores/`.
3. **Empreendedor Solo** — Estrutura em `Trabalhos/`.
4. **Freelancer** — Estrutura em `Projetos/`.
5. **Influenciador/Criador** — Estrutura focada em `Conteudo/` e marca pessoal.

## Fase 2 — Entrevista Profunda (Diagnóstico do Operador)

Para garantir que o RrcodeOS seja o braço inteligente e não "suponha" nada ao ajudar na prospecção ou na execução, faça essas perguntas em ordem, de forma conversacional e investigativa (uma por vez):

1. **Identidade Base:** "Como você chama o seu negócio (ou seu nome como profissional) e o que você faz hoje em 1 frase?"
2. **Arsenal de Serviços:** "Quais serviços você *de fato* consegue entregar com excelência hoje? (ex: Google Meu Negócio, Tráfego Pago, Social Media, Criação de Sites, Consultoria)"
3. **Público e Mercado Alvo:** "Qual é o seu cliente ideal? Você foca mais em negócios locais (físicos), infoprodutores, freelancers, ou outro nicho específico?"
4. **Modo de Ataque (Vendas):** "Como você prefere adquirir esses clientes? Você sai para visitar lojinhas no bairro, foca em WhatsApp, tráfego, ou quer minha ajuda para desenhar isso do zero?"
5. **Gargalo Atual:** "Qual é o seu maior desafio ou gargalo hoje para escalar e faturar mais?"
6. **Marca (Face Pública):** "Como é o tom de voz da sua comunicação (sério, agressivo em vendas, parceiro, descontraído)? E você já tem cores ou logo definidos?"

## Fase 3 — Preenchimento e Arquivos de Interface

1. **Memória:** Preencha `.agents/rules/empresa.md`, `preferencias.md`, `estrategia.md` e `design-guide.md` com as respostas.
2. **Arquivos Base:** Use a ferramenta `run_command` para copiar os arquivos de `templates/arquivos_base/` para a raiz do projeto (cuidado, use o comando de cópia correto do Windows/PowerShell `Copy-Item` ou similar):
   - Copie `DASHBOARD.md`, `LOG.md`, `BACKLOG.md` para **todos**.
   - Se for **Empreendedor Solo, Freelancer ou Influenciador**, copie também `COFRE.md`.
   - Se for **Agência, Freelancer ou Solo**, copie também `LEADS.md`.

## Fase 4 — Alinhamento de Segurança de Dados

Antes de finalizar, assuma uma postura proativa sobre segurança:
> "Notei que vamos trabalhar com ferramentas externas e marketing. **Segurança é inegociável aqui.** Se precisarmos conectar ao Google Ads, Meta ou outro software, eu te avisarei. Mas já deixo claro: **nunca coloque senhas ou tokens nos arquivos .md**. Sempre pedirei para você guardar em um arquivo `.env` seguro que não vai pro GitHub, ok?"

## Fase 5 — Resumo e Dicas do Dia a Dia

Mostre o que foi configurado e ensine o ciclo de vida diário:
> "Tudo pronto! O RrcodeOS já é o sistema operacional da **[Nome da Empresa]**.
> 
> **Sua rotina a partir de agora:**
> 1. Todo dia que ligar o PC, diga **`/abrir`**. Eu lerei seu Dashboard e direi o foco do dia.
> 2. Ao terminar de trabalhar, diga **`/fechar`**. Eu resumo o que fizemos no `LOG.md` e salvo seu projeto na nuvem.
> 3. Teve ideia no banho? Joga aqui e diga **`/inbox`** que eu organizo no seu Backlog ou Cofre.
>
> Não esqueça de ler o **CHEATSHEET.md** na raiz. O que vamos atacar agora?"
