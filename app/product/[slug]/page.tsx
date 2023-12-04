import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import { computeProductTotalPrice } from "@/app/helpers/product";
import ProductList from "../../../components/ui/ProductList";

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
    include: {
      category:{
        include:{
          products:{
            where:{
              slug:{
                not: slug
              }
            }
          }
        }
      }
    }
  });

  if (!product) {
    return null;
  }

  return (
    <div className=" flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <ProductList products={product.category.products} />
    </div>
  );
};

export default ProductDetailPage;
