import CourseCard from "./CourseCard";

const fetchTopCourses = async () => {
  const res = await fetch("http://localhost:3000/courseData.json");
  const courses = await res.json();

  const sorted = courses.sort((a, b) => b.rating - a.rating);

  const topThree = sorted.slice(0, 3);

  return topThree;
};

const TopCourses = async () => {
  const topCourses = await fetchTopCourses();

  //   console.log(topCourses);

  return (
    <section className="w-full py-10">
      <h2
        className="text-4xl 
       text-center mb-10"
      >
        Top Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 w-full items-stretch">
        {topCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default TopCourses;
