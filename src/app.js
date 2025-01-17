import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'

app.use("/api/v1/user", userRouter)

console.log(`${userRouter}`)
export {app}