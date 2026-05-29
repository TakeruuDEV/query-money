import { BarraFinanceira } from "./barra-financeira";

interface CardValorRestanteProps {
    valorRestante: number;
    entrada: number;
}

export function CardValorRestante({ valorRestante, entrada }: Readonly<CardValorRestanteProps>) {
    return (
        //bg-muted/50
        <div className="border border-[#626870] bg-[#13181D] rounded-md w-56 p-3">
            <span className="pb-1 font-semibold uppercase text-[11px] tracking-wider text-[#787F89]">Saldo do Mês</span>
            <p className="tabular mt-1.5 text-lg font-semibold text-[#F3F5F8]">
                R$ {valorRestante}
            </p>
            <BarraFinanceira valorRestante={valorRestante} entrada={entrada} />
        </div>
    );
}