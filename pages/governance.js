import React, { useContext, useEffect } from "react";
import Image from "next/image";

import { Background, Card, Navbar, Task } from "@/components";
import { eventspic } from "@/assets";
import ApeContext from "@/context/ApeContext";

const governance = () => {
  const { winEvent, setWinEvent } = useContext(ApeContext);

  useEffect(() => {
    console.log(winEvent);
  }, [winEvent]);

  return (
    <>
      <Navbar />

      <div className='absolute z-30 flex flex-row overflow-x-hidden mt-[65px] nav-height-screen w-full items-center px-[60px] justify-between'>
        <div className=' flex flex-col gap-[10px]'>
          <Card />

          <div className='flex flex-col max-w-sm blue-glassmorphism border border-gray-800 bg-opacity-0 rounded-lg shadow p-5'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-white text-[17px] '>Events Won &rarr;</p>

              <button
                type='button'
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-[14px] uppercase px-10 py-1 text-center w-fit '
              >
                Swap
              </button>
            </div>

            <div className='flex items-center justify-between mt-[20px] transition-all duration-150 ease-in-out'>
              <Image
                src={eventspic}
                className={`object-fill rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => setWinEvent("1")}
              />
              <Image
                src={eventspic}
                className={`object-contain rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => setWinEvent("2")}
              />
              <Image
                src={eventspic}
                className={`object-contain rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => setWinEvent("3")}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center blue-glassmorphism p-[20px] rounded-lg border border-gray-700 h-[500px]'>
          <p className='uppercase text-blue-500 text-[22px] font-semibold mb-[10px]'>
            Tasks
          </p>

          <div className='flex flex-col gap-[10px]'>
            <Task desc='Staked 50000 ape coin' points={250} tick={true} />
            <Task
              desc='Participated in 10% proposals'
              points={500}
              tick={true}
            />
            <Task
              desc='Followed our social handles'
              points={150}
              tick={false}
            />
          </div>
        </div>
      </div>

      <Background />
    </>
  );
};

export default governance;
