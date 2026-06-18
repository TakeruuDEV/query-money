import { ArrowLeftRight, LayoutDashboard, Receipt, Target, TrendingUp } from "lucide-react";

export const navLinks = [
    { 
        title: "Dashboard",
        subtitle: "Visão geral das suas finanças",
        href: "/dashboard",
        icon: LayoutDashboard,
        buttonTitle: "Nova transação",
    },
    { 
        title: "Transações",
        subtitle: "Histórico completo de movimentações",
        href: "/transacoes",
        icon: ArrowLeftRight,
        buttonTitle: "Nova transação",
    },
    { 
        title: "Contas fixas",
        subtitle: "Gerencie suas despesas recorrentes",
        href: "/contas-fixas",
        icon: Receipt,
        buttonTitle: "Nova conta fixa",
    },
    {
        title: "Investimentos",
        subtitle: "Reservas e aportes do mês",
        href: "/investimentos",
        icon: TrendingUp,
        buttonTitle: "Novo investimento",
    },
    {
        title: "Metas",
        subtitle: "Acompanhe seus objetivos financeiros",
        href: "/metas",
        icon: Target,
        buttonTitle: "Nova meta",
    }
]