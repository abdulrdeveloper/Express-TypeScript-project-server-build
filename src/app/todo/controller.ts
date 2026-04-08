import type { Request, Response } from 'express';
import type { ITodo } from "../../validation/todo.schema.js";

class TodoController {
    private _db: ITodo[]

    constructor() {
        this._db = [];
    }

    public handleGetAllTodos(req: Request, res: Response) {
        const todos = this._db;
        return res.json({ todos });
    }
}

export default TodoController;