import CardProgresso from "./_components/CardProgresso";

export default function Metas() {
  return (
    <div className="flex flex-col gap-6 p-7">
      <main className="flex justify-center">
        <CardProgresso valorPossuido={700} valorTotal={1000} metasAtivas={3} />
      </main>
    </div>
  );
}
