"use client";

import { useActiveMenue } from "@/context/Activemenue";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useState } from "react";

export default function ElementGame() {
  const { pointsToAdd } = useActiveMenue();
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let x = useMotionValue(0);
  let y = useMotionValue(0);
  const controls = useAnimation();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const xx = e.clientX - rect.left - rect.width / 2;
    const yy = e.clientY - rect.top - rect.height / 2;
    x.set(xx);
    y.set(yy);

    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    // card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    // setTimeout(() => {
    //   card.style.transform = "";
    // }, 100);

    // setTimeout(() => {
    //   x.set(0);
    //   y.set(0);
    // }, 10);

    // controls.start({
    //   rotateX: [-yy / 10, 0],
    //   rotateY: [xx / 10, 0],
    //   transition: { duration: 0.01 },
    // });

    setPoints(points + pointsToAdd);
    setClicks([
      ...clicks,
      { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
  };

  // let rotX = useMotionTemplate`${-y.get() / 10}deg`;
  // let rotY = useMotionTemplate`${x.get() / 10}deg`;
  // console.log("rotx", rotX);
  // console.log("roty", rotY);

  const rotateX = useMotionTemplate`${-y.get() / 10}deg`;
  const rotateY = useMotionTemplate`${x.get() / 10}deg`;

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
    console.log("end");
    // console.log(clicks);
  };

  return (
    <div className="px-4 mt-4 flex justify-center select-none z-10 isolate">
      <motion.div
        className="size-[300px] aspect-square relative p-4 [perspective:2000px] rounded-full bg-gradient-to-b from-[#575def] to-[#202731] "
        // onClick={handleCardClick}
        onClick={handleCardClick}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        // animate={controls}
      >
        {/* <AnimatePresence> */}
        {clicks.map((item, index) => {
          return (
            <div
              key={index}
              className=" text-5xl font-bold opacity-0 text-white animate-float pointer-events-none absolute  "
              style={{
                top: `${item.y - 32}px`,
                left: `${item.x - 32}px`,
              }}
              // initial={{
              //   top: `${item.y - 42}px`,
              //   left: `${item.x - 42}px`,
              //   opacity: 1,
              // }}
              // animate={{
              //   y: `${item.y + 42}px`,
              //   opacity: 0,
              // }}
              // exit={{
              //   opacity: 0,
              // }}
              onAnimationEnd={() => handleAnimationEnd(item.id)}
            >
              +{pointsToAdd}
            </div>
          );
        })}
        {/* </AnimatePresence> */}

        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgb(73_96_178_/_100%),#282e3e)] [box-shadow:_0_0_15px_#304669] ">
          <img
            src="https://hamsterkombatgame.io/images/hamsters/9.avif"
            alt="main character"
            className=" w-full h-full pointer-events-none "
          />
        </div>
      </motion.div>
    </div>
  );
}
