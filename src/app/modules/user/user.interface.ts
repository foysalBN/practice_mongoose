import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string,
    name: {
        firstName: string,
        lastName: string
    },
    email: string,
    gender: "male" | 'female',
    role: 'admin' | 'user',
    dateOfBirth?: string
}


// instance method
export interface IUserMethods {
    fullName(): string;
}


// statics
// export interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[]
// }

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
