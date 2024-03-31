import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query'] });

const main = async () => {
  await prisma.user.deleteMany();
  await prisma.userPreference.deleteMany();
  await prisma.user.createMany({
    data: [
      {
        age: 28,
        name: 'weijie1',
        email: 'weijie1@gmail.com',
        isAdmin: false,
      },
      { age: 27, name: 'weijie2', email: 'weijie2@gmail.com', isAdmin: false },
    ],
  });
  await prisma.userPreference.createMany({
    data: [
      {
        id: '558257bb-6522-4adc-87cb-d645ec3f2bae',
        emailUpdates: true,
      },
      {
        id: '45f44089-5c4f-438f-a989-d5508e27c6a3',
        emailUpdates: true,
      },
    ],
  });
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
