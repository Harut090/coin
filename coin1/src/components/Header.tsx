import React from "react"

export function Header(){

    return (
        <div className="flex justify-center w-[100%] bg-header_col">
        <div className=" bg-header_col flex justify-between items-center p-5 w-[1440px]">
            <div className="flex justify-between w-[489px] items-center">
                <h2 className="text-[36px] font-bold border-black text-white font-kanit outline-bold">
                    <span className="text-header_icon">Coin</span>chest</h2>

                <ul  className="flex justify-between w-[274px] text-[20px]  border-black text-white font-kanit">
                    <li>Why coinchest?</li>
                    <li>Roadmap</li>
                </ul>
            </div>

            <div className="w-[326px] flex justify-between">
                <button className="px-9 py-2 bg-header_btn rounded border-b-[3px] border-[1px] text-[20px] font-bold border-black text-white font-kanit outline-title">Connect wallet</button>
                <div className="  w-[20%]">
                    <select  id="select" className={" relative appearance-none rounded px-2 py-2 w-[100%] text-[20px] bg-select_col font-kanit font-bold text-white outline-title"} >
                        <option value="Eng">En </option>
                        <option value="Rus">Ru</option>
                        <option value="Arm">Am</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    )
}