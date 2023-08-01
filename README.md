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
  <br/>
{
  "full_name":"UserName",<br/>
  "email":"user@mail.com",<br/>
  "fone":"11999999999",<br/>
  "password":"1234"<br/>
}<br/>

### Para realizar o login:

<br/>
{
  "email":"niko@mail.com",<br/>
  "password":"1234"<br/>
}
<br/>

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
|GET | /contact                     |  Lista todos os contatos cadastrados                         | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
|POST | /contact                    | Cria um novo contato                                                        | Usuário dono da conta ques esteja logado, necessita do token de autenticação   |
|PATCH | /contact/:id                    | Atualiza o contato                                                  | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
| DELETE | /contact/:id/                 |Exclui uma contaro                                   | Usuário dono da conta ques esteja logado, necessita do token de autenticação |                 |



