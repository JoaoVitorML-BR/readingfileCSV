import { Request, Response, Router  } from "express";
import {Readable} from "stream";
import readline from "readline"; // allows reading line by line (type a for)

import multer from "multer";
import { client } from "../prisma/database/client";
const multerConfig = multer();

const router = Router();

interface Product {
    code_bar: string;
    description: string;
    price: number;
    quantity: number;
}

router.post("/products", multerConfig.single("file"), 
async (request: Request, response: Response) => {
    
    const { file } = request;
    const buffer = file?.buffer;

    // creating a readable that allows us to read
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    // reading line by line
    const productsLine = readline.createInterface({
        input: readableFile // insert the files from the readableFile variable to allow readline to read line by line
    });

    const products: Product[] = [];

    for await(let line of productsLine){
        const productsLineSplit = line.split(',') // it splits across the lines
        
        // inserts into the above const array /\ products: Product[]
        products.push({
            code_bar: productsLineSplit[0],
            description: productsLineSplit[1],
            price: Number(productsLineSplit[2]),
            quantity: Number(productsLineSplit[3]),
        })
    }

    for await (let {code_bar, description, price, quantity} of products){
        await client.products.create({
            data: {
                code_bar,
                description,
                price,
                quantity
            }
        })
    }

    return response.json(products);
});

export {router};