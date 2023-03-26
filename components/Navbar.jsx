import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { apeicon } from "@/assets";
import ApeContext from "@/context/ApeContext";
import { shortenAddress } from "@/utils/shortenAddr";

const Navbar = () => {
  const { connectWallet, walletAddress, currentPage, setCurrentPage } =
    useContext(ApeContext);

  const [addrval, setAddrval] = useState("");

  const navigate = useRouter();

  useEffect(() => {
    setAddrval(walletAddress);
  }, [walletAddress]);

  return (
    <div>
      <nav className='bg-[#27335966] bg-opacity-10 px-2 sm:px-4 py-3 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <div
            className='flex flex-row items-center justify-center cursor-pointer'
            onClick={() => navigate.push("/")}
          >
            <Image
              src={apeicon}
              className='mr-3 sm:h-9 stroke-white'
              height={24}
              width={24}
              style={{ stroke: "#fff" }}
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl font-normal whitespace-nowrap dark:text-white'>
              Ape X Govern
            </span>
          </div>

          <div className='flex md:order-2'>
            <button
              type='button'
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center my-[5px] w-[160px] '
              onClick={() => connectWallet()}
            >
              {walletAddress ? (
                <span>{shortenAddress(addrval)}</span>
              ) : (
                "Connect"
              )}
            </button>
          </div>

          <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
            <ul className='flex p-4 mt-4 border border-gray-100 rounded-lg flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700'>
              <li>
                <button
                  className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px] ${
                    currentPage === "home" ? "text-blue-500" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setCurrentPage("home");
                    navigate.push("/");
                  }}
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px] ${
                    currentPage === "governance"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => {
                    setCurrentPage("governance");
                    navigate.push("/governance");
                  }}
                >
                  Governance
                </button>
              </li>
              <li>
                <button
                  className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-[16px] ${
                    currentPage === "events" ? "text-blue-500" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setCurrentPage("events");
                    navigate.push("/events");
                  }}
                >
                  Events
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
