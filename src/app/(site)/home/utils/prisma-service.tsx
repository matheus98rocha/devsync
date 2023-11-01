import { prisma } from "@/utils/lib/db/prisma";

export const prismaService = {
    users: async () => await prisma.user.findMany({ orderBy: { id: "desc" } }),
    publish: async (text: string) => await prisma.post.create({ data: { text: text } }),
};