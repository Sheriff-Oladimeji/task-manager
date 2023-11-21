import React from "react";
import { Card } from "./ui/card";
import { ModeToggle } from "./ui/toggle";


const Header = () => {
  return (
    <Card className="sm:col-span-2 md:col-span-4 sm:row-span-1 p-4 flex flex-row items-center justify-between">
      <h1 className="font-bold text-xl p-4 cursor-pointer">Hello, Sheriff</h1>

      <ModeToggle />
    </Card>
  );
};

export default Header;
