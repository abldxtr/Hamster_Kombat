import HeaderBody from "./body.header";
import Counter from "./counter";
import ElementGame from "./gamelement";
import Watcher from "./powerwatcher";

export default function MainBody() {
  return (
    <div className="min-h-[calc(100vh+77px)] flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative [box-shadow:0_-26px_20px_#f3ba2f4d] overflow-hidden isolate   ">
      <div className=" absolute top-[2px] inset-x-0 bottom-0 bg-[#1d2025] rounded-t-[46px] z-0  " />

      <HeaderBody />
      <Counter />
      <ElementGame />
      <Watcher />
    </div>
  );
}
