import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.findMany();
  console.log('🚀 ~ main ~ user:', user);
};

main()
  .catch((e) => {
    console.log('🚀 ~ e:', e);
    console.log(e.message);
  })
  .finally(async () => {
    console.log('finally');
    await prisma.$disconnect();
  });
