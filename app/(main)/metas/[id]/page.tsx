import prisma from "@/lib/prisma";
import FormMeta from "../_components/FormMeta";
import { redirect } from "next/navigation";
import MetaNotFound from "../_components/MetaNotFound";

export default async function AportarMeta({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const itemMeta = await prisma.meta.findUnique({
    where: {
      id: id,
    },
  });

  if (!itemMeta) {
    return (
      <MetaNotFound/>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <a
            href="/metas"
            className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00C896] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Voltar para metas
          </a>
          <h1 className="text-2xl font-medium text-white tracking-tight">
            Aportar / Editar
          </h1>
          <p className="text-sm text-[#6b7280] mt-1">
            Ajuste os valores da meta{" "}
            <span className="text-[#00C896] font-medium">{itemMeta.nome}</span>
          </p>
        </div>

        <FormMeta
          itemMeta={{
            ...itemMeta,
            valorObjetivo: Number(itemMeta.valorObjetivo),
            valorGuardado: Number(itemMeta.valorGuardado),
          }}
        />
      </div>
    </div>
  );
}
