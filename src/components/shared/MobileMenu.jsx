"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, Button, Separator, Spinner } from "@heroui/react";
import { motion, AnimatePresence } from "motion/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import AuthSection from "./AuthSection";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;

      const isInsideMenu = menuRef.current.contains(event.target);
      const isButton = event.target.closest("button");

      if (!isInsideMenu && !isButton) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className="lg:hidden border rounded-md mr-4"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <RxHamburgerMenu />
      </Button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 right-0 w-45 border border-t-0 rounded-b-lg bg-[#F6F8F9]  shadow-sm lg:hidden"
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

            <Separator
              className="w-35 mx-auto border"
              variant="tertiary"
              orientation="horizontal"
            />
            <div className="ml-7 mr-4 py-3">
              <AuthSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
