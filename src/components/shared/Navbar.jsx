"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

import logo from "@/assets/logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg py-2">
      <div className="container mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center justify-between gap-4 w-full">
            <Link href={"/"}>
              <Button variant="ghost rounded-none">
                <Image
                  src={logo}
                  width={160}
                  height={160}
                  className=" pt-2"
                  alt="SkillShare Logo"
                />
              </Button>
            </Link>
            <MobileMenu />
          </div>
          <ul className="hidden items-center gap-4 lg:flex">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/courses"}>Courses</NavLink>
            </li>
            <li>
              <NavLink href={"/profile"}>Profile</NavLink>
            </li>
          </ul>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
