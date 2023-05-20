import express from "express"
import { createUser, getUserById, getUsers } from "./user.controller"
// import app from "../../../app"

const router = express.Router()

router.get('/get-user', getUsers)
router.get('/:id', getUserById) //http://localhost:5000/api/v1/user/t1
router.post('/create-user', createUser)


export default router