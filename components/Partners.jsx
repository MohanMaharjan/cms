import { motion } from 'framer-motion';
import Image from 'next/image';

const Partners = () => {
  const partnerLogos = [
    { src: '/idea.gif', alt: 'MOE Approved' },
    { src: '/img1.png', alt: 'Tribhuvan University TU Equivalency' },
    { src: '/cloud.png', alt: 'Lincoln University' },
    { src: '/ekbana.png', alt: 'UMKC Logo' },
    { src: '/inficare.jpg', alt: 'Taylors University Logo' },
    { src: '/img1.jpg', alt: 'IHG Logo' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Column - Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-800">Our Accreditation</span>{' '}
              <span className="text-red-600">& Partner</span>
            </h2>

            <p className="text-gray-600 mb-6">
              IIMS College is proud to be accredited by leading educational
              bodies, ensuring the highest standards of academic excellence. Our
              partnerships with renowned universities and industry leaders
              enhance our curriculum and provide students with exceptional
              learning opportunities and global exposure.
            </p>
          </motion.div>

          {/* Right Column - Partner Logos */}
          <motion.div
            className="md:w-1/2 grid grid-cols-3 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Column 1 - Starts from the top */}
            <div className="flex flex-col ">
              {partnerLogos.slice(0, 2).map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 border "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Column 2 - Starts halfway down */}
            <div className="flex flex-col  mt-12">
              {partnerLogos.slice(2, 4).map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 border "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Column 3 - Starts from the top */}
            <div className="flex flex-col ">
              {partnerLogos.slice(4, 6).map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center p-4 border "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile View Button */}
        <div className="text-center mt-8 md:hidden">
          <a
            href="https://iimscollege.edu.np/about/"
            className="bg-transparent border border-blue-500 text-blue-500 px-6 py-2  hover:bg-blue-500 hover:text-white transition duration-300"
          >
            View All
            <svg
              className="inline-block ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
