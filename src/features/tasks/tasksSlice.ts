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

interface CompleteTask extends Action {
  payload: Pick<TaskPayload, 'id'>
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
    completeTask(state, action: CompleteTask) {
      const index = state.findIndex(task => task.id === action.payload.id)
      
      if (index === -1) {
        return state
      }

      const itemToUpdate = state[index];

      return [
        ...state.slice(0, index),
        {
          ...itemToUpdate,
          completed: true,
        },
        ...state.slice(index + 1),
      ];
    }
  }
})

export const { addTask, completeTask } = tasksSlice.actions
export default tasksSlice.reducer