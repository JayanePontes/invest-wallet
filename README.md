# Bem vindo!


# Desenvolvido

  Neste projeto foi desenvolvido uma API e um banco de dados para um aplicativo de investimento em ações,com algumas funcionalidades de conta digital! 

  A aplicação foi desenvolvida em `Node.js` usando o pacote `sequelize` para criar endoints conectados com banco de dados seguindo os principios REST.


# Tomada de decisões

  Depois de ler e analisar bem o desafio proposto, inicialmente pensei em criar a aplicação com arquivo json para simular o banco de dados, porém, levando em consideração que no mercado de trabalho geralmente trabalhamos com banco de dados reais, achei melhor criar um banco de dados utilizando a `ORM Sequelize`.
  Separei os endpoints listados e fui analizando e criando as tabelas em que eu pensava ser necessário.


# Intruçoes para compilar e executar a aplicação

1. Clone o repositório
  * `git clone git@github.com:JayanePontes/invest-wallet.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `investwallet`

2. Instale as dependências
  * `npm install`

    - Cria o banco e gera as tabelas:
    ```json
    npx sequelize-cli db:create && npx sequelize-cli db:migrate
    ```

    - Insere dados/Popula a tabela:
    ```json
    npx sequelize-cli db:seed:all
    ```

# Endpoints
  1. POST `/login` - Utilizando JWT para autenticar o usuário
  2. POST `/assets/comprar` - Utilizando JWT para autorizar
  3. POST `/assets/vender` - Utilizando JWT para autorizar
  4. POST `/wallet/deposito` - Utilizando JWT para autorizar
  5. POST `/wallet/saque` - Utilizando JWT para autorizar
  6. GET `/wallet/:codClient` - Para listar o saldo de um cliente, utilizando JWT para autorizar
  7. GET `/assets/client/:codClient` - Para listar ativos de um cliente, utilizando JWT para autorizar 
  8. GET `/assets` - Para listar os ativos
  9. GET `/assets/codAsset` - Para listar um ativo específico

<br />

# Informações adicionais

  A aplicação ainda não está 100%, vou listar algumas coisas que ainda serão implementadas e melhoradas:

  1. Criar novo usuario
  2. Refatorar para que ao momento em que a quantidade de ativos for igual a 0 que exclua da lista
  3. Guardar em uma tabela os valores de saque e depósitos para armazenar como um histórico
  4. Guardar em uma tabela os valores de ativos vendidos e ativos comprados para armazenar como um histórico
  5. Adicionar testes unitários

