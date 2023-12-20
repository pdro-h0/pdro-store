import { prismaClient } from "@/lib/prisma";

import Categories from "./components/Categories";
import ProductList from "@/components/ui/ProductList";
import SectionTitle from "./components/SectionTitle";
import PromoBanner from "./components/PromoBanner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% só esse mês!"
        className="max-md:w-full"
      />

      <PromoBanner
        src="/Banner-Ofertas.png"
        alt="Até 55% de desconto em mouses!"
        className="w-full max-md:hidden"
      />

      <div className="px-5">
        <Categories />
      </div>

      <div className="lg:px-24">
        <SectionTitle title="ofertas" />
        <ScrollArea className="hidden lg:block">
          <ProductList products={deals} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
        className="max-md:w-full"
      />

      <div className="grid grid-cols-2 gap-8 px-24">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
          className="w-[600px] max-md:hidden"
        />

        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses!"
          className="w-[600px] max-md:hidden"
        />
      </div>

      <div className="lg:px-24">
        <SectionTitle title="teclados" />
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
        className="max-md:w-full"
      />

      <PromoBanner
        src="/banner-fretegrátis.png"
        alt="Até 55% de desconto em mouses!"
        className="w-full px-[100px] max-md:hidden"
      />

      <div className="lg:px-[100px]">
        <SectionTitle title="mouses" />
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
