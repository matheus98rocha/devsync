"use server"

import { prisma } from "@/utils/lib/db/prisma";

export const findAllUsers = async () => await prisma.user.findMany({ orderBy: { id: "desc" } });