"use client";

import { useActiveMenue } from "@/context/Activemenue";

export default function Counter() {
  const { pointsToAdd, points, setPoints } = useActiveMenue();

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="px-4 mt-4 flex justify-center z-10 isolate ">
      <div className="px-4 py-2 flex items-center space-x-2 numb">
        <img
          src="https://i.imgur.com/ykQVitW.png"
          alt="dollar coin"
          className=" size-10 aspect-square  "
        />
        <div className=" text-4xl text-white numb">
          {numberWithCommas(points)}
        </div>
      </div>
    </div>
  );
}
