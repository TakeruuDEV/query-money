"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function FiltroMesAno() {
  return (
    <div className="flex gap-2">
      <Select>
        <SelectTrigger className="w-35 cursor-pointer hover:bg-[#1B1F28] border-[#1B1F28]">
          <SelectValue placeholder="Mês" />
        </SelectTrigger>

        <SelectContent>
          {months.map((month) => (
            <SelectItem
              key={month}
              value={month}
            >
              {month}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-25 cursor-pointer hover:bg-[#1B1F28] border-[#1B1F28]">
          <SelectValue placeholder="Ano" />
        </SelectTrigger>

        <SelectContent>
          {[2024, 2025, 2026, 2027].map((year) => (
            <SelectItem
              key={year}
              value={String(year)}
            >
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}