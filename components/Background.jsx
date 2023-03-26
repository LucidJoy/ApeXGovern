import React from "react";
import Image from "next/image";

import { apecoin_round } from "@/assets";

const Background = () => {
  return (
    <div>
      <div className='absolute w-full h-full z-10 white-glassmorphism' />

      <div className=' w-[100vw] h-[100vh]'>
        <Image src={apecoin_round} className='absolute h-full w-full ' />
      </div>
    </div>
  );
};

export default Background;
