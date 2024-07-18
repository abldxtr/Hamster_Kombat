import HeaderBody from "./body.header";
import Counter from "./counter";
import ElementGame from "./gamelement";
import Watcher from "./powerwatcher";

export default function MainBody() {
  return (
    <div className=" flex-grow mt-[20px]  pb-[70px] bg-[#f3ba2f] rounded-t-[48px] relative [box-shadow:0_-26px_20px_#f3ba2f4d] overflow-auto isolate   ">
      <div className=" absolute top-[2px] inset-x-0 bottom-0 bg-[#1d2025] rounded-t-[46px] z-0  " />

      <HeaderBody />
      <Counter />
      <div className=" mt-[20px] mb-[70px]  ">
        <ElementGame />
        <Watcher />
      </div>
    </div>
  );
}
