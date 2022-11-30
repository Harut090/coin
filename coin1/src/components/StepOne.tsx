import React from 'react'
import { Ammount } from "../components/ammountpages/AmmountPages";
import { useState} from "react"

interface Done{
  done:()=>void
}

export const StepOne = ({done}:Done) => {

  const [search,setSearch] = useState();
  const  handleSubmit=(e:any)=>{
    e.preventDefault();
    if(search) setSearch(search )
  }
  
  const [input,setInput] = useState<number>(0)
  const  handleSubmit1=(e:any)=>{
    e.preventDefault();
    if(input) setInput(input)
  }
  const [input1,setInput1] = useState<number>(0)
  const  handleSubmit2=(e:any)=>{
    e.preventDefault();
    if(input1) setInput(input1)
  }
  return (
    <div>
            

            <div className="bg-header_col flex flex-col left-[2%] border-dashed border-[1px] w-[95%] stepOne">
              <h2 className="font-kanit text-[36px] font-bold items-center text-center text-white outline-title pb-[30px] pt-[30px]">
                Step 1
              </h2>

              <div className="flex  w-[100%] items-center ml-[1.7%]">
                <p className="font-kanit text-[22px] font-bold text-white">
                  Choose a token
                </p>

                <form onSubmit={handleSubmit} className="bg-white flex items-center mx-[2%] px-[14px] py-[7px] w-[24%] rounded-[15px]">
                  
                  <input onChange={e=>setSearch((e.target as any).value)} id="search"
                    value={search}
                    type="text"
                    placeholder="Search"
                    className=" placeholder:text-white font-kanit text-[24px] flex justify-between font-bold outline-title  outline-none pl-[10px] w-[88%]"
                  />
                </form>

                <div className="flex items-center">
                  <div className="clip-path-triangle w-[18px] h-[18px] bg-white"></div>
                  <div className="w-[100%] h-[65.8px] bg-white rounded-[15px] border-b-[3px] pt-[3px] pl-[4px] flex items-center justify-around">
                    <p className="font-kanit text-[24px] leading-[25px] font-[500] text-left">
                      Current price <br />
                      <span className="text-white outline-title">$</span>
                      <span className="text-yellow outline-title">20.000</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center ml-[2%] w-[98%]">
                <div className=" flex mr-5 ">
                  <p className=" text-[22px] text-right font-bold  text-white">
                    Select ammount
                  </p>
                </div>
                <div className="flex bg_scroll scrolls overflow-x-auto scroll-smooth w-[90%]  h-[200px] font-kanit mt-[40px] ">
                  <Ammount  />
                </div>
              </div>

              <div className="flex w-[79%] justify-between ml-[5%] mt-[40px] font-kanit">
                <span className="h-[33px] w-[18%] font-bold text-[22px] text-center text-white">
                  Chest term
                </span>
                <select  id="select" className=" appearance-none font-bold h-[49px] w-[18%] pl-[17px]  outline-title text-[24px] text-white bg-header_btn border-black border-[1px] rounded-[8px]">
                  <option value="5 year">5 Year</option>
                </select>
                <p className="h-[39px] w-[60%] text-[16px] text-white">
                  At the end of the term, if the price does not rise to the
                  target, the chest will opens but the tokens will not be sold.
                </p>
              </div>

              <div className="flex items-center justify-around w-[68%] h-[75px] ml-[4.5%] mt-[40px] font-kanit">
                <p className="font-bold text-[22px] text-center text-white">
                  Target price
                </p>
                <form onSubmit={handleSubmit1} className=" bg-price shPrice flex flex-col justify-between items-center p-1 h-[49px] w-[20%] rounded-[7px] mb-4 ">
                <input onChange={e=>setInput((e.target as any).value)}
                 type="number" 
                  placeholder='$' className="flex bg-price text-center outline-none items-center outline-title-gray text-white w-[80%] font-bold text-[24px]"
                  
                  
                />
                {input < 0 ?  <span className="flex mt-2 text-center items-center outline-title text-white font-bold text-[16px]">
                    Error text
                  </span> : "" }
                </form>
                <p className="font-bold text-[22px] text-center text-white">or</p>
                <form onSubmit={handleSubmit2}  className=" bg-white shPrice flex flex-col justify-between items-center p-1 h-[49px] w-[20%] rounded-[7px] mb-4">
                  <input onChange={e=>setInput1((e.target as any).value)}
                 type="number" 
                  placeholder='100X' className="flex text-center outline-none items-center outline-title text-white w-[80%] font-bold text-[24px]"
                  
                  
                />
                {input1 < 0 ?  <span className="flex mt-2 text-center items-center outline-title text-white font-bold text-[16px]">
                    Error text
                  </span> : "" }
                </form>

                <div className="flex items-center mt-2">
                  <div className="clip-path-triangle w-[18px] h-[18px] bg-white"></div>
                  <div className="w-[120%] h-[66px] bg-white rounded-[15px] border-b-[3px] p-[5px] flex items-center justify-around">
                    <p className="font-kanit text-[24px] leading-[25px] font-bold text-left">
                      Profit <br />
                      <span className="text-white outline-title">$</span>
                      <span className="text-yellow outline-title">{input < 0  || input1 < 0 ? "Error" : input * input1}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center mr-[24px] mt-[54px]">
                <div className="flex flex-col text-right mr-[10px]">
                  <p className="font-kanit font-bold text-[28px] h-[40px] text-white outline-bold">
                    $10.5
                  </p>
                  <span className="font-kanit font-[500] text-[16px] mb-2 text-white text-right">
                    Commission free $0.5
                  </span>
                </div>

                <button onClick={()=> done() }  className={" relative  bg-next_btn border-none flex justify-around items-center pb-1  w-[124px] h-[52px] font-kanit font-bold text-[23px] text-white outline-bold"}>
                    
                                      
                      Next
                    
                    <div className=" bg-vector1 w-[14px] h-[19px]"></div>
                 
                </button>
              </div>
            </div>

          </div>
  )
}
