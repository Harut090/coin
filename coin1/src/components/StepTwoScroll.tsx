import React from 'react'
import { useEffect ,useState} from "react"
import { fetchSteptwo } from "../store/actions/steptwoSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
export const StepTwoScroll = () => {
    const [done,setDone] = useState<number | undefined>()
    const {steptwo} = useAppSelector(state => state?.steptwo)
    const dispatch = useAppDispatch()
    const classes = " w-[84%]  flex justify-between bg_scroll scrolls overflow-x-auto scroll-smooth pb-3";
    const sel = "absolute z-[1] bg-cover right-[-7%] bottom-[-5%] bg-select h-[34px] w-[34px]"
  
    useEffect(()=>{
        dispatch(fetchSteptwo())
    }, []);
  return (
    <div className=' flex items-center w-[100%]'>
        <p className='font-kanit text-center font-bold text-[22px] w-[16%] text-white'>Chest look</p>
        <div className={classes}>
            {
                steptwo.map((item: any) =>  
                    <div key={item.id} id="StepTwo"  onClick={()=> {done !== item.id ? setDone(item.id) : setDone(0)}} className="relative w-[100%] mr-[1%] h-[100%]  p-1 mt-5 ">
                          <div  className={done === item.id ? sel :"hidden"  }></div>
                        <div  className="relative w-[120px] h-[120px] flex justify-center items-center text-center rounded-[6px]  p-[13px] ">
                            <div className={"bg-no-repeat w-[100%] h-[100%]  flex justify-center items-center"} style={{backgroundImage: " url("+process.env.PUBLIC_URL+"/images/"+item.img+".png)" }}>
                                
                            </div>
                            <h5 className="absolute bottom-0 left-2 font-kanit font-bold text-[20px] text-white outline-middle">{item.price}</h5>
                        </div>
                        
                    </div>
                )
            }
        </div>
      </div>
  )
}
