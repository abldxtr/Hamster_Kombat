"use client";

import { useActiveMenue } from "@/context/Activemenue";
import { SvgIcon4, SvgIcon5, SvgIcon6 } from "./SvgIcone";
import classNames from "classnames";

export default function Menue() {
  const { activeN, setActiveN } = useActiveMenue();
  return (
    <div className=" fixed isolate   w-full z-50 bottom-0 rounded-3xl text-xs flex items-center justify-center  ">
      <div className=" bg-[#272a2f] rounded-3xl flex w-full items-center justify-around px-2 max-w-[530px] mx-auto">
        {/* <!-- 1 --> */}
        <div
          className={classNames(
            "text-center text-[#85827d]  m-1 p-2 rounded-2xl w-full cursor-pointer group ",
            activeN === 1
              ? "bg-[#1c1f24] text-white  "
              : "hover:bg-[#1c1f24] transition-all text-[#8b8e93]",
          )}
          onClick={() => setActiveN(1)}
        >
          <img
            src="https://hamster-kombat-telegram-mini-app-clone.vercel.app/assets/binance-logo-ICDYv7TY.png"
            alt="Exchange"
            className=" size-[28px] aspect-square mx-auto  "
          />
          <p className="mt-1 group-hover:text-white  ">Exchange</p>
        </div>
        {/* <!-- 2 --> */}
        <div
          className={classNames(
            "text-center text-[#85827d] p-2 cursor-pointer rounded-2xl w-full m-1 group ",
            activeN === 2
              ? "bg-[#1c1f24] text-white "
              : "hover:bg-[#1c1f24] transition-all text-[#8b8e93]",
          )}
          onClick={() => setActiveN(2)}
        >
          <SvgIcon4 classname="group-hover:text-white" />

          <p className="mt-1 group-hover:text-white ">Mine</p>
        </div>
        {/* <!-- 3 --> */}
        <div
          className={classNames(
            "text-center text-[#85827d] rounded-2xl  p-2 cursor-pointer w-full m-1 group [&_svg]:group-hover:fill-white",
            activeN === 3
              ? "bg-[#1c1f24] text-white "
              : "hover:bg-[#1c1f24] transition-all text-[#8b8e93]",
          )}
          onClick={() => setActiveN(3)}
        >
          <SvgIcon5 classname="group-hover:text-white" />
          <p className="mt-1 group-hover:text-white ">Friends</p>
        </div>
        {/* <!-- 4 --> */}
        <div
          className={classNames(
            "text-center text-[#85827d] rounded-2xl p-2 cursor-pointer w-full m-1 group [&_svg]:group-hover:fill-white",
            activeN === 4
              ? "bg-[#1c1f24] text-white "
              : "hover:bg-[#1c1f24] transition-all text-[#8b8e93]",
          )}
          onClick={() => setActiveN(4)}
        >
          <SvgIcon6 classname="group-hover:text-white" />
          <p className="mt-1 group-hover:text-white ">Earn</p>
        </div>
        {/* <!-- 5 --> */}
        <div
          className={classNames(
            "text-center text-[#85827d] rounded-2xl p-2 cursor-pointer w-full m-1 group",
            activeN === 5
              ? "bg-[#1c1f24] text-white "
              : "hover:bg-[#1c1f24] transition-all text-[#8b8e93]",
          )}
          onClick={() => setActiveN(5)}
        >
          <img
            src="https://hamster-kombat-telegram-mini-app-clone.vercel.app/assets/hamster-coin-BBw1dF5i.png"
            alt="Airdrop"
            className="size-8 aspect-square mx-auto"
          />
          <p className="mt-1 group-hover:text-white ">Airdrop</p>
        </div>
      </div>
    </div>
  );
}
