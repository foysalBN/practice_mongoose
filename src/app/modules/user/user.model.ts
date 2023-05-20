import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true,
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
const User = model<IUser>('User', userSchema)
export default User