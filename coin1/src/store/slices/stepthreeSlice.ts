import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface StepThreeState {
  error: string
  loading: boolean
  step3: []
}

// Define the initial state using that type
const initialState: StepThreeState = {
  error: '',
  loading: false,
  step3: [] ,
}

export const step3Slice = createSlice({
  name: ' step3',
  initialState,
  reducers: {
    fetchingStep3(state){
        state.loading = true;
    },
    fetchSuccessStep3(state, action: PayloadAction<[]>){
        state.loading = false;
        state.step3 = action.payload
        state.error = '' 
    },
    fetchErrorStep3(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingStep3, fetchSuccessStep3, fetchErrorStep3 } = step3Slice.actions

export default step3Slice.reducer

