import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="shadow-lg p-10 flex flex-col gap-3">
        <Link href="/espetos">
          <div className="w-full p-2 h-44 background-carne flex items-end justify-center text-zinc-50 rounded-lg">
            <h1 className="font-bold text-2xl tracking-wide">Espetos</h1>
          </div>
        </Link>

        <Link href="/porcoes">
          <div className="background-porcao w-full p-2 h-44 background-porcao flex items-end justify-center rounded-lg">
            <h1 className="font-bold text-2xl tracking-wide">Porções</h1>
          </div>
        </Link>
        <Link href="/refrigerante">
          <div className="background-porcao w-full p-2 px-32 h-44 background-refrigerante flex items-end justify-center rounded-lg">
            <h1 className="font-bold text-2xl tracking-wide">Refrigerantes</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
