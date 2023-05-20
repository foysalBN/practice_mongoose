import { Model, Schema, model } from "mongoose"
import { IUser, IUserMethods, UserModel } from "./user.interface"


// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user']
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

// :Promise<IUser[]>
userSchema.static("getAdminUsers", function getAdminUsers() {
    return this.find({ role: "admin" })
})

// instance method
userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

// Create model 
const User = model<IUser, UserModel>('User', userSchema)


export default User