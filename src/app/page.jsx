import Banner from "@/components/homepage/Banner";
import Instructors from "@/components/homepage/Instructors";
import LearningTips from "@/components/homepage/LearningTips";
import TopCourses from "@/components/homepage/TopCourses";
import { Button } from "@heroui/react";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Banner />
      <TopCourses />
      <LearningTips />
      <Instructors />
    </div>
  );
}
