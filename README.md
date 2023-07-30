# Api Contact

####  Api para gerenciamento de para gerenciamento de uma lista de contatos virtual

### Features
- [x] CRUD complete de contatos (cadastrar, listar, atulizar e deletar)
- [x] Criação de Usuário, o seu login
- [ ] 
## Endpoints:
<br/>

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
| POST   | /user                     | Criação de usuário                                | Qualquer usuário, não necessita token  |
| GET    | /user                   | Lista todos os usuários                           | Qualquer usuário, não necessita token                  |
| PATCH | /user/:id/ | Atualiza parcialmente informações de  um usuário |  Apenas o dono da conta, necessita do token de autenticação |
| DELETE | /user/:id/                 |exclui uma conta                                   | Apenas o dono da conta, necessita do token de autenticação |                 |


<br/>

| Método | Endpoint                   | Responsabilidade                                  | Autenticação                           |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------- |
|GET | /contact                     |  Lista todos os contatos cadastrados                         | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
|POST | /contact                    | Cria um novo contato                                                        | Usuário dono da conta ques esteja logado, necessita do token de autenticação   |
|PATCH | /contact/:id                    | Atualiza o contato                                                  | Usuário dono da conta ques esteja logado, necessita do token de autenticação |
| DELETE | /contact/:id/                 |Exclui uma contaro                                   | Usuário dono da conta ques esteja logado, necessita do token de autenticação |                 |



