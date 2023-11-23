import { prismaClient } from "@/lib/prisma";

import Image from "next/image";

import Categories from "./components/Categories";
import ProductList from "@/components/ui/ProductList";
import SectionTitle from "@/app/(home)/components/sectionTitle";
import PromoBanner from "./components/PromoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% só esse mês!"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle title="ofertas" />
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-8">
        <SectionTitle title="teclados" />
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
