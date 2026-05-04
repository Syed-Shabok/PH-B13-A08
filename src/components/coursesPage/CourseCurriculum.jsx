"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const CourseCurriculum = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const curriculumData = [
    {
      title: "Module 1: Introduction & Environment Setup",
      topics: [
        "Understanding the Ecosystem",
        "Tools of the trade",
        "Initial Configuration",
      ],
      duration: "1h 30m",
    },
    {
      title: "Module 2: Core Foundations & Architecture",
      topics: [
        "Deep dive into logic",
        "State management patterns",
        "Data flow dynamics",
      ],
      duration: "4h 15m",
    },
    {
      title: "Module 3: Advanced Implementation Techniques",
      topics: [
        "Scalable project structure",
        "Performance optimization",
        "Error handling",
      ],
      duration: "6h 45m",
    },
    {
      title: "Module 4: Real-world Industrial Project",
      topics: [
        "Requirement Analysis",
        "Development Phase",
        "Deployment & CI/CD",
      ],
      duration: "11h 30m",
    },
  ];

  const visibleModules = isExpanded
    ? curriculumData
    : curriculumData.slice(0, 1);

  return (
    <motion.div
      layout
      className="mt-8 md:mt-12 rounded-lg p-5 md:p-12 shadow-xl border border-gray-200 bg-gray-50 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-3">
        <div className="space-y-1">
          <h2 className="text-xl md:text-3xl font-bold text-[#093C5D] flex items-center gap-2">
            <motion.span
              layout
              className="w-1.5 h-6 md:w-2 md:h-8 bg-[#3B7597] rounded-full inline-block"
            />
            Course Curriculum
          </h2>
        </div>

        <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-500 bg-white/50 p-2 rounded-lg border border-gray-100">
          <span>{curriculumData.length} Modules</span>
          <span className="text-gray-300">•</span>
          <span>148 Lessons</span>
        </div>
      </div>

      <motion.div layout className="space-y-3 md:space-y-4">
        {visibleModules.map((module, index) => (
          <motion.div
            key={module.title}
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 bg-gray-50/80 gap-2">
              <div className="flex items-start md:items-center gap-3">
                <span className="shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-[10px] md:text-sm font-bold text-[#3B7597]">
                  {index + 1}
                </span>
                <h3 className="font-bold text-[#093C5D] text-sm md:text-lg leading-tight">
                  {module.title}
                </h3>
              </div>

              <span className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-gray-100">
                {module.duration}
              </span>
            </div>

            <div className="p-4 md:p-5 md:pl-16 bg-white">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                {module.topics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-600 text-[11px] md:text-sm"
                  >
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#5DF8D8]" />
                    <span className="truncate">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 md:mt-8 flex justify-center">
        <Button
          variant="light"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#3B7597] font-bold text-sm md:text-lg hover:bg-[#3B7597]/10 px-6 py-4 md:px-8 md:py-6 rounded-xl transition-all flex items-center gap-2"
        >
          {isExpanded ? "Show Less" : "View Full Curriculum"}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaChevronDown className="text-xs" />
          </motion.span>
        </Button>
      </div>

      <motion.div
        layout
        className="mt-8 md:mt-10 p-5 md:p-8 bg-[#093C5D] rounded-xl md:rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <div className="text-center lg:text-left space-y-1">
          <h4 className="text-white font-bold text-base md:text-xl">
            Ready to start your journey?
          </h4>
          <p className="text-blue-200 text-xs md:text-sm opacity-80">
            Get instant access to all materials and the community.
          </p>
        </div>
        <div>
          <Button className="bg-[#17B188] text-white font-bold px-8 py-5 md:py-6 rounded-xl w-full lg:w-auto text-sm md:text-base transition-all hover:scale-[1.02] ">
            Get Full Access
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseCurriculum;
