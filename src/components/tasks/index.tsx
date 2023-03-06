import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addTask, completeTask } from '../../features/tasks/tasksSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const Tasks = () => {
  const tasks = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch()
  const [task, setTask] = useState<string>('')

  const handleNewTask = () => {
    dispatch(addTask({
      label: task,
      categoryId: 1,
      id: uuid()
    }))

    setTask('')
  }

  const handleCompleteTask = (id: string) => {
    dispatch(completeTask({ id }))
  }

  return (
    <>
      {tasks.map(task => (
        <div key={task.id}>
          <button onClick={() => handleCompleteTask(task.id)}>{task.completed ? 'Done' : 'To do'}</button>
          {task.label}
        </div>
      ))}

      <input 
        type='text' 
        placeholder='New task' 
        onChange={(e) => setTask(e.target.value)} 
        value={task}
      />
      <button onClick={handleNewTask}>Add task</button>
    </>
  )
}

export default Tasks