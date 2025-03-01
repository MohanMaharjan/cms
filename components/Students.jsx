import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaQuoteLeft } from 'react-icons/fa'; // Import icons from react-icons

const students = [
  {
    id: 1,
    name: 'John Doe',
    saying: 'The only way to do great work is to love what you do.',
    image: '/img1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    saying: 'Design is not just what it looks like, it’s how it works.',
    image: '/img2.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    saying: 'Every problem is an opportunity in disguise.',
    image: '/img3.jpeg',
  },
  // Add more students as needed
];

export default function StudentGrid() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  return (
    <div className="flex h-[500px] flex-col sm:flex-row">
      {/* Left Column: List of Students */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:w-1/3 w-full overflow-y-auto pr-4 h-[500px] p-4"
      >
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-blue-800">Student</span>{' '}
          <span className="text-red-600">Views</span>
        </h2>
        <h2 className="text-lg text-gray-700 mb-4 font-bold">
          Current Student's views about ACHS
        </h2>
        <ul className="space-y-4">
          {students.map((student) => (
            <li
              key={student.id}
              onMouseEnter={() => setSelectedStudent(student)}
              className={`p-2 text-md rounded-full cursor-pointer transition-colors ${
                selectedStudent.id === student.id
                  ? 'bg-[#1a4177] text-white font-bold' // Active student style
                  : 'bg-white text-rose-700 hover:bg-gray-200 hover:text-rose-700 font-bold' // Default style
              }`}
            >
              {student.name}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Column: Student Details */}
      <div className="sm:w-2/3 w-full relative h-[500px]">
        <motion.div
          key={selectedStudent.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Student Saying Card */}
          <div className="absolute inset-0 bg-[#1a4177] rounded-lg shadow-lg p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center">
            {/* Student Image */}
            <motion.div
              className="w-24 h-24 sm:w-32 sm:h-32 bg-cover bg-center rounded-full shadow-md border-4 border-white mb-4 sm:mb-0 sm:mr-8"
              style={{ backgroundImage: `url(${selectedStudent.image})` }}
              whileHover={{ scale: 1.1 }}
            />

            {/* Student Name and Saying */}
            <div className="text-white text-center sm:text-left">
              {/* Student Name with Icon */}
              <div className="flex items-center mb-2">
                <FaUser className="mr-2 text-lg sm:text-xl" /> {/* User Icon */}
                <h3 className="text-xl sm:text-2xl font-bold">
                  {selectedStudent.name}
                </h3>
              </div>

              {/* Student Saying with Icon */}
              <div className="flex items-start">
                <FaQuoteLeft className="mr-2 text-lg sm:text-xl mt-1" />{' '}
                {/* Quote Icon */}
                <p className="text-sm sm:text-lg italic font-light">
                  {selectedStudent.saying}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
