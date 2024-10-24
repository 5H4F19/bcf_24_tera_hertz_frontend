"use client";

import { cn } from "@/app/lib/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { geist } from "@/app/lib/font";

const Nav = () => {
  return (
    <nav className="fixed top-3 left-0 right-0 mx-auto backdrop-blur-md container p-3 rounded-full overflow-hidden z-[1000] flex items-center justify-between w-full">
      <div>Logo</div>
      <div
        className={cn(
          geist.className,
          "absolute text-sm  lg:block left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer flex text-center text-white rounded-full font-regular space-x-5",
        )}
      >
        <Link href="/">Home</Link>
        <Link href="#services">Services</Link>
        <Link href="#showcases">Showcase</Link>
        <Link href="#aboutus">About us</Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button onClick={() => { }} className="flex group gap-x-2">
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
