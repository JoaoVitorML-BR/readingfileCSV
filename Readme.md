# REDING A ARCHIVE FILE CSV 

<img align="center" alt="arquivo csv" height="120" width="320" src="./img/csvimg.jfif">

    - Hi, i'm João Vitor and in this small programming i read a file.csv and send the data for a database

    * Obs: sorry for my english, i resolve writter this Readme in english to train my english without the help of google translate.

    - This this program reads a csv file and putting its data in a PostgreSQL database

    - One of my challenges was: to write this readme in English without having much help from the translator, in addition to writing all the code and connecting to the database.
    - I confess that I had the help of youtube videos, where I followed the rocketseat video.

    - The biggest learning besides reading the csv file that I had watching the video and explanation, was to connect the database using Insominia + PostgreSQL + beekeeper. I had to do this part only because the teacher doesn't teach, so it became a little challenging but I managed to get around it.


## ENVIROMENT SETTINGS

1 - yarn init -y
2 - yarn add express
3 - yarn add typescript @types/express ts-node-dev -D
4 - yarn add prisma -D
5 - yarn add @prisma/client -D
6 - create folder src and file into src called server.ts
7 - import express from "express";
    const app = express();
    app.listen(3000, () => console.log('Server is running'));
8 - yarn tsc --init
9 - yarn add multer 
10 - yarn add @types/multer -D
11 - in folder src create the archive-file routes.ts
12 - in routes.ts add the code:
    import {Router} from "express";
    const router = Router();
    export {router}
13 - in package.json add after "license" CODE:
    "scripts":{"dev": "ts-node-dev src/server.ts"},
14 - import multer from "multer";
     const multerConfig = multer();
     router.post("/products", (request: Request, response: Response) => {

     })
15 - in import { Router  } from "express"; add Response and Request. your code will look like this:
     import { Request, Response, Router  } from "express";
16 - in your router.post add: multerConfig.single("file"). your code will look like this:
    router.post("/products", multerConfig.single("file"), (request: Request, response: Response) => {
    console.log(request.file?.buffer.toString("utf-8"))
    return response.send();
})
17 - now let's see everything is ok. rotate the following command on the terminal: ** yarn dev **
18 - you will need to create in insominia a Request Collection 
19 - Link to Download: <a href="https://insomnia.rest/download">Insominia</a>
20 - open and create the Request Collection
21 - right-click and create a New Request in insominia: 
    <img align="center" alt="CREATE REQUEST COLLECTION" height="120" width="320" src="./img/newrequest.png">
22 - now configure in the same way as in the image, passing the host location, putting the file name, and selecting the file as the file.
    <img align="center" alt="config file" height="120" width="320" src="./img/confignewrequest.png">
23 - now choose the archive mercadinho.csv
    <img align="center" alt="choosing archive file" height="120" width="320" src="./img/choosearchive.png">
24 - Send in insominia.
25 - now we will add/create our tabelo by putting the values in it
26 - run the command: ** yarn prisma init **
27 - install Postgresql (PGAdmin and beekeeper studio)
     <a href="https://www.postgresql.org/download/">PGAdmin</a>
      <a href="https://www.beekeeperstudio.io/download/?ext=exe&arch=&type=installer">BeeKeeper Studio</a>
28 - create a server in PGAdmin and set name and password, if you don't know how do this seache in youtube.
29 - connect the server that you created in beekeeper.
    - PAT 1
    <img align="center" alt="beekeeper config 1" height="120" width="320" src="./img/beekeeper1.png">
    - PART 2
    <img align="center" alt="beekeeper config 2" height="120" width="320" src="./img/beekeeper2.png">
30 - after you have done everything run in the terminal: yarn prisma migrate dev 
31 - name for the new migration: create_products
32 - if all things are right, create a folder in prisma called ** database ** and create in database a file called ** client.ts **
    <img align="center" alt="choosing archive file" height="120" width="320" src="./img/createfolderprisma.png">
33 - ** in src >>> .env you must pass the following url with your database data: DATABASE_URL="postgresql://usernamedatabase:password@localhost:5432/codedrops?schema=public" **
<img align="center" alt="add rota in .env" height="120" width="320" src="./img/rotainenv.png">

34 - in the file client.ts paste the code that I made available here on github. just look in the folders.

## THE END

** these are the settings you need to make. Any questions call on one of my social networks available at:<a href="https://github.com/JoaoVitorML-BR?tab=overview&from=2022-01-01&to=2022-01-31">Click Here</a> **

<img align="center" alt="Node.JS" height="120" width="320" src="./img/nodejs.jfif">
