import { FC } from "react";
import { Product as ProductType } from "../types";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { addProduct } from "../store/cart";

const Product: FC<ProductType> = ({ id, name, price, description }) => {
  const dispatch = useAppDispatch();

  const handleProductAdd = () => {
    dispatch(addProduct({ id, name, price }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleProductAdd}>Add to cart</button>
    </div>
  );
};

export default Product;
