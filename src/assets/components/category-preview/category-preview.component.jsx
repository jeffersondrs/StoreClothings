import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container p-5">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />

          ))}
      </div>
    </div>
  );
}
