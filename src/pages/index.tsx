"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Geist} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <div
      className={`${geistSans.className}  min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white text-black dark:bg-black dark:text-white`}
    >
      {/* LEFT: CONTENT */}
      <div className="flex flex-col justify-center px-8 sm:px-14 lg:px-20">
        <div className="max-w-xl space-y-6">
          {/* Logo / Brand */}
          <div className="text-2xl font-semibold tracking-tight">
            Safexpress: Slack Central
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Operations, simplified.
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            A unified dashboard to manage people, waybills, workflows, and
            real-time operational insights — built for teams that scale.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button
              size="lg"
              className="px-8"
              onClick={() => router.push("/auth/login")}
            >
              Login to Dashboard
            </Button>
          </div>

          {/* Optional trust text */}
          <p className="text-sm text-muted-foreground pt-6">
            Secure • Fast • Enterprise-ready
          </p>
        </div>
      </div>

      {/* RIGHT: FULL PAGE IMAGE */}
      <div className="relative hidden md:block w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1547907854-92494cca9f28?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Dashboard Preview"
          fill
          priority
          className="object-cover"
        />

        {/* Optional dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Optional quote/footer */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <blockquote className="text-sm leading-relaxed max-w-md">
            “One dashboard that finally brings clarity to complex operations.”
          </blockquote>
          <div className="text-xs opacity-80 mt-2">— Operations Lead</div>
        </div>
      </div>
    </div>
  );
}
