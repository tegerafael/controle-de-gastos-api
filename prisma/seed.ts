import { PrismaClient } from '@prisma/client';
import { gastos } from '../src/app/modules/gasto/data/gasto.seed';
import { usuarios } from '../src/app/modules/usuario/data/usuario.seed';
const prisma = new PrismaClient();

async function criarUsuarios() {
  const usuariosExistentes = await prisma.usuario.findMany();
  if (usuariosExistentes.length === 0) {
    await prisma.usuario.createMany({
      data: usuarios,
    });
    console.log('Usuários criados com sucesso');
  } else {
    console.log('Usuários já existem, pulando criação');
  }
}

async function criarGastos() {
  const gastosExistentes = await prisma.gasto.findMany();
  if (gastosExistentes.length === 0) {
    await prisma.gasto.createMany({
      data: gastos,
    });
    console.log('Gastos criados com sucesso');
  } else {
    console.log('Gastos já existem, pulando criação');
  }
}

async function main() {
  try {
    await criarUsuarios();
    await criarGastos();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
