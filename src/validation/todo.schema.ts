import type { title } from 'node:process';
import {z} from 'zod';
import { de } from 'zod/locales';

const todoSchema = z.object({
    id: z.string().describe('ID of the Todo'),
    title: z.string().describe('title of the Todo'),
    description: z.string().optional().describe('Description of the Todo'),
    iscompleted: z.boolean().default(false).describe('Completion status of the Todo'),
});

//#region  //*=========== both are same===========

export type ITodo = z.infer<typeof todoSchema>;

// export interface ITodo{
    //     id: string;
    //     title: string;
//     description?: string;
//     iscompleted: boolean;
// }

//#endregion  //*======== both are same ===========