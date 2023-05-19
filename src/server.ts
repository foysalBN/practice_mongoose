import mongoose, { Model, Schema } from 'mongoose';
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

            interface IUser {
                id: string,
                name: string,
                email: string,
                gender: "male" | 'female',
                dateOfBirth?: string
            }

            const userSchema = new Schema<IUser>({
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true
                },
                gender: {
                    type: String,
                    enum: ["male", "female"],
                    required: true
                },
                dateOfBirth: {
                    type: String,
                    required: false
                },
            })
            // Create model 
            const User = new Model<IUser>('user', userSchema)





            res.send('Hello World!')
            next()
        })
    }
    catch (err) {
        console.log("😭Failed to connect database", err)
    }
}
connectDatabase()



