import React from "react"
import { useEffect,useState } from "react"
import { fetchAmmounts } from "../../store/actions/ammountSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetching, fetchSuccess, fetchError } from "../../store/slices/ammountSlice"



interface Ammount {
    id?: number;
    img1: string;
    price: string;
    coin: string; 
}
interface Search{
    search:[];
}

export function Ammount() {

    const dispatch = useAppDispatch()  
    const {ammounts} = useAppSelector(state => state.ammounts)
    const [select,setSelect] = useState<number | undefined>()
    
  
    

    useEffect(()=>{
        dispatch(fetchAmmounts()
     )
    }, []);
   
    const sel = "absolute right-[-15%] top-[35%] bg-select h-[55px] w-[55px]"
    

 
  
    return (
        <div className=" w-[95%] flex justify-between bg_scroll scrolls overflow-x-auto scroll-smooth pb-3">
            {
                 ammounts.map((item:Ammount) => 
                <div key={item.id} onClick={()=> {select !== item.id ? setSelect(item.id) : setSelect(0)}} className=" relative flex flex-col  mr-5 bg-chest1_color w-[130px] h-[168px] rounded-[7px] text-white outline-title shadow items-center">
                     <div  className={select === item.id ? sel :"hidden"  }></div>
                    <div className={"h-[68px] w-[84px] mt-[21px] "} style={{backgroundImage: " url("+process.env.PUBLIC_URL+"/images/"+item.img1+".png)"} }></div>
                    <p className=" text-[26px] text-center font-bold w-[130px]">
                        { item.coin}
                    </p>
                    <span className=" text-[16px]  font-bold">{item.price}</span>
                </div>
              )
          }
      </div>
                )
            }
      


