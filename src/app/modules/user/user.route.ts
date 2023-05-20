import express from "express"
import { createUser } from "./user.controller"
// import app from "../../../app"

const router = express.Router()

router.get('/', createUser)
// app.use('/sdfds', router)


export default router