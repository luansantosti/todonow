import { createSlice, Action } from '@reduxjs/toolkit'

import { tasks } from '../../data'

interface TaskPayload {
  id: string;
  label: string;
  categoryId: number;
}

interface AddTask extends Action {
  payload: TaskPayload
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasks,
  reducers: {
    addTask(state, action: AddTask) {
      state.push({
        ...action.payload,
        completed: false
      })
    },
    updateTask(state, action) {

    }
  }
})

export const { addTask } = tasksSlice.actions
export default tasksSlice.reducer