"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, AlertTriangle, X, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

interface BotaoEncerrarProps {
  titulo: string;
  id: string;
  onSucesso?: () => void;
}

export default function BotaoEncerrar({ titulo, id, onSucesso }: BotaoEncerrarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function encerrarMeta() {
    setCarregando(true);
    setErro(null);

    try {
      const response = await fetch(`/api/metas`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Falha ao encerrar a meta");

      setOpen(false);
      onSucesso?.();
      router.refresh();
    } catch (err) {
      console.error(err);
      setErro("Não foi possível encerrar a meta. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="
            bg-[#00C896] hover:bg-[#00b085] text-[#0a1f18]
            border-none font-medium shadow-lg shadow-[#00C896]/20
            transition-all duration-150 active:scale-[0.98] cursor-pointer
          "
        >
          <Check className="h-4 w-4" strokeWidth={2.5} />
          {titulo}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25 bg-[#161b22] border border-[#21262d] p-0 overflow-hidden gap-0 text-[#9ca3af]">
        <div className="h-0.75 bg-[#f87171]" />

        <div className="flex flex-col items-center gap-4 px-6 pt-8 pb-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f87171]/10 border border-[#f87171]/20">
            <AlertTriangle className="h-5 w-5 text-[#f87171]" strokeWidth={2} />
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-medium text-white">Encerrar meta</h3>
            <p className="text-sm text-[#6b7280] max-w-70">
              Tem certeza que deseja encerrar esta meta? Esta ação não pode ser desfeita.
            </p>
            {erro && <p className="text-xs text-[#f87171] mt-1">{erro}</p>}
          </div>
        </div>

        <DialogFooter className="px-6 pb-6 gap-2 sm:gap-2 bg-[#161b22] border-t border-[#21262d] flex flex-col sm:flex-row">
          <DialogClose asChild>
            <Button
              variant="outline"
              disabled={carregando}
              className="
                flex-1 bg-transparent border border-[#21262d] text-[#9ca3af]
                hover:bg-[#21262d] hover:text-white cursor-pointer
                transition-all duration-150
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            disabled={carregando}
            onClick={encerrarMeta}
            className="
              flex-1 bg-[#f87171] hover:bg-[#ef4444] text-[#1a0f0f]
              border-none font-medium cursor-pointer
              transition-all duration-150 active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {carregando ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
                Encerrando...
              </>
            ) : (
              <>
                <X className="h-4 w-4" strokeWidth={2.5} />
                Encerrar
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}