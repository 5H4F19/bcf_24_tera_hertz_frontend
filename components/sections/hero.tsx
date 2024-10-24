'use client'

import React from "react";

import { cn } from "@/app/lib/cn";
import { geist, geistMono } from "@/app/lib/font";
import { DotIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Form from "./form";

const Hero = () => {
  return (
    <div id="/" className="relative mt-5  container w-full">
      <div className="flex flex-col justfy-center space-y-6 relative">
        <div className="relative h-[80vh]">
          <Image className="rounded-3xl h-[80vh]" width={1920} height={1280} src="/bg.png" alt="" />
          <div className="absolute space-y-6 top-[20%] left-[5%]">
            <p
              className={cn(
                geist.className,
                "text-left text-black text-7xl font-bold",
              )}
            >
              Air, sleep, <br /> dream
            </p>
            <p
              className={cn(
                geist.className,
                "text-left text-black text-2xl font-regular",
              )}
            >
              Find and book a great experience
            </p>
            <Button className="text-xl h-12 px-7">Start your search</Button>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function GradientButton() {
  return (
    <button className="w-fit mx-auto relative inline-flex items-center px-4 py-2 rounded-full text-white bg-transparent text-sm">
      <span className="absolute inset-0 border-transparent rounded-full bg-gradient-to-r from-[#A9D7DB] via-[#3E42BB] to-[#C5599F] p-px">
        <span className="block h-full w-full rounded-full bg-background"></span>
      </span>
      <span
        className={cn(
          geistMono.className,
          "flex items-center text-xs uppercase relative",
        )}
      >
        OAuth <DotIcon /> Free Api <DotIcon /> Secured
      </span>
    </button>
  );
}
