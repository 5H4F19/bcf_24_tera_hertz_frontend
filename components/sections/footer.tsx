import { cn } from "@/app/lib/cn";
import { fregeist, geist, syne } from "@/app/lib/font";
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  DotIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container space-y-12 p-16 w-full">
      <div className="h-0.5 bg-gray-400/10"></div>
      <div className="h-10"></div>
      <div className="w-full flex lg:flex-row flex-col items-start justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          <div className="text-white text-2xl font-light">Logo</div>
          <Sections />
          <Sections />
        </div>
      </div>
      <div className="w-full lg:flex items-center justify-between">
        <p className="text-gray-400 uppercase text-[10px] lg:flex items-center">
          © Multicone 2024. All rights reserved <DotIcon className="inline" />{" "}
          <a href="/" className="underline">
            Privacy Policy
          </a>{" "}
        </p>
        <Link
          href="/"
          className="text-white my-5 lg:my-0 flex hover:items-start duration-75 items-end gap-x-2"
        >
          Back to the top
          <ArrowUpIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

const Sections = () => {
  return (
    <div className="text-gray-100 flex-shrink-0 space-y-3">
      <p className={cn("text-white text-[10px] font-light uppercase")}>
        Services
      </p>
      <Link href="/" className="flex text-[14px] items-center gap-x-3">
        Hero
      </Link>
      <Link href="/" className="flex text-[14px] items-center gap-x-3">
        Services
      </Link>
      <Link href="/" className="flex text-[14px] items-center gap-x-3">
        Testimonials
      </Link>
    </div>
  );
};
