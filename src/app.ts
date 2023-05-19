import express, { Application } from 'express';
import cors from 'cors'

const port: number = 5000
const app: Application = express()

//using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

export default app