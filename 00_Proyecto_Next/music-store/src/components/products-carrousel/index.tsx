"use client";
import { useState } from "react";
import type { Product } from "../deals";
import ProductCard from "../product-card";
import { IconChevronRight } from "@/assets/icons";

const buttonStyle = {
  enabled:
    "text-gray-700 shadow-md shadow-gray-300 hover:text-gray-400 hover:shadow-lg hover:shadow-gray-400",
  disabled: "text-gray-300 shadow-md shadow-gray-200",
};

export default function ProdcutsCarrousel({
  products,
}: {
  products: Product[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePreviosClick() {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? products.length - 1 : currentIndex - 1);
  }
  function handleNextClick() {
    const isLastSlide = currentIndex === products.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  }

  const prevBtnDisabled = currentIndex === 0;
  const nextBtnDisabled = currentIndex + 5 === products.length;

  return (
    <div className="relative">
      <div className="flex items-center justify-between  w-[1200px]">
        {products.slice(currentIndex, currentIndex + 5).map((product, idx) => {
          return (
            <ProductCard key={`${product._id}-${idx}`} product={product} size="small" />
          );
        })}
      </div>

      <button
        className={`bg-white flex justify-center items-center w-10 h-10 rounded-full absolute top-[45%] -left-16 ${
          prevBtnDisabled ? buttonStyle.disabled : buttonStyle.enabled
        }`}
        onClick={() => handlePreviosClick()}
        disabled={prevBtnDisabled}
      >
        <IconChevronRight className="rotate-180 mr-0.5" />
      </button>
      <button
        className={`bg-white flex justify-center items-center w-10 h-10 rounded-full absolute top-[45%] -right-16 ${
          nextBtnDisabled ? buttonStyle.disabled : buttonStyle.enabled
        }`}
        onClick={() => handleNextClick()}
        disabled={nextBtnDisabled}
      >
        <IconChevronRight className="ml-0.5 " />
      </button>
    </div>
  );
}
