import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingStep3, fetchSuccessStep3, fetchErrorStep3 } from "../slices/stepthreeSlice";


export const  fetchStep3 =  () => {
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingStep3())
          const response = await axios.get("http://localhost:3000/chest/chest1");
          
          dispatch(fetchSuccessStep3(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorStep3(error as Error))
        }
    }
}