import { CategoriaGasto } from '@prisma/client';
import { GastoReqDto } from '../dtos/request/gasto-req.dto';

export const gastos: GastoReqDto[] = [
  {
    id: 'f038c2dc-d86b-431c-a986-3dbe6573c975',
    descricao: 'Supermercado',
    valor: 250.75,
    data: new Date('2025-05-15'),
    categoria: CategoriaGasto.ALIMENTACAO,
    id_usu_fk: '0450ad85-a676-4c89-902f-ea84103c3764',
  },
  {
    id: '3d7c1dea-3bac-41fc-b2a2-f2439785151c',
    descricao: 'Uber para o trabalho',
    valor: 42.0,
    data: new Date('2025-05-17'),
    categoria: CategoriaGasto.TRANSPORTE,
    id_usu_fk: '0450ad85-a676-4c89-902f-ea84103c3764',
  },
  {
    id: 'c9e0ad0a-434c-4201-9bb7-60e6a8d83dba',
    descricao: 'Aluguel',
    valor: 1200.0,
    data: new Date('2025-05-01'),
    categoria: CategoriaGasto.MORADIA,
    id_usu_fk: '0450ad85-a676-4c89-902f-ea84103c3764',
  },
  {
    id: 'bc0245fe-988a-4acf-aac4-9e16f0265d2d',
    descricao: 'Supermercado',
    valor: 500.75,
    data: new Date('2025-04-15'),
    categoria: CategoriaGasto.ALIMENTACAO,
    id_usu_fk: '0450ad85-a676-4c89-902f-ea84103c3764',
  },
  {
    id: '9cd80986-5db4-40b0-b380-bf2c24c40380',
    descricao: 'Curso de inglês',
    valor: 350.0,
    data: new Date('2025-05-10'),
    categoria: CategoriaGasto.EDUCACAO,
    id_usu_fk: '70b06983-ffc7-4f24-a3d5-2c19a5ace81e',
  },
  {
    id: '6e2a7e64-5f82-420f-a82c-8ffbad37013d',
    descricao: 'Consulta médica',
    valor: 180.0,
    data: new Date('2025-05-12'),
    categoria: CategoriaGasto.SAUDE,
    id_usu_fk: '70b06983-ffc7-4f24-a3d5-2c19a5ace81e',
  },
  {
    id: 'bc3ef82e-c5ff-41a2-aa76-cbdb8ba31650',
    descricao: 'Cinema',
    valor: 65.0,
    data: new Date('2025-05-19'),
    categoria: CategoriaGasto.LAZER,
    id_usu_fk: '70b06983-ffc7-4f24-a3d5-2c19a5ace81e',
  },
];
