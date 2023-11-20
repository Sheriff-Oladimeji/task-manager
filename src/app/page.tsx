

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col gap-6 h-screen items-center justify-center">
      <h1 className="bg-card text-card-foreground font-bold text-3xl ">
        Taskio
      </h1>
      <Link  href="/dashboard">
        <Button>GO to Dashboard</Button>
      </Link>
    </div>
  );
}

export default page