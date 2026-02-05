"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  loginWithEnvCredentials,
  isAuthenticated,
} from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Geist} from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});



export default function SignInPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Redirect if already logged in
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
    <div
      className={`${geistSans.className} min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white text-black dark:bg-black dark:text-white`}
    >
      {/* LEFT: FULL IMAGE */}
      <div className="relative hidden md:block h-screen">
        <Image
          src="https://images.unsplash.com/photo-1700716465891-9e5e9f501d7d?q=80&w=2386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Footer text */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <blockquote className="text-sm leading-relaxed max-w-md">
            “Secure access to your operations dashboard.”
          </blockquote>
          <div className="text-xs opacity-80 mt-2">
            Enterprise-grade authentication
          </div>
        </div>
      </div>

      {/* RIGHT: LOGIN FORM */}
      <div className="flex items-center justify-center px-6 sm:px-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
          
          {/* Header */}
          <div className="text-center space-y-1">
            <h1 className="text-xl font-semibold tracking-tight">
              Sign in to Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to continue
            </p>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          {/* CTA */}
          <Button
            onClick={handleLogin}
            className="w-full"
            size="lg"
          >
            Login
          </Button>

          {/* Footer */}
          <p className="text-xs text-center text-muted-foreground">
            Internal access only • Protected system
          </p>
        </div>
      </div>
    </div>
  );
}
