"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiRocket, BiPlayCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:h-[80vh] flex items-center overflow-hidden bg-gray-50 rounded-2xl my-6 md:my-10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-[#5DF8D8]/10 blur-3xl" />
        <div className="absolute top-[20%] right-[-10%] w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-[#3B7597]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5 md:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B7597]/10 border border-[#3B7597]/20 text-[#3B7597] text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase">
            <BiRocket className="text-base md:text-lg" />
            Empowering Your Future
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#093C5D] leading-[1.1]">
            Upgrade Your <br />
            <span className="text-[#3B7597] relative">
              Skills Today
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#5DF8D8]/60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-600 text-xs sm:text-sm md:text-lg max-w-md md:max-w-lg leading-relaxed">
            Master the most in-demand skills with SkillSphere. Learn from
            industry experts and join a community of 50,000+ students worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 md:pt-4">
            <Link href={"/courses"} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-[#3B7597] text-white font-bold h-12 md:h-14 px-6 md:px-10 rounded-xl md:rounded-2xl shadow-xl shadow-blue-200 w-full"
              >
                Explore Courses
              </Button>
            </Link>

            <Button
              variant="light"
              size="lg"
              className="text-[#093C5D] font-bold h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100"
            >
              <BiPlayCircle className="text-xl md:text-2xl" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-between sm:justify-start sm:gap-8 pt-4 border-t border-gray-200 text-center sm:text-left">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#093C5D]">
                12k+
              </p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                Students
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#093C5D]">
                150+
              </p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                Courses
              </p>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-200" />

            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#093C5D]">
                4.9/5
              </p>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                Rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full max-w-[500px] h-[450px] lg:h-[550px] mx-auto">
            <div className="absolute inset-0 bg-[#3B7597] rounded-[40px] rotate-3 z-0" />

            <div className="absolute inset-0 overflow-hidden rounded-[40px] z-10 border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Learning Platform"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 bg-[#5DF8D8] rounded-full flex items-center justify-center text-white">
                <BiRocket className="text-xl text-[#093C5D]" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  Trending
                </p>
                <p className="text-sm font-bold text-[#093C5D]">
                  Fullstack Web
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -right-8 bottom-20 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-100"
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-400" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-400" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-400" />
              </div>
              <p className="text-xs font-bold text-[#093C5D]">Enrolled 2k+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
