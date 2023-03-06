import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addTask } from '../../features/tasks/tasksSlice';
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

  return (
    <>
      {tasks.map(task => (
        <div>
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