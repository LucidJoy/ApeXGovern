import React from "react";

import { Background, Card, Navbar, Task } from "@/components";

const governance = () => {
  return (
    <>
      <Navbar />

      <div className='absolute z-30 flex flex-row overflow-x-hidden mt-[65px] nav-height-screen w-full items-center px-[60px] justify-between'>
        <Card />

        <div className='flex flex-col items-center blue-glassmorphism p-[20px] rounded-lg border border-gray-700'>
          <p className='uppercase text-blue-500 text-[20px] font-medium mb-[10px]'>
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
