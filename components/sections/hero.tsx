'use client'

import React from "react";

import { cn } from "@/app/lib/cn";
import { geist, geistMono } from "@/app/lib/font";
import { DotIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div id="/" className="relative mt-5  container w-full">
      <div className="flex flex-col justfy-center space-y-6 relative">
        <GradientButton />
        <p
          className={cn(
            geistMono.className,
            "text-center text-white uppercase text-xs",
          )}
        >
          Anything is possible
        </p>
        <p
          className={cn(
            geist.className,
            "text-center leading-[100%] bg-gradient-to-br font-regular from-gray-50 to-gray-400 bg-clip-text text-transparent text-5xl",
          )}
        >
          Long term memory for your <br /> whole developer workstream
        </p>
        <p className="text-md md:text-lg max-w-3xl mx-auto text-center text-gray-400 font-light">
          Pieces is your AI companion that captures live context from browsers
          to IDEs and collaboration tools, manages snippets and supports
          multiple LLMs – all while processing data locally for maximum control.
        </p>
        <div className="h-0"></div>
        <Button
          onClick={() => { }}
          className="mx-auto w-fit text-xl h-12 px-12 flex group gap-x-2"
        >
          Get started
        </Button>
      </div>
      <div className="h-"></div>
    </div>
  );
};

export default Hero;

export function GradientButton() {
  return (
    <button className="w-fit mx-auto relative inline-flex items-center px-4 py-2 rounded-full text-white bg-transparent text-sm">
      <span className="absolute inset-0 border-transparent rounded-full bg-gradient-to-r from-teal-400 via-orange-400 to-purple-500 p-px">
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
