import { v4 as uuidv4 }  from 'uuid'

let globalTasks = []

const createTasks = (taskNames) => {
    const tasks = taskNames.map((taskName) => {
        return {
            id: uuidv4(),
            status: 'TO DO', // toDo | done 
            label: taskName
        }
    })
    globalTasks = tasks
    return tasks
}

const markTaskAsDone = (taskId) => {
    const tasks = globalTasks.map((task) => {
        if (task.id === taskId) {
            task.status = 'DONE'
        }
        return task
    })
    return tasks
}

export { createTasks, markTaskAsDone }