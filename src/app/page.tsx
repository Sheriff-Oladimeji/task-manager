
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import React from 'react'

const page = () => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-5  grid-rows-6 h-screen  bg-[#F4F7FD] dark:bg-background">
      <Navigation />
      <Header />
      <Main />
      <Sidebar/>
    </div>
  );
}

export default page