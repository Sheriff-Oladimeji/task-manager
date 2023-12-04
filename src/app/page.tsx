

import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
  const { userId } = auth()
  if (userId) {
    redirect("/dashboard")
  }
  return (
    <div className="flex flex-col gap-6 h-screen items-center justify-center">
      <h1 className="bg-card text-card-foreground font-bold text-3xl ">
        Taskmate
      </h1>
      <Link href="/dashboard">
        <Button className='text-white font-bold'>GO to Dashboard</Button>
      </Link>
    </div>
  );
}

export default page