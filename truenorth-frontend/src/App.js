import * as React from 'react'
import './App.css';
import Task from './components/Task';
import { getTasks, markTaskAsDone } from './services/taskService';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const TaskListApp = () => {
  const [tasks, setTasks] = React.useState([])
  const [openedTask, setOpenedTask] = React.useState({})
  const [popUpOpen, setPopUpOpen] = React.useState(false)


  React.useEffect(() => {
    getTasks(50).then((tasks) => {
      setTasks(tasks)
    }).catch((err) => {
      console.error(err.toString())
    })
  }, [])

  const closePopup = () => {
    setPopUpOpen(false)
  }

  const callMarkAsDone = (taskId) => {
    markTaskAsDone(taskId).then((tasks) => {
      setTasks(tasks)
      setPopUpOpen(false)
    }).catch((err) => {
      console.error(err.toString())
    })
  }

  return (
    <section className='app-container'>
      <h1>Task List</h1>
      <section className="task-list-container">
        {
          tasks?.map((task, index) => (
            <Task key={index} task={task} onSelectTask={setOpenedTask} setPopUpOpen={setPopUpOpen}></Task>
          ))
        }
      </section>     
      <section>
        <Popup open={popUpOpen} closeOnDocumentClick onClose={closePopup}>
          <div className="popup">
            <p>{openedTask.label}</p>
            <button onClick={() => {
              callMarkAsDone(openedTask.id)
            }}>
              Complete
            </button>
            <button onClick={closePopup}>Close</button>
          </div>
        </Popup>    
      </section>    
    </section>

  );
}

export default TaskListApp;
