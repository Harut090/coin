import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingStep, fetchSuccessStep, fetchErrorStep} from "../slices/stepSlice";


export const  fetchStep =  () => {
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingStep())
          const response = await axios.get("http://localhost:3000/step");
          
          dispatch(fetchSuccessStep(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorStep(error as Error))
        }
    }
}