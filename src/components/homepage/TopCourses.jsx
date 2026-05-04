import CourseCard from "./CourseCard";

const fetchTopCourses = async () => {
  // Use a relative URL for better compatibility or an Env Var
  const res = await fetch("https://json.shahriyar.dev/Syed-Shabok/skillSphere");
  const courses = await res.json();
  const sorted = courses.sort((a, b) => b.rating - a.rating);
  return sorted.slice(0, 3);
};

const TopCourses = async () => {
  const topCourses = await fetchTopCourses();

  return (
    <section className="bg-white">
      <div>
        {/* Consistent Heading Style */}
        <div className="flex flex-col mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#093C5D] flex justify-center items-center gap-3">
            <span className=" rounded-full hidden md:block" />
            Popular Courses
          </h2>
          <p className="text-gray-500 mt-4 text-lg text-center font-medium">
            Our most highly-rated programs based on student feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
