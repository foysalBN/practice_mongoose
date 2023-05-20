import { Model, Schema, model } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string
}

interface IUserMethods {
    fullName(): string;
}
type UserModel = Model<IUser, {}, IUserMethods>;

const schema = new Schema<IUser, UserModel, IUserMethods>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

schema.method('fullName', function fullName() {
    return this.firstName + ' ' + this.lastName;
});

// Create model 
const User = model<IUser, UserModel>('User', schema);

const user = new User({
    firstName: 'test',
    lastName: 'abir'
});
const fullName: string = user.fullName(); // 'Jean-Luc Picard'