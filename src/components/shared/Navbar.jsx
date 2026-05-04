"use client";

import { Button, Separator, Avatar, Spinner } from "@heroui/react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg py-2">
      <div className="container mx-auto">
        <header className="flex h-16 items-center justify-between">
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
            {/* Dropdown */}
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
          <Separator
            className="mx-3"
            variant="tertiary"
            orientation="vertical"
          />

          {isPending ? (
            <div className="flex items-center justify-center">
              <Spinner size="lg" />
            </div>
          ) : user ? (
            <div className="flex gap-2 items-center justify-center">
              <Avatar size="lg" className="border-3 border-[#17B188]">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="lg"
                variant="ghost"
                className="rounded-xl  transition-all hover:scale-[1.02] text-sm md:text-base"
              >
                Logout
              </Button>
            </div>
          ) : (
            <ul className="flex items-center text-sm gap-2">
              <li>
                <Link href={"/login"}>
                  <Button
                    size="lg"
                    className="bg-[#3B7597] text-white rounded-xl shadow-lg transition-all hover:scale-[1.02] text-sm md:text-base"
                  >
                    Login
                  </Button>
                </Link>
              </li>

              <li>
                <Link href={"/register"}>
                  <Button
                    size="lg"
                    className="bg-[#17B188] text-white rounded-xl shadow-lg transition-all hover:scale-[1.02] text-sm md:text-base"
                  >
                    Sign up
                  </Button>
                </Link>
              </li>
            </ul>
          )}
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
