"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoreHorizontal, Pencil, Trash2, AlertTriangle, X, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ButtonThreePointsProps {
  id: string;
  onSucesso?: () => void;
}

export default function ButtonThreePoints({ id, onSucesso }: ButtonThreePointsProps) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function excluirMeta() {
    setCarregando(true);
    setErro(null);

    try {
      const response = await fetch(`/api/metas`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Falha ao excluir a meta");

      setDialogOpen(false);
      onSucesso?.();
      router.refresh();
    } catch (err) {
      console.error(err);
      setErro("Não foi possível excluir a meta. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-center w-7 h-7 rounded-lg bg-transparent hover:bg-[#21262d] transition-colors">
            <MoreHorizontal className="w-4 h-4 text-[#6b7280]" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-36 bg-[#161b22] border border-[#21262d] rounded-lg p-1 shadow-xl"
          align="end"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#9ca3af] hover:bg-[#21262d] hover:text-white cursor-pointer transition-colors"
              onClick={() => router.push(`/metas/${id}`)}
            >
              <Pencil className="w-3.5 h-3.5" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#f87171] hover:bg-[#f87171]/10 hover:text-[#f87171] cursor-pointer transition-colors"
              onClick={() => setDialogOpen(true)}
            >
              <Trash2 className="w-3.5 h-3.5" />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-[#161b22] border border-[#21262d] p-0 overflow-hidden gap-0 text-[#9ca3af]">
          <div className="h-0.75 bg-[#f87171]" />

          <div className="flex flex-col items-center gap-4 px-6 pt-8 pb-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f87171]/10 border border-[#f87171]/20">
              <AlertTriangle className="h-5 w-5 text-[#f87171]" strokeWidth={2} />
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-base font-medium text-white">Excluir meta</h3>
              <p className="text-sm text-[#6b7280] max-w-70">
                Tem certeza que deseja excluir esta meta? Esta ação não pode ser desfeita.
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
              onClick={excluirMeta}
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
                  Excluindo...
                </>
              ) : (
                <>
                  <X className="h-4 w-4" strokeWidth={2.5} />
                  Excluir
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}