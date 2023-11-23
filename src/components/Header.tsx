import React from "react";
import { Card } from "./ui/card";
import { ModeToggle } from "./ui/toggle";
import { InputWithButton } from "./ui/search";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from "next/image";


const Header = () => {
  return (
    <Card className="sm:col-span-2 md:col-span-5  p-4 flex flex-row items-center justify-between">
      <h1 className="font-bold text-xl p-4 cursor-pointer">Hello, Sheriff</h1>
      <InputWithButton />
      <div className="flex items-center gap-6">
        <ModeToggle />
        <button className="">
          <IoMdNotificationsOutline size={30} />
        </button>
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt=""
            width={30}
            height={30}
            className="w-10 h-10 object-cover rounded-full"
          />
          <h3>Sheriff O</h3>
        </div>
      </div>
    </Card>
  );
};

export default Header;
