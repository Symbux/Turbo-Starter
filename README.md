# Turbo Starter Project

This is a boilerplate/starter project for the Turbo engine.

<br>

## Features

* Turbo Engine
* MongoDB
* Prisma ORM _(Turbo initialises this)_.
* Translations
* Docker build file.
* Vue 3
* Vue Router
* Pinia (Vuex replacement)
* TypeScript
* Eslint

<br>

## Setup Project

* Clone the project into a folder.
* Run `yarn install` in the `/api` and `/web` folders.
* Create `/api/.env` file and add your the following. [See .env section](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/connect-your-database-typescript-mongodb)
```
DATABASE_URL="mongodb+srv://<user>:<pass>@<mongodb-host>/<database>?retryWrites=true&w=majority"
PORT=3005
ENV=development
```
* Run `yarn prisma generate` in the `/api` folder.

<br>

## Developing

* Run `yarn prisma generate` in the `/api` folder everytime you change the prisma schema.
* Run `yarn dev` in the `/api` folder to run the turbo engine.
* Run `yarn dev` in the `/web` folder to run the Vite dev server.
* Navigate to `http://localhost:3000` to see the Vue app.

<br>

## Building

* Run `yarn build` in the `/api` folder to build the turbo engine.
* Run `yarn build` in the `/web` folder to build the Vite app.
* Go to the `/api` folder and run `yarn start` to run the turbo engine.
* Navigate to `http://localhost:3005` to see the application, Turbo will automatically serve the built Vue app.