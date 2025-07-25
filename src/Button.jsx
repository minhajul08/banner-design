
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Button = () => {
    return (
        <div className="mx-10 my-10">
            <button className="flex items-center bg-white border-2 px-4 sm:px-6 py-2 rounded-md">
  <span className="mr-2 sm:mr-3 font-semibold text-sm sm:text-base md:text-md text-[#175730] text-left">
    GET TERMS FOR YOUR PROJECT
  </span>

  <span className="w-8 h-9 flex items-center justify-center bg-green-800 
    transform -skew-x-12 ">
    <RiArrowRightDoubleLine className="text-white font-bold text-xl sm:text-2xl transform skew-x-12" />
  </span>
</button>

        </div>
    );
};

export default Button;
