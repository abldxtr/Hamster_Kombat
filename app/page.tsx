import Header from "@/components/header";
import MainBody from "@/components/mainContent";
import Menue from "@/components/menue";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full bg-black text-white font-bold isolate overflow-hidden">
      <div className="mx-auto h-[calc(100vh+56px)] w-full max-w-[568px] min-w-[450px] overflow-auto ">
        <Header />
        <MainBody />
      </div>
      <Menue />
    </main>
  );
}
