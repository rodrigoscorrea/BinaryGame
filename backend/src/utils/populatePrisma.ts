import { PrismaClient, Word } from '@prisma/client';
import { createWord } from '../resources/palavra/palavra.services';
const prisma = new PrismaClient();

const palavras = [
    "icomp", "ufam", "computador"
]

async function main() {
  for(let palavra of palavras){
    await createWord({palavra}); 
  }

  console.log("Banco de dados populado com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
