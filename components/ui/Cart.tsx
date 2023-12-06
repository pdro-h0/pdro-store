import React, { useContext } from "react";
import { Badge } from "./badge";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "@/app/providers/cart";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCart size={16} />
        Catálogo
      </Badge>
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
