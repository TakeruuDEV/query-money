"use client";

import { CircleAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const segundos_para_redirect = 5;

export default function MetaNotFound(){
    const router = useRouter();
    const [contagem, setContagem] = useState(segundos_para_redirect)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContagem((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            router.push("/metas")
        }, segundos_para_redirect * 1000);

        return () => {
            clearInterval(intervalo);
            clearTimeout(timeout);
        };
    }, [router])
    return (
      <div>
        <div className="min-h-screen bg-[#0A0D12] flex items-center justify-center">
          <div className="bg-[#161b22] border border-[#21262d] rounded-xl px-8 py-10 text-center max-w-sm">
            <div className="w-12 h-12 rounded-full bg-[#1f2937] flex items-center justify-center mx-auto mb-4">
              <CircleAlert className="w-6 h-6 text-[#f87171]" />
            </div>
            <p className="text-white font-medium mb-1">Meta não encontrada</p>
            <p className="text-sm text-[#6b7280]">
              Verifique o link ou volte para a lista de metas.
            </p>
            <span className="text-sm text-[#6b7280] font-bold">
                Redirecionando em {contagem}s...
            </span>
          </div>
        </div>
      </div>
    );
}