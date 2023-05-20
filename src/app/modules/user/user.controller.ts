import { NextFunction, Request, Response } from "express"
import { createUserToDB, getAdminUsersFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service"


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await createUserToDB(req.body)
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const getUsers = async (req: Request, res: Response) => {
    const users = await getUsersFromDB()
    res.status(200).json({
        status: 'success',
        data: users
    })

}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req?.params
    const user = await getUserByIdFromDB(id)
    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getAdminUsers = async (req: Request, res: Response) => {
    const user = await getAdminUsersFromDB()
    res.status(200).json({
        status: "success",
        data: user
    })
}