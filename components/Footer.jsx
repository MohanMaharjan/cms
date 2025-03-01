'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a4177] text-white pt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', url: '/' },
                { name: 'About ACHS', url: '/about' },
                {
                  name: 'Tribhuvan University',
                  url: 'https://tribhuvan-university.edu.np',
                },
                { name: 'Privacy Policy', url: '/privacy-policy' },
                { name: 'Terms & Conditions', url: '/terms' },
                { name: 'Contact Us', url: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className="hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'BCA', url: '/courses/bca' },
                { name: 'BBM', url: '/courses/bbm' },
                { name: 'B.Sc. CSIT', url: '/courses/csit' },
                { name: 'BBS', url: '/courses/bbs' },
              ].map((course, idx) => (
                <li key={idx}>
                  <Link
                    href={course.url}
                    className="hover:text-blue-400 transition"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Contact Information
            </h3>
            <p>Ekantakuna, Near Alka Hospital 2, Lalitpur, Nepal</p>
            <p>P.O.Box: 6721</p>
            <p>
              Email:{' '}
              <a href="mailto:info@achsnepal.edu.np" className="text-blue-400">
                info@achsnepal.edu.np
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+977015912727" className="text-blue-400">
                +977-01-5912727
              </a>
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-500"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Find Us on Google Maps</h3>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.510123277334!2d85.30713717550273!3d27.670624227110107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19062bbc2a01%3A0xf5a732c7d6747814!2sAsian%20College%20of%20Higher%20Studies!5e0!3m2!1sen!2snp!4v1738386575393!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-400">
          © {new Date().getFullYear()} ACHS Nepal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
