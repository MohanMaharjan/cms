'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import {
  Menu,
  X,
  ChevronDown,
  Info,
  Book,
  Home,
  Bell,
  MenuIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLimit = 100; // Scroll limit in pixels
      if (window.scrollY > scrollLimit) {
        setIsHeaderSmall(true);
      } else {
        setIsHeaderSmall(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About Us', href: '/about' },
    {
      label: 'Programs',
      subMenu: [
        { label: 'Bachelors', href: '#programs/bachelors' },
        { label: 'Masters', href: '#programs/masters' },
        { label: 'PhD', href: '#programs/phd' },
      ],
    },
    {
      label: 'Events',
      subMenu: [
        { label: 'Workshops', href: '#events/workshops' },
        { label: 'Hackathons', href: '#events/hackathons' },
        { label: 'Seminars', href: '#events/seminars' },
      ],
    },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];
  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className="bg-[#6d5eb6] min-h-[70px] ">
      {/* Navbar (Fixed on Top) */}
      <header
        className={`w-full font-medium  shadow-sm fixed top-0 left-0 z-30 transition-all duration-300 transiton-smooth  ${
          isHeaderSmall ? 'h-[60px] bg-white opacity-90' : 'h-[70px]'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-full px-4 text-white">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center justify-center transition-all duration-300 ${
              isHeaderSmall
                ? 'w-[100px] h-[40px] !text-black'
                : 'w-[150px] h-[70px]'
            }`}
          >
            <Image
              src="/achs.png"
              width={isHeaderSmall ? 100 : 150}
              height={isHeaderSmall ? 40 : 90}
              className="object-contain"
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
            <nav
              className={`hidden lg:flex gap-y-4 lg:flex-row lg:space-x-10 p-4 lg:p-0 ${
                isHeaderSmall ? 'text-black' : ''
              }`}
            >
              <Link
                href="/about"
                className="py-2 lg:py-0 flex items-center gap-2 hover:text-rose-700 transition-colors"
              >
                <Info size={16} /> Why Us?
              </Link>

              {/* Programs Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="py-2 lg:py-0 flex items-center gap-2 hover:text-rose-700 transition-colors relative">
                  <Book size={16} /> Programs{' '}
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      isProgramsOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Mega Menu */}
                {isProgramsOpen && (
                  <div className="absolute left-0 w-[300px] bg-[#6d5eb6] shadow-lg border-t border-gray-200">
                    <div className="px-6 py-6 grid grid-cols-2 gap-6 max-w-screen-xl mx-auto">
                      {[
                        {
                          href: '/program/csit',
                          img: '/csit.jpg',
                          label: 'CSIT',
                        },
                        { href: '/program/bca', img: '/bca.jpg', label: 'BCA' },
                        { href: '/program/bbm', img: '/bbm.jpg', label: 'BBM' },
                        {
                          href: '/program/bbs',
                          img: '/idea.png',
                          label: 'BBS',
                        },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="flex flex-col items-center text-center gap-2 transition-all relative p-4 rounded-lg hover:bg-gray-800"
                        >
                          <div className="w-24 h-24 overflow-hidden rounded-lg">
                            <Image
                              src={item.img}
                              width={96}
                              height={96}
                              alt={item.label}
                              className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <span className="font-semibold text-white">
                            {item.label}
                          </span>
                          {hoveredItem === index && (
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-rose-700 animate-border-expand" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/life"
                className="py-2 lg:py-0 flex items-center gap-2 hover:text-rose-700 transition-colors"
              >
                <Home size={16} /> Life @ ACHS
              </Link>
              <Link
                href="/notice"
                className="py-2 lg:py-0 flex items-center gap-2 hover:text-rose-700 transition-colors"
              >
                <Bell size={16} /> Notices
              </Link>
            </nav>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex space-y-2 items-center justify-center bg-white text-rose-700 rounded-full gap-2 shadow-lg py-2 px-4 hover:text-rose-700 transition-colors"
            >
              <MenuIcon size={16} /> Menu
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-3xl bg-[#030014] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex">
            {/* 2/3 Content for Recent News and Upcoming Events */}
            <div className="w-2/3 bg-white p-8 overflow-y-auto">
              <h2 className="text-2xl font-bold text-rose-700 mb-6">
                Recent News & Upcoming Events
              </h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-[#1a4177] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-full h-40 bg-[#1a4177] rounded-lg mb-4 overflow-hidden">
                      <Image
                        src={`/dummy-news-${item}.jpg`} // Replace with your dummy images
                        width={400}
                        height={160}
                        alt={`News ${item}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      News Title {item}
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 1/3 Content for Navigation Links */}
            <div className="w-1/3 bg-rose-700 p-8 flex flex-col justify-between text-white">
              <div className="space-y-5 text-lg overflow-y-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center py-3">
                  <h2 className="text-2xl font-bold">Main Menu</h2>
                </div>

                {/* Menu Items */}
                {menuItems.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="font-semibold flex justify-between items-center cursor-pointer hover:bg-rose-600 py-3 px-4 rounded-md">
                      {item.subMenu ? (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="flex items-center justify-between w-full"
                        >
                          {item.label}
                          <ChevronDown
                            className={`transition-transform ${
                              openSubmenu === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="w-full"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>

                    {/* Submenu */}
                    <AnimatePresence>
                      {openSubmenu === index && item.subMenu && (
                        <motion.div
                          className="ml-5 mt-2 py-2 px-3 space-y-2 rounded-md bg-rose-600"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {item.subMenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block py-2 px-3 text-sm hover:text-rose-300 hover:bg-rose-500 rounded-md"
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} /> Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
