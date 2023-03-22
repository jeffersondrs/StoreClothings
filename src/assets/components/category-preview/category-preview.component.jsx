import {
  CategoryPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";

export default function CategoryPreview({ title, products }) {

  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </TitleContainer>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
}
