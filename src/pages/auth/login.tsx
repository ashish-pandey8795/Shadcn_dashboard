"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  loginWithEnvCredentials,
  isAuthenticated,
} from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleLogin = () => {
    setError("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    const success = loginWithEnvCredentials(username, password);

    if (!success) {
      setError("Invalid username or password");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md border rounded-lg p-6 space-y-4">
        <h1 className="text-xl font-semibold text-center">
          Sign In
        </h1>

        <div className="space-y-2">
          <Label>Username</Label>
          <Input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}

        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
    </div>
  );
}
