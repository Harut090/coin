import { useEffect, useState } from "react";
import { fetchStep3 } from "../store/actions/steptreeSlice";
import { useAppSelector, useAppDispatch } from "../hooks/redux";

interface Coin {
  id: string;
  link: string;
  total: string;
  item: string;
  valut: string;
  price: string;
  day: string;
  user: string;
  x: string;
  value: string;
  price1: string;
  price2: string;
  value1: string;
  price3: string;
  tokos: string;
  img: string;
  logo: string;
  family: string;
  oclock: string;
}
interface Done{
  done1:()=>void
}
export const StepThree = ({done1}:Done) => {

  const { step3 } = useAppSelector(state => state?.step3)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStep3())
  }, [])

  let arr = []
  arr.push(step3)
  

  return (
    <div className='flex flex-col w-[95%] bg-header_col border-[1px] border-dashed p-[2%] mb-[30px]'>
      <div className="w-[56%] flex justify-between items-center " >
        <button onClick={()=> done1() } className='bg-vector2 border-none w-[18px] h-[28px]'></button>
        <h2 className='font-kanit  font-bold text-[36px] text-white outline-title pb-[30px] pt-[12px]'>Step 3</h2>
      </div>
      <div className="flex justify-between mt-[5%]">
        {

          arr.map((chest: any, index) => 
            <div  key={index} className="bg-light_pink bg-cover p-2 w-[42%]   rounded-[12px] mb-[27px]">
              <div id={chest.id} className="w-[100%] border-dashed border-[1px] h-[100%]">
                <div className="flex w-[100%] justify-between ">
                  <div className="p-1 relative w-[49%] ">

                    <p className="absolute font-kanit font-bold text-[24px] text-right w-[100%] text-white bottom-[65px] outline-bold ">{chest.link} {chest.total}</p>
                    <div className="flex justify-center absolute top-[26%] z-[1]  ml-[29px] h-[30px] w-[165px] border-black border-[1px] rounded-[5px]  bg-silver1">

                      <div className="font-kanit flex ml-7 w-[78%] justify-between font-bold text-[22px] outline-title text-center  text-white">
                        <p className="text-blue3">{chest.item}</p>

                        <p>
                          {chest.valut}<span className="text-yellow1">{chest.price}</span>
                        </p>
                      </div>
                    </div>
                    <div className=" absolute z-[3] top-[9px] left-[5px] h-[58px] w-[58px]" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.logo + ".png)" }}></div>
                    <div className="mt-[50px]">
                      <div className=" absolute z-[3] mt-[25px] ml-[20px] h-[23px] w-[23px]" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.oclock + ".png)" }}></div>
                      <div className="flex justify-center absolute  z-[1] ml-[29px] mt-[25px] h-[22px] w-[142px] rounded-[4px] bg-silver1 border-black border-[1px]">
                        <div className=" absolute ml-[-26px]  h-[20px] items-center w-[100px] bg-purple rounded-r-[4px]"></div>
                        <p className=" absolute text-white z-[3] left-4 top-[-1px] flex  outline-middle text-[16px] font-kanit font-bold ">
                          {chest.day}
                        </p>

                      </div>
                    </div>
                  </div>
                  <div className="p-1 flex flex-col h-[100px] justify-between">
                    <div className="bg-share w-[30px] h-[26px]"></div>
                    <div className="bg-Star w-[30px] h-[29px]"></div>
                    <div className="bg-file w-[29px] h-[29px]"></div>
                  </div>
                </div>
                <div className="flex w-[100%] h-40% justify-between p-2">
                  <div className="2xl:h-[160px] w-[50%], xl:h-[130px] w-[45%], lg:h-[120px] w-[45%],  h-[160px] w-[48%] bg-cover" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.img + ".png)" }}></div>
                  <div className="w-[50%]">
                    <div className="2xl:h-[18%] w-[8%], xl:w-[11%] h-[14%], lg:w-[11%]   absolute  mt-[-30px]  bg-cover h-[30%] w-[10%]" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.family + ".png)" }}></div>
                    <div className=" flex items-center pl-1 mt-[110px] bg-white border-black border-[1px] h-[65px] w-[100%] rounded-[4px]">
                      <p className="font-kanit font-bold text-[14px]">This gift is for you my darling.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex w-[60%] justify-between items-center mb-[25px] pl-2">
                    <p className="font-kanit absolute font-bold mt-[30px] text-[16px] outline-title text-white">{chest.user}</p>
                    <div className=" absolute z-[3] ml-[8%] mt-[30px] flex justify-center font-kanit font-bold outline-title bg-level w-[86px] h-[37px]">
                      <p className=" font-kanit font-bold text-[16px] text-white">
                        {chest.x}<span className="text-blue3">{chest.value}  </span>{chest.valut}<span className="text-grey1">{chest.price1}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center absolute  z-[1]   h-[22px] w-[21.9%] rounded-[4px] bg-silver1 border-black border-[1px]">
                    <div className=" absolute z-[2] mt-[-0.5px] ml-[-51%] h-[21px] w-[50%] chest_2 rounded-[4px]"></div>
                    <p className=" absolute z-[2] font-kanit font-bold text-[24px] outline-middle text-white">{chest.tokos}</p>
                  </div>
                </div>
                <div className="flex leading-[23px] w-[100%] px-2 py-2 justify-between mt-[50px] font-kanit font-bold outline-middle text-white text-[20px]">
                  <div className=" ">
                    <p>Start</p>
                    <p>
                      {chest.valut} <span className="text-grey1">{chest.price2}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <span>Target</span>
                    <p>
                      {chest.x}<span className="text-blue3">{chest.value1} </span>{chest.valut}<span className="text-grey1">{chest.price3}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        <div className="flex flex-col justify-around w-[50%] ">
          <div className="grid grid-cols-2 mt-[-55px] checked" >
            <div className='flex  h-[15%] my-[5px] items-center'>

              <input type="checkbox" style={{ width: "25px", height: "25px", borderRadius:"15px" }} />
              <label className='font-kanit my-[5px]  font-bold text-[18px] text-white '>Amount <span className='font-kanit ml-[5px]  font-bold text-[16px] text-white outline-title'>$10</span></label>
            </div>
            <div className='flex  h-[15%] mt-[5px] items-center'>

              <input type="checkbox" style={{ width: "25px", height: "27px" }} />
              <label className='font-kanit my-[5px] font-bold text-[18px] text-white '>Chest cost <span className='font-kanit ml-[5px] font-bold text-[16px] text-white outline-title'>$0.25</span> </label>
            </div>
            <div className='flex h-[15%]  items-center'>

              <input type="checkbox" style={{ width: "25px", height: "27px" }} />
              <label className='font-kanit  font-bold text-[18px] text-white '>Chest look <span className='font-kanit ml-[5px] font-bold text-[16px] text-white outline-title'>$0.15</span></label>
            </div>
            <div className='flex h-[15%]  items-center'>

              <input type="checkbox" style={{ width: "25px", height: "27px" }} />
              <label className='font-kanit  font-bold text-[18px] text-white '>Background <span className='font-kanit ml-[5px] font-bold text-[16px] text-white outline-title'>$0.25</span></label>
            </div>
            <div className='flex h-[15%] mt-[10px] items-center'>

              <input type="checkbox" style={{ width: "25px", height: "27px" }} />
              <label className='font-kanit  font-bold text-[18px] text-white '>Packaging <span className='font-kanit ml-[5px] font-bold text-[16px] text-white outline-title'>$0.25</span></label>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <p className='font-kanit  font-bold text-[22px] w-[25%] text-white '>Total price</p>
            <h2 className='font-kanit font-bold text-[36px] w-[20%] text-white outline-title'>143$</h2>
            <button className='flex justify-center  font-kanit font-bold text-[18px] text-white outline-title bg-btn_3 items-center  w-[38%] bg-no-repeat h-[50px]'><p>Pay with credit card</p></button>
          </div>
        </div>
      </div>
      <div className="w-[100%] border-white border-[1px] mt-[13px]"></div>
      <div className="flex flex-col mt-[40px]">
        <h2 className='font-kanit  font-bold text-[36px] text-white outline-title'>Card payment</h2>
        <form className=' grid grid-cols-2 mt-[55px] h-[215px]'>

          <div className='flex w-[100%]  items-center text-center justify-between'>

            <label className='ml-[5%] relative font-kanit text-right w-[20%] font-[400] text-[22px]  text-white'>Name <span className=' absolute right-[-20%] top-[-30%]'>*</span> </label>

            <input id='inputs' type="text"
              placeholder='Name' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />

          </div>
          <div className='flex  w-[100%] items-center justify-between'>

            <label className=' relative font-kanit  w-[28%] font-[400] text-[22px] text-white'>Surname
              <span className=' absolute right-[-5%] top-[-30%]'>*</span></label>
            <input id='inputs' type="text"
              placeholder='Surname' className=" placeholder:  font-kanit text-[14px]  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />
          </div>
          <div className=' relative flex  w-[100%] items-center justify-between'>
            <label className='ml-[-5%]  font-kanit text-right w-[15%] font-[400] text-[22px]  text-white'>Cardholder <span className=' absolute left-[27%] top-[5%]'>*</span></label>
            <input id='inputs' type="text"
              placeholder='1111 2222 3333 4444' className=" placeholder: font-kanit text-[14px] flex  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />
          </div>
          <div className="flex w-[100%] justify-between">
            <div className='flex  w-[90%]  items-center justify-between'>

              <label className=' relative font-kanit text-center w-[80%]  font-[400] text-[22px]  text-white'>
                Expire <span className=' absolute right-[4%] top-[-30%]'>*</span></label>
              <input id='inputs' type="text"
                placeholder='01/22' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]    outline-none pl-[10px] " />
            </div>
            <div className='flex  w-[70%]  items-center justify-between'>

              <label className=' relative font-kanit  w-[50%]  font-[400] text-[22px]  text-white'>
                CVC <span className=' absolute right-[5%] top-[-30%]'>*</span></label>
              <input id='inputs' type="text"
                placeholder='123' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]    outline-none pl-[10px] w-[0%]" />
            </div>
          </div>

          <div className='flex  w-[100%]  items-center justify-between'>

            <label className=' relative font-kanit text-right w-[24%]  font-[400] text-[22px]  text-white'>
              Email <span className=' absolute right-[-20%] top-[-30%]'>*</span></label>
            <input id='inputs' type="text"
              placeholder='E-mail' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]    outline-none pl-[10px] w-[88%]" />
          </div>

        </form>
        <div className="flex  w-[100%] justify-between">
          <div className=" w-[40%]">
            <p className='font-kanit font-bold text-[14px] w-[320px] text-left h-[56px]  text-white outline-title'>
            Importent: (When paying with credit card)
            The e-mail must be real and working,
            it will be used to cleam the chest ownership.
            </p>
          </div>
          <div className=" relative flex justify-between items-center w-[50%]">
            <p className='font-kanit  font-bold text-[22px] w-[25%] text-white '>Total price</p>
            <h2 className=' absolute left-[29%]  font-kanit font-[400] text-[36px] w-[8%] text-white outline-bold'>143$</h2>
            <button className='flex justify-center font-kanit font-bold text-[18px] text-white outline-title bg-btn_3 items-center  w-[38%] bg-no-repeat h-[50px]'><p>Pay with credit card</p></button>
          </div>
        </div>
      </div>
    </div>
  )
}
