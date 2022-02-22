import * as React from 'react'
import './task.css'

const Task = ({ task, onSelectTask, setPopUpOpen }) => {

    return (
        <article onClick={() => {
            onSelectTask(task)
            setPopUpOpen(o => !o)
          }}>
            <h1>{task.label}</h1>
            {task.status === 'DONE' && <h2 style={{ color: 'green' }}>{task.status}</h2>}
            {task.status === 'TO DO' && <h2>{task.status}</h2>}
        </article>
    )
}

export default Task