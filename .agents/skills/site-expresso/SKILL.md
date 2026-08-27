---
name: site-expresso
description: >
  A Fábrica de Sites e Infraestrutura. Desenvolve qualquer tipo de site (E-commerce, 
  Institucional, Agendamento, Landing Page) e gera o manual "tim tim por tim tim" 
  ensinando o operador a registrar domínio, hospedar e colocar no ar.
---

# /site-expresso — O Desenvolvedor & Arquiteto (RrcodeOS)

## Objetivo
Criar sites de alto padrão para qualquer nicho de mercado e garantir que o operador (mesmo sem saber programar) saiba exatamente **como colocar esse site no ar, onde hospedar, quanto custa e como vender a manutenção**. 

## Fluxo de Execução Autônoma

Quando o usuário pedir a criação de um site ou digitar `/site-expresso`:

### 1. Diagnóstico do Modelo Arquitetural
Antes de codar, a IA deve perguntar ou identificar qual o tipo de site, pois a estrutura muda drasticamente:
- **Landing Page (Captação):** Foco em 1 página só, promessa forte, formulário e botão de WhatsApp.
- **Institucional:** Foco em credibilidade (Home, Sobre, Serviços, Contato). Ideal para clínicas e escritórios.
- **E-commerce:** Foco em catálogo, vitrine de produtos, carrinho e link de pagamento.
- **Site de Agendamento:** Foco em calendários embutidos e reserva de horários.
- **Blog / Informação:** Foco em artigos e SEO.

### 2. Codificação Física (A Fábrica)
O RrcodeOS vai gerar os arquivos físicos do site na pasta `Clientes/<Nome>/site/`:
- Arquivos `.html`, `.css`, ou componentes modernos com **Tailwind CSS**.
- Seções prontas baseadas em copy agressiva de vendas.
- Botões flutuantes do WhatsApp ou links diretos para gateways (Stripe/MercadoPago).
- Geração de imagens via `generate_image` se o cliente não tiver fotos.

### 3. A Entrega: O Manual "Tim Tim por Tim Tim"
Após terminar o código, a IA **obrigatoriamente** gera um arquivo chamado `MANUAL_DA_HOSPEDAGEM.md` na pasta do cliente. Esse manual é para o Sr. João e deve ensiná-lo os seguintes passos em linguagem para leigos:

* **Passo 1: Como mostrar pro cliente aprovar (De graça):** 
  Explique como zipar a pasta do site e arrastar para o *Netlify Drop* ou usar o *Vercel*. Ele gera um link temporário (ex: `site-do-cliente.netlify.app`) para o Sr. João mandar no WhatsApp do dono da empresa e pedir aprovação.

* **Passo 2: Como comprar o Domínio (O Nome do site):** 
  Ensine a entrar no **Registro.br** (para domínios .com.br) ou **Hostinger/GoDaddy**. Mostre o valor real (aprox. R$ 40,00 por ano).

* **Passo 3: Onde Hospedar (O Servidor):** 
  Dê o mapa exato. Se for site estático (HTML rápido), ensine a conectar o domínio no Netlify/Vercel (Custo: R$ 0). Se for E-commerce pesado ou WordPress, indique Hostinger ou equivalente (aprox. R$ 20 a R$ 30/mês).

* **Passo 4: Segurança (O Cadeado do Site):** 
  Ensine que o Certificado SSL hoje vem de graça nas hospedagens modernas ou via Cloudflare, passando segurança para quem navega.

* **Passo 5: Como lucrar com a Manutenção:** 
  Alerte o Sr. João: *"Nunca dê a hospedagem de graça. O domínio e servidor custam R$ 40/ano, mas você deve cobrar do cliente uma mensalidade de R$ 100 a R$ 200 de 'Manutenção e Servidor'."*

### 4. Conclusão
Avise o usuário que o site está programado e o manual de infraestrutura está pronto para leitura.
