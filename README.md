Com base nos arquivos do projeto, aqui está uma sugestão de `README.md` para o aplicativo TaskSync.

-----

# TaskSync

TaskSync é um aplicativo simples de lista de tarefas (To-Do) que permite aos usuários criar e visualizar suas tarefas.

O projeto é construído com um backend em Node.js (Express) conectado a um banco de dados MariaDB/MySQL, e um aplicativo móvel desenvolvido com React Native.

## Funcionalidades

  * Visualizar a lista de tarefas pendentes.
  * Adicionar novas tarefas à lista.

## Tecnologias Utilizadas

  * **Backend**:
      * Node.js
      * Express
      * MySQL2 (MariaDB)
      * Docker / Docker Compose
      * Jest & Supertest (para testes)
  * **Mobile**:
      * React Native
  * **CI/CD**:
      * GitHub Actions

-----

## Como Executar o Projeto

### Pré-requisitos

  * Node.js (v18+ para o Backend, v20+ para o Mobile)
  * Docker e Docker Compose (Recomendado para o backend)
  * Ambiente de desenvolvimento React Native configurado (Android Studio / Xcode)

-----

### Backend (Servidor)

O backend pode ser executado facilmente com Docker Compose ou manualmente.

**Opção 1: Docker Compose (Recomendado)**

O `docker-compose.yml` irá configurar e rodar tanto o serviço do backend quanto o banco de dados MariaDB.

1.  Navegue até o diretório `Backend`:
    ```sh
    cd Backend
    ```
2.  Construa e inicie os containers:
    ```sh
    docker-compose up -d --build
    ```
3.  O backend estará disponível em `http://localhost:3000`.

**Opção 2: Execução Local**

1.  Certifique-se de ter um servidor MariaDB ou MySQL rodando.
2.  Crie um banco de dados (ex: `tasksdb`).
3.  Configure as variáveis de ambiente necessárias para o banco de dados:
      * `DB_HOST` (ex: localhost)
      * `DB_USER` (ex: root)
      * `DB_PASS` (ex: sua\_senha)
      * `DB_NAME` (ex: tasksdb)
4.  Navegue até o diretório `Backend`:
    ```sh
    cd Backend
    ```
5.  Instale as dependências:
    ```sh
    npm install
    ```
6.  Inicie o servidor em modo de desenvolvimento:
    ```sh
    npm run dev
    ```
7.  O backend estará disponível em `http://localhost:3000`.

-----

### Mobile (React Native)

1.  Navegue até o diretório `mobile`:

    ```sh
    cd mobile
    ```

2.  Instale as dependências:

    ```sh
    npm install
    ```

3.  **IMPORTANTE:** O aplicativo está configurado para buscar dados de uma URL estática (`https://756d99aed801e4.lhr.life/tasks`). Você **DEVE** alterar isso no arquivo `mobile/App.js` para apontar para o seu backend local (ex: `http://localhost:3000/tasks` ou `http://SEU_IP_LOCAL:3000/tasks` se for rodar em um dispositivo físico).

    *Antes (no App.js):*

    ```javascript
    const r=await fetch("https://756d99aed801e4.lhr.life/tasks");
    // ...
    await fetch("https://756d99aed801e4.lhr.life/tasks",{method:"POST",...});
    ```

    *Depois (no App.js):*

    ```javascript
    const API_URL = "http://localhost:3000/tasks"; // Ou seu IP
    const r=await fetch(API_URL);
    // ...
    await fetch(API_URL,{method:"POST",...});
    ```

4.  Inicie o servidor Metro:

    ```sh
    npm start
    ```

5.  Em um novo terminal (dentro da pasta `mobile`), inicie o aplicativo:

    ```sh
    # Para Android
    npm run android

    # Para iOS
    npm run ios
    ```
