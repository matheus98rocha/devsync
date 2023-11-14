"use server"

import { prisma } from "@/utils/lib/db/prisma";

export const publish = async (text: string) => {
    const result = await prisma.post.create({ data: { text: text } });
    return result;
};