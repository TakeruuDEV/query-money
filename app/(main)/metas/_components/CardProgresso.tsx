import BarraProgresso from "./BarraProgresso";
import BotaoNovaMeta from "./BotaoNovaMeta";

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
  return (
    <div className="text-white border border-[#1B1F28] bg-[#13181D] rounded-xl w-full p-6 flex items-center justify-between ma-">
      
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400 uppercase tracking-wider">
          Progresso geral
        </span>

        <span className="text-2xl font-semibold">
          R$ {valorPossuido.toLocaleString("pt-BR")}
        </span>

        <span className="text-xs text-gray-400">
          de R$ {valorTotal.toLocaleString("pt-BR")} • {metasAtivas} metas ativas
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 w-[40%]">
        <span className="text-xs text-gray-400">Conquistado</span>

        <BarraProgresso
          valorPossuido={valorPossuido}
          valorTotal={valorTotal}
        />
      </div>

      <BotaoNovaMeta />
    </div>
  );
}