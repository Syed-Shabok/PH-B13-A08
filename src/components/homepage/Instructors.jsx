"use client";

import { Card, Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

const Instructors = () => {
  const instructors = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Lead Web Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&fit=crop",
      rating: "4.9",
      students: "12k+",
      courses: 15,
    },
    {
      name: "Marcus Thorne",
      role: "UI/UX Design Expert",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&fit=crop",
      rating: "4.8",
      students: "8k+",
      courses: 9,
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Marketing Guru",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&fit=crop",
      rating: "5.0",
      students: "15k+",
      courses: 22,
    },
    {
      name: "David Chen",
      role: "Data Science Lead",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&fit=crop",
      rating: "4.7",
      students: "10k+",
      courses: 12,
    },
  ];

  return (
    <section className=" w-full  rounded-2xl mb-10">
      <div>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl  text-[#093C5D] mb-4">
              Learn from the Best
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              Industry veterans from top tech firms dedicated to your success.
            </p>
          </div>
          <Button
            variant="flat"
            className="bg-[#3B7597]/10 text-[#3B7597] font-bold rounded-xl px-8 hidden md:flex"
          >
            View All Mentors
          </Button>
        </div>

        {/* Instructors Grid - Now 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden rounded-2xl">
                <div className="flex flex-col">
                  {/* Instructor Photo */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Simplified Overlay */}
                    <div className="absolute inset-0 bg-[#093C5D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a
                        href="#"
                        className="p-2 bg-white rounded-full text-[#093C5D] hover:bg-[#5DF8D8] transition-colors"
                      >
                        <FaLinkedin size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white rounded-full text-[#093C5D] hover:bg-[#5DF8D8] transition-colors"
                      >
                        <FaTwitter size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 bg-white rounded-full text-[#093C5D] hover:bg-[#5DF8D8] transition-colors"
                      >
                        <FaGithub size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Instructor Details */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-[#093C5D]">
                      {mentor.name}
                    </h3>
                    <p className="text-[#3B7597] text-xs font-bold mb-4 uppercase tracking-tight">
                      {mentor.role}
                    </p>

                    <div className="flex items-center justify-between px-2 pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1">
                        <BiStar className="text-yellow-500 text-sm" />
                        <span className="text-sm font-bold text-gray-700">
                          {mentor.rating}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-gray-400">
                        {mentor.students} Students
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only button */}
        <Button
          variant="flat"
          className="bg-[#3B7597]/10 text-[#3B7597] font-bold rounded-xl w-full mt-8 md:hidden"
        >
          View All Mentors
        </Button>
      </div>
    </section>
  );
};

export default Instructors;
