import { useProductContext } from "../contexts/ProductContext";
import Product from "./Product";

function Products() {
  const { productsList, load, error } = useProductContext();
  if (load) {
    return <div><p>Loading...</p></div>;
  }
  if (error) {
    return <div><p>Error: {error}</p></div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productsList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
