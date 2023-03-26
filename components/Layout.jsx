import React from "react";
import { Navbar, Background } from "@/components";

export default function Layout({ children }) {
  return (
    <div className='relative '>
      <Navbar />

      <main className='absolute z-30 mt-[65px] w-[100vw]'>{children}</main>
      <Background />
    </div>
  );
}
