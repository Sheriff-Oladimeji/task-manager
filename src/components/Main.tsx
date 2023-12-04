import React from 'react'
import { Calendar } from './ui/calendar';

const Main = () => {
  return (
    <main
      className="sm:col-span-2 md:col-span-5 row-span-5 overflow-y-auto "
      id="dashboard"
    >
      <div className="w-[90%] mx-auto py-8">
        <div className='bg'>
          <Calendar />
        </div>
      </div>
    </main>
  );
}

export default Main