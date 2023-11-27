import MenuIndividual from "@/components/MenuIndividual";
import { porcoes } from "@/utils/menu-porcoes";

export default function Porções() {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-full gap-5">
        {porcoes.map((item) => {
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
    </>
  );
}
