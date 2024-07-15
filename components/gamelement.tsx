"use client";

import { useActiveMenue } from "@/context/Activemenue";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useTransition,
} from "react";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";

export default function ElementGame() {
  const { pointsToAdd, points, setPoints } = useActiveMenue();
  const [idF, setIdf] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [levelIndex, setLevelIndex] = useState(6);
  const profitPerHour = 126420;

  const [clicks, setClicks] = useState<{ id: string; x: number; y: number }[]>(
    [],
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let x = useMotionValue(0);
  let y = useMotionValue(0);
  const controls = useAnimation();

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const xx = e.clientX - rect.left - rect.width / 2;
    const yy = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `perspective(1000px) rotateX(${-yy / 10}deg) rotateY(${xx / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);

    setClicks([
      ...clicks,
      { id: uuidv4(), x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);

    console.log("num_create", clicks.length);
  };

  const handleAnimationEnd = (id: string) => {
    console.log(
      "end",

      clicks.length,
    );
    setIdf((perv) => [...idF, id]);
    console.log("idf", idF);
    console.log("clicks", clicks);

    let filter_res = clicks.filter((click) => !idF.includes(click.id));

    setClicks(filter_res);

    setIdf((perv) => perv.filter((item) => item !== id));
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour, setPoints]);

  return (
    <div className="px-4 mt-4 flex justify-center select-none z-10 isolate">
      <motion.div
        className="size-[300px] aspect-square relative p-4 [perspective:2000px] rounded-full bg-gradient-to-b from-[#575def] to-[#202731] "
        // onClick={handleCardClick}
        onClick={handleCardClick}
      >
        {clicks.map((item, index) => {
          return (
            <Elem
              clicks={clicks}
              key={index}
              setClicks={setClicks}
              item={item}
            />
          );
        })}

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

export function Elem({
  item,
  clicks,
  setClicks,
}: {
  item: {
    id: string;
    x: number;
    y: number;
  };
  clicks: {
    id: string;
    x: number;
    y: number;
  }[];
  setClicks: Dispatch<
    SetStateAction<
      {
        id: string;
        x: number;
        y: number;
      }[]
    >
  >;
}) {
  const { pointsToAdd } = useActiveMenue();
  const [idF, setIdf] = useState<string[]>([]);

  const handleAnimationEnd = (id: string) => {
    console.log(
      "end",
      // clicks.map((item) => item.id === id),
      clicks.length,
    );
    setIdf((perv) => [...idF, id]);
    console.log("idf", idF);
    console.log("clicks", clicks);

    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <div
      // key={index}
      className=" text-5xl font-bold opacity-0 text-white pointer-events-none absolute  "
      style={{
        top: `${item.y - 28}px`,
        left: `${item.x - 32}px`,
        animation: `float 1s ease-out`,
      }}
      onAnimationEnd={() => handleAnimationEnd(item.id)}
    >
      +{pointsToAdd}
    </div>
  );
}
