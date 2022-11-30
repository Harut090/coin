import React from 'react';
import { useEffect,useState } from 'react';
import {fetchCoin} from "../store/actions/coinSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";

interface Coin{
    id:number,
    img: string
}

export const Coins = () => {

    const [checked,setChecked] = useState(0)
   const {loading, error, coins} = useAppSelector(state=> state?.coins);
   const dispatch = useAppDispatch();
  
  
  useEffect(()=>{
    dispatch(fetchCoin())
  },[]);
 
 
  return (
    <div className=" flex ml-[120px] w-[70%] justify-between mt-[60px] mb-[50px]">

             {
            coins.map((coin:Coin) => <div key={"coin" + coin.id} onClick={()=>{checked !== coin.id ? setChecked(coin.id) : setChecked(0)}} className='relative w-[50%] h-[50px]' style={{backgroundImage: " url("+process.env.PUBLIC_URL+"/images/"+coin.img+".png)", backgroundRepeat:'no-repeat' }}>
              <div  className={checked == coin.id ? 'bg-logo_1 top-[-75%] right-[25%]  absolute w-[37px] h-[40px]' : "hidden"}></div>

            </div>
          
      
       
   
                
                
                )
            
            
            }
        </div>
        
              
  )
}
