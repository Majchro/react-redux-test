import { FC } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { Product } from "../types";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { changeProductQuantity } from "../store/cart";

const Cart: FC = () => {
  const { items, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: Product["id"], quantity: number) => {
    dispatch(changeProductQuantity({ id, quantity }));
  };

  if (items.length === 0) return null;

  return (
    <div style={{ position: "absolute", right: 10, bottom: 10, border: "1px solid black" }}>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>|</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(ev) => {
                handleQuantityChange(item.id, parseInt(ev.target.value, 10));
              }}
            />
            <span>|</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
