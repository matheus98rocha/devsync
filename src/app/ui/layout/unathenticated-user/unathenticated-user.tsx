"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import Loading from "../../components/loading/loading.component";
import LoadingFullScreen from "../../components/loading-full-screen/loading-full-screen";

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

  return <div>{status === "loading" ? <LoadingFullScreen /> : children}</div>;
}

export default UnathenticatedUser;
