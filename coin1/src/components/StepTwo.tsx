import React, { useState,useEffect} from 'react'


import { StepTwoScroll } from './StepTwoScroll'
import { StepScroll } from './StepScroll '
import { GiftScroll} from './GiftScroll'



interface Done{
   done2:()=>void;
   done3:()=>void;
}
  
 

export const StepTwo = (  {... props}:Done) => {
  const [file,setFile]=useState<any>(null)
  const [preview, setPreview] = useState<string | null>();


  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      console.log(reader)
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
       reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);
  
   
  const newimg = " absolute z-[3] top-[12px] left-[5px] h-[58px] w-[58px] ";
  
  return (

  <div className='flex flex-col w-[95%] bg-header_col border-[1px] border-dashed mb-[30px]'>
      <div className="w-[53%] flex justify-between items-center ml-[3%] " >
        <button onClick={()=>props.done2()} className='bg-vector2 border-none w-[18px] h-[28px]'></button>
        <h2 className='font-kanit  font-bold text-[36px] text-white outline-title pb-[30px] pt-[30px]'>Step 2</h2>
      </div>
      <div className='flex flex-col w-[23%] ml-[3%]'>
        <div className='flex justify-between h-[15%] items-center'>

          <input type="checkbox" style={{ width: "25px", height: "27px" }} />
          <label className='font-kanit  font-bold text-[24px] text-white outline-title'>Customisation</label>
        </div>
        <p className='font-kanit text-center mr-[17%] font-bold text-[14px] text-white outline-title '>Cost $0.50</p>
      </div>
      <div className='flex justify-center mt-[17px]'>
        <div className="bg-light_pink bg-cover p-2 w-[42%] rounded-[12px] mb-[27px]">
          <div id='chest1' className="w-[100%]  border-dashed border-[1px] h-[410px]">
            <div className="p-1 relative w-[49%] ">

              <p className="absolute font-kanit font-bold text-[24px] text-right w-[100%] text-white ml-[10px] top-[0px] outline-bold ">LINK Total</p>
              <div className="flex justify-center absolute mt-[25px] z-[1]  ml-[29px] h-[30px] w-[165px] border-black border-[1px] rounded-[5px]  bg-silver1">

                <div className="font-kanit flex ml-7 w-[78%] justify-between font-bold text-[22px] outline-title text-center  text-white">
                  <p className="text-blue3">70</p>

                  <p>
                    $<span className="text-yellow1">100</span>
                  </p>
                </div>
              </div>
              <div className=" absolute z-[3] top-[12px] left-[5px] h-[58px] w-[58px]"  style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/logo.png)" }}></div>

            </div>
            <div className="flex w-[100%] justify-between mt-[120px] p-2">
             {preview!==null ? <div className="h-[170px] w-[230px] bg-cover"><img src={preview}/></div> : <div className="h-[170px] w-[230px] bg-cover" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/snduk_2.png)" }}></div>}
              <div className="w-[50%] ">
                
               <form className='w-[85%] h-[70%] ml-[10%] p-1 rotate-[4.09deg] border-black border-[1px]' >
                <input type="file" id="file" accept=".jpg, .jpeg, .png"
                  
                  onChange={(e)=>{setFile((e.target as any).files[0])}} />
                <label className=" absolute flex flex-col justify-center bg-white h-[95%] w-[95%] " htmlFor="file">Upload image <div className='bg-down w-[30px] h-[25px] ml-[25%] mt-[10px]'></div></label>
               </form>

                <form className=" flex p-1   mt-[30px] ml-[-10px]  bg-white border-black border-[1px] h-[70px] w-[180px] rounded-[8px]"  >
                  <input type="text" placeholder='Type your text' className=" placeholder: mb-[40px] font-kanit text-[14px] flex  font-[400] text-[#989898]   outline-none pl-[5px] w-[88%]" />

                </form>


              </div>
            </div>
          </div>

        </div>
      </div>
            <StepTwoScroll/>
      
      <div className='ml-30px flex items-center w-[100%] my-[30px] '>
        
        <StepScroll />
      </div>
      <div className=' bg-footer_col border-[1px] border-dashed'>
        <h2 className='font-kanit mt-[20px] text-center font-bold text-[30px] outline-title text-white'>Additional options for the best gift</h2>
        <div className='flex ml-[30px] h-[15%] items-center'>

          <input type="checkbox" style={{ width: "25px", height: "28px" }} />
          <label className='font-kanit  font-bold text-[24px] text-white outline-title'>Packaging</label>
        </div>
        <div className=' flex items-start w-[100%] my-[30px] '>
          
          <GiftScroll/>
        </div>
        <form className='flex w-[100%] h-[20%] mb-[40px] pl-[60px]  justify-between'>
          <div className=' w-[50%] h-[150px] flex flex-col mr-[10%] items-center justify-between'>
            <div className='flex w-[100%] h-[40%] items-center text-center justify-between'>

              <label className=' relative font-kanit text-right w-[20%] font-[400] text-[22px]  text-white'>Sender <span className=' absolute right-[-45%] top-[-30%]'>*</span> </label>

              <input id='input' type="text"
                placeholder='Full name' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />

            </div>
            <div className='flex  w-[100%] h-[40%] items-center justify-between'>

              <label className=' relative font-kanit  w-[28%] font-[400] text-[22px] text-white'>Sender
                E-mail <span className=' absolute right-[-5%] top-[-30%]'>*</span></label>
              <input id='input' type="text"
                placeholder='E-mail address' className=" placeholder:  font-kanit text-[14px]  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />
            </div>
          </div>
          <div className=' w-[60%] h-[150px] flex flex-col mr-[2%] items-center justify-between'>
            <div className='flex  w-[100%] h-[40%] items-center justify-between'>
              <label className='  relative font-kanit text-right w-[15%] font-[400] text-[22px]  text-white'>Recipient <span className=' absolute right-[-95%] top-[-35%]'>*</span></label>
              <input id='input' type="text"
                placeholder='Full name' className=" placeholder: font-kanit text-[14px] flex  font-[400] text-[#989898]   outline-none pl-[10px] w-[88%]" />
            </div>
            <div className='flex  w-[100%] h-[40%] items-center justify-between'>

              <label className=' relative font-kanit text-right w-[24%]  font-[400] text-[22px]  text-white'>
                Recipient E-mail <span className=' absolute right-[-20%] top-[-30%]'>*</span></label>
              <input id='input' type="text"
                placeholder='E-mail address' className=" placeholder:  font-kanit text-[14px] flex  font-[400] text-[#989898]    outline-none pl-[10px] w-[88%]" />
            </div>
          </div>
        </form>
        </div>
        <div className="flex justify-end w-[100%] h-[140px] items-center  mt-[54px] bg-header_col">
          <div className="flex flex-col text-right mr-[10px]">
            <p className="font-kanit font-bold text-[28px] h-[40px] text-white outline-bold">
              $10.5
            </p>
            <span className="font-kanit font-[500] text-[16px] mb-2 text-white text-right">
              Commission free $0.5
            </span>
          </div>

          <button onClick={()=>props.done3() } className={" relative  bg-next_btn border-none flex justify-around items-center pb-1 mr-[30px] w-[124px] h-[52px] font-kanit font-bold text-[23px] text-white outline-bold"}>


            Next

            <div className=" bg-vector1 w-[14px] h-[19px]"></div>

          </button>
        
      </div>
    </div>
  )
}



