import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'


interface GiftState {
  error: string
  loading: boolean
  gift: []
}

// Define the initial state using that type
const initialState: GiftState = {
  error: '',
  loading: false,
  gift: []
}

export const giftSlice = createSlice({
  name: 'gift',
  initialState,
  reducers: {
    fetchingGift(state){
        state.loading = true;
    },
    fetchSuccessGift(state, action: PayloadAction<[]>){
        state.loading = false;
        state.gift = action.payload   
        state.error = '' 
    },
    fetchErrorGift(state, action: PayloadAction<Error>){
        state.loading = false;
        state.error = action.payload.message
    }
  }
})

export const { fetchingGift, fetchSuccessGift, fetchErrorGift } = giftSlice.actions

export default giftSlice.reducer

