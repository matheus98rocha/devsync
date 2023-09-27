"use client";
import React from "react";

import Auth from "./ui/layout/auth/auth.component";
import Loading from "./ui/components/loading/loading.component";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === "authenticated" && session) {
      redirect("/home");
    }
  }, [session, status]);

  if (status) return <div className="h-screen w-screen flex items-center justify-center"><Loading /></div>
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