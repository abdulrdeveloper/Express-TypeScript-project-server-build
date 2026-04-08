# Express-TypeScript Server

This project demonstrates how to build a server using **TypeScript** and **Express**. It includes routes for handling JSON requests and uses modular architecture for scalability.

## Features
- **TypeScript**: Provides type safety and better development experience.
- **Express**: Simplifies the creation of RESTful APIs.
- **Modular Structure**: Easy to update and maintain.

## Design
- **Entry Point**: The server starts in `src/index.ts` and initializes the application.
- **Modular Routes**: Routes are defined in separate modules (e.g., `todoRouter` in `src/app/todo/routes.js`).
- **Middleware**: JSON parsing middleware is used for handling request bodies.
- **Scalability**: The `createServerApplication` function allows easy updates without modifying the core server logic.

## Usage
- Run the server: `npm run dev` in the terminal
- Example routes:
  - `GET /todos`: Handles todo-related requests.
