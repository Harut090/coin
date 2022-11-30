import { createSlice, PayloadAction } from '@reduxjs/toolkit'



interface CoinState {
  error: string
  loading: boolean
  coins: []
}

// Define the initial state using that type
const initialState: CoinState = {
  error: '',
  loading: false,
  coins: []
}

export const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    fetchingCoin(state){
        state.loading = true;
    },
    fetchSuccessCoin(state, action: PayloadAction<[]>){
        state.loading = false;
        state.coins = action.payload   
        state.error = '' 
    },
    fetchErrorCoin(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingCoin, fetchSuccessCoin, fetchErrorCoin } = coinSlice.actions

export default coinSlice.reducer




