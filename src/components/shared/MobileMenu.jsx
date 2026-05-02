"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "motion/react";
import NavLink from "./NavLink";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="lg:hidden border rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu />
      </Button>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-20 right-0 w-40 border border-t-0 rounded-b-lg bg-background/70 backdrop-blur-lg shadow-sm lg:hidden"
        >
          <ul className="flex flex-col  p-4 text-right">
            <li className="p-2 hover:bg-slate-200 rounded-sm">
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li className="p-2 hover:bg-slate-200 rounded-sm">
              <NavLink href={"/courses"}>Courses</NavLink>
            </li>
            <li className="p-2 hover:bg-slate-200 rounded-sm">
              <NavLink href={"/profile"}>Profile</NavLink>
            </li>
          </ul>
        </motion.div>
      )}
      <AnimatePresence />
    </>
  );
};

export default MobileMenu;
