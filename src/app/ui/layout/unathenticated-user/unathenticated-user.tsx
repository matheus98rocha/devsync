"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import Loading from "../../components/loading/loading.component";

interface UnathenticatedUserProps {
  children: React.ReactNode;
}

function UnathenticatedUser({ children }: UnathenticatedUserProps) {
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (session) {
      redirect("/home");
    }
  }, [session, status]);

  return (
    <div>
      {status === "loading" ? (
        <div
          className="
          h-screen 
          w-screen 
          flex 
          items-center 
          justify-center
          md:flex-none"
        >
          <Loading />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default UnathenticatedUser;
