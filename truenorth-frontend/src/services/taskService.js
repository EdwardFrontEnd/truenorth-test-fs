const getTasks = async (amount) => {
    const response = await fetch(`http://localhost:8080/tasks?amount=${amount}`);
    const data = await response.json()
    return data
}

const markTaskAsDone = async (taskId) => {
    const response = await fetch('http://localhost:8080/tasks', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId: taskId })
    })
    return await response.json()
}

export { getTasks, markTaskAsDone }