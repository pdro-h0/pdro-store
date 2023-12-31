import React, { useContext } from "react";

import { CartContext } from "@/app/providers/cart";
import { createCheckout } from "@/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

import { Badge } from "./badge";
import { ShoppingCart } from "lucide-react";
import CartItem from "./CartItem";
import { computeProductTotalPrice } from "@/app/helpers/product";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  const handlePurchaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
    );

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full flex-col gap-5 overflow-y-auto">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">Carrinho Vazio!</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 &&
      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Entrega</p>
          <p>Grátis</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p>Desconto</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-semibold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button
          onClick={handlePurchaseClick}
          className="mt-7 font-bold uppercase"
        >
          Finalizar Compra
        </Button>
      </div>}
    </div>
  );
};

export default Cart;
