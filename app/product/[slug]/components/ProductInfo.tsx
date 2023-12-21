"use client";

import React, { useContext, useState } from "react";

import { ProductWithTotalPrice } from "@/app/helpers/product";
import { ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/DiscountBadge";
import { CartContext } from "@/app/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5 lg:bg-accent lg:rounded mt-4">
      <h2 className="text-lg lg:text-2xl lg:mt-10 lg:mb-7">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseClick}>
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg lg:bg-background lg:mb-10 px-5 py-2">
        <div className="flex items-center gap-2 ">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">PDPacket®</span>
            </p>

            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo Brasil!</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
