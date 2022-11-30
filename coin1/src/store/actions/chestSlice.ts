import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingChest, fetchSuccessChest, fetchErrorChest } from "../slices/chestSlice";


export const  fetchChests =  () => {
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingChest())
          const response = await axios.get("http://localhost:3000/chest");
          
          dispatch(fetchSuccessChest(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorChest(error as Error))
        }
    }
}