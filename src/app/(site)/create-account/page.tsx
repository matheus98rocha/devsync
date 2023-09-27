import React from "react";
import Auth from "../../ui/layout/auth/auth.component";
import UnathenticatedUser from "@/app/ui/layout/unathenticated-user/unathenticated-user";

export const metadata = {
  title: "Criar Conta",
};

export default function CreateAccount() {
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
        <Auth type="create-account" />
      </div>
    </UnathenticatedUser>
  );
}
