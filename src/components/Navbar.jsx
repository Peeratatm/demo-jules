// src/components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-nordic-surface text-nordic-text-primary shadow-lg"> {/* Using shadow-lg for a bit more emphasis */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"> {/* Added h-16 for fixed height, responsive padding */}
        <Link href="/" className="font-bold text-2xl text-nordic-primary hover:text-nordic-secondary transition-colors duration-300"> {/* Larger brand text, primary color */}
          RealEstateCo
        </Link>
        <div className="space-x-2 sm:space-x-4"> {/* Responsive spacing for links */}
          <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            Home
          </Link>
          <Link href="/listings" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            Listings
          </Link>
          <Link href="/buy" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            Buy
          </Link>
          <Link href="/rent" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            Rent
          </Link>
          <Link href="/sell" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            Sell
          </Link>
          <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-nordic-bg-light hover:text-nordic-primary transition-colors duration-300">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
