import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailPage = async ({
  params: { slug },
}: ProductDetailPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetailPage;
