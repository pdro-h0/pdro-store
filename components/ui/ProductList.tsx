import React from "react";

import ProductItem from "../../app/(home)/components/ProductItem";
import { Product } from "@prisma/client";
import { computeProductTotalPrice } from "@/app/helpers/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[170px] max-w-[170px]"
        key={product.id}
        >
          <ProductItem
            product={computeProductTotalPrice(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
