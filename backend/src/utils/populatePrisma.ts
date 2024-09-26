import { PrismaClient, Word } from '@prisma/client';
import { createWord, getWords } from '../resources/palavra/palavra.services';
const prisma = new PrismaClient();

const palavras = [
    "icomp", "ufam", "computador", "petcomp", "binario"
]

async function main() {

  //Popula apenas se não estiver no banco
  const palavrasNoBancoBruta = await getWords();
  const palavrasFiltradas = []
  
  for(let palavraBruta of palavrasNoBancoBruta!){
    palavrasFiltradas.push(palavraBruta.palavra);
  }
  for(let palavra of palavras){
    if(!palavrasFiltradas.includes(palavra)){
      await createWord({palavra: palavra});
    }
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
