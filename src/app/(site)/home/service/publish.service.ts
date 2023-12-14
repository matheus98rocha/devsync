"use server"

import { prisma } from "@/utils/lib/db/prisma";

export const publish = async (text: string, authorId: string, name: string, image: string) => {
    const result = await prisma.post.create({
        data: {
            text: text, author: { connect: { id: authorId } }, name: name, image: image,
        }
    });
    return result;
};