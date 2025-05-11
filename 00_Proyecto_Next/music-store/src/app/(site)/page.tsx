import HomeCarrousel from "@/components/home-carrousel";
import Deals from "@/components/deals";
import ProdcutsCarrousel from "@/components/products-carrousel";
import { auth } from "@/auth";

export default async function Home() {
  const result = await fetch(`${process.env.API_HOST}/products`, {
    cache: "no-store",
  });
  const products = await result.json();
  const session = await auth();

  console.log("session", session);

  return (
    <main className="flex flex-col w-full items-center pb-20">
      <HomeCarrousel />
      <Deals products={products} />
      <ProdcutsCarrousel products={products} />
    </main>
  );
}
