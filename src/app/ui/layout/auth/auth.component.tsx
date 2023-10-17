"use client";
import React from "react";
import SocialMediaIcons from "./components/social-media-icons/social-media-icons.components";

import Link from "next/link";
import { AuthProps } from "./auth.types";
import PrimaryInput from "../../components/input/primary-input.component";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import PrimaryButton from "../../components/button/primary-button.component";
import Image from "next/image";

import iconApplication from "../../../../../public/apple-touch-icon.svg";

function Auth({ type }: AuthProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { data: session } = useSession();

  React.useEffect(() => {
    if (session) {
      redirect("/home");
    }
  }, [session]);

  return (
    <div
      className="
  flex
  items-center
  flex-col
  justify-center
  gap-8
  bg-background
  w-screen
  h-screen
  lg:w-[600px]
  lg:h-52
  py-9
  px-10
  rounded-md
  shadow-lg
  animate-fade-up
  "
    >
      <div className="flex items-center justify-center gap-4">
        <Image
          src={iconApplication}
          height={40}
          width={40}
          alt={"principal-icon"}
        />
        <h1 className="text-primary text-4xl font-bold">DevSync</h1>
      </div>
      <SocialMediaIcons />
    </div>
  );
}

export default Auth;
