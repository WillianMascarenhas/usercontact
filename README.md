# Api Contact

Este projeto tem como objetivo ,criar uma agenda para organizar os contatos,<br/>
onde é possível listar as informações,atualizar  ou acrescentar e excluir um ou mais dados.

### Tecnologias utilizadas:
- Node.js
- Express.js
- TypeORM
- PostgreSQL
- React 

### Requisitos:
-  Node.js instalado (versão 12 ou superior)
-  PostgreSQL instalado e rodando

### Configuração do banco de dados
Antes de executar a aplicação, você precisa configurar o banco de dados PostgreSQL. Certifique-se de ter criado um arquivo .env  
 na raiz do projeto e atualize as informações de conexão substituindo as variáveis de ambientes de acordo com  o arquivo .env.example.

## Rodando a aplicação

Para testar a aplicação deste projeto é necessário:

- clonar o repositório para sua máquina local;
- Na pasta raiz do projeto, execute o     seguinte comando para instalar as   dependências 
do backend:

```bash
  npm install
```
- Em seguida, navegue para a pasta do frontend e instale suas dependências;
- ####  execute o comando no seu terminal:

```bash
  npm install
```
### executando a aplicação:

#### Backend

- Para iniciar o servidor backend, na pasta raiz do projeto, execute o seguinte comando:
```bash
  npm run dev
```
O servidor backend será iniciado na porta 3000.
- Se preferir é possível ter acesso as requisições por um cliente HTTP de sua escolha, como o Insomnia ou Postman


#### frontend
- na pasta do frontend, execute o seguinte comando:
```bash
  npm run dev
```
         ou
```bash
  npm start
```
###  Como usar:

- Acesse a aplicação pelo navegador(frontend) :
- obs : ao rodar o comando irá aparecer o link onde a aplicação estará rodando,então apenas entre no link .
 #### crtl+click
- Então você será direcionado para a página da aplicação

### Features
- [x] CRUD complete de contatos (cadastrar, listar, atulizar e deletar)
- [x] Criação de Usuário, o seu login
## Endpoints:
<br/>

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /user                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /user                   | Lista todos os usuários                           | Qualquer usuário, não necessita token                  |
| PATCH | /user/:id/ | Atualiza parcialmente informações de  um usuário |  Apenas o dono da conta, necessita do token de autenticação |
| DELETE | /user/:id/                 |exclui uma conta                                   | Apenas o dono da conta, necessita do token de autenticação |            

### Para realizar o cadastro:
{<br/>
  "full_name":"UserName",<br/>
  "email":"user@mail.com",<br/>
  "fone":"11999999999",<br/>
  "password":"1234"<br/>
}<br/>

### Para realizar o login:

{<br/>
  "email":"user@mail.com",<br/>
  "password":"1234"<br/>
}<br/>

####Todas as rotas necessitam de token de autenticação
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
|GET | /contact                     |  Lista todos os contatos cadastrados                         | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
|POST | /contact                    | Cria um novo contato                                                        | Usuário dono da conta ques esteja logado, necessita do token de autenticação   |
|PATCH | /contact/:id                    | Atualiza o contato                                                  | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
| DELETE | /contact/:id/                 |Exclui uma contaro                                   | Usuário dono da conta ques esteja logado, necessita do token de autenticação |                 |

### Para realizar o cadastro de um novo contato:

{<br/>
  "full_name":"UserName",<br/>
  "email":"user@mail.com",<br/>
  "fone":"11999999999",<br/>
}<br/>
