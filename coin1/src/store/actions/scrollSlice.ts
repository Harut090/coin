import { Dispatch } from "@reduxjs/toolkit";
import  axios  from 'axios';
import { fetchingScrolls, fetchSuccessScrolls, fetchErrorScrolls } from "../slices/scrollSlice";


export const  fetchScrolls =  () => { 
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetchingScrolls())
          const response = await axios.get("http://localhost:3000/scroll");
          
          dispatch(fetchSuccessScrolls(
            response.data
          ))
        }catch(error){
          dispatch(fetchErrorScrolls(error as Error))
        }
    }
}