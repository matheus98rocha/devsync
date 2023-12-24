"use client";
import React from "react";

import Auth from "./layout/auth/auth.component";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import UnathenticatedUser from "./layout/unathenticated-user/unathenticated-user";

export default function Home() {
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (session) {
      redirect("/home");
    }
  }, [session, status]);

  return (
    <UnathenticatedUser>
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
    </UnathenticatedUser>
  );
};