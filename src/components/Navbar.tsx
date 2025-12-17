import forgeLogo from '../assets/forge-logo.png'
import githubImg from "../assets/githubImg.png";
import twitterImg from "../assets/twitterImg.png";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-25 pt-10">
      <div className='flex items-center gap-1'>
        <img src={forgeLogo} className='h-9 w-9' alt="" />
        <h1 className="font-bold text-xl">Forge UI</h1>
      </div>
      <div className="flex items-center gap-2">
        <span>
          <img
            src={githubImg}
            className="h-9 w-9 rounded-4xl bg-white border border-black"
            alt=""
          />
        </span>
        <span>
          <img src={twitterImg} className="h-7 w-7 rounded-4xl" alt="" />
        </span>
      </div>
    </div>
  );
};
