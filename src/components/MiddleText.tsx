import rightIcon from "../assets/right-arrow-svgrepo-com.svg";
import openBook from "../assets/open-book-svgrepo-com.svg";
export const MiddleText = () => {
  return (
    <div className="pt-20 flex flex-col items-center justify-center">
      <h1 className="text-7xl font-semibold tracking-tighter">
        Build Beautiful UI Faster
      </h1>
      <span className="flex flex-col justify-center items-center pt-3 text-gray-400 leading-5">
        <p>Launch sleek, responsive UIs in minutes using ready‑to‑use</p>
        <p>components built for speed, simplicity, and scalability.</p>
      </span>


      <div className="flex gap-2 pt-14">
        <span className="bg-white text-black p-2 pr-6 pl-6 rounded-lg">
          Browse Components
        </span>
        <span className="flex items-center gap-2 p-2 px-6 text-white">
          <img src={openBook} className="h-5 w-5 invert brightness-0" alt="" />
          Documentation
          <img src={rightIcon} className="h-5 w-5 invert brightness-0" alt="" />
        </span>
      </div>
    </div>
  );
};
