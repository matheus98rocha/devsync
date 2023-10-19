import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import { prisma } from "@/utils/lib/db/prisma";
import React from "react";

interface UserPageProps {
  params: {
    id: string;
  };
}

async function User({ params: { id } }: UserPageProps) {
  const userData = await prisma.user.findUnique({ where: { id } });
  return (
    <LoaggedUser currentPage="user">
      <p>{userData?.name}</p>
    </LoaggedUser>
  );
}

export default User;
