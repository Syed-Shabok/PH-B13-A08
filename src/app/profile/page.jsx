"use client";

import { UpdateProfileModal } from "@/components/profile/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Spinner } from "@heroui/react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg border border-gray-200 shadow-xl overflow-hidden bg-white">
        <div className="h-35 w-full bg-linear-to-br from-[#3B7597] to-[#093C5D] rounded-t-xl" />

        <div className="relative flex flex-col items-center px-6 pb-10">
          <div className="absolute -top-16">
            <Avatar className="w-30 h-30 border-4 border-white shadow-md text-2xl">
              <Avatar.Image src={user.image} alt={user?.name} />
              <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </div>

          <div className="mt-16 text-center space-y-1">
            <h2 className="text-2xl font-bold text-[#093C5D]">{user.name}</h2>
            <p className="text-muted text-lg font-medium">{user.email}</p>
          </div>

          <div className="w-full flex justify-around my-8">
            <div className="text-center">
              <p className="text-xs md:text-sm text-gray-400 uppercase font-bold">
                Account Role
              </p>
              <p className="text-sm md:text-base font-bold text-gray-700">
                Member
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs md:text-sm text-gray-400 uppercase font-bold">
                Status
              </p>
              <p className="text-sm md:text-base font-bold text-green-600">
                Active
              </p>
            </div>
          </div>

          <div>
            <UpdateProfileModal />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
