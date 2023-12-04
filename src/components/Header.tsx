"use client"
import React from "react";
import { Card } from "./ui/card";
import { ModeToggle } from "./ui/toggle";
import { InputWithButton } from "./ui/search";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";


const Header = () => {
  const {user, isLoaded } = useUser()
  return (
    <Card className="sm:col-span-2 md:col-span-5  p-4 flex flex-row items-center justify-between">
      <h1 className="font-bold text-xl p-4 cursor-pointer">Hello, Sheriff</h1>
      <InputWithButton />
      <div className="flex items-center gap-6">
        <ModeToggle />
        <button className="">
          <IoMdNotificationsOutline size={30} />
        </button>
        {isLoaded && user && (
          <div className="flex items-center gap-4 bg-card ">
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Header;
