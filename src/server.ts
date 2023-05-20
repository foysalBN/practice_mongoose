import mongoose from 'mongoose';
import app from './app';

const port: number = 5000

async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("🛢 Database connected")


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log("😭Failed to connect database", err)
    }
}
connectDatabase()