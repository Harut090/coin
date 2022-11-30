import React from 'react'
import { useEffect,useState } from "react"
import { fetchStep } from "../store/actions/stepSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
export const StepScroll = () => {

    const {step} = useAppSelector(state => state?.step)
    const dispatch = useAppDispatch()
    const classes = " w-[84%]  flex justify-between bg_scroll scrolls overflow-x-auto scroll-smooth pb-3";
     
    const [done,setDone] = useState<number | undefined>()
    
  
    useEffect(()=>{
        dispatch(fetchStep())
    }, []);

    const sel = "absolute z-[1] bg-cover right-[-7%] top-[50%] bg-select h-[34px] w-[34px]"

  return (
    <div className='  flex items-center justify-between w-[100%]'>
        <p className='font-kanit text-right font-bold text-[22px] w-[15%] text-white'>
          Background color
        </p>
        <div className={classes}>
            {
                step.map((item: any) =>  
                    <div key={item.id} id={"step" + item.id} onClick={()=> {done !== item.id ? setDone(item.id) : setDone(0)}} className="relative  w-[100%] mr-[1%] h-[100%]  p-2 mt-5">
                         <div  className={done === item.id ? sel :"hidden"  }></div>
                        <div  className="relative w-[120px] h-[120px] flex justify-center items-center text-center rounded-[6px] p-[13px]">
                            
                            <h5 className="absolute bottom-2 left-2 font-kanit font-bold text-[20px] text-white outline-middle">{item.price}</h5>
                        </div>
                        
                    </div>
                )
            }
        </div>
      </div>
  )
}
