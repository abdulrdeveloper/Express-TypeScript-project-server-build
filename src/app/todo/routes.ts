import { Router } from "express";
import TodoController from './controller.js';

const router = Router();
const controller = new TodoController();

router.get('/', controller.handleGetAllTodos.bind(controller))  // is line ka matlab he ke jab bhi koi GET request aayegi /todos ke endpoint par to handleGetAllTodos function ko call karo, aur us function ke andar this keyword ko controller object ke context me bind kar do, taki handleGetAllTodos function ke andar this keyword controller object ko refer kare, aur hume type errors nahi aayenge jab hum handleGetAllTodos function ke andar this._db ko access karenge. Agar hum bind method ka use nahi karte hain to handleGetAllTodos function ke andar this keyword undefined ho jayega, aur hume type errors aayenge jab hum handleGetAllTodos function ke andar this._db ko access karenge. Isliye hum bind method ka use karte hain taki handleGetAllTodos function ke andar this keyword controller object ko refer kare, aur hume type errors nahi aayenge jab hum handleGetAllTodos function ke andar this._db ko access karenge.
// router.get('/:id')

// router.post('/')
// router.put('/:id')
// router.delete('/:id')

export default router;
