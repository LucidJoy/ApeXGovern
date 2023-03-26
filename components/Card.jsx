import React from "react";
import Image from "next/image";

import { img1 } from "@/assets";

const Card = () => {
  return (
    <div>
      <div className='max-w-sm blue-glassmorphism border border-gray-800 bg-opacity-0 rounded-lg shadow'>
        <a href='#'>
          <Image className='rounded-t-lg' src={img1} alt='' />
        </a>
        <div className='p-5 flex flex-col gap-[5px]'>
          <p className='font-normal text-gray-400'>Name:</p>
          <p className='font-normal text-gray-400'>Rank:</p>
          <p className='font-normal text-gray-400'>Voting Weight:</p>
          <p className='font-normal text-gray-400'>Total Achievements:</p>
          <p className='font-normal text-gray-400'>Achievements:</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
