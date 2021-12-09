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

## Project Setup

**Clone the repository.**  
```
git clone git@github.com:Symbux/Turbo-Starter.git <folder>
cd <folder>
```

**Setup the project.**  
_This will install any required dependencies in both the web and api folders._
```
yarn setup;
```

**Copy and fill out the environment file.**  
_Make sure that the port you use in the .env file is the same as the one in the `vite.config.js` file._
```
cp api/.env.example api/.env
```

**Generate the prisma client.**  
_This will generate the prisma client with all the types based on the schema._
```
yarn prisma:gen
```

You are now all set, see the next section to start developing.

<br>

## Developing

**Run the development server.**  
_This will launch the Vite dev server and the turbo engine in dev mode together._
```
yarn dev
```

**Run the dev server's seperately.**  
_If you want to launch the dev servers separately, because you want to see the logs better, you can run the following commands in two different terminals._
```
yarn dev:api
yarn dev:web
```

**Navigate to browser.**  
_This will be the Vite dev server, proxying all connections to your turbo app._
```
http://localhost:3000
```

<br>

## Building

**Build the project.**  
_This will build both projects, and the API will host the built Vue files._
```
yarn build
```

**Build only the API.**
_This will build the API only._
```
yarn build:api
```

**Build only the web.**
_This will build the web only._
```
yarn build:web
```

<br>

## Launching Production

> Make sure you have built the application first!

**Start the server.**  
_This will start the Turbo engine which will host the built Vue files._
```
yarn start
```
