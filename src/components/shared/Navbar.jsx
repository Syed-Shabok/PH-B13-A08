import { Button, Separator, Avatar, Spinner } from "@heroui/react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import AuthSection from "./AuthSection";

const Navbar = () => {
  // const { data: session, isPending } = authClient.useSession();
  // const user = session?.user;

  // const handleSignOut = async () => {
  //   await authClient.signOut();
  // };

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
            className="mx-3 hidden lg:flex"
            variant="tertiary"
            orientation="vertical"
          />

          <div className="hidden lg:flex">
            <AuthSection />
          </div>
        </header>
      </div>
    </nav>
  );
};

export default Navbar;
