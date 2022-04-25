# REDING A ARCHIVE FILE CSV 

<img align="center" alt="arquivo csv" height="120" width="320" src="./img/csvimg.jfif">

-   Hi, i'm João Vitor and in this small programming i read a file.csv and send the data for a database

*   Obs: sorry for my english, i resolve writter this Readme in english to train my english without the help of google translate.

-   This this program reads a csv file and putting its data in a PostgreSQL database

-   One of my challenges was: to write this readme in English without having much help from the translator, in addition to writing all the code and connecting to the database.
-   I confess that I had the help of youtube videos, where I followed the rocketseat video.

-   The biggest learning besides reading the csv file that I had watching the video and explanation, was to connect the database using Insominia + PostgreSQL + beekeeper. I had to do this part only because the teacher doesn't teach, so it became a little challenging but I managed to get around it.


## ENVIROMENT SETTINGS

1 - yarn init -y <br>
2 - yarn add express<br>
3 - yarn add typescript @types/express ts-node-dev -D<br>
4 - yarn add prisma -D<br>
5 - yarn add @prisma/client -D<br>
6 - create folder src and file into src called server.ts<br>
7 - import express from "express";<br>
    const app = express();<br>
    app.listen(3000, () => console.log('Server is running'));<br>
8 - yarn tsc --init<br>
9 - yarn add multer<br>
10 - yarn add @types/multer -D<br>
11 - in folder src create the archive-file routes.ts<br>
12 - in routes.ts add the code:<br>
    import {Router} from "express";<br>
    const router = Router();<br>
    export {router}<br>
13 - in package.json add after "license" CODE:<br>
    "scripts":{"dev": "ts-node-dev src/server.ts"},<br>
14 - import multer from "multer";<br>
     const multerConfig = multer();<br>
     router.post("/products", (request: Request, response: Response) => {})<br>
15 - in import { Router  } from "express"; add Response and Request. your code will look like this:<br>
     import { Request, Response, Router  } from "express";<br>
16 - in your router.post add: multerConfig.single("file"). your code will look like this:<br>
    router.post("/products", multerConfig.single("file"), (request: Request, response: Response) => {<br>
    console.log(request.file?.buffer.toString("utf-8"))<br>
    return response.send();<br>
})<br>
17 - now let's see everything is ok. rotate the following command on the terminal: ** yarn dev **<br>
18 - you will need to create in insominia a Request Collection<br>
19 - Link to Download: <a href="https://insomnia.rest/download">Insominia</a><br>
20 - open and create the Request Collection<br>
21 - right-click and create a New Request in insominia:<br>
    <img align="center" alt="CREATE REQUEST COLLECTION" height="120" width="320" src="./img/newrequest.png"><br>
22 - now configure in the same way as in the image, passing the host location, putting the file name, and selecting the file as the file.<br>
    <img align="center" alt="config file" height="120" width="320" src="./img/confgnewrequest.png"><br>
23 - now choose the archive mercadinho.csv<br>
    <img align="center" alt="choosing archive file" height="120" width="320" src="./img/choosearchive.png"><br>
24 - Send in insominia.<br>
25 - now we will add/create our tabelo by putting the values in it<br>
26 - run the command: ** yarn prisma init **<br>
27 - install Postgresql (PGAdmin and beekeeper studio)<br>
     <a href="https://www.postgresql.org/download/">PGAdmin</a><br>
      <a href="https://www.beekeeperstudio.io/download/?ext=exe&arch=&type=installer">BeeKeeper Studio</a><br>
28 - create a server in PGAdmin and set name and password, if you don't know how do this seache in youtube.<br>
29 - connect the server that you created in beekeeper.<br>
    - PAT 1<br>
    <img align="center" alt="beekeeper config 1" height="120" width="320" src="./img/beekeeper1.png"><br>
    - PART 2<br>
    <img align="center" alt="beekeeper config 2" height="120" width="320" src="./img/beekeeper2.png"><br>
30 - after you have done everything run in the terminal: yarn prisma migrate dev<br>
31 - name for the new migration: create_products<br>
32 - if all things are right, create a folder in prisma called ** database ** and create in database a file called ** client.ts **<br>
    <img align="center" alt="choosing archive file" height="120" width="320" src="./img/createfolderprisma.png"><br>
33 - ** in src >>> .env you must pass the following url with your database data: DATABASE_URL="postgresql://usernamedatabase:password@localhost:5432/codedrops?schema=public" **
<img align="center" alt="add rota in .env" height="120" width="320" src="./img/rotainenv.png"><br>

34 - in the file client.ts paste the code that I made available here on github. just look in the folders.<br>

## THE END<br>

** these are the settings you need to make. Any questions call on one of my social networks available at:<a href="https://github.com/JoaoVitorML-BR?tab=overview&from=2022-01-01&to=2022-01-31">Click Here</a> **<br>

<img align="center" alt="Node.JS" height="120" width="320" src="./img/nodejs.jfif"><br>
