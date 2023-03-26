import React, { useContext } from "react";
import Image from "next/image";

import { Navbar, Background, Task, EventsCard, Modal } from "@/components";
import { eventspic, social, staking, treasure} from "@/assets";
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
                image={social}
                desc='The user who reaches the maximum number of users off-chain (like via discord, twitter, instagram) and add them to BAYC DAO using referrals wins the event.This event is valid till 8th April, 2023'
              />
              <EventsCard
                image={staking}
                desc='More you stake, better is the chance for you to win the event. Put your money to work and earn interest just by staking them to any of the pools available. Help ApeCoin scale with own benefits. This event is valid till 30th April, 2023'
              />
              <EventsCard
                image={treasure}
                desc='Take part in the exciting event of tresure hunt where you solve interesting puzzles and problems related to ApeCoin and be eligible to win this event and exciting prizes. This event is valid till 15th April, 2023.'
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
