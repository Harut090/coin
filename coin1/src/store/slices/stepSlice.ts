import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface StepState {
  error: string
  loading: boolean
  step: []
}

// Define the initial state using that type
const initialState: StepState = {
  error: '',
  loading: false,
  step: []
}

export const stepSlice = createSlice({
  name: ' step',
  initialState,
  reducers: {
    fetchingStep(state){
        state.loading = true;
    },
    fetchSuccessStep(state, action: PayloadAction<[]>){
        state.loading = false;
        state. step = action.payload  
        
        state.error = '' 
    },
    fetchErrorStep(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingStep, fetchSuccessStep, fetchErrorStep } = stepSlice.actions

export default stepSlice.reducer

