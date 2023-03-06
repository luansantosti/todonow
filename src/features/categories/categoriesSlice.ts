import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data";
import { RootState } from "../../store";

interface Category {
  id: string;
  title: string;
}

interface CategoriesState {
  selectedCategory: Category;
  categories: Category[];
}

const initialState: CategoriesState = {
  categories,
  selectedCategory: categories[0]
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateSelectedCategory(state, action) {
      const selectedCategory = categories.find(category => category.id === action.payload.id)

      if (!selectedCategory) {
        return
      }

      state.selectedCategory = selectedCategory
    }
  }
})

export const selectSelectedCategory = (state: RootState) => state.categories.selectedCategory
export const { updateSelectedCategory } = categoriesSlice.actions
export default categoriesSlice.reducer