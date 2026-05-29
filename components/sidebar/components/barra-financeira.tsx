import { Progress } from "../../ui/progress";

interface BarraFinanceiraProps {
  valorRestante: number;
  entrada: number;
}

export function BarraFinanceira({ valorRestante, entrada }: BarraFinanceiraProps) {
  const percentual = (valorRestante / entrada) * 100;

  return (
    <div className="w-full">
      <Progress value={percentual} className="h-2 rounded-full [&>div]:bg-linear-to-r [&>div]:from-green-400 [&>div]:to-emerald-600 bg-[#0D1217]" />
    </div>
  );
}