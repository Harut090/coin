import React from 'react'
import { useEffect,useState } from "react"
import { fetchGift } from "../store/actions/giftSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
export const GiftScroll = () => {

    const {gift} = useAppSelector(state => state?.gift)
    const dispatch = useAppDispatch()
    const classes = " w-[84%]  flex justify-between bg_scroll scrolls overflow-x-auto scroll-smooth pb-3";
    const [done,setDone] = useState<number | undefined>()
  
    useEffect(()=>{
        dispatch(fetchGift())
    }, []);
    const sel = "absolute z-[1] bg-cover right-[-7%] bottom-[0%] bg-select h-[34px] w-[34px]"

  return (
    <div className=' flex items-center justify-between w-[100%]'>
        <p className='font-kanit text-right font-bold text-[22px] w-[15%] text-white'>
            Choose packaging
        </p>
        <div className={classes}>
            {
                gift.map((item: any) =>  
                    <div key={item.id} id={"gift"} onClick={()=> {done !== item.id ? setDone(item.id) : setDone(0)}}  className="relative w-[100%] mr-[1%] h-[100%]  p-1 mt-5">
                         <div  className={done === item.id ? sel :"hidden"  }></div>
                        <div  className="relative w-[130px] h-[152px] flex justify-center items-center text-center rounded-[6px] p-[13px]">
                        <div className={" absolute top-[5%]  w-[100px] h-[75%]  "} style={{backgroundImage: " url("+process.env.PUBLIC_URL+"/images/"+item.img+".png)", backgroundRepeat:'no-repeat' }}>
                                
                        </div> 
                            <h5 className="absolute bottom-[0] left-2 font-kanit font-bold text-[20px] text-white outline-middle">{item.price}</h5>
                        </div>
                        
                    </div>
                )
            }
        </div>
      </div>
  )
}
