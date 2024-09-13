import { Word } from "@prisma/client";

export type CreateWordDto = Pick<Word ,  "palavra">;