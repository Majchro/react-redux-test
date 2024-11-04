import { useState } from "react";

type Session = {
  email: string;
  token: string;
};

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);

  const login = async (email: string, password: string) => {
    const response = await new Promise<Session>((resolve) => {
      console.log("Logging in...", email, password);
      resolve({
        email,
        token: "123",
      });
    });

    setSession(response);
  };

  const logout = async () => {
    const response = await new Promise<boolean>((resolve) => {
      console.log("Logging out...");
      resolve(true);
    });

    if (response) {
      setSession(null);
    }
  };

  return {
    session,
    login,
    logout,
  };
};
