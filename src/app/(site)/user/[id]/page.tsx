import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import { prisma } from "@/utils/lib/db/prisma";
import Image from "next/image";
import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

interface UserPageProps {
  params: {
    id: string;
  };
}

async function User({ params: { id } }: UserPageProps) {
  const userData = await prisma.user.findUnique({ where: { id } });
  return (
    <LoaggedUser>
      <div className="h-screen w-[89%] flex justify-start flex-col">
        <div className="bg-white rounded-md shadow-[inset_0_-1px_20px_rgba(0,0,0,0.2)] h-1/3 w-full"></div>
        <div className="h-40 w-40 rounded-full bg-white shadow flex items-center justify-center absolute top-60 left-36 z-20">
          <Image
            src={userData?.image as string}
            alt="user-details-image"
            width={150}
            height={150}
            className="rounded-full shadow-sm"
          />
        </div>
        <div className="w-full flex items-center justify-end mt-2 gap-4 pr-5">
          <button className="bg-none border border-primary p-2 rounded-md text-white">
            <BsFillEnvelopeFill color="7e5dca" />
          </button>
          <button className="bg-primary p-2 rounded-md text-white hover:bg-primary-hover">
            Seguir
          </button>
        </div>
      </div>
    </LoaggedUser>
  );
}

export default User;
