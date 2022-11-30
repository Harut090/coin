import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface AmmountState {
  error: string
  loading: boolean
  ammounts: []
}

// Define the initial state using that type
const initialState: AmmountState = {
  error: '',
  loading: false,
  ammounts: []
}

export const ammountSlice = createSlice({
  name: 'ammounts',
  initialState,
  reducers: {
    fetching(state){
        state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<[]>){
        state.loading = false;
        state.ammounts = action.payload   
        state.error = '' 
    },
    fetchError(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetching, fetchSuccess, fetchError } = ammountSlice.actions

export default ammountSlice.reducer

