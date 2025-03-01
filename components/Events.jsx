import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const events = [
  {
    id: 1,
    title: 'IIMS Jolly Christmas',
    description:
      'Christmas is a season for jolly gatherings, gift-giving, warm feasts, and spreading festivity along with...',
    image:
      'https://iimscollege.edu.np/wp-content/uploads/2024/10/DSC_3481-min.jpg',
    link: 'https://iimscollege.edu.np/iims-jolly-christmas-a-joyful-recap/',
  },
  {
    id: 2,
    title: 'IIMS Khel Utsav 2024',
    description:
      'IIMS College hosted the much-anticipated annual sports event, IIMS Khel Utsav 2024, on the 15th...',
    image:
      'https://iimscollege.edu.np/wp-content/uploads/2024/10/IMG_7600-min.jpg',
    link: 'https://iimscollege.edu.np/iims-khel-utsav-2024/',
  },
  {
    id: 3,
    title: 'IIMS College Partners',
    description:
      'We are excited to announce that IIMS College is partnering with EC-Council, a leading name...',
    image:
      'https://iimscollege.edu.np/wp-content/uploads/2024/06/28_EC_Academia-min.png',
    link: 'https://iimscollege.edu.np/iims-college-partners-with-ec-council-to-empower-students-in-cybersecurity-and-it/',
  },
  {
    id: 4,
    title: 'IIMS New Technology Launch',
    description:
      'IIMS College is thrilled to announce a new technology program for students...',
    image:
      'https://iimscollege.edu.np/wp-content/uploads/2024/06/tech_launch.jpg',
    link: 'https://iimscollege.edu.np/iims-tech-launch/',
  },
];

export default function EventsSection() {
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row p-8  container mx-auto">
      {/* Left Column: Title and Navigation */}
      <div className="lg:w-1/3 w-full lg:pr-8 mb-8 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Inside</span>{' '}
            <span className="text-red-600">ACHS</span>
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Stay updated with the latest news, events, and stories happening in
            ACHS.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="px-4 py-3 bg-[#2770d6] text-white rounded-full  shadow-lg hover:bg-blue-700 transition-all"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="px-4 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Event Slider */}
      <div className="lg:w-2/3 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {events.map((event, index) => (
              <SwiperSlide key={event.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`h-full flex flex-col rounded-lg shadow-lg overflow-hidden border-4 border-white ${
                    index % 2 === 0
                      ? 'bg-[#1a4177]'
                      : 'bg-gradient-to-r from-red-500 to-red-700'
                  } text-white`}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white text-lg opacity-90 mb-4 flex-grow">
                      {event.description}
                    </p>
                    <a
                      href={event.link}
                      className="inline-block mt-auto px-4 py-2 bg-white text-[#1a4177] font-semibold rounded-full hover:bg-gray-200 transition"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}
