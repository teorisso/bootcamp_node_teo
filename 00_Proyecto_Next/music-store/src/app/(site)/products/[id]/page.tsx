import Product from "./product";

async function fetchProduct(id: string) {
  try {
    const result = await fetch(`${process.env.API_HOST}/products/${id}`);
    const product = await result.json();
    return product;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const product = await fetchProduct(id as string);

  return (
    <div className="w-[1200px] flex flex-col items-center">
      <Product product={product} />
    </div>
  );
}
