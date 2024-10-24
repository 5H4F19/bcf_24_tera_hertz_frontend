import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import { geist } from "@/app/lib/font";
import { cn } from "@/app/lib/cn";
import Link from "next/link";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="lg:hidden h-10 w-10 p-2.5 flex items-center justify-center cursor-pointer bg-white rounded-full"
      >
        <Image width={8} height={0} src="/menu.svg" alt="" />
      </SheetTrigger>
      <SheetContent className="container p-14 flex bg-black border-0 w-full">
        <div className="w-1/5">
          <Image src="/logo.svg" width={50} height={0} alt="" />
        </div>
        <div
          className={cn(
            geist.className,
            "w-2/3 flex flex-col space-y-10 text-6xl ",
          )}
        >
          <SheetClose asChild>
            <Link className="linear-gradient1" href="/">
              Home
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="linear-gradient1" href="#services">
              Services
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="linear-gradient1" href="#showcases">
              Showcase
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="linear-gradient1" href="#aboutus">
              About us
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link className="linear-gradient1" href="#reviews">
              Reviews
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
