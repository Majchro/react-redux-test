import { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchProducts } from "./store/products";
import { useAppSelector } from "./hooks/useAppSelector";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
}

export default App;
