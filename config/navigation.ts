import { ArrowLeftRight, LayoutDashboard, Receipt, Target, TrendingUp } from "lucide-react";

export const navLinks = [
    { 
        title: "Dashboard",
        subtitle: "Visão geral das suas finanças",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    { 
        title: "Transações",
        subtitle: "Histórico completo de movimentações",
        href: "/transacoes",
        icon: ArrowLeftRight,
    },
    { 
        title: "Contas fixas",
        subtitle: "Gerencie suas despesas recorrentes",
        href: "/contas-fixas",
        icon: Receipt,
    },
    {
        title: "Investimentos",
        subtitle: "Reservas e aportes do mês",
        href: "/investimentos",
        icon: TrendingUp,
    },
    {
        title: "Metas",
        subtitle: "Acompanhe seus objetivos financeiros",
        href: "/metas",
        icon: Target,
    }
]