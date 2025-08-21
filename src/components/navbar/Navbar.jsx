'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // On mount, check localStorage
    const isSignedIn = localStorage.getItem('signedIn') === 'true';
    setSignedIn(isSignedIn);

    // Listen to storage changes (e.g., from other tabs or sign-in page)
    const handleStorageChange = () => {
      setSignedIn(localStorage.getItem('signedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { signedIn, setSignedIn };
}

export default function Navbar() {
  const { signedIn, setSignedIn } = useAuth();
  const router = useRouter();

  function handleSignOut() {
    localStorage.removeItem('signedIn');
    setSignedIn(false);
    router.push('/signin');
  }

  return (
    <div className="h-16 flex bg-white items-center px-4 shadow justify-between">
      <div className="flex">
        <div className="ml-16 font-bold text-xl text-sky-800 antialiased">
          <Link href="/" className="hover:cursor-pointer">
            Supraja Technologies
          </Link>
        </div>
        <div className="font-bold ml-10 text-gray-700">
          <Link href="/" className="hover:cursor-pointer">
            Home
          </Link>
        </div>

        <>
          <div className="font-bold ml-10 text-gray-700">
            <Link href="/docs" className="hover:cursor-pointer">
              Docs
            </Link>
          </div>

          <div className="font-bold ml-10 text-gray-700">
            <Link href="/profile" className="hover:cursor-pointer">
              Profile
            </Link>
          </div>

          <div className="font-bold ml-10 text-gray-700">
            <Link href="/view-logs" className="hover:cursor-pointer">
              View Logs
            </Link>
          </div>
        </>
      </div>

      <div className="mr-16 text-blue-600 font-medium">
        {signedIn ? (
          <button
            onClick={handleSignOut}
            className="hover:underline cursor-pointer bg-transparent border-none text-blue-600"
          >
            Sign Out
          </button>
        ) : (
          <Link href="/signin" className="hover:cursor-pointer">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
