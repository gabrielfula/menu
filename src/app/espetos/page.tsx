import MenuIndividual from "@/components/MenuIndividual";
import { espeto } from "@/utils/menu-espeto";

export default function Espetos() {
  return (
    <div className="flex flex-col gap-7">
      {espeto.map((item) => {
        return (
          <MenuIndividual
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
