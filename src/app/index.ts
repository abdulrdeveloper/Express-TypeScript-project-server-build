import express from 'express';
import type { Application } from 'express';
import todoRouter from './todo/routes.js';
export function createServerApplication(): Application {
    const app = express();

    app.use('/todos', todoRouter);

    //#region  //*=========== routes ===========
    
    /*
    app.get('/', (req, res) => {
        return res.json({ message: 'Hello World! I built a server using TypeScript and Express!' });
    });
    // to ham curl http://localhost:8080/ command run karne par yah response milega {"message":"'Hello World! I built a server using TypeScript and Express!"} , aur curl http://localhost:8080/hello command run karne par yah response milega {"message":"Byee"}
    app.get('/hello', (req, res) => {
        return res.json({ message: 'Byee, My test server is working fine!' });
    });
    */

   //#endregion  //*======== routes ===========

    return app;
}
// yay yaha per iss liay bnaya he kyo ke kal ko agar hmay yay server change bi krna pray to app walay folder ke andar aa kr yaha per bun ya koi or use kr saktay hain simply iss file ko update krkay without any complex setup or touching other code 