import { prismaClient } from "@/lib/prisma";

import ProductItem from "@/app/(home)/components/ProductItem";
import { CATEGORY_ICON } from "@/app/constants/CategoryIcon";
import { computeProductTotalPrice } from "@/app/helpers/product";
import { Badge } from "@/components/ui/badge";

import React from "react";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where:{
      slug: params.slug
    },
    include:{
      products: true
    }
  })

  if(!category){
    return null
  }

  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.slug}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
