"use server"

import { prisma } from "@/utils/lib/db/prisma";

export const handleDeletePost = async (postId: string) => await prisma.post.delete({ where: { id: postId } });