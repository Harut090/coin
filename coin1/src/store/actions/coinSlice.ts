import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingCoin, fetchSuccessCoin, fetchErrorCoin } from "../slices/coinSlice";


export const  fetchCoin =  () => { 
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingCoin())
          const response = await axios.get("http://localhost:3000/coins");
          
          dispatch(fetchSuccessCoin(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorCoin(error as Error))
        }
    }
}