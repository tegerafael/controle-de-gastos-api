// import { PrismaClient } from '@prisma/client';
// import { addresses } from '../src/modules/address/data/addresses';
// import * as fs from 'fs';
// const prisma = new PrismaClient();

// function readSQLFile(fileName: string): string {
//   const filePath = `./${fileName}`;
//   return fs.readFileSync(filePath, 'utf8');
// }

// async function seedStates() {
//   const existingStates = await prisma.state.findMany();
//   if (existingStates.length === 0) {
//     const script = readSQLFile('insert_estados.sql');
//     await prisma.$executeRawUnsafe(script as any);
//     console.log('States seeded successfully');
//   } else {
//     console.log('States already exist, skipping seeding');
//   }
// }

// async function seedCities() {
//   const existingCities = await prisma.city.findMany();
//   if (existingCities.length === 0) {
//     const script = readSQLFile('insert_cidades.sql');
//     await prisma.$executeRawUnsafe(script as any);
//     console.log('Cities seeded successfully');
//   } else {
//     console.log('Cities already exist, skipping seeding');
//   }
// }

// async function seedAddresses() {
//   const existingAddresses = await prisma.address.findMany();
//   if (existingAddresses.length === 0) {
//     await prisma.address.createMany({
//       data: addresses,
//     });
//     console.log('Addresses seeded successfully');
//   } else {
//     console.log('Addresses already exist, skipping seeding');
//   }
// }

// async function main() {
//   try {
//     await seedStates();
//     await seedCities();
//     await seedAddresses();
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();
