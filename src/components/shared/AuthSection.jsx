"use client";

import { Button, Avatar, Spinner } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthSection = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully.");
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex gap-2 items-center justify-center mr-4">
        <Button
          onClick={handleSignOut}
          size="lg"
          variant="ghost"
          className="rounded-xl"
        >
          Logout
        </Button>

        <Avatar className="w-8 h-8 lg:w-12 lg:h-12 border-3 border-[#17B188]">
          <Avatar.Image src={user?.image} />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </div>
    );
  }

  return (
    <ul className="flex items-center gap-2 lg:mr-4">
      <li>
        <Link href="/login">
          <Button
            className="bg-[#3B7597] text-white
                   px-3 h-9 text-xs 
                   lg:px-6 lg:py-3 lg:text-base
                   rounded-md"
          >
            Login
          </Button>
        </Link>
      </li>

      <li>
        <Link href="/register">
          <Button
            className="bg-[#17B188] text-white 
                   px-3 h-9 text-xs 
                   lg:px-6 lg:py-3 lg:text-base
                   rounded-md"
          >
            Sign up
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default AuthSection;
