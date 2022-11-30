import React from "react";
import { useState } from "react";
import { Scroll } from "../components/scrollpages/ScollPages"
import { StepOne } from "../components/StepOne";
import { StepTwo } from "../components/StepTwo";
import { Coins } from "../components/Coins"
import { Chest } from "../components/chestspages/ChestPages";
import { StepThree } from "../components/StepThree";


export function HomePage() {
  function done(){
    if(changes3 == false){
    setChange2(false);
    setChange1(false);
    setChange3(true);
    }
    if(changes2 == false){
      setChange2(true);
      setChange1(false);
      setChange3(false);
    }
    if(changes1 == false){
      setChange2(false);
      setChange1(true);
      setChange3(false);
    }
    if(changes2 == true ){
      setChange2(false);
      setChange1(false);
      setChange3(true);
    }
  }
  function done1(){
    setChange2(!changes2);
    setChange3(!changes3);
  }
  function done3(){
    setChange2(false);
    setChange1(false);
    setChange3(true);
    
  }
  function done2(){
    if(changes2 == true){
      setChange2(false);
      setChange1(true);
      setChange3(false);
    }
  
  }
 
  const [changes1, setChange1] = useState<boolean>(true);
  const [changes2, setChange2] = useState<boolean>(false);
  const [changes3, setChange3] = useState<boolean>(false);
  let colors =
    "absolute  top-0 left-[28.4%] bottom-0 pl-[21px] w-[38.8%] h-[53px] clip-path-mypoligon2 border-black border-[1px] bg-header_col outline-title ";
  let colors1 =
    "absolute top-0 left-[61.8%] bottom-0 pl-[21px] w-[39%] h-[53px] bg-header_col clip-path-mypoligon3 rounded-tr-[15px] border-black border-[1px]";

  let stepColorChange = "font-kanit text-[24px] font-bold items-center text-center text-white outline-title" 


  function change1() {
    
    setChange3(false)
    setChange2(false)
    setChange1(true)
  }
  function change2() {
  
    setChange3(false)
    setChange2(true)
    setChange1(false)
  }
  function change3() {
    setChange2(false);
    setChange1(false);
    setChange3(true);

  }
 
 
  return (
    <div className="flex justify-between px-5 w-[100%]">
      <div className=" w-[65%] homeLeft ">
          <div className="flex flex-col  w-[100%] mt-9">
            <h1 className="text-header_btn font-kanit text-[48px] font-bold text-center">
              Welcome to Coin<span className="text-header_col">chest</span>
            </h1>
            <p className="text-black font-kanit text-[20px] font-bold text-center w-[82%] homeParagraf tracking-[.075rem] mt-5">
              With Coinchest you can create a NFT chest to store your tokens in
              it, and set a target price for the token upon reaching which, the
              chest will automatically opens and sell the tokens.
            </p>
            <div className="ml-[-20px] p-0 mt-[35px] bg-flag1 w-[230px]  h-[55px] bg-cover flex justify-center items-center">
              <p className="text-white font-kanit text-[28px] font-bold">
                Create a chest
              </p>
            </div>
          </div>
          <div className="flex mt-[30px] w-[46%] h-[53px] bg-black  rounded-t-[15px] relative">
            <div
              onClick={() => change1()}
              className=" absolute top-0 left-0 bottom-0 pl-[21px] w-[33.7%] h-[53px] bg-header_col clip-path-mypolygon rounded-tl-[15px] border-solid border-black border-[1px]"
            >
              <button className=" absolute top-0 bottom-0 left-0 w-[100%] h-[100%] flex justify-center pt-[4%] pr-[13%] ">
                <span className="font-kanit text-[24px] font-bold items-center text-center text-white outline-title">
                  1.Step
                </span>
              </button>
            </div>

            <div
              onClick={() => change2()}
              className={
                changes2 || changes3
                  ? colors
                  : " absolute top-0 left-[28.4%] bottom-0 pl-[21px] w-[38.8%] h-[53px] bg-silver clip-path-mypoligon2 border-black border-[1px]"
              }
            >
              <button className=" absolute  top-0 bottom-0 left-0 w-[100%] h-[100%] flex justify-center pt-[4%] pl-[4%]">
                <span className={changes2 || changes3 ? stepColorChange : "font-kanit text-[24px] font-bold items-center text-center text-white outline-title-gray"}>
                  2.Step
                </span>
              </button>
            </div>

            <div
              onClick={() => change3()}
              className={ 
                changes3
                  ? colors1
                  : " absolute top-0 left-[61.8%] bottom-0 pl-[21px] w-[39%] h-[53px] bg-silver clip-path-mypoligon3 rounded-tr-[15px] border-black border-[1px]"
              }
            >
              <button className=" absolute  top-0 bottom-0 left-0 w-[100%] h-[100%] flex justify-center pt-[4%] pl-[10%]">
                <span className={ changes3 ? stepColorChange : "font-kanit text-[24px] font-bold items-center text-center text-white outline-title-gray"}>
                  3.Step
                </span>
              </button>
            </div>
          </div>
        
           {changes1 ? <StepOne done={done} /> : changes2 ? <StepTwo   done2={done2}  done3={done3}  /> : <StepThree done1={done1}/> } 
           <div className="hidden  flexs ">
        <Chest />
        </div>
          <div className=" w-[100%] mt-[40px] ">

            <div className="  p-0 ml-[-20px] bg-flag2 w-[223px]  h-[55px] bg-cover flex items-center">
              <p className="text-white font-kanit text-[28px] font-bold text-left pl-[10%] ">
                Scroll
              </p>
            </div>

            <p className=" text-black ml-[20px] font-kanit text-[20px] font-bold w-[90%] mt-[32px] mb-[30px] tracking-[.075rem]">
              At Coinchest we try to find the best projects in cryptocurrency sphere, which tokens can be hidden gems for an investors. Bellow few of them.
            </p>
            <Scroll />
            

            <div className="font-kanit mt-[67px] w-[100%]">
              <div className="ml-[-20px] bg-flag3 bg-cover flex justify-center w-[267px] h-[53px] items-center">
                <h2 className="absolute font-bold text-[28px] text-white">Security</h2>
              </div>


              <div className="bg-swords bg-cover ml-[20px]  w-[70px] h-[84px] absolute mt-[32px]"></div>
              <div className=" ml-[120px] mt-[32px] font-[500] w-[80%] h-[192px] text-[20px] flex flex-col justify-between text-black leading-[120%]">
                <p>The chest is NFT with a smart contract, it stored in the Polygon network. When
                  creating
                  the chest, the creator specifies the smart contract rules, how long to keep the
                  chest
                  closed and at what token price open the chest and sell the tokens.</p>

                <p >Coinchest service only provides an interface for creating chest!
                  If the service disappears, the chest will still remain on polygon network and follow
                  it`s creator rules.</p>
              </div>
            </div>
            <div className="font-kanit mt-[67px] w-[100%]">
              <div className="ml-[-20px] bg-flag4 bg-cover flex justify-center w-[223px] h-[53px] items-center">
                <h2 className="absolute font-bold text-[28px] text-white">Roadmap</h2>
              </div>



              <div className=" mt-[32px] ml-[120px] font-[500] w-[80%]  text-[20px]  text-black">
                <p>At the start, the service will only be avaiable for Ethereum ERC-20 network tokens
                  only. The priority is the introduction of top blockchains and DLT platforms:
                  Cardano, Avalanch, Polkadot, Solana, Binance Chain, XRP Ledger, XLM.</p>


              </div>
            </div>
            <Coins/>
          </div>
      </div>
      <div className=" w-[30%] mt-[40px] flexss ">
        <Chest />
      </div>

    
    </div>





  );
}
