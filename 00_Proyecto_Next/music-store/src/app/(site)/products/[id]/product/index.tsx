"use client";
import { useState } from "react";

import Image from "next/image";

interface Product {
  name: string;
  description: string;
  price: number;
  images: string[];
}

export default function Product({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  return (
    <div className="w-full flex flex-col items-center mt-10 border-red border">
      <div>Product {product.name}</div>
      <div className="flex mt-4">
        <div className="flex flex-col gap-2">
          {product.images.map((img, idx) => {
            return (
              <div className="w-40 h-40 relative">
                <Image
                  src={img}
                  fill
                  alt="product"
                  key={img + idx}
                  objectFit="contain"
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            );
          })}
        </div>
        <Image
          src={selectedImage}
          width={400}
          height={400}
          alt="product"
          objectFit="contain"
        />
        <div></div>
      </div>
    </div>
  );
}
