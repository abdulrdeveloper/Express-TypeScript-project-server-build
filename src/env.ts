//Agar hum npm i zod install karein, to hume uska type package (@types/zod) bhi install karna hota hai taake TypeScript mein errors na aayein. Isi tarah, jis package ke types available hon, unhein bhi install karna chahiye.
// like ham zod ke andar apnay environment variables ko bi fully typed and validated rakh saktay hain 

import { z } from 'zod';

const envSchema = z.object({
    PORT: z.string().default('8080'),
});

function createEnv(env: NodeJS.ProcessEnv) {
    const safeParseResult = envSchema.safeParse(env);

    if (!safeParseResult.success) throw new Error(safeParseResult.error.message);
    return safeParseResult.data;

}

export const env = createEnv(process.env);