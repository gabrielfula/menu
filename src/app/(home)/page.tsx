import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center h-full items-center overflow-hidden">
        <Link href="/espetos" className="w-full flex justify-center">
          <div className="w-4/6 p-2 h-44 background-carne flex items-end justify-center text-zinc-50 rounded-lg ">
            <h1 className="font-bold text-2xl tracking-wide">Espetos</h1>
          </div>
        </Link>
        <Link href="/porcoes" className="w-full flex justify-center">
          <div className="background-porcao w-4/6 p-2 h-44 background-porcao flex items-end justify-center rounded-lg">
            <h1 className="font-bold text-2xl tracking-wide">Porções</h1>
          </div>
        </Link>
        <Link href="/refrigerante" className="w-full flex justify-center">
          <div className="background-porcao w-4/6 p-2 px-32 h-44 background-refrigerante flex items-end justify-center rounded-lg">
            <h1 className="font-bold text-2xl tracking-wide">Refrigerantes</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
