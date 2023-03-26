import React, { useContext } from "react";
import ApeContext from "@/context/ApeContext";
const Task = ({ desc, points, tick }) => {
  
  const { nftid } = useContext(ApeContext);

  return (
    <div className="white-glassmorphism rounded-md text-white border border-gray-800">
      <div className="flex flex-row flex-nowrap">
        <p className="min-w-[400px] text-left px-[20px] py-[8px] border-r border-r-gray-700">
          {desc}
        </p>
        <p className="min-w-[100px] px-[20px] py-[8px] text-center border-r border-r-gray-700">
          {points}
        </p>
        <p className="min-w-[50px] px-[20px] py-[8px] text-center ">
          {tick ? "✅" : "❌"}
        </p>
      </div>
    </div>
  );
};

export default Task;
