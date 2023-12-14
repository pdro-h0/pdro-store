import { prismaClient } from "@/lib/prisma";

import Image from "next/image";

import Categories from "./components/Categories";
import ProductList from "@/components/ui/ProductList";
import SectionTitle from "./components/SectionTitle";
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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src="/banner-home-01.png" alt="Até 55% só esse mês!" />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle title="ofertas" />
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div>
        <SectionTitle title="teclados" />
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
      />

      <div>
        <SectionTitle title="mouses" />
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
