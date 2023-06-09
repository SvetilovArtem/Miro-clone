import { ITool } from './../../models/models';
import { createSlice } from '@reduxjs/toolkit'

export interface ElementsState {
  addedElementsOnBoard: ITool[],
  deleteMode: boolean
}

const initialState: ElementsState = {
  addedElementsOnBoard: [],
  deleteMode: false
}

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setAddedElementsOnBoard(state, action) {
        state.addedElementsOnBoard = [...state.addedElementsOnBoard, action.payload]
    },
    setDeleteMode(state, action) {
      state.deleteMode = action.payload
    },
    deleteElementFromBoard(state, action) {
      state.addedElementsOnBoard = state.addedElementsOnBoard.filter(el => el.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    setAddedElementsOnBoard, 
    setDeleteMode, 
    deleteElementFromBoard 
} = elementsSlice.actions

export default elementsSlice.reducer