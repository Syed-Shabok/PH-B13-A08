"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, Button, Separator, Spinner } from "@heroui/react";
import { motion, AnimatePresence } from "motion/react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <Button
        variant="ghost"
        className="lg:hidden border rounded-md mr-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu />
      </Button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 right-0 w-40 border border-t-0 rounded-b-lg bg-[#F6F8F9]  shadow-sm lg:hidden"
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

            {isPending ? (
              <div>
                <Separator
                  className="w-35 mx-auto border"
                  variant="tertiary"
                  orientation="horizontal"
                />

                <div className="flex items-center justify-center">
                  <Spinner size="lg" />
                </div>
              </div>
            ) : user ? (
              <div>
                <Separator
                  className="w-35 mx-auto border"
                  variant="tertiary"
                  orientation="horizontal"
                />

                <div className="flex gap-2 items-center justify-center py-3">
                  <Button
                    onClick={handleSignOut}
                    size="sm"
                    variant="ghost"
                    className="rounded-xl  transition-all hover:scale-[1.02] text-sm md:text-base"
                  >
                    Logout
                  </Button>

                  <Avatar size="sm" className="border-3 border-[#17B188]">
                    <Avatar.Image
                      alt="John Doe"
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </div>
              </div>
            ) : (
              <div>
                <Separator
                  className="w-35 mx-auto border"
                  variant="tertiary"
                  orientation="horizontal"
                />

                <ul className="flex items-center justify-center text-sm gap-2 mr-4 w-full py-3">
                  <li>
                    <Link href={"/login"}>
                      <Button
                        size="sm"
                        className="bg-[#3B7597] text-white rounded-sm transition-all hover:scale-[1.02] text-sm lg:text-base"
                      >
                        Login
                      </Button>
                    </Link>
                  </li>

                  <li>
                    <Link href={"/register"}>
                      <Button
                        size="sm"
                        className="bg-[#17B188] text-white rounded-sm transition-all hover:scale-[1.02] text-sm md:text-base"
                      >
                        Sign up
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
