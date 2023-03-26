import React, { useEffect, useState } from "react";
import Image from "next/image";

import { img1 } from "@/assets";
const { Revise } = require("revise-sdk");
const { key, collectionId } = require("@/reviseconfig.js");
const revise = new Revise({
  auth: key,
});

const Card = (nftid) => {
  const [info, setInfo] = useState({});
  const [rank, setRank] = useState("");
  const [points, setPoints] = useState(0);
  const [votwe, setVotwe] = useState(0);
  const [noofach, setNoofach] = useState(0);
  const [img, setImg] = useState("");
  useEffect(() => {
    const getNFT = async () => {
      const res = await revise.fetchNFT("ad3dfd4d-7161-4555-94ca-d6a5d5177874");
      let nft = await revise.nft(res);
      console.log(nft);
      setRank(Object.values(nft?.nft?.metaData[1])[0]);
      setPoints(Object.values(nft?.nft?.metaData[2])[0]);
      setVotwe(Object.values(nft?.nft?.metaData[3])[0]);
      setNoofach(Object.values(nft?.nft?.metaData[4])[0]);
      console.log(rank);
      setInfo(nft?.nft);
    };
    getNFT();
  }, []);

  return (
    <div>
      <div className="max-w-sm blue-glassmorphism border border-gray-800 bg-opacity-0 rounded-lg shadow">
        <a href="#">
          <Image className="rounded-t-lg" src={img1} />
        </a>
        <div className="p-5 flex flex-col gap-[5px]">
          <p className="font-normal text-gray-400">Name:{info?.name}</p>
          {console.log(rank)}
          <p className="font-normal text-gray-400">Rank:{rank}</p>
          <p className="font-normal text-gray-400">Voting Weight: {points}</p>
          <p className="font-normal text-gray-400">
            Total Achievemnts:{noofach}
          </p>
          {/* <p className="font-normal text-gray-400">Array of Achievemnts:</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
