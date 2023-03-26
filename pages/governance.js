import React, { useContext, useEffect } from "react";
import Image from "next/image";
const { Revise } = require("revise-sdk");
const { key, collectionId } = require("@/reviseconfig.js");
const revise = new Revise({
  auth: key,
});

import { Background, Card, Navbar, Task } from "@/components";
import { eventspic, fluid1, fluid2, fluid3 } from "@/assets";
import ApeContext from "@/context/ApeContext";

const governance = () => {
  const { winEvent, setWinEvent, nftid } = useContext(ApeContext);

  useEffect(() => {
    console.log(winEvent);
  }, [winEvent]);

  async function update(points, nftidd, achievement) {
    const res = await revise.fetchNFT("ad3dfd4d-7161-4555-94ca-d6a5d5177874");
    let nft = await revise.nft(res);

    let rarities = [
      "soldier",
      "captain",
      "lieutenant",
      "major",
      "colonel",
      "general",
      "commander",
      "admiral",
    ];

    let images = [
      "https://ipfs.io/ipfs/QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV",
      "https://ipfs.io/ipfs/QmXEqPbvM4aq1SQSXN8DSuEcSo5SseYW1izYQbsGB8yn9x",
      "https://ipfs.io/ipfs/QmbcWzteFsAvdwiaZyC1YJVNsApDaPRmqkQDyrYAvP4u48",
      "https://ipfs.io/ipfs/QmbUzseZbeM3nU6SUTQm979q7FGCMNWEqDKSZvaNUTodDk",
      "https://ipfs.io/ipfs/QmSdGMvowFxFFHJr3EajE8RNsPpPyKd5mh4yNaZZegPYqn",
      "https://ipfs.io/ipfs/QmUfd5VdbUQ4XRNijC9oeSerKMoKpQ1aDq9GkT14HoTaNf",
      "https://ipfs.io/ipfs/QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4",
      "https://ipfs.io/ipfs/QmWCQ3yz8AoYxgE2u4MqVLdR58GiV55caE2EvAztAMgmuw",
    ];

    let voteweightage = [1, 5, 25, 125, 625, 3125, 15625, 78125];
    let pointsmilestone = [0, 50, 200, 500, 1000, 2000, 5000, 10000];

    let pointss = Object.values(nft?.nft?.metaData[3])[0] + points;
    console.log(pointss, "points");
    let flag = 0;

    for (let i = 0; i < 8; i++) {
      if (pointss < pointsmilestone[i]) {
        flag = i - 1;
        break;
      }
    }

    if (flag === 0) {
      flag = 7;
    }

    let ach = Object.values(nft?.nft?.metaData[5])[0];
    let noofach = parseInt(Object.values(nft?.nft?.metaData[4])[0]) + 1;
    let newach = ach.concat(",", achievement);

    nft.setImage(images[flag]);
    nft.setProperty("points", pointss);
    nft.setProperty("rank", rarities[flag]);
    nft.setProperty("vote weight", voteweightage[flag]);
    nft.setProperty("no. of achievements", noofach);
    nft.setProperty("achievements", newach);
    console.log(nft);
    nft.save();
  }

  return (
    <>
      <Navbar />

      <div className="absolute z-30 flex flex-row overflow-x-hidden mt-[65px] nav-height-screen w-full items-center px-[60px] justify-between">
        <div className=" flex flex-col gap-[10px]">
          <Card nftiddd={nftid} />

          <div className="flex flex-col max-w-sm blue-glassmorphism border border-gray-800 bg-opacity-0 rounded-lg shadow p-5">
            <div className="flex flex-row items-center justify-between">
              <p className="text-white text-[17px] ">Events Won &rarr;</p>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-[14px] uppercase px-10 py-1 text-center w-fit "
              >
                Swap
              </button>
            </div>

            <div className="flex items-center justify-between mt-[20px] transition-all duration-150 ease-in-out">
              <Image
                src={fluid1}
                className={`object-fill w-[100px] h-[100px] rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => {
                  setWinEvent("1");
                }}
              />
              <Image
                src={fluid2}
                className={`object-fill w-[100px] h-[100px] rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => setWinEvent("2")}
              />
              <Image
                src={fluid3}
                className={`object-fill w-[100px] h-[100px] rounded-[5px] cursor-pointer`}
                width={100}
                height={100}
                onClick={() => setWinEvent("3")}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center blue-glassmorphism p-[20px] rounded-lg border border-gray-700 h-[500px]">
          <p className="uppercase text-blue-500 text-[22px] font-semibold mb-[10px]">
            Tasks
          </p>

          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[10px]">
              <Task desc="Staked 50000 ape coin" points={250} tick={false} />

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-semibold rounded-lg text-[13px] px-5 py-1 text-center w-fit "
                onClick={() => {
                  update(250, nftid, "staked");
                }}
              >
                Fulfill
              </button>
            </div>

            <div className="flex flex-row gap-[10px]">
              <Task
                desc="Participated in 10% proposals"
                points={500}
                tick={true}
                id={2}
              />

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-semibold rounded-lg text-[13px] px-5 py-1 text-center w-fit "
                onClick={() => {
                  update(500, nftid, "proposals");
                }}
              >
                Fulfill
              </button>
            </div>

            <div className="flex flex-row gap-[10px]">
              <Task
                desc="Followed our social handles"
                points={150}
                tick={false}
                id={3}
              />

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none font-semibold rounded-lg text-[13px] px-5 py-1 text-center w-fit "
                onClick={() => {
                  update(150, nftid, "social");
                }}
              >
                Fulfill
              </button>
            </div>
          </div>
        </div>
      </div>

      <Background />
    </>
  );
};

export default governance;
