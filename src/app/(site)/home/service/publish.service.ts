"use server"

import { prisma } from "@/utils/lib/db/prisma";

export const publish = async (text: string, authorId: string) => {
    const result = await prisma.post.create({
        data: {
            text: text, author: { connect: { id: authorId } }
        }
    });
    return result;
};