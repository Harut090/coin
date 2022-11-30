import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingSteptwo, fetchSuccessSteptwo, fetchErrorSteptwo } from "../slices/steptwoSlice";


export const  fetchSteptwo =  () => {
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingSteptwo())
          const response = await axios.get("http://localhost:3000/steptwo");
          
          dispatch(fetchSuccessSteptwo(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorSteptwo(error as Error))
        }
    }
}