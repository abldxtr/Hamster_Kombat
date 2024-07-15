"use client";

import React, {
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ActiveMenueContextType = {
  activeN: number;
  setActiveN: Dispatch<SetStateAction<number>>;
  pointsToAdd: number;
  setpointsToAdd: Dispatch<SetStateAction<number>>;
};

const ActiveMenueContext = React.createContext<
  ActiveMenueContextType | undefined
>(undefined);

export function ActiveMenueProvider({ children }: { children: ReactNode }) {
  const [activeN, setActiveN] = useState<number>(1);
  const [pointsToAdd, setpointsToAdd] = useState<number>(15);

  return (
    <ActiveMenueContext.Provider
      value={{ activeN, setActiveN, pointsToAdd, setpointsToAdd }}
    >
      {children}
    </ActiveMenueContext.Provider>
  );
}

export function useActiveMenue() {
  const ActiveNumber = React.useContext(ActiveMenueContext);
  if (ActiveNumber === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return ActiveNumber;
}
