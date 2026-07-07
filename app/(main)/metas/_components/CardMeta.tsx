import BotaoCriar from "@/components/ui/BotaoCriar";
import BarraProgresso from "./BarraProgresso";
import ButtonThreePoints from "@/components/ui/ButtonThreePoints";
import BotaoEncerrar from "@/components/ui/BotaoEncerrar";

interface CardMetaProps {
  id: string;
  nome: string;
  valorGuardado: number;
  valorObjetivo: number;
  onMetaEncerrada?: (id: string) => void;
}

export default function CardMeta({
  id,
  nome,
  valorGuardado,
  valorObjetivo,
  onMetaEncerrada,
}: CardMetaProps) {
  const faltam = valorObjetivo - valorGuardado;
  const concluida = faltam <= 0;

  return (
    <div className="relative bg-[#161b22] border border-[#21262d] rounded-xl overflow-hidden hover:border-[#00C896]/30 transition-all duration-300">

      <div className={`h-0.75 ${concluida ? "bg-[#00C896]" : "bg-[#21262d]"}`}>
        {!concluida && (
          <div
            className="h-full bg-[#00C896] transition-all duration-700"
            style={{ width: `${Math.min(100, (valorGuardado / valorObjetivo) * 100)}%` }}
          />
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="text-sm font-medium text-white truncate">{nome}</h3>
            {concluida && (
              <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20">
                Concluída
              </span>
            )}
          </div>
          <ButtonThreePoints id={id} onSucesso={() => onMetaEncerrada?.(id)}/>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#6b7280] uppercase tracking-widest">Guardado</span>
            <span className="text-sm font-mono text-white">
              R$ {valorGuardado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex flex-col gap-0.5 items-end">
            <span className="text-[11px] text-[#6b7280] uppercase tracking-widest">Objetivo</span>
            <span className="text-sm font-mono text-white">
              R$ {valorObjetivo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <BarraProgresso valorPossuido={valorGuardado} valorTotal={valorObjetivo} />

        <div className="flex justify-between items-center bg-[#0f1117] border border-[#21262d] rounded-lg px-4 py-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] text-[#6b7280] uppercase tracking-widest">
              {concluida ? "Concluído" : "Faltam"}
            </span>
            <span className={`text-sm font-mono font-medium ${concluida ? "text-[#00C896]" : "text-white"}`}>
              {concluida
                ? "Meta atingida!"
                : `R$ ${faltam.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
            </span>
          </div>

          {concluida
            ? <BotaoEncerrar titulo="Encerrar meta" id={id} onSucesso={() => onMetaEncerrada?.(id)} />
            : <BotaoCriar titulo="Aportar/Editar" href={`/metas/${id}`} />
          }
        </div>

      </div>
    </div>
  );
}