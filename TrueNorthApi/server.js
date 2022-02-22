import express from 'express'
import cors from 'cors'
import http from 'http'
import path from 'path'

import tasksRouter from './routes/tasksRouter.js'

const { json, urlencoded } = express

const app = express()

const port = process.env.PORT || 8080

const corsOptions = {
    origin: '*',
    optionSucessStatus: 200,
}

app.use(cors(corsOptions))
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/tasks', tasksRouter)

const server = http.createServer(app)

server.listen(port, () => console.log(`Server is running on port: ${port}`))
