import { SvgIcon1, SvgIcon2, SvgIcon3 } from "./SvgIcone";

export default function Header() {
  return (
    <div className="px-4 z-10 ">
      {/* <!-- header --> */}

      <div className="flex items-center justify-start gap-2 pt-4">
        <div className="rounded-lg bg-[#1d2025] p-1">
          <SvgIcon1 />
        </div>
        <div className="text-sm">Abldxtr (CEO)</div>
      </div>
      {/* <!-- after header --> */}
      <div className="mt-1 flex items-center justify-between space-x-4">
        {/* <!-- 1 --> */}
        <div className="flex w-1/3 flex-col gap-1">
          {/* <!-- 1 --> */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] ">Legendary</p>
            <div className="text-[10px] ">
              7 <span className="text-[#95908a]">/ 10</span>
            </div>
          </div>
          {/* <!-- 2 --> */}
          <div className="border-2 border-[#43433b] rounded-full w-full ">
            <div className=" relative h-2 rounded-full w-full bg-[#43433b99]">
              <div className="absolute inset-y-0 w-10 rounded-full bg-gradient-to-r from-[#90ef89] via-[#d692dd] to-[#726edd]"></div>
            </div>
          </div>
        </div>

        {/* <!-- 2 --> */}
        <div className="flex w-2/3 max-w-64 items-center rounded-full border border-[#43433b] bg-[#43433b99] px-4 py-1">
          {/* <!-- 1 --> */}
          <div className="flex shrink-0 items-center">
            <img
              src="https://i.imgur.com/BpMo7OS.png"
              alt="logo"
              className="aspect-square size-8  "
            />
          </div>
          <div className="mx-2 h-[32px] w-[2px] bg-[#43433b]"></div>
          {/* <!-- 2 --> */}
          <div className="flex flex-1 flex-col items-center">
            <div className="text-[8px] font-medium text-[#85827d]">
              Profit per hour
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <div className=" shrink-0 ">
                <img
                  src="https://i.imgur.com/vlkYkDq.png"
                  alt="coin"
                  className="aspect-square size-[18px] shrink-0 "
                />
              </div>
              <div className="text-[12px]">+126.42K</div>
              <div>
                <SvgIcon3 />
              </div>
            </div>
          </div>
          <div className="mx-2 h-[32px] w-[2px] bg-[#43433b]"></div>
          {/* <!-- 3 --> */}
          <div className="h-full">
            <SvgIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
}
