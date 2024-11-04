import { describe, expect, it } from "vitest";
import reducer, { addProduct, changeProductQuantity, removeProduct } from "../cart";

describe("cart", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      items: [],
      totalPrice: 0,
    });
  });

  it("should add product to cart", () => {
    const previousState = {
      items: [],
      totalPrice: 0,
    };

    expect(reducer(previousState, addProduct({ id: 1, name: "Product 1", price: 100 }))).toEqual({
      items: [{ id: 1, quantity: 1, name: "Product 1", price: 100 }],
      totalPrice: 100,
    });
  });

  it("should remove product from cart", () => {
    const previousState = {
      items: [
        { id: 1, quantity: 10, name: "Product 1", price: 10 },
        { id: 2, quantity: 5, name: "Product 2", price: 20 },
      ],
      totalPrice: 0,
    };

    expect(reducer(previousState, removeProduct(1))).toEqual({
      items: [{ id: 2, name: "Product 2", price: 20, quantity: 5 }],
      totalPrice: 100,
    });
  });

  it("should change product quantity", () => {
    const previousState = {
      items: [
        { id: 1, quantity: 10, name: "Product 1", price: 10 },
        { id: 2, quantity: 5, name: "Product 2", price: 20 },
      ],
      totalPrice: 0,
    };

    expect(reducer(previousState, changeProductQuantity({ id: 2, quantity: 20 }))).toEqual({
      items: [
        { id: 1, quantity: 10, name: "Product 1", price: 10 },
        { id: 2, quantity: 20, name: "Product 2", price: 20 },
      ],
      totalPrice: 500,
    });
  });
});
