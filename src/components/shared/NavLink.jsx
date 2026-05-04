"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-[#3B7597]/20" : ""} flex items-center justify-center py-2 px-3 rounded-sm font-medium hover:bg-[#3B7597]/20`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
