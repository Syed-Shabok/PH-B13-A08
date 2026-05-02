import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col gap-4 justify-center items-center bg-blue-50">
      <h1 className="text-3xl font-semibold">Project Initialized.</h1>
      <Button>Click Me!</Button>
    </div>
  );
}
