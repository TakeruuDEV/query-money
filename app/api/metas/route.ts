import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const meta = await prisma.meta.create({
    data: {
      nome: body.nome,
      valorObjetivo: body.valorObjetivo,
      valorGuardado: body.valorGuardado ?? 0
    }
  });

  return NextResponse.json({
    ...meta,
    valorObjetivo: Number(meta.valorObjetivo),
    valorGuardado: Number(meta.valorGuardado)
  });
}

export async function GET() {
  const metas = await prisma.meta.findMany();

  return NextResponse.json(metas.map(meta => ({
    ...meta,
    valorObjetivo: Number(meta.valorObjetivo),
    valorGuardado: Number(meta.valorGuardado)
  })));
}

export async function PUT(request: Request) {
  const body = await request.json();

  const meta = await prisma.meta.update({
    where: { id: body.id },
    data: {
      nome: body.nome,
      valorObjetivo: body.valorObjetivo,
      valorGuardado: body.valorGuardado
    }
  });

  return NextResponse.json({
    ...meta,
    valorObjetivo: Number(meta.valorObjetivo),
    valorGuardado: Number(meta.valorGuardado)
  });
}

export async function DELETE(request: Request) {
  const body = await request.json();

  await prisma.meta.delete({
    where: { id: body.id }
  });

  return NextResponse.json({ message: 'Meta deletada com sucesso' });
}