"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { toast } from "react-toastify";
import { GrGoogle } from "react-icons/gr";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        return;
      }

      if (data) {
        toast.success("Account created successfully.");
        router.push("/");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <MotionWrapper>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[80vh] py-10 px-4">
        <div className="bg-gray-50 border p-10 rounded-lg  shadow-lg w-full md:w-[75%] lg:w-[33%] my-10">
          <h2 className="text-2xl text-center font-bold">
            Register a new account
          </h2>

          <hr className="my-5 border border-gray-300" />

          <Form className="flex flex-col gap-6" onSubmit={handleRegister}>
            <TextField isRequired name="name" type="text">
              <Label className="text-lg">Name</Label>
              <Input
                className="rounded-md py-3"
                placeholder="Enter your name"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="photo" type="text">
              <Label className="text-lg">Photo URL</Label>
              <Input className="rounded-md py-3" placeholder="Photo URL" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-lg">Email</Label>
              <Input
                className="rounded-md py-3"
                placeholder="Enter your email"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              className="relative"
              name="password"
              type={showPassword ? "text" : "password"}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-lg">Password</Label>
              <Input
                className="rounded-md py-3"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-12 cursor-pointer"
              >
                {showPassword ? <LuEye size={16} /> : <LuEyeClosed size={16} />}
              </span>

              <FieldError />
            </TextField>
            <div className="mt-5">
              <Button
                className="rounded-md w-full bg-[#3A7497] py-5"
                type="submit"
              >
                Register
              </Button>
            </div>

            <p className="text-center text-base font-medium">Or</p>

            <Button
              onClick={handlGoogleSignIn}
              variant="outline"
              className="w-full border-2 py-5"
            >
              <GrGoogle /> Sign In With Google
            </Button>
          </Form>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default RegisterPage;
