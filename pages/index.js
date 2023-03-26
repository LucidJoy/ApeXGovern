import { useContext, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
const { Revise } = require("revise-sdk");
import { Background, Navbar } from "@/components";
import { apecoin_round, apeicon } from "@/assets";
import { useContext, useState } from "react";
import { key, collectionId } from "@/reviseconfig";
import ApeContext from "@/context/ApeContext";

const revise = new Revise({
  auth: key,
});
export default function Home() {
  const { inputFields, setInputFields } = useContext(ApeContext);

  const handleNameChange = (event) => {
    setInputFields({
      ...inputFields,
      name: event.target.value,
    });
  };

  const handleUsernameChange = (event) => {
    setInputFields({
      ...inputFields,
      username: event.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(inputFields);
  // }, [inputFields]);
  const [namein, setNamein] = useState("");
  const { connectWallet, walletAddress } = useContext(ApeContext);

  return (
    <>
      <Head>
        <title>Ape X Govern</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="absolute z-30 flex flex-row overflow-x-hidden mt-[65px] nav-height-screen w-full items-center px-[60px] justify-between">
        <div className="flex flex-col items-center">
          <p className="text-white mb-[30px] text-[30px] uppercase font-bold">
            ENTER
          </p>

          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputFields.name}
              className="border text-sm rounded-lg block min-w-[250px] p-2.5 bg-gray-700 bg-opacity-0 dark:border-gray-600 placeholder-gray-500 text-white focus:outline-none"
              placeholder="John"
              required
              onChange={(e) => handleNameChange(e)}
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[15px]"
            >
              Username
            </label>

            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input
                type="text"
                id="username"
                class="border text-sm rounded-tr-lg rounded-br-lg block min-w-[218px] p-2.5 bg-gray-700 bg-opacity-0 dark:border-gray-600 placeholder-gray-500 text-white focus:outline-none"
                placeholder="lucidjoy"
                onChange={(e) => {
                  setNamein(e.target.value);
                }}
              />
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none shadow-lg dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-[30px] w-[120px]"
            onClick={async () => {
              connectWallet();

              let named = namein;
              let tokenid = "1";
              let descriptiond =
                "this is a dnft that shows your governance power in the dao";
              let image =
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634571672-air-zoom-tempo-next-flyknit-mens-road-running-shoes-HMLvjm.png";

              let attributes = [
                { name: named },
                { rank: "soldier" },
                { "vote weight": 1 },
                { points: 10 },
                { "no. of achievements": 1 },
                { achievements: "welcome" },
              ];

              const res = await revise.addNFT(
                {
                  name: named,
                  tokenId: tokenid,
                  description: descriptiond,
                  image: image,
                },
                attributes,
                collectionId
              );
              console.log("done", res);
              let nftid = res?.id;
            }}
          >
            Submit
          </button>
        </div>

        <div className="">
          <Image src={apeicon} width={300} />
        </div>
      </div>

      <Background />
    </>
  );
}
