// lib/auth.ts

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("isAuthenticated") === "true";
};

export const loginWithEnvCredentials = (
  username: string,
  password: string
): boolean => {
  const ENV_USERNAME = process.env.AUTH_USERNAME;
  const ENV_PASSWORD = process.env.AUTH_PASSWORD;

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
