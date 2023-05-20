import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const newUser = new User(payload)
    await newUser.save()
    console.log("🔥", newUser.fullName())
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

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers()
    return admins
}