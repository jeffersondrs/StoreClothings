import { ProductsContext } from "../../contexts/product.context";
import { useContext } from "react";
import ProductCard from "../../assets/components/shopping cart/shopping-cart";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="grid grid-cols-4 gap-3 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
