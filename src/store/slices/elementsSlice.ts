import { ITool } from './../../models/models';
import { createSlice } from '@reduxjs/toolkit'

export interface ElementsState {
  addedElementsOnBoard: ITool[],
}

const initialState: ElementsState = {
  addedElementsOnBoard: [],
}

export const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    setAddedElementsOnBoard(state, action) {
        state.addedElementsOnBoard = [...state.addedElementsOnBoard, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAddedElementsOnBoard } = elementsSlice.actions

export default elementsSlice.reducer