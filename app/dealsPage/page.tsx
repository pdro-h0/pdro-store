import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductItem from "../(home)/components/ProductItem";
import { computeProductTotalPrice } from "../helpers/product";
import { Badge } from "@/components/ui/badge";
import { PercentIcon } from "lucide-react";

const DealPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealPage;
