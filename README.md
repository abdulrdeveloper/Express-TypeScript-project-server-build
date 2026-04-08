# Express-TypeScript Server

This project demonstrates how to build a server using **TypeScript** and **Express**. It is designed with modularity and scalability in mind, making it easy to maintain and extend.

## Features
- **TypeScript**: Ensures type safety and improves developer productivity.
- **Express**: A minimal and flexible Node.js framework for building APIs.
- **JSON Middleware**: Automatically parses incoming JSON requests.
- **Modular Routes**: Routes are organized into separate modules for better structure.

## Design
- **Entry Point**: The server starts in `src/index.ts`, which initializes the application and sets up the HTTP server.
- **Application Logic**: The `createServerApplication` function in `src/app/index.ts` defines the Express app and its middleware.
- **Routing**: Routes like `/todos` are defined in dedicated modules (e.g., `src/app/todo/routes.js`).
- **Scalability**: The modular design allows adding or updating routes without affecting the core server logic.

## Usage
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Access the API:
   - `GET /todos`: Handles todo-related requests.

This project is a great starting point for building scalable and maintainable TypeScript-based APIs.
