import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=30");
  if (!res.ok) {
    throw new Error("Xatolik yuz berdi");
  }
  return res.json();
};

const ProductsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>⏳ Yuklanmoqda...</p>;
  if (error) return <p>❌ Xatolik yuz berdi: {error.message}</p>;

  return (
    <div>
      {data.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
