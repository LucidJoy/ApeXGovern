import React, { useContext } from "react";
import Image from "next/image";

import { eventspic } from "@/assets";
import { Leaderboard } from ".";
import ApeContext from "@/context/ApeContext";

const Modal = () => {
  const { isModal, setIsModal } = useContext(ApeContext);

  return (
    <div className='bg-[#656565] bg-opacity-10 backdrop-blur-[100px] rounded-[10px] text-white border border-gray-600 w-full h-full py-[20px] flex flex-col items-center '>
      <button className='absolute right-0 pr-[20px]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='#939393'
          className='w-7 h-7 hover:fill-red-500 transition-all duration-150 hover:scale-125'
          onClick={() => setIsModal(false)}
        >
          <path
            fillRule='evenodd'
            d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <Image src={eventspic} width={150} height={150} className='rounded-lg' />

      <p className='uppercase text-blue-500 text-[25px] font-semibold drop-shadow-lg shadow-black mt-[15px]'>
        Leaderboard
      </p>

      {/* 1. name       points */}
      <div className='flex flex-col gap-[8px] mt-[15px]'>
        <Leaderboard desc='1. Lightning McQueen' points={150} />
        <Leaderboard desc='2. Woody' points={150} />
        <Leaderboard desc='3. Elsa' points={150} />
        <Leaderboard desc='4. Winnie' points={150} />
        <Leaderboard desc='5. Shin Chan' points={150} />
      </div>
    </div>
  );
};

export default Modal;
