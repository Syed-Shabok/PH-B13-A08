"use client";

import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";

const NewReleaseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group border-none bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase shadow-lg">
              New
            </span>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={course?.image}
              alt={course?.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[#093C5D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <Link href={`/courses/${course?.id}`}>
              <Button size="sm" className="bg-white text-[#093C5D] font-bold">
                Quick View
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-4">
          <p className="text-[#3B7597] text-xs font-bold mb-1">
            {course?.category}
          </p>
          <h3 className="font-bold text-[#093C5D] text-md line-clamp-1 mb-2">
            {course?.title}
          </h3>

          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
            <span className="text-sm font-bold text-yellow-500 flex gap-1">
              <FaStar size={18} />
              {course?.rating}
            </span>
            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
              {course?.duration}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default NewReleaseCard;
