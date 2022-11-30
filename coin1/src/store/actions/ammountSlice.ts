import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetching, fetchSuccess, fetchError } from "../slices/ammountSlice";


export const  fetchAmmounts =  () => {
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetching())
          const response = await axios.get("http://localhost:3000/ammounts");
          
          dispatch(fetchSuccess(
            response.data
          ))
        }catch(error){
          dispatch(fetchError(error as Error))
        }
    }
}