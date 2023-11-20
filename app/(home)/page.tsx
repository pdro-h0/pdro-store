import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div>
      <Image
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />

      <div className="mt-5">
        <Categories />
      </div>
    </div>
  );
}
