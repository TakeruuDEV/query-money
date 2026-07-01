"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function createMeta() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [valorObjetivo, setValorObjetivo] = useState("");
  const [valorGuardado, setValorGuardado] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("/api/metas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          valorObjetivo: Number(valorObjetivo),
          valorGuardado: Number(valorGuardado),
        }),
      });
      const data = await response.json();

      alert("Meta criada com sucesso");

      setNome("");
      setValorObjetivo("");
      setValorGuardado("");
      router.push("/metas");
    } catch (error) {
      console.error("Erro ao criar meta:", error);
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1117] flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-md">

        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.push("/metas")}
            className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#00C896] transition-colors mb-6"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Voltar para metas
          </button>
          <h1 className="text-2xl font-medium text-white tracking-tight">Nova meta</h1>
          <p className="text-sm text-[#6b7280] mt-1">Defina um objetivo e comece a guardar</p>
        </div>

        <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">

          <div className="h-0.75 bg-[#00C896]" />

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#6b7280] uppercase tracking-widest">
                Nome da meta
              </label>
              <input
                type="text"
                placeholder="Ex: Notebook, Viagem, Reserva..."
                className="
                  bg-[#0f1117] border border-[#21262d] rounded-lg px-4 py-3
                  text-sm text-white placeholder:text-[#3d4451]
                  focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
                  transition-all duration-150 font-sans
                "
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#6b7280] uppercase tracking-widest">
                Valor objetivo
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] font-mono select-none">
                  R$
                </span>
                <input
                  type="number"
                  placeholder="0,00"
                  className="
                    w-full bg-[#0f1117] border border-[#21262d] rounded-lg pl-10 pr-4 py-3
                    text-sm text-white placeholder:text-[#3d4451] font-mono
                    focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
                    transition-all duration-150
                    [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  "
                  value={valorObjetivo}
                  onChange={(e) => setValorObjetivo(String(parseFloat(e.target.value)))}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#6b7280] uppercase tracking-widest">
                Já guardado
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] font-mono select-none">
                  R$
                </span>
                <input
                  type="number"
                  placeholder="0,00"
                  className="
                    w-full bg-[#0f1117] border border-[#21262d] rounded-lg pl-10 pr-4 py-3
                    text-sm text-white placeholder:text-[#3d4451] font-mono
                    focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
                    transition-all duration-150
                    [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  "
                  value={valorGuardado}
                  onChange={(e) => setValorGuardado(String(parseFloat(e.target.value)))}
                />
              </div>
            </div>

            {valorObjetivo && Number(valorObjetivo) > 0 && (
              <div className="bg-[#0f1117] border border-[#21262d] rounded-lg px-4 py-3 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#6b7280]">Progresso inicial</span>
                  <span className="text-xs font-mono text-[#00C896]">
                    {Math.min(100, Math.round((Number(valorGuardado) / Number(valorObjetivo)) * 100))}%
                  </span>
                </div>
                <div className="h-1.5 bg-[#21262d] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00C896] rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, Math.round((Number(valorGuardado) / Number(valorObjetivo)) * 100))}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs font-mono text-[#6b7280]">
                  <span>R$ {Number(valorGuardado || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                  <span>R$ {Number(valorObjetivo).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="
                mt-1 w-full bg-[#00C896] hover:bg-[#00b085] active:scale-[0.98]
                text-[#0a1f18] font-medium text-sm rounded-lg py-3
                transition-all duration-150 flex items-center justify-center gap-2
              "
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Criar meta
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}