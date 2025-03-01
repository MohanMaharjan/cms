'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Dummy data array
  const dummyPosts = [
    {
      id: 1,
      title: 'Post 1',
      content: 'This is the content of post 1.',
      images: '/img1.png', // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'This is the content of post 2.',
      images: '/img1.jpg',
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'This is the content of post 3.',
      images: '/img2.jpg',
    },
    {
      id: 4,
      title: 'Post 4',
      content: 'This is the content of post 4.',
      images: '/img3.jpeg',
    },
  ];

  // Dynamically assign sizes based on the post index
  const getPostSize = (index) => {
    const sizes = [
      'col-span-2 row-span-2', // Large
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-2 row-span-1', // Wide
    ];
    return sizes[index % sizes.length]; // Cycle through sizes
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (activeIndex !== null) {
        if (event.key === 'Escape') setActiveIndex(null);
        if (event.key === 'ArrowRight')
          setActiveIndex((prev) => (prev + 1) % 4); // Only 4 posts
        if (event.key === 'ArrowLeft')
          setActiveIndex((prev) => (prev - 1 + 4) % 4); // Only 4 posts
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Only show the first four posts
  const firstFourPosts = dummyPosts.slice(0, 4);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px] lg:auto-rows-[250px]">
        {firstFourPosts.map((post, index) => (
          <div
            key={post.id}
            className={`relative overflow-hidden rounded-lg ${getPostSize(
              index
            )} group cursor-pointer`}
            onMouseEnter={() => setHovered(post.images)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={post.images}
              alt={post.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            {hovered === post.images && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center p-4"
              >
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm">{post.content}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Slideshow Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative max-w-3xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Arrow */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev - 1 + 4) % 4); // Only 4 posts
                }}
              >
                <ChevronLeft size={36} />
              </button>

              {/* Image Container */}
              <motion.div
                key={firstFourPosts[activeIndex].id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full flex flex-col items-center"
              >
                <div className="relative w-full h-[60vh] md:h-[80vh] flex justify-center">
                  <Image
                    src={firstFourPosts[activeIndex].images}
                    alt={firstFourPosts[activeIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-xl font-bold mt-4">
                  {firstFourPosts[activeIndex].title}
                </h3>
                <p className="text-gray-300">
                  {firstFourPosts[activeIndex].content}
                </p>
              </motion.div>

              {/* Right Arrow */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((prev) => (prev + 1) % 4); // Only 4 posts
                }}
              >
                <ChevronRight size={36} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
