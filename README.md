# Car Shop
29º projeto na Trybe. API RESTful em Node.js com arquitetura MSC(model-service-controller) em POO com testes de unidade.

## O que é

Uma API com CRUD(delete não implementado) para gerenciar uma concessionária de veículos. API é feito utilizando o banco de dados não relacional MongoDB através do framework do Mongoose.

## Tecnologias empregadas:

Docker, TypeScript, Node.js, Docker e bibliotecas:
* Mongoose (ODM)
* Express(endpoints)
* Sinon(testes)
* Mocha(testes)
* CHAI(testes)


## Habilidades praticadas

  * Integrar ODM Mongoose com TypesScript

  * Praticar POO

  * Construção de API com a arquitetura em camadas  

  * Construção de API RESTful

  * Rodar a aplicação com Docker

  * Testes de unidade

## O que é de minha autoria:

Os arquivos dos diretórios: 
* `./src/Controllers`
* `./src/Domains`
* `./src/Interfaces`
* `./src/Models` menos o arquivo `Connection.ts`
* `./src/Routes`
* `./src/Services`
* `./src/app.ts`
* `./src/server.ts`
* `./tests`

## Como visualizar com Docker:

Para executar o projeto faça o clone do repositório, entre na pasta do projeto e na raiz do projeto execute o comando `npm install`. Depois execute `npm run compose:up` no terminal. Para iniciar o servidor, execute o comando `docker exec -it car_shop bash`. No terminal do container car_shop execute `npm run dev`. Para executar as rotas você pode usar a extensão do Thunder Client do editor de código VS CODE. 
