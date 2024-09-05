import React from "react";
import "./header.css";
import { IoWalletOutline } from "react-icons/io5";
import Image from "next/image";

interface ComponentProps {
  function1: () => void;
}

const Header = ({ function1 }: ComponentProps) => {
  return (
    <div className="w-full shadow-md bg-[#121D40] h-[70px] flex flex-row justify-between items-center px-7 py-3">
      <div className="flex items-center">
        {/* Adjust the width and height as needed */}
        <Image
          src="/wayofdaologo.png"
          alt="WayofDaoLogo"
          width={200} // Adjust the width
          height={150} // Adjust the height
           // Ensure the image maintains its aspect ratio
        />
      </div>

      <div className="flex flex-row space-x-3 ">
        <button
          className="flex flex-row space-x-2 items-center justify-center rounded-lg  px-2 w-[170px] bg-[#883388] hover:opacity-90 hover:-translate-y-1 h-[40px] shadow-md transition transform duration-200 ease-in-out"
          onClick={function1}
        >
          <span className="text-white">
            <IoWalletOutline />
          </span>
          <p className="font-bold text-white tracking-wide text-sm">
            Connect Wallet
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
