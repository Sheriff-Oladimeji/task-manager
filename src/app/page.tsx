import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Summary from '@/components/Summary';
import Tasks from '@/components/Tasks';
import Scheduler from '@/components/Scheduler';
import Timer from '@/components/Timer';
import React from 'react'

const page = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-rows-5 gap-10 bg-background">
      <Sidebar />
      <Header />
      <Timer />
      <Summary />
      <Tasks />
      <Scheduler/>
    </div>
  );
}

export default page