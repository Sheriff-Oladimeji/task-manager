import React from 'react'
import { Card } from './ui/card'
import { ModeToggle } from './ui/toggle';

const Navigation = () => {
  return (
    <Card className="hidden sm:flex flex-col gap-4 h-full sm:row-span-6 px-4 justify-between">
      <h1 className="font-bold text-2xl">Taskio </h1>
      <ModeToggle />
    </Card>
  );
}

export default Navigation