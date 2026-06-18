import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function BotaoNovaMeta() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="text-black border-none bg-[#4ED589] hover:bg-[#4ED589]/90 hover:cursor-pointer"
    >
      <Plus className="h-4 w-4" />
      Nova Meta
    </Button>
  );
}
