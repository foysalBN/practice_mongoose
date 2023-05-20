import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // const newUser = new User({
    //     id: "d321",
    //     name: "foysal",
    //     email: "hablu@gmail.com",
    //     gender: "male",
    //     dateOfBirth: "21-1-2000"
    // })

    const newUser = new User(payload)
    await newUser.save()
    return newUser
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload })
    return user
}