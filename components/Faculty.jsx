'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: 'B.Sc. Computer Science and Information Technology (B.Sc. CSIT)',
    description: 'Experience the serenity of the mountains',
    image: '/csit.jpg',
  },
  {
    title: 'Bachelor of Computer Application (BCA)',
    description: 'Experience the serenity of the mountains',
    image: '/bca.jpg',
  },
  {
    title: 'Bachelor of Business Management',
    description: 'Experience the serenity of the mountains',
    image: '/bbm.jpg',
  },
  {
    title: 'Bachelor of Business Studies',
    description: 'Experience the serenity of the mountains',
    image: '/img1.png',
  },
];

const Faculty = () => {
  return (
    <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2  place-items-center gap-6 p-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <h2 className="text-xl font-bold">{card.title}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Faculty;
