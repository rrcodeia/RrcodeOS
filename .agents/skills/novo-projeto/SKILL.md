---
name: novo-projeto
description: >
  Skill de Onboarding / Setup Inicial. Orquestra a criação inteligente da infraestrutura
  física do projeto na máquina do usuário, respeitando a arquitetura definida no GEMINI.md.
  Cria o micro-contexto, extrai informações iniciais e gera um checklist automatizado.
  (Pode ser chamado por /novo-projeto ou /onboarding).
---

# /novo-projeto (ou /onboarding) — O Arquiteto (RrcodeOS)

## Objetivo
Transformar o "começar um projeto" ou "fechar um cliente" em um apertar de botão. Em vez de fazer 10 perguntas num chat, o RrcodeOS cria a estrutura física, cria o contexto do cliente e já monta o campo de batalha para os próximos agentes trabalharem.

## Fluxo de Execução Autônoma

Quando o usuário disser `/novo-projeto` (fornecendo o nome do cliente ou contexto da venda):

### 1. Leitura de Arquitetura (Obrigatório)
Antes de criar qualquer pasta, leia o `GEMINI.md` da raiz para confirmar o perfil do operador.
- **Agência:** Crie as pastas dentro de `Clientes/<Nome_do_Cliente>/`
- **Empresa:** Crie as pastas dentro de `Setores/` ou `Projetos/<Nome>/`
- **Freelancer / Outros:** Crie as pastas dentro de `Projetos/<Nome>/`

### 2. Scaffold Inteligente (Criação de Pastas e Arquivos)
Em vez de pedir pro usuário criar, crie os seguintes arquivos físicos usando sua ferramenta de criação de arquivos:
- `contexto.md` (O micro-contexto isolado do projeto). Template a ser preenchido:
  - Sobre o negócio
  - Entregas vendidas
  - Regras específicas desse cliente
- `checklist_onboarding.md` (Uma lista de tarefas que o usuário precisa cumprir, como pedir acessos do Google, Meta Ads, assinaturas, etc).
- Subpastas estratégicas baseadas no que o usuário mencionou (ex: se o projeto é de SEO e Ads, crie `seo/` e `ads/` dentro da pasta do cliente).

### 3. Orquestração de Subagente (Paralelismo)
Se o usuário forneceu a URL do cliente no prompt inicial (ex: "Entrou o cliente padariadojoao.com.br"), **não perca tempo**.
Dispare um subagente usando `invoke_subagent` com a instrução:
*"Leia o site do cliente, extraia a identidade visual e o resumo do que eles vendem, e escreva o E-mail de Boas Vindas."*
Enquanto o subagente trabalha nisso no background, você termina de criar as pastas na etapa 2.

### 4. Entrega e Fechamento
Avise o usuário que a "Fábrica" foi montada com sucesso.
Forneça os links markdown locais (clicáveis) para os arquivos gerados (ex: `[contexto.md](file:///caminho/...)`) para que o usuário possa visualizar.
Lembre-o de que, agora que a pasta existe, ele pode rodar as skills de execução (como `/seo` e `/carrossel`) de dentro dela.

---

## Regras Críticas
- Use nomes de pastas sem espaços e sem acentos (ex: `Clinica_Odonto` e não `Clínica Odonto`).
- Apenas crie as subpastas que fazem sentido para o escopo relatado.
- Sempre informe o usuário de que, quando ele pedir trabalhos para esse cliente, você usará o `contexto.md` dessa nova pasta para ser hiper-personalizado.
