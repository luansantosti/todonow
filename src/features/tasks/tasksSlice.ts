import { createSlice, Action, createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store'
import { tasks } from '../../data'
import { selectSelectedCategory } from '../categories/categoriesSlice';

interface TaskPayload {
  id: string;
  label: string;
  categoryId: string;
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

const selectTasks = (state: RootState) => state.tasks

export const selectFilteredTasks = createSelector(
  [selectTasks, selectSelectedCategory], 
  (tasks, selectedCategory) => tasks.filter(task => task.categoryId === selectedCategory.id)
)

export const { addTask, completeTask } = tasksSlice.actions
export default tasksSlice.reducer