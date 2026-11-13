import type { productType } from "../types/productType";

interface productProps {
  product: productType;
}

function Product({ product }: productProps) {
    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <p>Author: {product.author}</p>
            <p>Pieces: {product.pieces}</p>
            <p>Created At: {product.created_at}</p>
            <p>Updated At: {product.updated_at}</p>
        </div>
    );
}
export default Product;