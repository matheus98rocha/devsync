"use server"

import { prisma } from "@/utils/lib/db/prisma";
import { postMessage } from "./post-message";

export const publish = async () => {
    const text = postMessage();
    const result = await prisma.post.create({ data: { text: text } });
    return result;
};