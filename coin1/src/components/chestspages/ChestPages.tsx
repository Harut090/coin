import { useState, useEffect } from "react";
import { fetchChests } from "../../store/actions/chestSlice";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchingChest } from "../../store/slices/chestSlice"

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
let str: string = ""

export function Chest() {
  const { chests } = useAppSelector((state) => state?.chests);
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchChests());
  }, []);

  useEffect(() => {
    dispatch(fetchingChest());
    setLoaging(false)
  }, [])

  const [show, setShow] = useState(true)
  const [chest, setChest] = useState<boolean>(true)
  const [search, setSearch] = useState(chests);
  const [loading, setLoaging] = useState(true)
  const [yellow, setYellow] = useState<any>([])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search) setSearch(search)
  }
  
  
  const AllChest = "bg-button2 bg-cover border-black border-[1px] rounded-t-[11px] w-[50%] text-[22px] text-white outline-middle"
  const myChest = " bg-button1 bg-cover border-black border-[1px] rounded-t-[11px] w-[50%] text-[22px] text-white outline-middle  "


  return (
    <>

      <div className="flex w-[100%] h-[64px] font-kanit font-bold stepOneBtns">
        <button onClick={() => { setChest(true) }} className={chest ? " bg-button1 bg-cover border-black border-[1px] rounded-t-[11px] w-[50%] text-[22px] text-white outline-middle" : AllChest}>
          All chests
        </button>
        <button onClick={() => { setChest(false) }} className={chest ? "bg-button2 bg-cover border-black border-[1px] rounded-t-[11px] w-[50%] text-[22px] text-white outline-middle " : myChest}>
          My chests
        </button>
      </div>


      {chest ? <div className=" w-[100%] pb-[1px] px-[5%] pt-[30px] bg-pink stepOneitem">
        <div className="stepOneSearch">
        <form onSubmit={handleSubmit} className="bg-white px-4 flex items-center h-[9%]  py-[7px] w-[100%] rounded-[7px] stepOneForm">

          <input onChange={e => setSearch((e.target as any).value.toUpperCase())} id="search"
            type="text"

            placeholder="Search"
            className=" placeholder:text-black font-kanit text-[18px] font-400  outline-none pl-[10px] w-[88%]"
          />
        </form>

        <div className="flex items-center justify-between w-[50%] pt-6 stepOneChest">
          <div>
            <h2 className="font-kanit font-bold text-[28px] text-white outline-middle">
              All chests
            </h2>
          </div>
          <button onClick={() => setShow(!show)} className="bg-arrow bg-cover w-[26px] h-[18px]"></button>
        </div>
        </div>
        {loading ? <div id="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> : <p></p>
        }
        <div className="w-[100%]  bg_scroll scrolls overflow-x-auto scroll-smooth  stepOneShowItems pb-30">
        {show ?
          chests.filter((chest: any) => chest.link.includes(search))
            .map((chest: any) =>
              <div key={chest.id} className="bg-light_pink bg-cover p-2 w-[100%] rounded-[12px] mb-[27px]  StepOneShowItem">
                <div id={chest.id} className="w-[100%] border-dashed border-[1px] h-[50%]">
                  <div className="flex w-[100%] justify-between ">
                    <div className="p-1 relative w-[50%] ">

                      <p className="absolute font-kanit font-bold text-[24px] ml-[5%] text-right w-[100%] text-white bottom-[65px] outline-middle ">{chest.link} {chest.total}</p>
                      <div className="flex justify-center absolute top-[26%] z-[1]  ml-[29px] h-[30px] w-[100%] border-black border-[1px] rounded-[5px]  bg-silver1">

                        <div className="font-kanit flex ml-7 w-[78%] justify-between font-bold text-[22px] outline-title text-center  text-white">
                          <p className="text-blue3">{chest.item}</p>

                          <p>
                            {chest.valut}<span className="text-yellow1">{chest.price}</span>
                          </p>
                        </div>
                      </div>
                      <div className=" bg-cover absolute z-[3] top-[9px] left-[5px] h-[61%] w-[26%]" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.logo + ".png)" }}></div>
                      <div className="w-[100%] ">
                        <div className=" absolute z-[3] mt-[80px] ml-[20px] h-[23px] w-[23px]" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.oclock + ".png)" }}></div>
                        <div className="flex justify-center absolute  z-[1] ml-[29px] mt-[80px] h-[22px] w-[80%] rounded-[4px] bg-purple1 border-black border-[1px]">
                          <div className=" absolute ml-[-26px]  h-[20px] items-center w-[80%] bg-purple rounded-r-[4px]"></div>
                          <p className=" absolute text-white z-[3] left-4 top-[-1px] flex  outline-middle text-[16px] font-kanit font-bold ">
                            {chest.day}
                          </p>

                        </div>
                      </div>
                    </div>
                    <div className="p-1 flex flex-col h-[100px] justify-between">
                      <div className="bg-share w-[30px] h-[26px]"></div>
                      <div className={yellow.indexOf(chest.id) >= 0 ? "w-[29px] h-[29px] yellow" : "bg-star w-[28px] h-[28px]"} onClick={() => {
                        yellow.indexOf(chest.id) >= 0 ? setYellow(yellow.filter((el: string) => { 
                          return el !== chest.id
                        })) : yellow.indexOf(chest.id) < 0 ? setYellow([...yellow,chest.id]) : setYellow([...yellow])
                      }}></div>
                      <div className="bg-file w-[29px] h-[29px]"></div>
                    </div>
                  </div>
                  <div className="flex w-[100%] h-[40%] justify-between p-2">
                    <div className="2xl:h-[12rem] w-[50%], xl:h-[130px] w-[45%], lg:h-[120px] w-[45%],  h-[160px] w-[48%] bg-cover" style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.img + ".png)" }}></div>
                    <div className="w-[50%]">
                      <div className="2xl:h-[18%] w-[8%], xl:w-[11%] h-[14%], lg:w-[11%]   absolute  mt-[-30px]  bg-cover h-[30%] w-[10%] " style={{ backgroundImage: " url(" + process.env.PUBLIC_URL + "/images/" + chest.family + ".png)" }}></div>
                      <div className=" flex items-center pl-1 mt-[110px] bg-white border-black border-[1px] h-[65px] w-[100%] rounded-[4px]">
                        <p className="font-kanit font-bold text-[14px]">This gift is for you my darling.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex w-[60%] justify-between items-center mb-[25px] pl-2">
                      <p className="font-kanit absolute font-bold mt-[30px] text-[16px] outline-title text-white">{chest.user}</p>
                      <div className=" absolute z-[3] ml-[9%] mt-[30px] flex justify-center font-kanit font-bold outline-title bg-level w-[86px] h-[37px]">
                        <p className=" font-kanit font-bold text-[16px] text-white">
                          {chest.x}<span className="text-blue3">{chest.value}  </span>{chest.valut}<span className="text-grey1">{chest.price1}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <meter max="100" value={+chest.tokos} className="w-[100%] h-[50px] rounded-[6px]" style={{color: "white"}}></meter>
                      <p className=" absolute z-[2] font-kanit pt-[1.5%] font-bold text-[24px] outline-middle text-white">{chest.tokos + "%"}</p>
                    </div>
                  </div>
                  <div className="flex leading-[23px] w-[100%] px-2 py-2 justify-between font-kanit font-bold outline-middle text-white text-[20px]">
                    <div className="">
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
            ) : ""}
            </div>
      </div> : <div className="flex justify-center p-4 bg-pink w-[100%] "><h2 className="font-kanit font-bold text-[22px] text-white outline-title">you don't have one selected Chests</h2></div>}
    </>
  );
}


