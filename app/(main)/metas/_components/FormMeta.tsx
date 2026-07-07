"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FormMeta({ itemMeta }: any) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [nome, setNome] = useState(itemMeta.nome)
  const [valorGuardado, setValorGuardado] = useState(Number(itemMeta.valorGuardado))
  const [valorObjetivo, setValorObjetivo] = useState(Number(itemMeta.valorObjetivo))

  const progresso = valorObjetivo > 0
    ? Math.min(100, Math.round((valorGuardado / valorObjetivo) * 100))
    : 0

  async function atualizar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    await fetch("/api/metas", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: itemMeta.id,
        nome,
        valorGuardado,
        valorObjetivo,
      }),
    })

    router.push("/metas")
  }

  return (
    <div className="bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden">

      <div className="h-0.75 bg-[#21262d] relative">
        <div
          className="h-full bg-[#00C896] transition-all duration-500"
          style={{ width: `${progresso}%` }}
        />
      </div>

      <div className="px-6 pt-5 pb-4 border-b border-[#21262d]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#6b7280]">Progresso atual</span>
          <span className="text-xs font-mono text-[#00C896]">{progresso}%</span>
        </div>
        <div className="flex justify-between text-xs font-mono text-[#6b7280]">
          <span>R$ {valorGuardado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
          <span>R$ {valorObjetivo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
        </div>
      </div>

      <form onSubmit={atualizar} className="p-6 flex flex-col gap-5">

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#6b7280] uppercase tracking-widest">
            Nome da meta
          </label>
          <input
            name="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="
              bg-[#0f1117] border border-[#21262d] rounded-lg px-4 py-3
              text-sm text-white placeholder:text-[#3d4451]
              focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
              transition-all duration-150
            "
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#6b7280] uppercase tracking-widest">
            Valor guardado
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#4b5563] font-mono select-none">
              R$
            </span>
            <input
              name="valorGuardado"
              type="number"
              step="0.01"
              value={valorGuardado}
              onChange={(e) => setValorGuardado(Number(e.target.value))}
              className="
                w-full bg-[#0f1117] border border-[#21262d] rounded-lg pl-10 pr-4 py-3
                text-sm text-white font-mono
                focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
                transition-all duration-150
                [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
              "
            />
          </div>
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
              name="valorObjetivo"
              type="number"
              step="0.01"
              value={valorObjetivo}
              onChange={(e) => setValorObjetivo(Number(e.target.value))}
              className="
                w-full bg-[#0f1117] border border-[#21262d] rounded-lg pl-10 pr-4 py-3
                text-sm text-white font-mono
                focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20
                transition-all duration-150
                [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
              "
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            mt-1 w-full bg-[#00C896] hover:bg-[#00b085] active:scale-[0.98]
            text-[#0a1f18] font-medium text-sm rounded-lg py-3
            transition-all duration-150 flex items-center justify-center gap-2
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <>
              <svg className="animate-spin" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
              </svg>
              Salvando...
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M12.5 3.5l-7 7-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Salvar alterações
            </>
          )}
        </button>

      </form>
    </div>
  )
}