import BarraProgresso from "./BarraProgresso";
import BotaoCriar from "../../../../components/ui/BotaoCriar";

interface CardProgressoProps {
  valorPossuido: number;
  valorTotal: number;
  metasAtivas: number;
}

export default function CardProgresso({
  valorPossuido,
  valorTotal,
  metasAtivas,
}: CardProgressoProps) {
  const progresso = valorTotal > 0
    ? Math.min(100, Math.round((valorPossuido / valorTotal) * 100))
    : 0;

  return (
    <div className="relative bg-[#161b22] border border-[#21262d] rounded-xl w-full overflow-hidden">

      <div className="h-0.75 bg-[#21262d]">
        <div
          className="h-full bg-[#00C896] transition-all duration-700"
          style={{ width: `${progresso}%` }}
        />
      </div>

      <div className="p-6 flex items-center justify-between gap-6">

        <div className="flex flex-col gap-1 min-w-fit">
          <span className="text-xs text-[#6b7280] uppercase tracking-widest">
            Progresso geral
          </span>
          <span className="text-2xl font-medium text-white font-mono tracking-tight">
            R$ {valorPossuido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
          <span className="text-xs text-[#6b7280]">
            de R$ {valorTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} · {metasAtivas} metas ativas
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1 max-w-[40%]">
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#6b7280]">Conquistado</span>
            <span className="text-xs font-mono text-[#00C896]">{progresso}%</span>
          </div>
          <BarraProgresso valorPossuido={valorPossuido} valorTotal={valorTotal} />
        </div>

        <BotaoCriar titulo="Nova Meta" href="/metas/nova-meta" />

      </div>
    </div>
  );
}