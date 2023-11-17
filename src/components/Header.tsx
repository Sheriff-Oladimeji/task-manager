import React from "react";
import { ModeToggle } from "./ui/toggle";
import { Card } from "./ui/card";
const Header = () => {
  return (
    <Card className="self-start col-span-2 flex items-center justify-between p-4 mt-8">
      <h3 className="font-semibold">Hello,Sheriff!</h3>
      <ModeToggle />
    </Card>
  );
};

export default Header;
