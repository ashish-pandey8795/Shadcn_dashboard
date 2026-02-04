// lib/auth.ts

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isAuthenticated") === "true";
};

export const loginWithEnvCredentials = (
  username: string,
  password: string
): boolean => {
  const ENV_USERNAME = process.env.NEXT_PUBLIC_userName;
  const ENV_PASSWORD = process.env.NEXT_PUBLIC_password;

  if (!ENV_USERNAME || !ENV_PASSWORD) {
    console.error("Missing NEXT_PUBLIC auth env vars");
    return false;
  }

  if (username === ENV_USERNAME && password === ENV_PASSWORD) {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", username);
    return true;
  }

  return false;
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("username");
};
