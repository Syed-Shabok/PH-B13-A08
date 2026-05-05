import { motion } from "motion/react";
import NewReleaseCard from "./NewReleaseCard";

const fetchNewCourses = async () => {
  const res = await fetch(
    "https://json.shahriyar.dev/Syed-Shabok/skillSphere",
    { cache: "no-store" },
  );
  const courses = await res.json();
  const latest = courses.sort((a, b) => b.id - a.id);
  return latest.slice(0, 4);
};

const NewReleases = async () => {
  const newCourses = await fetchNewCourses();

  return (
    <section className="py-10 w-full">
      <div>
        <div className="flex justify-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#093C5D] mt-2 text-center">
              Trending Courses
            </h2>
            <p className="mt-2 text-lg text-muted text-center">
              Top-rated by students. Verified by experts. Freshly delivered to
              your dashboard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newCourses.map((course, index) => (
            <NewReleaseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
