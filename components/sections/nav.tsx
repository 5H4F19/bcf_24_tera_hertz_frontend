"use client";

import { cn } from "@/app/lib/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { geist } from "@/app/lib/font";
import { useAuthentication } from "@/hooks/useAuthentication";
import { AvatarIcon } from "@radix-ui/react-icons";
import { CircleUser } from "lucide-react";

const Nav = () => {
  const isAuth = useAuthentication()
  return (
    <nav className="fixed top-3 left-0 right-0 mx-auto backdrop-blur-md container p-3 rounded-full overflow-hidden z-[1000] flex items-center justify-between w-[85%]">
      <div className="flex items-center gap-1">
        <Link href={'/'}>
          <Image className="h-6 w-6" width={100} height={100} src="/logo.png" alt="" />
        </Link>
        <p className={cn(geist.className, "text-xl font-bold")}>fleet</p>
      </div>

      <div className="flex items-center justify-center gap-3">
        {isAuth ? (<Link href={'/dashboard'}>
          <CircleUser size={30} />
        </Link>) : (
          <Link href={'/login'}>
            <Button onClick={() => { }} className="flex border group gap-x-2">
              Log in
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
