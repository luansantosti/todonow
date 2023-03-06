import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addTask, completeTask } from '../../features/tasks/tasksSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { selectFilteredTasks } from '../../features/tasks/tasksSlice';
import { useSelector } from 'react-redux';

const Tasks = () => {
  const tasks = useSelector(selectFilteredTasks)
  const dispatch = useAppDispatch()
  const [task, setTask] = useState<string>('')

  const handleNewTask = () => {
    dispatch(addTask({
      label: task,
      categoryId: '1',
      id: uuid()
    }))

    setTask('')
  }

  const handleCompleteTask = (id: string) => {
    dispatch(completeTask({ id }))
  }

  return (
    <>
      categories
    </>
  )
}

export default Tasks