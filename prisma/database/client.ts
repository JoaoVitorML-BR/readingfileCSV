import { PrismaClient } from "@prisma/client";
import { Readable } from "stream" // used for read the file csv

const client = new PrismaClient();

export {client};