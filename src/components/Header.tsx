import React from 'react'
import { ModeToggle } from "./ui/toggle";
const Header = () => {
  return (
    <nav className="self-start col-span-2">
     <ModeToggle/>
    </nav>
  );
}

export default Header