import ProductCard from "../product-card";
import { IconAlarmClock, IconArrowRight } from "@/assets/icons";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function SpecialOffers({ products }: { products: Product[] }) {
  return (
    <div className="w-[1200px] flex flex-col items-center py-10 gap-10">
      <div className="w-[600px] rounded-md bg-blue-500 flex justify-between items-center py-4 px-12">
        <div>
          <div className="text-white text-sm">Deal of the Day</div>
          <div className="text-xs text-white flex items-center gap-1 mt-1">
            {" "}
            <IconAlarmClock className="w-3 h-3 text-white" /> 22hs 55m 20s
            remaining{" "}
          </div>
        </div>
        <button className="px-4 border border-white rounded-md text-white text-sm flex h-7 items-center justify-center gap-2 hover:text-blue-200 hover:border-blue-200">
          View all <IconArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex items-center justify-between w-full">
        {products.slice(0, 4).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
