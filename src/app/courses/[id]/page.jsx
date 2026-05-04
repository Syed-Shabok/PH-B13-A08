import Image from "next/image";
import {
  FaCheckCircle,
  FaLayerGroup,
  FaRegClock,
  FaStar,
} from "react-icons/fa";
import { Button, Chip } from "@heroui/react";
import CourseCurriculum from "@/components/coursesPage/CourseCurriculum";
import MotionWrapper from "@/components/ui/MotionWrapper";

const fetchCourse = async (id) => {
  const res = await fetch("https://json.shahriyar.dev/Syed-Shabok/skillSphere");
  const courses = await res.json();

  const course = courses?.find((c) => c?.id === Number(id));
  return course;
};

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const course = await fetchCourse(id);

  const categoryStyles = {
    Development: "border-blue-200 text-blue-500 bg-blue-50",
    Design: "border-violet-200 text-violet-500 bg-violet-50",
    Marketing: "border-yellow-200 text-yellow-600 bg-yellow-50",
  };

  return (
    <div className="min-h-screen pt-6 pb-15 md:py-12">
      <MotionWrapper>
        <div className="rounded-xl bg-gray-50 overflow-hidden shadow-lg border border-gray-200 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-60 sm:h-80 lg:h-auto overflow-hidden">
              <Image
                src={course?.image}
                alt={course?.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            <MotionWrapper delay={0.2}>
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip
                    variant="flat"
                    size="lg"
                    className={`${
                      categoryStyles[course?.category] ||
                      "border-gray-200 text-gray-500"
                    } font-bold uppercase text-[10px] md:text-xs`}
                  >
                    {course?.category}
                  </Chip>

                  <div className="flex items-center gap-1 text-yellow-500 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
                    <FaStar className="text-xs" />
                    <span className="text-xs md:text-sm font-bold">
                      {course?.rating}
                    </span>
                  </div>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#093C5D] leading-tight">
                  {course?.title}
                </h1>

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-[#3B7597] flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {course?.instructor?.charAt(0)}
                  </div>
                  <p className="text-sm md:text-lg text-gray-700">
                    By{" "}
                    <span className="text-[#3B7597] font-bold">
                      {course?.instructor}
                    </span>
                  </p>
                </div>

                <div className="flex gap-4 md:gap-6 py-3 border-y border-gray-100">
                  <div className="flex items-center gap-2 text-gray-600 text-xs md:text-base">
                    <FaRegClock className="text-[#3B7597]" />
                    <span>{course?.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-xs md:text-base">
                    <FaLayerGroup className="text-[#3B7597]" />
                    <span>{course?.level}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-lg line-clamp-4 md:line-clamp-none">
                  {course?.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-[#3B7597] text-white font-bold h-12 md:h-14 rounded-xl shadow-lg transition-all hover:scale-[1.02] text-sm md:text-base w-full sm:w-auto px-10"
                  >
                    Enroll Now
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="border-[#3B7597] text-[#3B7597] font-bold h-12 md:h-14 rounded-xl hover:bg-blue-50 text-sm md:text-base w-full sm:w-auto"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>

      {/* Staticc */}
      <MotionWrapper delay={0.3}>
        <CourseCurriculum />
      </MotionWrapper>
    </div>
  );
};

export default CourseDetails;
