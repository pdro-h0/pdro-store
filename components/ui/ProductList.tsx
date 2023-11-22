import React from "react";

import ProductItem from "../../app/(home)/components/ProductItem";
import { Product } from "@prisma/client";
import { computeProductTotalPrice } from "@/app/helpers/product";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
