import { useState, useCallback, useEffect } from "react";

interface User {
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  signIn: (method: string, formData?: FormData) => Promise<void>;
  signOut: () => Promise<void>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth state
    const stored = localStorage.getItem("nexus-auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("nexus-auth");
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = useCallback(async (method: string, formData?: FormData) => {
    // Simulate auth flow
    await new Promise((resolve) => setTimeout(resolve, 500));
    const email = formData?.get("email") as string;
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: email?.split("@")[0] ?? "Guest",
      email: method === "anonymous" ? undefined : email,
    };
    localStorage.setItem("nexus-auth", JSON.stringify(newUser));
    setUser(newUser);
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem("nexus-auth");
    setUser(null);
  }, []);

  return {
    isLoading,
    isAuthenticated: !!user,
    user,
    signIn,
    signOut,
  };
}
