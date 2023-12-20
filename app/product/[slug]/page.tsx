import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import { computeProductTotalPrice } from "@/app/helpers/product";
import ProductList from "../../../components/ui/ProductList";
import SectionTitle from "@/app/(home)/components/SectionTitle";

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
    <div className=" flex flex-col gap-8 pb-8 lg:px-24">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:my-10">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>

      <div>
        <SectionTitle title="Produtos Recomendados" />
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
