export default function HeaderBody() {
  const items = [
    {
      img: "https://hamster-kombat-telegram-mini-app-clone.vercel.app/assets/daily-reward-BQbFIOL9.png",
      title: "Daily reward",
      value: "00:24",
    },
    {
      img: "https://hamster-kombat-telegram-mini-app-clone.vercel.app/assets/daily-cipher-BsFh939_.png",
      title: "Daily cipher",
      value: "01:54",
    },
    {
      img: "https://hamster-kombat-telegram-mini-app-clone.vercel.app/assets/daily-combo-BILPP4Db.png",
      title: "Daily combo",
      value: "00:22",
    },
  ];

  return (
    <div className=" px-4 mt-6 flex justify-between gap-2 ">
      {items.map((item, index) => {
        return (
          <div
            className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative"
            key={index}
          >
            {/* <!-- dot --> */}
            <div className=" absolute top-3 size-[6px] aspect-square rounded-full bg-white right-3 animate-blink  "></div>
            <img src={item.img} alt="" className=" size-12 mx-auto  " />
            <p className="text-[10px] text-center text-white mt-1">
              {item.title}
            </p>
            <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
