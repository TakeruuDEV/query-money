import { ArrowLeftRight, LayoutDashboard, Receipt, Target, TrendingUp } from "lucide-react";

export const navLinks = [
    { 
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    { 
        title: "Transações",
        href: "/transacoes",
        icon: ArrowLeftRight,
    },
    { 
        title: "Contas fixas",
        href: "/contas-fixas",
        icon: Receipt,
    },
    {
        title: "Investimentos",
        href: "/investimentos",
        icon: TrendingUp,
    },
    {
        title: "Metas",
        href: "/metas",
        icon: Target,
    }
]