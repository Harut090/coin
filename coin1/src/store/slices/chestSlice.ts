import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface ChestState {
  error: string
  loading: boolean
  chests: []
}

// Define the initial state using that type
const initialState: ChestState = {
  error: '',
  loading: false,
  chests: []
}

export const chestSlice = createSlice({
  name: 'chests',
  initialState,
  reducers: {
    fetchingChest(state){
        state.loading = true;
    },
    fetchSuccessChest(state, action: PayloadAction<[]>){
        state.loading = false;
        state.chests = action.payload   
        state.error = '' 
    },
    fetchErrorChest(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingChest, fetchSuccessChest, fetchErrorChest } = chestSlice.actions

export default chestSlice.reducer




