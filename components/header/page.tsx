"use client";

import { navLinks } from "@/config/navigation";
import { FiltroMesAno } from "./components/filtro-mes-ano";
import { usePathname } from "next/navigation";
import BotaoCriar from "../ui/BotaoCriar";

export default function Header() {
  const pathname = usePathname();
  const title = navLinks.find((link) => link.href === pathname)?.title;
  const subtitle = navLinks.find((link) => link.href === pathname)?.subtitle;
  const buttonTitle =
    title === "Dashboard"
      ? "Nova transação"
      : navLinks.find((link) => link.href === pathname)?.buttonTitle;
  const buttonHref =
    title === "Dashboard"
      ? "/transacoes/nova-transacao"
      : navLinks.find((link) => link.href === pathname)?.hrefButton;
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
          <FiltroMesAno />
          {buttonHref && (
            <BotaoCriar
              titulo={buttonTitle ?? "Criar"}
              href={buttonHref}
            />
          )}
        </div>
      </div>
    </header>
  );
}
