import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface SteptwoState {
  error: string
  loading: boolean
  steptwo: []
}

// Define the initial state using that type
const initialState: SteptwoState = {
  error: '',
  loading: false,
  steptwo: []
}

export const steptwoSlice = createSlice({
  name: 'steptwo',
  initialState,
  reducers: {
    fetchingSteptwo(state){
        state.loading = true;
    },
    fetchSuccessSteptwo(state, action: PayloadAction<[]>){
        state.loading = false;
        state.steptwo = action.payload  
        state.error = '' 
    },
    fetchErrorSteptwo(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingSteptwo, fetchSuccessSteptwo, fetchErrorSteptwo } = steptwoSlice.actions

export default steptwoSlice.reducer

