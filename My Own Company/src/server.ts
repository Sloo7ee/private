import express, { Request, Response } from 'express'
import { connectDB, prisma } from "./config/db";
import { } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const app = express()

const PORT = 7999;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})