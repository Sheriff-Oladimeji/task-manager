import React from 'react'
import { Card } from './ui/card'

const Header = () => {
    return (
      <Card className="sm:col-span-2 md:col-span-4 sm:row-span-1  h-full p-4">
        <h1 className='font-bold text-xl p-4 cursor-pointer'>Hello, Sheriff</h1>
      </Card>
    );
}

export default Header