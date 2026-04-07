import express from 'express';
import type { Application } from 'express';

export function createServerApplication(): Application {
    const app = express();
    return app;
}
// yay yaha per iss liay bnaya he kyo ke kal ko agar hmay yay server change bi krna pray to app walay folder ke andar aa kr yaha per bun ya koi or use kr saktay hain simply iss file ko update krkay without any complex setup or touching other code 