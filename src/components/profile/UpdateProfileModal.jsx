"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import { BiEdit, BiLinkAlt, BiUser } from "react-icons/bi";

export function UpdateProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const image = formData.get("image");

    const result = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (!result.error) {
      setIsOpen(false);
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)}
        size="lg"
        className="w-full bg-[#3B7597]/10 text-[#3B7597] font-bold hover:bg-[#3B7597] hover:text-white transition-all rounded-xl border border-[#3B7597]/20"
      >
        <BiEdit className="text-xl" /> Update Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className=" border-none shadow-2xl bg-white rounded-3xl overflow-hidden">
            <Modal.Header className="flex flex-col gap-1 pt-8">
              <div className="mx-auto bg-blue-50 p-3 rounded-2xl mb-2">
                <BiUser className="size-8 text-[#3B7597]" />
              </div>

              <Modal.Heading className="text-2xl font-bold text-center text-[#093C5D]">
                Edit Profile
              </Modal.Heading>

              <p className="text-center text-xs text-gray-400 font-medium">
                Update your public information
              </p>
            </Modal.Header>

            <div className="my-2 h-px w-full bg-gray-200 opacity-50" />

            <Modal.Body className="px-8 pb-8 pt-4">
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <TextField name="name" isRequired type="text">
                  <Label className="text-[#093C5D] font-bold text-sm md:text-base mb-1 ml-1 uppercase">
                    Name
                  </Label>

                  <Input
                    placeholder="Enter new name"
                    className="rounded-md border border-gray-200 py-3"
                  />
                </TextField>

                <TextField name="image" isRequired type="url">
                  <Label className="text-[#093C5D] font-bold text-sm md:text-base mb-1 ml-1 uppercase">
                    Profile Picture URL
                  </Label>

                  <Input
                    placeholder="Enter new profile picture URL"
                    className="rounded-md border border-gray-200 py-3"
                  />
                </TextField>

                <div className="flex gap-3 mt-4">
                  <Button
                    type="button"
                    variant="light"
                    onPress={() => setIsOpen(false)}
                    className="flex-1 font-bold text-gray-500 rounded-xl hover:bg-gray-100"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    isLoading={loading}
                    className="flex-1 bg-[#3B7597] hover:bg-[#3B7597]/90 text-white font-bold rounded-xl shadow-lg shadow-blue-100"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
