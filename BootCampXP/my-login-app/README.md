# My Login App

## Descrição

Este projeto é uma aplicação web de login desenvolvida com React e TypeScript, que inclui autenticação e validação. A aplicação permite que os usuários façam login usando suas credenciais ou através de suas contas do Google.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **react-google-login**: Biblioteca para implementar autenticação com Google.
- **axios**: Cliente HTTP para fazer requisições.
- **yup**: Biblioteca de validação de esquema para JavaScript.

## Funcionalidades

- Tela de login com validação de campos.
- Autenticação com email e senha.
- Login com conta do Google.
- Mensagens de erro para validação de campos e login falho.

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/my-login-app.git
   cd my-login-app

   Instale as dependências:

bash
npm install
Crie um arquivo .env na raiz do projeto e adicione seu Google Client ID:

env
REACT_APP_GOOGLE_CLIENT_ID=seu-client-id-google
Executando a Aplicação
Para iniciar o servidor de desenvolvimento, execute:

bash
npm start
A aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
![Estrutura do projeto](https://iili.io/2A8kMns.png)


Crie uma nova branch:

bash
git checkout -b minha-nova-feature
Faça suas alterações e commit:

bash
git commit -m 'Add nova feature'
Envie para a branch original:

bash
git push origin minha-nova-feature
Abra um Pull Request.
