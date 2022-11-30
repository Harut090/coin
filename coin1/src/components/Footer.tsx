import React from "react"

export function Footer() {


    
    return (
        <div className="flex flex-col items-center w-[100%] bg-footer_col">
            <div className=" bg-footer_col flex flex-col pl-[20px] w-[100%]">
                <h2 className="text-[36px] mt-[30px] font-bold border-black text-white font-kanit outline-bold">
                    <span className="text-header_icon">Coin</span>chest
                </h2>
                <div className="flex justify-between items-center w-[80%] font-kanit mt-[20px]">
                    <div className="flex w-[30%] justify-between">
                         <div className="bg-link1 w-[36px] h-[36px]"></div>
                         <div className="bg-link2 w-[36px] h-[36px]"></div>
                         <div className="bg-link3 w-[36px] h-[36px]"></div>
                         <div className="bg-link4 w-[36px] h-[36px]"></div>
                         <div className="bg-link5 w-[36px] h-[36px]"></div>
                         <div className="bg-link6 w-[36px] h-[36px]"></div>
                    </div>
                    <div className="flex flex-col w-[35%] leading-[30px]">
                        <div className="flex w-[70%] justify-between ">
                            <div className="flex bg-locatia w-[19px] h-[24px] "></div>
                            <p className="flex w-[90%] font-[600] text-[18px] text-black">Mina Rashid, Dubai United Arab Emirates</p>
                        </div>
                        <div className="flex w-[70%] justify-between items-center mt-[20px]">
                            <div className="flex bg-message w-[25px] h-[19px] "></div>
                            <p className="flex w-[88%] font-[600] text-[18px] text-center text-black">coinchestio@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-[50px] leading-[40px] font-[500] text-[20px] text-white">
                        <a href="#" >Roadmap</a>
                        <a href="#">Why coinchest?</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-header_col w-[100%] ">
            <div className=" bg-header_col flex justify-between items-center w-[1440px]">
                    <div>
                        <p className="font-kanit font-[500] text-white text-[16px]">Copyright © 2022 Coinchest.io All rights reserved</p>
                    </div>
                    <div className=" flex justify-between items-center w-[20%]">
                        <p className="font-kanit font-[500] text-white text-[16px] outline-title">Privacy Policy</p>
                        <div className="border-black border-[1px] h-[13px]"></div>
                        <p className="font-kanit font-[500] text-white text-[16px] outline-title">Terms & Conditions</p>
                    </div>
                </div>
            </div>
    </div>

    )
}
