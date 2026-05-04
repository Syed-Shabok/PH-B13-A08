import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#3B7597] pt-12 pb-6 text-white">
      <div className="max-w-6xl mx-auto px-5 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <Image
            src={logo}
            width={220}
            height={100}
            className="mb-7"
            alt="SkillSphere Logo"
          />
          <p className="text-center text-sm md:text-lg  max-w-xl text-gray-100">
            Learn in-demand skills from expert instructors. Explore courses in
            Web Development, Design, Marketing, and more — all in one place.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <Link href="#" className="hover:underline">
            Career
          </Link>
        </div>

        <div className="flex justify-center gap-5 text-xl">
          <Link href="#" className="hover:text-[#17B188]">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-[#17B188]">
            <FaFacebook />
          </Link>
          <Link href="#" className="hover:text-[#17B188]">
            <FaTwitter />
          </Link>
        </div>

        <div className="border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-gray-200">
          <p>© 2026 SkillSphere. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
