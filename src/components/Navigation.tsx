import React from "react";
import { Card } from "./ui/card";
import { MdDashboard } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { FaRegCalendarAlt, FaPowerOff } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

import Link from "next/link";
interface NavLink {
  id: number;
  title: string;
  link: string;
  icon: any;
}

const links: NavLink[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "#dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    id: 2,
    title: "Tasks",
    link: "#tasks",
    icon: <BsListTask size={20} />,
  },
  {
    id: 3,
    title: "Calendar",
    link: "#calendar",
    icon: <FaRegCalendarAlt size={20} />,
  },
  {
    id: 4,
    title: "Settings",
    link: "/settings",
    icon: <FiSettings size={20} />,
  },
  {
    id: 5,
    title: "Logout", // Changed 'logout' to 'Logout' for consistency
    link: "/logout",
    icon: <FaPowerOff size={20} />,
  },
];

const Navigation = () => {
  return (
    <Card className="hidden sm:flex flex-col gap-6 h-full row-span-6 px-6 justify-between py-10">
      <div>
        <h1 className="font-bold text-3xl mb-8">
          Task<span className="text-blue-700 dark:text-blue-500">mate</span>
        </h1>
        <div className="flex flex-col gap-4">
          {links.map(
            (link) =>
              link.id < 4 && (
                <Link
                  href={link.link}
                  key={link.id}
                  className="flex gap-2 items-center font-medium text-lg hover:bg-primary light:hover:text-primary-foreground hover:font-bold rounded-md px-4 py-2"
                >
                  {link.icon}
                  {link.title}
                </Link>
              )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {links.map(
          (link) =>
            link.id > 3 && (
              <Link
                href={link.link}
                key={link.id}
                className="flex gap-2 items-center font-medium text-lg hover:bg-primary hover:text-white  hover:font-bold rounded-md px-4 py-2"
              >
                {link.icon}
                {link.title}
              </Link>
            )
        )}
      </div>
    </Card>
  );
};

export default Navigation;
