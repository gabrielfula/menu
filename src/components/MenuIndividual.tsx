import { MenuType } from "@/types/menu-types";
import Image from "next/image";

export default function MenuIndividual({ img, title, price }: MenuType) {
  return (
    <div className="flex gap-2 p-3 shadow border rounded">
      <Image
        src={`/${img}`}
        alt={`Image ${title}`}
        width={90}
        height={90}
        className="rounded-md"
      />
      <div className="flex items-center justify-between w-full">
        <p className="font-bold tracking-wide text-lg">{title}</p>
        <p className="font-bold text-green-500">R${price}</p>
      </div>
    </div>
  );
}
