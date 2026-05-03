import CourseCard from "@/components/homepage/CourseCard";

const fetchCourses = async () => {
  const res = await fetch("http://localhost:3000/courseData.json");
  const courses = await res.json();

  return courses;
};

const page = async () => {
  const courses = await fetchCourses();

  return (
    <section className="w-full py-10">
      <h2
        className="text-3xl md:text-4xl 
       text-center mb-10"
      >
        Our Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default page;
