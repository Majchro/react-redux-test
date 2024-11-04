import { describe, expect, it } from "vitest";
import reducer, { setProducts } from "../products";
import { Product } from "../../types";

describe("product", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      products: [],
    });
  });

  describe("setProducts", () => {
    it("should set new products", () => {
      const previousState = {
        products: [],
      };
      const products: Product[] = [
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
      expect(reducer(previousState, setProducts(products))).toEqual({
        products,
      });
    });

    it("should override existing products", () => {
      const previousState = {
        products: [
          {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "Description 1",
          },
        ],
      };
      const products: Product[] = [
        {
          id: 2,
          name: "Product 2",
          price: 200,
          description: "Description 2",
        },
      ];
      expect(reducer(previousState, setProducts(products))).toEqual({
        products,
      });
    });
  });
});
