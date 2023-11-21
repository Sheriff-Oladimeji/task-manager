
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 relative">
      <div className="flex absolute inset-y-0 left-2 items-center pl-3 pointer-events-none">
        <IoSearchOutline size={20} />
      </div>
      <Input type="search" placeholder="Search" className="w-full px-10 active:focus:focus-within:outline-none" />
    </div>
  );
}
