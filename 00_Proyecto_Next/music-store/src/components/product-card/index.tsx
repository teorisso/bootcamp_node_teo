"use client";
import type { Product } from "../deals";
import Image from "next/image";
import { IconNoImage } from "@/assets/icons";
import { useRouter } from "next/navigation";

export default function ProductCard({
  product,
  size = "default",
}: {
  product: Product;
  size?: "default" | "small";
}) {
  const router = useRouter();

  const isSmall = size === "small";

  return (
    <div
      className={`bg-white shadow-lg cursor-pointer transition-transform hover:scale-105 ${
        isSmall
          ? "w-[224px] h-[320px] hover:shadow-xl"
          : "w-[280px] h-[400px] hover:shadow-2xl"
      }`}
      onClick={() => router.push(`/products/${product._id}`)}
    >
      <div className={`w-full ${isSmall ? "h-[160px]" : "h-[200px]"} relative`}>
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            {" "}
            <IconNoImage className="text-gray-700" />
          </div>
        )}
      </div>
      <div
        className={`p-4 flex flex-col justify-between ${
          isSmall ? "h-[160px]" : "h-[200px]"
        } `}
      >
        <div>
          <div className="text-sm text-slate-900 line-clamp-2 text-ellipsis">
            {product.name}
          </div>
          <div
            className={`text-xs text-slate-900 ${
              isSmall ? "line-clamp-3" : "line-clamp-5"
            } text-ellipsis mt-3`}
          >
            {product.description}
          </div>
        </div>
        <div className="text-md text-slate-900">${product.price}</div>
      </div>
    </div>
  );
}
