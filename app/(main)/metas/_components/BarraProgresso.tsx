import { Progress } from "@/components/ui/progress";

interface BarraProgressoProps {
  valorPossuido: number;
  valorTotal: number;
}

export default function BarraProgresso({
  valorPossuido,
  valorTotal,
}: BarraProgressoProps) {
  const percentual = valorTotal > 0 ? Math.min(100, (valorPossuido / valorTotal) * 100) : 0;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <Progress
        value={percentual}
        className="w-full h-1.5 bg-[#21262d] [&>div]:bg-[#00C896] [&>div]:transition-all [&>div]:duration-700"
      />
      <div className="flex justify-end">
        <span className="text-[11px] font-mono text-[#00C896]">
          {percentual.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}