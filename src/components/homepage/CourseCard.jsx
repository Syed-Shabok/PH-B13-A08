"use client";

import { motion } from "motion/react";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  const categoryStyles = {
    Development: "border-blue-200 text-blue-500 bg-blue-50",
    Design: "border-violet-200 text-violet-500 bg-violet-50",
    Marketing: "border-yellow-200 text-yellow-600 bg-yellow-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="rounded-xl border shadow-sm hover:shadow-lg transition duration-300 flex flex-col hover:-translate-y-0.5 w-full h-full bg-gray-50">
        <div className="relative">
          <Image
            src={course.image}
            width={400}
            height={400}
            alt={course.title}
            className="w-full h-65 object-cover rounded-xl"
          />

          <Chip
            size="sm"
            className={`absolute right-3 top-3 border text-xs font-medium px-2 py-1 rounded-full ${
              categoryStyles[course.category] || "border-gray-200 text-gray-500"
            }`}
          >
            {course.category}
          </Chip>
        </div>

        <div className="p-4 flex flex-col flex-1 space-y-3">
          <div className="flex justify-between items-center gap-2">
            <h2 className="font-semibold text-lg md:text-2xl">
              {course.title}
            </h2>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <FaStar size={18} />
              <span className="text-base md:text-xl text-gray-700">
                {course.rating}
              </span>
            </div>
          </div>

          <p className="text-sm md:text-lg text-gray-600">
            {course.description}
          </p>

          <div className="mt-auto pt-3 space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>

            <Link href={`/courses/${course.id}`}>
              <Button className="w-full bg-[#3B7597] text-white py-5">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
