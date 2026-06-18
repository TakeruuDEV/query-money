import { Progress } from "@/components/ui/progress";

interface BarraProgressoProps {
  valorPossuido: number;
  valorTotal: number;
}

export default function BarraProgresso({
  valorPossuido,
  valorTotal,
}: BarraProgressoProps) {
  const percentual = (valorPossuido / valorTotal) * 100;
  
  return (
    <div className="w-full flex flex-col gap-2">
      <Progress value={percentual} 
      className="w-full h-3 bg-[#0D1217]" />
      <div className="text-xs text-[#4ED589] justify-end flex">
        {percentual.toFixed(1)}%
      </div>
    </div>
  );
}
