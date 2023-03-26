import React from "react";

const Leaderboard = ({ desc, points }) => {
  return (
    <div className='bg-[#000000] bg-opacity-50 backdrop-blur-lg rounded-md text-white border border-gray-800'>
      <div className='flex flex-row flex-nowrap'>
        <p className='min-w-[400px] text-left px-[20px] py-[8px] border-r border-r-gray-700'>
          {desc}
        </p>
        <p className='min-w-[100px] px-[20px] py-[8px] text-center'>{points}</p>
      </div>
    </div>
  );
};

export default Leaderboard;
