import { PrismaClient, Smeq } from '@prisma/client';
import { CreateSmeqDto } from './smeq.types';

const prisma = new PrismaClient();

export const getSmeqs = async () : Promise<Smeq[] | null> => {
    return await prisma.smeq.findMany();
};

/* export const getAtivo = async (tradingCode : string) : Promise<Ativo | null> => {
    return await prisma.ativo.findUnique({
      where: { tradingCode: tradingCode },
    });
}; */

export const createSmeq = async (data: CreateSmeqDto) => {
  return await prisma.smeq.create({data})
}

export const deleteAllSmeqs= async () => {
    return await prisma.smeq.deleteMany();
}