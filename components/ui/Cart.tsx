import React, { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "@/app/providers/cart";
import CartItem from "./CartItem";
import { computeProductTotalPrice } from "@/app/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Catálogo
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
