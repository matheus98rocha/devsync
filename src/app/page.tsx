"use client";
import React from "react";

import Auth from "./ui/layout/auth/auth.component";
import Loading from "./ui/components/loading/loading.component";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  session && <Loading />;

  return (
    <>
      <div
        className="
      h-screen 
      w-screen 
      flex 
      items-center 
      justify-center
      md:flex-none
    "
      >
        <Auth type="login" />
      </div>
    </>
  );
}
