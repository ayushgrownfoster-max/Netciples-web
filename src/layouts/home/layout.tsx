'use client';

import React from 'react';

import Navbar from './navbar';
import Footer from './footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='tw:min-h-screen tw:flex tw:flex-col tw:justify-between'>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className='tw:text-[#000000]'>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
