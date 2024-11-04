import { Product } from "../types";

export const getAll = async () => {
  const response: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Description 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "Description 2",
    },
  ];

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, Math.random() * 3000);
  });
};
