import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'


interface ScrollState {
  error: string
  loading: boolean
  scrolls: []
}

// Define the initial state using that type
const initialState: ScrollState = {
  error: '',
  loading: false,
  scrolls: []
}

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    fetchingScrolls(state){
        state.loading = true;
    },
    fetchSuccessScrolls(state, action: PayloadAction<[]>){
        state.loading = false;
        state.scrolls = action.payload   
        state.error = '' 
    },
    fetchErrorScrolls(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingScrolls, fetchSuccessScrolls, fetchErrorScrolls } = scrollSlice.actions

export default scrollSlice.reducer

