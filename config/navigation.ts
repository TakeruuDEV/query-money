import { ArrowLeftRight, LayoutDashboard, Receipt, Target, TrendingUp } from "lucide-react";

export const navLinks = [
    { 
        title: "Dashboard",
        subtitle: "Visão geral das suas finanças",
        href: "/dashboard",
        icon: LayoutDashboard,
        aparecerNoMenu: true,
        buttonTitle: "Nova transação",
        hrefButton: "/transacoes/nova-transacao",
    },
    { 
        title: "Transações",
        subtitle: "Histórico completo de movimentações",
        href: "/transacoes",
        icon: ArrowLeftRight,
        aparecerNoMenu: true,
        buttonTitle: "Nova transação",
        hrefButton: "/transacoes/nova-transacao",
    },
    {
        title: "Metas",
        subtitle: "Acompanhe seus objetivos financeiros",
        href: "/metas",
        icon: Target,
        aparecerNoMenu: true,
        buttonTitle: "Nova meta",
        hrefButton: "/metas/nova-meta",
    },
    {
        title: "Nova Meta",
        subtitle: "Crie uma nova meta financeira",
        href: "/metas/nova-meta",
        icon: Target,
        aparecerNoMenu: false,
        buttonTitle: "Criar Meta",
        hrefButton: "/metas/nova-meta",
    }
]