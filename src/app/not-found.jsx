import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[85vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-7xl font-extrabold">404</h1>
      <h2 className="text-3xl font-semibold">Could not find this page.</h2>
      <Link href={"/"}>
        <Button className="rounded-md py-5 text-base bg-[#3B7597]">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
