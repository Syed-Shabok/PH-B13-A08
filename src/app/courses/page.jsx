"use client";

import CourseCard from "@/components/homepage/CourseCard";
import { useEffect, useState } from "react";
import { CgUnavailable } from "react-icons/cg";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch(
        "https://json.shahriyar.dev/Syed-Shabok/skillSphere",
      );
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <section className="w-full py-10">
      <h2
        className="text-3xl md:text-4xl 
       text-center mb-10 text-[#3B7597]"
      >
        Our Courses
      </h2>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search courses"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#3B7597]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch">
        {filteredCourses.length === 0 ? (
          <div className="h-[65vh] flex flex-col items-center justify-center  bg-gray-50 rounded-xl shadow-sm border col-span-3 text-muted gap-5">
            {/* <CgUnavailable size={45} /> */}
            <p className="text-3xl">No Courses Found.</p>
          </div>
        ) : (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        )}
      </div>
    </section>
  );
};

export default AllCourses;
