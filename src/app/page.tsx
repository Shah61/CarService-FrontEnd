'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './login';  // Adjust this import based on your file structure

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    
  }, [router]);

  // Remove this return statement if you uncomment the router.push above
  return <LoginPage />;
}