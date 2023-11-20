import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Main from "@/components/Main";

import React from "react";

const Dashboard = () => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-5  grid-rows-6 bg-[#F4F7FD] dark:bg-background h-screen max-h-screen ">
      <Navigation />
      <Header />
      <Main />
    </div>
  );
};

export default Dashboard;
