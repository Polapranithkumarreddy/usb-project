
import React from 'react';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="h-16 flex bg-white items-center px-4 shadow justify-between">
        <div className='flex'>

<div className="ml-16 font-bold text-xl text-sky-800 antialiased">
    <Link href="/" className=" hover:cursor-pointer">
         Supraja Technologies
        </Link>
       
      </div>
      <div className='font-bold ml-10 text-gray-700'>
        <Link href="/" className=" hover:cursor-pointer">
        Home
        </Link>
        
      </div>
      <div className='font-bold ml-10 text-gray-700'>
        <Link href="/docs" className=" hover:cursor-pointer">
        Docs
        </Link>
        
      </div>
      <div className='font-bold ml-10 text-gray-700'>
        <Link href="/about" className=" hover:cursor-pointer">
        About Us
      </Link>
      </div>
      <div className='font-bold ml-10 text-gray-700'>
        <Link href="/download" className=" hover:cursor-pointer">
        Downloads
      </Link>
      </div>
        </div>
      
      <div className='mr-16 text-blue-600 font-medium'>
        <Link href="/signin" className=" hover:cursor-pointer">
      signin
      </Link>
       
      </div>
       
    </div>
  );
}

