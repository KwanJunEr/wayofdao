'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CgProfile } from "react-icons/cg";

const LoggedInHeader = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="w-full shadow-lg bg-[#121D40] h-[80px] flex flex-row justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <Image
          src="/wayofdaologo.png"
          alt="WayofDaoLogo"
          width={180} // Adjust the width
          height={120} // Adjust the height
          className="object-contain"
        />
      </div>

      <div className="flex flex-row items-center space-x-18">
        <ul className='flex flex-row text-white font-semibold text-sm md:text-base space-x-[28px]'>
          {['Our DAOs', 'Contributions', 'Community', 'Finance', 'Rewards', 'IdeaHub'].map(item => (
            <li
              key={item}
              className={`cursor-pointer transition duration-300 ${activeItem === item ? 'text-[#883388] border-b-2 border-[#883388]' : 'hover:text-[#883388]'}`}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          className="flex flex-row items-center justify-center rounded-full  bg-[#883388] hover:bg-[#722d6d] transition duration-300 shadow-lg focus:outline-none ml-8"
        >
          <p className="font-bold text-white text-sm md:text-base">
           <CgProfile size={45}/>
          </p>
        </button>
      </div>
    </div>
  );
}

export default LoggedInHeader;
