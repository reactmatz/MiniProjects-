# GitHub Repo Wiki

## Descrição do Projeto

GitHub Repo Wiki é uma aplicação web desenvolvida com Next.js que permite aos usuários pesquisar repositórios do GitHub e salvá-los em uma wiki pessoal. Esta aplicação demonstra o uso de APIs externas, gerenciamento de estado local e armazenamento persistente no navegador.

## Funcionalidades

- Pesquisa de repositórios do GitHub em tempo real
- Exibição de detalhes dos repositórios (nome, descrição, estrelas, forks)
- Salvamento de repositórios favoritos em uma wiki pessoal
- Remoção de repositórios da wiki
- Interface responsiva e amigável ao usuário

## Tecnologias Utilizadas

- Next.js 13 (com App Router)
- React 18
- Tailwind CSS
- shadcn/ui (para componentes de UI)
- GitHub API

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14.0.0 ou superior)
- npm (normalmente vem com o Node.js)

## Configuração do Projeto

Siga estes passos para configurar o projeto em sua máquina local:

1. Clone o repositório:
2. Instale as dependências:
3. Configure as variáveis de ambiente (se necessário):
Crie um arquivo `.env.local` na raiz do projeto e adicione quaisquer variáveis de ambiente necessárias.

## Executando o Projeto

Para iniciar o servidor de desenvolvimento:
npm run dev

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Estrutura do Projeto

- `src/app/`: Contém os arquivos principais do Next.js App Router
  - `layout.js`: Layout principal da aplicação
  - `page.js`: Página inicial da aplicação
- `src/components/`: Componentes React reutilizáveis
  - `github-repo-wiki.js`: Componente principal da aplicação
  - `ui/`: Componentes de UI do shadcn/ui
- `src/lib/`: Funções utilitárias
- `public/`: Arquivos estáticos

## Como Funciona

1. **Pesquisa de Repositórios**: 
   - Os usuários inserem um termo de pesquisa no campo de entrada.
   - Ao clicar em "Search", a aplicação faz uma chamada à API do GitHub para buscar repositórios correspondentes.
   - Os resultados são exibidos em cards na seção "Search Results".

2. **Salvamento na Wiki**:
   - Cada resultado de pesquisa tem um botão "Save to Wiki".
   - Ao clicar neste botão, o repositório é adicionado à lista de repositórios salvos.
   - Os repositórios salvos são armazenados no localStorage do navegador para persistência.

3. **Visualização da Wiki**:
   - Os repositórios salvos são exibidos na seção "Saved Repositories".
   - Cada repositório salvo pode ser removido da wiki clicando no botão "Remove from Wiki".

4. **Responsividade**:
   - A interface é responsiva, adaptando-se a diferentes tamanhos de tela.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

---

Desenvolvido como projeto acadêmico para [XP Inc. Full Stack Developer] Bootcamp

