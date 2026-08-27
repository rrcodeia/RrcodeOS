---
name: salvar
description: >
  Salva o trabalho gerando um histórico de commits profissional (Semantic Commits). 
  Dá ao usuário a escolha de destino: local, nuvem atual ou outro repo.
  Use quando o usuário disser "/salvar", "commit", "salvar projeto".
---

# /salvar — Versionamento Inteligente

Esta skill cuida do versionamento do projeto exatamente como um Desenvolvedor Senior faria, com mensagens semânticas (padrão Semantic Commits), garantindo um histórico profissional. O controle sobre para onde esse código vai fica nas mãos do usuário.

## Workflow

1. **Análise de Mudanças:** Execute `git status`. Se não houver mudanças, avise: *"Tudo já está salvo! Não há alterações pendentes no projeto."* e encerre a skill.
2. **Commit Profissional (Automático):** 
   - Analise os arquivos que foram criados, alterados ou deletados.
   - Gere uma mensagem de commit inteligente usando o padrão Semantic Commits. Exemplos: `feat: cria playbook de vendas`, `docs: atualiza regras da identidade visual`, `fix: corrige objeção no roteiro de atendimento`.
   - Execute silenciosamente `git add .` seguido do `git commit -m "<mensagem_gerada>"`.
   - Diga ao usuário: *"Feito! Criei um commit local com a mensagem: `[mensagem gerada]`"*.
3. **Identificação do Destino na Nuvem:** Execute o comando `git remote get-url origin` para verificar se já existe um repositório remoto configurado.
4. **Interação com o Usuário:** Mostre as opções de backup de forma clara. Pergunte:
   > "Onde você deseja salvar esse backup agora?"
   > 
   > 1. **Apenas Local (Desktop):** Manter apenas na sua máquina.
   > 2. **Nuvem Atual:** Enviar para o repositório já configurado: `[Insira a URL do remote, ou diga 'Nenhum configurado' se falhou o passo 3]`
   > 3. **Outro Repositório:** Enviar para um repositório nuvem diferente/novo.
5. **Execução Final:** Aguarde a decisão e aja conforme a escolha:
   - **Se opção 1 (Local):** Confirme que o trabalho está seguro no Desktop e encerre o processo.
   - **Se opção 2 (Nuvem Atual):** 
     - Se houver URL configurada, rode o `git push` (ou `git push -u origin main` se aplicável).
     - Se não houver URL, peça a URL, rode `git remote add origin <URL>` e depois faça o push.
   - **Se opção 3 (Outro Repositório):** 
     - Peça ao usuário para informar a nova URL.
     - Quando ele fornecer, adicione ou atualize o remote (ex: `git remote set-url origin <URL>` ou `git remote add origin <URL>`) e execute o `git push`.
6. **Encerramento:** Se opções 2 ou 3 foram escolhidas, entregue o link final onde o código foi armazenado para o usuário conferir e confirme o sucesso.
