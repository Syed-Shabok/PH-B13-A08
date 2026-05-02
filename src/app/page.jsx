import TopCourses from "@/components/homepage/TopCourses";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-semibold">Home Page</h1>
      <TopCourses />
    </div>
  );
}
