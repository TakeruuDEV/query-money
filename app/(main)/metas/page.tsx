"use client";

import { useEffect, useState } from "react";
import CardMeta from "./_components/CardMeta";
import CardProgresso from "./_components/CardProgresso";

interface Meta {
  id: string;
  nome: string;
  valorGuardado: number;
  valorObjetivo: number;
}

export default function Metas() {
  const [metas, setMetas] = useState<Meta[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchMetas() {
    try {
      const response = await fetch("/api/metas");
      const data = await response.json();
      setMetas(data.map((m: any) => ({ ...m, id: String(m.id) })));
    } catch (error) {
      console.error("Erro ao buscar metas:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMetas();
  }, []);

  function removerMetaEncerrada(id: string) {
    setMetas((prev) => prev.filter((meta) => meta.id !== id));
  }

  const quantidadeMetasAtivas = metas.length;
  const valorTotalGuardado = metas.reduce((total, meta) => total + meta.valorGuardado, 0);
  const valorTotalObjetivo = metas.reduce((total, meta) => total + meta.valorObjetivo, 0);

  return (
    <div className="flex flex-col gap-6 p-7">
      <main className="flex flex-col gap-6">
        <CardProgresso
          valorPossuido={valorTotalGuardado}
          valorTotal={valorTotalObjetivo}
          metasAtivas={quantidadeMetasAtivas}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#161b22] border border-[#21262d] rounded-xl h-50 animate-pulse"
              />
            ))}
          </div>
        ) : metas.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
            <div className="w-12 h-12 rounded-full bg-[#161b22] border border-[#21262d] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="#6b7280" strokeWidth="1.5"/>
                <path d="M10 7v3.5l2 2" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-white font-medium text-sm">Nenhuma meta criada</p>
            <p className="text-xs text-[#6b7280]">Crie sua primeira meta e comece a guardar.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {metas.map((meta) => (
              <CardMeta
                key={meta.id}
                id={meta.id}
                nome={meta.nome}
                valorGuardado={meta.valorGuardado}
                valorObjetivo={meta.valorObjetivo}
                onMetaEncerrada={removerMetaEncerrada}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}