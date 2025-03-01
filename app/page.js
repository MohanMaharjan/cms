'use client';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import StarsCanvas from '@/components/StarBackground';
import Faculty from '@/components/Faculty';
import Students from '@/components/Students';
import EventsSection from '@/components/Events';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import AlumniSlider from '@/components/AlumniSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-[#1a4177] min-h-screen w-full flex items-center justify-center flex-col mt-[-70px] ">
        {/* Two-Column Grid Layout */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10 sm:flex-row items-center justify-center container mx-auto    w-full z-[20]"
        >
          <StarsCanvas />
          {/* Left Side: Text Content */}
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">
                Asian College of Higher Studies
              </h1>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                Providing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {' '}
                  the Best{' '}
                </span>
                College Experience
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              ACHS is dedicated towards building student careers rather than
              just giving a degree.
            </motion.p>
          </div>

          {/* Right Side: Rotating Icons */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full sm:flex justify-center items-center relative hidden"
          >
            <Image
              src="/img1.jpg"
              width={700}
              height={500}
              alt=""
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 mt-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-800">ACHS</span>{' '}
            <span className="text-red-600">Thrive</span>
          </h2>
          <p className="text-lg font-semibold text-gray-800">
            To be an innovative global leader in imparting competitive quality
            education by transforming lives that will change the world for the
            better, at whatever level of the human endeavor they are involved.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-10 mb-10">
        <Faculty />
      </div>
      <div className="container mx-auto px-4 mt-10 mb-10">
        <Students />
      </div>

      <div className="w-full bg-[#1a4177] px-4 mt-10 mb-10">
        <EventsSection />
      </div>
      <div className="container mx-auto px-4 mt-10 mb-10">
        <Gallery />
      </div>

      <div className="container mx-auto px-4 mt-10 mb-10">
        <Partners />
      </div>

      <div className="w-full bg-gray-200 px-4 mt-10">
        <AlumniSlider />
      </div>
      <div className="w-full bg-[#1a4177] px-4 ">
        <Footer />
      </div>
    </>
  );
}
