import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useAuth } from "../useAuth";

describe("useAuth", () => {
  it("should return default user state", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.session).toBe(null);
  });

  it("should login user", async () => {
    const { result } = renderHook(() => useAuth());
    await act(async () => {
      await result.current.login("test@email.com", "password");
    });

    expect(result.current.session).toEqual({
      email: "test@email.com",
      token: "123",
    });
  });

  it("should logout user", async () => {
    const { result } = renderHook(() => useAuth());
    await act(() => {
      result.current.login("test@email.com", "password");
    });

    expect(result.current.session).toEqual({
      email: "test@email.com",
      token: "123",
    });

    await act(() => {
      result.current.logout();
    });

    expect(result.current.session).toBe(null);
  });
});
