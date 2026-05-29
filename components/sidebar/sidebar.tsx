"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { PanelLeft, PanelLeftClose, Wallet } from "lucide-react";

import { navLinks } from "./nav-links";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

import { CardValorRestante } from "./components/card-valor-restante";

export function Sidebar({
  valorRestante,
  entrada,
}: {
  valorRestante: number;
  entrada: number;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

  return (
      <aside
        className={cn(
          "sticky top-0 hidden h-screen shrink-0 overflow-hidden flex-col border-r border-[#626870] bg-[#0E1217] backdrop-blur-xl transition-[width] duration-300 ease-out md:flex",
          collapsed ? "w-18" : "w-62"
        )}
      >
        <div className="flex h-16 items-center gap-2.5 px-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-[oklch(0.72_0.14_250)] shadow-lg shadow-primary/20">
            <Wallet
              className="h-4.5 w-4.5 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>

          {!collapsed && (
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight text-[#F3F5F8]">
                Query Money
              </span>

              <span className="text-[11px] text-[#787F89]">
                Controle Financeiro Pessoal
              </span>
            </div>
          )}
        </div>

        <nav className="flex-1 mx-auto">
          {!collapsed && (
            <p className="text-[#787F89] uppercase tracking-wider text-[11px] mb-3 mt-6">
              Geral
            </p>
          )}

          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group flex items-center mb-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",

                  active
                    ? "bg-[#242B35] text-white"
                    : "text-[#787F89] hover:bg-[#1B2129] hover:text-white",

                  collapsed && "justify-center px-0 w-12",

                  !collapsed && "w-56"
                )}
              >
                <link.icon
                  className={cn(
                    "shrink-0",
                    !collapsed && "mr-2",
                    active ? "text-[#4ED589]" : "text-[#787F89] group-hover:text-white"
                  )}
                />

                {!collapsed && link.title}
              </Link>
            );
          })}
        </nav>

        <hr className="my-2 border-[#626870]" />

        <div className="mx-auto">
          {!collapsed && (
            <CardValorRestante
              valorRestante={valorRestante}
              entrada={entrada}
            />
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed((c) => !c)}
            className="mt-2 w-full justify-center text-muted-foreground hover:bg-[#242B35] hover:text-white mb-2"
          >
            {collapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>
      </aside>
  );
}