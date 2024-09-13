import { PrismaClient, Word } from '@prisma/client';
import { CreateWordDto } from './palavra.types';

const prisma = new PrismaClient();

export const getWords = async () : Promise<Word[] | null> => {
    return await prisma.word.findMany();
};

/* export const getAtivo = async (tradingCode : string) : Promise<Ativo | null> => {
    return await prisma.ativo.findUnique({
      where: { tradingCode: tradingCode },
    });
}; */

export const createWord = async (data: CreateWordDto) => {
  return await prisma.word.create({data})
}

export const deleteAllWords = async () => {
    return await prisma.word.deleteMany();
}