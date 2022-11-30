import React from "react"
import { useState, useEffect } from "react"
import { fetchScrolls } from "../../store/actions/scrollSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchingScrolls, fetchSuccessScrolls, fetchErrorScrolls } from "../../store/slices/scrollSlice";



interface Scroll {
    id?: string;
    img: string;
    price: string;
    x: string;
    coin: string;
    name: string;
}


export function Scroll() {


    const {scrolls} = useAppSelector(state => state?.scrolls)
    const dispatch = useAppDispatch()
    

    useEffect(()=>{
        dispatch(fetchScrolls())
    }, []);

    const classes = " w-[90%] ml-[20px] flex justify-between bg_scroll1 scrolls overflow-x-auto scroll-smooth pb-3";
    

    return (
        <div className={classes}>
            {
                scrolls.map((item: any) =>  
                    <div key={item.id}  id={"scroll" + item.id } className="w-[100%] mr-[1.7%] h-[100%]  p-2 mt-5">
                        <div id="as" className="relative w-[100%] h-[100%] flex justify-center items-center text-center rounded-[6px] p-[13px]">
                            <div className={" bg-cover w-[117px] h-[127px] font-kanit font-bold text-[20px] text-white outline-middle flex justify-center items-center"} style={{backgroundImage: " url("+process.env.PUBLIC_URL+"/images/"+item.img+".png)" }}>
                                <p className="ml-[13%] mb-[20%] leading-[100%]">{item.x}<span className="text-bluee">{item.coin}</span> <br /> <span className="text-yellow">{item.name}</span></p>
                            </div>
                            <h5 className="absolute bottom-2 left-2 font-kanit font-bold text-[20px] text-white outline-middle">{item.price}</h5>
                        </div>
                        
                    </div>
                )
            }
        </div>

    )
}
