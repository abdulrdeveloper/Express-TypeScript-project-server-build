/* console.log('Hello From TS File');
we generate the js files by tsc index.ts , and then we can run the generated js file by node index.js , for single files
we can also run the ts file directly by ts-node index.ts , but it is not recommended for production use because it is slower than running the generated js file
we install package.json by npm init -y 
we import tsconfig.json file by tsc --init , and then we can configure the compiler options in the tsconfig.json file
we can also run the tsc command in the src folder to generate the js files in the same folder, and then we can run the generated js files by node index.js
The command tsc -p . will help to create a dist folder and put the generated js files in it, and then we can run the generated js files by node dist/index.js
The command npx gitignore Node will help to create a .gitignore file and add those files who we don`t want to push to the git repository, such as node_modules and dist folders and so on. We can write the .gitignore file by ourselves, but it is easier to use the npx gitignore Node to generate it for us.
The command npm i typescript -D will help to install the typescript package as a dev dependency, and then we can use the tsc command to compile the ts files to js files. We can also install the typescript package globally by npm i -g typescript , but it is not recommended because it may cause version conflicts with other projects. It is better to install the typescript package locally in each project. We do it because just suppose your friend got this project and he want to run it, he can just run npm install to install the typescript package and then run the tsc command to compile the ts files to js files, and then run the generated js files by node index.js . If we install the typescript package globally, our friend may have a different version of typescript installed globally, and it may cause errors when running the project. So it is better to install the typescript package locally in each project.
The Command npm i tsc-watch -D will help to install the tsc-watch package as a dev dependency, and then we can use the tsc-watch command to watch the ts files and automatically compile them to js files when they change. We can run the tsc-watch command by npx tsc-watch --onSuccess "node dist/index.js" , and it will watch the ts files in the src folder and automatically compile them to js files in the dist folder when they change, and then run the generated js files by node dist/index.js . This is very useful for development because we don`t have to manually run the tsc command every time we change the ts files, and we can see the changes immediately by running the generated js files.
Express mai jis package per humne depend kiya hai uska type definition package bhi install karna hota hai, jise hum npm i types/express ke naam se install karte hain. Isse hum Express ke types ko use kar sakte hain apne ts files mein, aur hume type errors nahi aayenge jab hum Express ke functions aur objects ko use karenge. Iske alawa, agar hum kisi aur package ka use kar rahe hain jiska type definition package available hai, to hume us package ka type definition package bhi install karna chahiye, taki hum us package ke types ko use kar sakein apne ts files mein.
For example, if we are using the cors package in our project, we should also install the @types/cors package to get the type definitions for the cors package. This will help us to use the cors package in our ts files without getting type errors, and it will also provide us with better code completion and documentation when we use the cors package in our ts files. So it is always a good practice to install the type definition packages for the packages that we are using in our project, especially when we are using TypeScript, to get the best experience and avoid type errors.
Remember dunya ka koi bi package ho jismay dt ho package file ke saath google per to us package ka type definition package bhi available hota hai, aur hum us package ka type definition package install kar sakte hain npm i @types/package-name ke naam se, taki hum us package ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum us package ke functions aur objects ko use karenge. Iske alawa, agar hum kisi package ka use kar rahe hain jiska type definition package available nahi hai, to hum khud bhi us package ke types ko define kar sakte hain apne ts files mein, taki hum us package ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum us package ke functions aur objects ko use karenge. Iske liye hum declare module "package-name" { } syntax ka use kar sakte hain apne ts files mein, aur us module ke andar hum us package ke types ko define kar sakte hain, taki hum us package ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum us package ke functions aur objects ko use karenge.
isi ke saath node ke built-in modules ke types bhi available hote hain, aur hum unhe @types/node package ko install karke use kar sakte hain apne ts files mein, taki hum node ke built-in modules ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum node ke built-in modules ke functions aur objects ko use karenge. Iske alawa, agar hum kisi aur package ka use kar rahe hain jiska type definition package available nahi hai, to hum khud bhi us package ke types ko define kar sakte hain apne ts files mein, taki hum us package ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum us package ke functions aur objects ko use karenge. Iske liye hum declare module "package-name" { } syntax ka use kar sakte hain apne ts files mein, aur us module ke andar hum us package ke types ko define kar sakte hain, taki hum us package ke types ko use kar sakein apne ts files mein, aur hume type errors nahi aayenge jab hum us package ke functions aur objects ko use karenge.

import express from 'express';
const app = express();

to yay error aiy ga jab tak ham package.json file mein "type": "module" nahi karte hain, kyunki by default TypeScript uses CommonJS module system, and when we use import statement in our ts files, it will be compiled to require statement in the generated js files, and require statement is not supported in ES modules. So we need to tell TypeScript to use ES modules by adding "type": "module" in our package.json file, so that the generated js files will use import statement instead of require statement, and it will work without any errors.
*/

import http from 'node:http'
import { env } from './env.js';
import { createServerApplication } from './app/index.js';

async function main() {
    
    try {
        const server = http.createServer(createServerApplication());
        const PORT: number = env.PORT ? +env.PORT : 8080  // is line ka matlab he ke agar proces.env.PORT ke andar port he to to usko typecast (number me convert) kar do, aur agar process.env.PORT ke andar port nahi he to default port 8080 use karo
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        throw error;
    }
}

main();