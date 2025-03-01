'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { PlayCircleIcon } from 'lucide-react';

// Function to extract YouTube video ID from embed URL
const getYouTubeThumbnail = (url) => {
  const videoId = url.split('/')[4].split('?')[0]; // Extract video ID from the embed URL
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Generate the thumbnail URL
};

export default function AlumniSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const sliderRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const [key, setKey] = useState(0);

  // Hardcoded array of random YouTube videos
  const randomVideos = [
    {
      title: 'Alumni 1',
      student_batch: 'Batch 2020',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Rick Astley - Never Gonna Give You Up
      content: 'This is a description for Alumni 1.',
    },
    {
      title: 'Alumni 2',
      student_batch: 'Batch 2019',
      video: 'https://www.youtube.com/embed/J---aiyznGQ', // Keyboard Cat
      content: 'This is a description for Alumni 2.',
    },
    {
      title: 'Alumni 3',
      student_batch: 'Batch 2021',
      video: 'https://www.youtube.com/embed/9bZkp7q19f0', // PSY - GANGNAM STYLE
      content: 'This is a description for Alumni 3.',
    },
    {
      title: 'Alumni 4',
      student_batch: 'Batch 2018',
      video: 'https://www.youtube.com/embed/RgKAFK5djSk', // Wiz Khalifa - See You Again ft. Charlie Puth
      content: 'This is a description for Alumni 4.',
    },
    {
      title: 'Alumni 5',
      student_batch: 'Batch 2022',
      video: 'https://www.youtube.com/embed/hT_nvWreIhg', // OneRepublic - Counting Stars
      content: 'This is a description for Alumni 5.',
    },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Auto-scroll for smooth looping
  useEffect(() => {
    const interval = setInterval(() => {
      const container = sliderRef.current;
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft === maxScrollLeft) {
          container.scrollLeft = 0; // Reset scroll to the beginning
        } else {
          container.scrollBy({
            left: 200, // Adjust this value for scroll speed
            behavior: 'smooth',
          });
        }
      }
    }, 3000); // Change this value for the scroll speed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      setKey((prev) => prev + 1); // Change key to force re-animation
    }
  }, [isInView]);

  return (
    <div
      className="p-6 container mx-auto flex flex-col items-center justify-center"
      ref={ref}
    >
      <motion.h2
        key={key} // Forces re-animation
        className="text-4xl text-center font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-blue-800">Student</span>{' '}
        <span className="text-red-600">Alumni</span>
      </motion.h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto w-full md:w-2/3 space-x-6 snap-x scroll-smooth py-10 bg-white"
        style={{ scrollBehavior: 'smooth' }}
      >
        {randomVideos.map((alumnus, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg p-4 cursor-pointer snap-start"
            onClick={() => openModal(alumnus)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image container with relative positioning */}
            <div className="relative">
              {/* Displaying YouTube thumbnail image */}
              <Image
                src={getYouTubeThumbnail(alumnus.video)}
                alt={alumnus.title}
                width={200}
                height={200}
                className="rounded-lg mb-4"
              />

              {/* Play button centered on the thumbnail */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <PlayCircleIcon className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            <h3 className="font-semibold text-lg">{alumnus.title}</h3>
            <p className="text-sm text-gray-600">{alumnus.student_batch}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            {/* Displaying Video */}
            <div className="aspect-w-16 aspect-h-9 mb-4 h-[300px]">
              <iframe
                src={modalContent.video}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title="Alumni Video"
              />
            </div>

            {/* Displaying the Name and Batch */}
            <h3 className="text-2xl font-bold">{modalContent.title}</h3>
            <p className="text-sm text-gray-500">
              {modalContent.student_batch}
            </p>

            {/* Displaying the Description */}
            <p className="text-lg mt-4">{modalContent.content}</p>

            <div className="flex justify-between mt-6">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
