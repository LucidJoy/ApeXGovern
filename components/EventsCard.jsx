import React, { useContext } from "react";
import Image from "next/image";

import ApeContext from "@/context/ApeContext";

const EventsCard = ({ image, desc }) => {
  const { isModal, setIsModal } = useContext(ApeContext);

  return (
    <div
      className='white-glassmorphism rounded-md text-white border border-gray-800 cursor-pointer'
      onClick={() => setIsModal(true)}
    >
      <div className='flex flex-row flex-nowrap'>
        <div className='w-[120px] h-[120px] p-[10px] flex items-center justify-center border-r border-r-gray-700'>
          <Image
            src={image}
            className='object-contain rounded-[5px]'
            width={120}
            height={120}
          />
        </div>

        <p className='w-[400px] p-[10px] flex items-center text-sm justify-center'>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
