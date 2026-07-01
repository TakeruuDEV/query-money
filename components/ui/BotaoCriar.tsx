import { Button } from "@/components/ui/button";
import {Plus} from "lucide-react";
import Link from "next/link";

interface BotaoCriarProps {
  titulo: string;
  href: string;
}

export default function BotaoCriar({ titulo, href }: BotaoCriarProps) {
  return (
    <Link href={href}>
      <Button
        variant="outline"
        size="lg"
        className="text-black border-none bg-[#4ED589] hover:bg-[#4ED589]/90 hover:cursor-pointer"
      >
        <Plus className="h-4 w-4" />
        {titulo}
      </Button>
    </Link>
  );
}
