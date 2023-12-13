import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import { prisma } from "@/utils/lib/db/prisma";
import Image from "next/image";
import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import UserDetails from "../components/user-details/user-details.component";

interface UserPageProps {
  params: {
    id: string;
  };
}

async function User({ params: { id } }: UserPageProps) {
  let userData = await prisma.user.findUnique({ where: { id } });

  return (
    <LoaggedUser currentPage="user-details">
      <div className="h-screen w-screen flex justify-start flex-col">
        <div className="bg-white rounded-md shadow-[inset_0_-1px_20px_rgba(0,0,0,0.2)] h-1/3 w-full"></div>
          <UserDetails
            image={userData?.image || ""}
            name={userData?.name || ""}
          />
        <div className="w-full flex items-center justify-end mt-2 gap-4 pr-5">
          <button className="bg-none border border-primary p-2 rounded-md text-white">
            <BsFillEnvelopeFill color="7e5dca" />
          </button>
          <button className="bg-primary p-2 rounded-md text-white hover:bg-primary-hover">
            Seguir
          </button>
        </div>
        <div className="flex h-full w-full bg-red-400">
          <p>Eita</p>
        </div>
      </div>
    </LoaggedUser>
  );
}

export default User;
