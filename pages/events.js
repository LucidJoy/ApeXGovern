import React, { useContext } from "react";
import Image from "next/image";

import { Navbar, Background, Task, EventsCard, Modal } from "@/components";
import { eventspic, img1 } from "@/assets";
import ApeContext from "@/context/ApeContext";

const Events = () => {
  const { isModal, setIsModal, nftid } = useContext(ApeContext);

  return (
    <>
      <Navbar />

      <div className='absolute z-30 flex flex-col overflow-x-hidden mt-[65px] nav-height-screen w-full items-center px-[60px] text-white justify-center'>
        {isModal && (
          <div className='w-[700px] h-[500px] absolute z-20'>
            <Modal />
          </div>
        )}

        {isModal === false && (
          <>
            <p className='uppercase text-blue-500 text-[25px] font-medium mb-[10px] drop-shadow-lg shadow-black'>
              EVENTS
            </p>

            <div className='flex flex-col gap-[8px]'>
              <EventsCard
                image={eventspic}
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          praesentium veniam perspiciatis officia modi, velit placeat. (30
          words)'
              />
              <EventsCard
                image={eventspic}
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          praesentium veniam perspiciatis officia modi, velit placeat. (30
          words)'
              />
              <EventsCard
                image={eventspic}
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          praesentium veniam perspiciatis officia modi, velit placeat. (30
          words)'
              />
            </div>
          </>
        )}
      </div>

      <Background />
    </>
  );
};

export default Events;
