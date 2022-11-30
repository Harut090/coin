import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingGift, fetchSuccessGift, fetchErrorGift } from "../slices/giftSlice";


export const  fetchGift =  () => { 
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingGift())
          const response = await axios.get("http://localhost:3000/gift");
          
          dispatch(fetchSuccessGift(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorGift(error as Error))
        }
    }
}