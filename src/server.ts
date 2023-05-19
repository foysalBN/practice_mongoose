import mongoose, { Schema, model } from 'mongoose';
import app from './app';
import { NextFunction, Request, Response } from 'express';

async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("🛢 Database connected")
        app.get('/', (req: Request, res: Response, next: NextFunction) => {
            /* inserting a test data into db
                Create an interface representing a document in MongoDB.
                Create a Schema corresponding to the document interface.
                Create a Model.
                Connect to MongoDB. 
            */






            const createUserToDB = async () => {

                const newUser = new User({
                    id: "21321",
                    name: "foysal",
                    email: "hablu@gmail.com",
                    gender: "male",
                    dateOfBirth: "21-1-2000"
                })
                await newUser.save()
                console.log("🧨user:", newUser)
            }
            createUserToDB()




            res.send('Hello World!')
            next()
        })
    }
    catch (err) {
        console.log("😭Failed to connect database", err)
    }
}
connectDatabase()



