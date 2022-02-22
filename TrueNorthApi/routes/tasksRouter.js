import { Router } from 'express'
import request from 'request'
import { createTasks, markTaskAsDone } from '../controllers/taskController.js'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
    const { amount } = req.query
    request(`http://lorem-faker.vercel.app/api?quantity=${amount}`, { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        const tasks = createTasks(body)
        res.statusCode = 200;
        res.send(tasks)
        res.end()
    })
})

usersRouter.put('/', (req, res) => {
    const { taskId } = req.body
    if (taskId) {
        const tasks = markTaskAsDone(taskId)
        console.log(`The task with the id ${taskId} was marked as done`)
        res.send(tasks)
        res.end()
    } else {
        res.statusCode = 500
        res.send({ status: 500, error: 'Task Id not provided'})
        res.end
    }

})



export default usersRouter