import { PrismaClient, Tam } from '@prisma/client';
import { CreateTamDto } from './tam.types';

const prisma = new PrismaClient();

export const getTams = async () : Promise<Tam[] | null> => {
    return await prisma.tam.findMany();
};

/* export const getAtivo = async (tradingCode : string) : Promise<Ativo | null> => {
    return await prisma.ativo.findUnique({
      where: { tradingCode: tradingCode },
    });
}; */

export const createTam = async (data: CreateTamDto) => {
  return await prisma.tam.create({data})
}

export const deleteAllTams= async () => {
    return await prisma.tam.deleteMany();
}