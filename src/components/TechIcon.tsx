import reactLogo from "../assets/reactIcon.png";
import shadcnLogo from "../assets/shadCnIcon.png";
import motionLogo from "../assets/motionIcon.png";
import tailwindLogo from "../assets/tailwindIcon.png";
import nextLogo from "../assets/nextIcon.png";

export const TechIcon = () => {
  return (
    <div className="flex gap-6 text-sm text-gray-200 mt-21">
      <span className="flex flex-col items-center justify-center">
        <img src={nextLogo} className="h-11 w-11" alt="" />
        Next.js
      </span>

      <span className="flex flex-col items-center justify-center">
        <img src={tailwindLogo} className="h-10 w-10" alt="" />
        TailwindCSS
      </span>

      <span className="flex flex-col items-center justify-center">
        <img src={motionLogo} className="h-10 w-10" alt="" />
        Motion
      </span>

      <span className="flex flex-col items-center justify-center">
        <img src={shadcnLogo} className="h-10 w-10" alt="" />
        shadcn/ui
      </span>

      <span className="flex flex-col items-center justify-center">
        <img src={reactLogo} className="h-10 w-10" alt="" />
        React
      </span>
    </div>
  );
};
