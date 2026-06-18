"use client";

import { navLinks } from "@/config/navigation";
import { FiltroMesAno } from "./components/filtro-mes-ano";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const title = navLinks.find((link) => link.href === pathname)?.title;
  const subtitle = navLinks.find((link) => link.href === pathname)?.subtitle;
  const buttonTitle = title === "Dashboard" ? "Nova transação" : navLinks.find((link) => link.href === pathname)?.buttonTitle;
  return (
    <header className="bg-[#0A0D12] text-white p-4 border-b border-[#1B1F28]">
      <div className="flex flex-row justify-between leading-none">
        <div className="flex flex-col gap-1 p-1.5">
          <span className="text-[16px] font-semibold tracking-tight text-[#F3F5F8]">
            {title}
          </span>
          <span className="text-[13px] text-[#787F89]">{subtitle}</span>
        </div>
        <div className="flex items-center gap-3">
          <FiltroMesAno/>
          <Button variant="outline" size="lg" className="text-black border-none bg-[#4ED589] hover:bg-[#4ED589]/90 hover:cursor-pointer">
            <Plus className="h-4 w-4" />
            {buttonTitle}
          </Button>
        </div>
      </div>
    </header>
  );
}
