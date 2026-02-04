
// import { useState, type FC } from "react";
// import { FaGithub } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { MdOutlineArrowRight } from "react-icons/md";
// import { ShieldCheck, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";

// const SignInPage: FC = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <>
//       {/* <Head>
//         <title>{isSignUp ? "Sign Up" : "Sign In"} | Dashboard</title>
//       </Head> */}

//       <div className="bg-white text-black dark:bg-black dark:text-white grid min-h-screen grid-cols-1 md:grid-cols-2 bg-background text-foreground font-sans">
//         {/* Left */}
//         <div
//           className="relative w-full h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col justify-between px-10 py-8 bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://www.safexpress.com/assets/images/safextension-img.jpg')",
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//         >
//           <div className="font-semibold !text-white text-2xl">⌘ Logo</div>

//           {/* <div className="mt-auto py-6 ">
//             <blockquote className="text-md !text-white leading-relaxed mb-2">
//               “This starter template has saved me countless hours of work and
//               helped me deliver projects to my clients faster than ever before.”
//             </blockquote>
//             <div className="text-xs !text-white opacity-80">Random Dude</div>
//           </div> */}
//         </div>


//         {/* Right */}
//         <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
//           <div className="w-full max-w-[70%] space-y-5">
//             {/* GitHub Link */}
//             {/* <div className="flex justify-center">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-muted-foreground flex items-center text-sm hover:underline"
//               >
//                 <Star className="mr-1 h-4 w-4" />
//                 Star on GitHub <span className="ml-1">★ 4745</span>
//               </a>
//             </div> */}

//             {/* Card */}
//             <div className="rounded-lg border border-border bg-muted text-card-foreground shadow-md overflow-hidden">
//               <div className="p-6  sm:p-6 space-y-3 shadow border-b rounded-b-md bg-card">
//                 <div className="text-center">
//                   <h1 className="text-lg font-semibold">
//                     {isSignUp
//                       ? "Create your account"
//                       : "Sign in "}
//                   </h1>
//                   <p className="text-sm text-muted-foreground mt-1">
//                     {isSignUp
//                       ? "Welcome! Please fill in the details to get started."
//                       : "Welcome back! Please sign in to continue"}
//                   </p>
//                 </div>

//                 {/* Social */}
//                 <div className="flex  items-center gap-3">
//                   <Button
//                     variant="outline"
//                     className="flex bg-white text-black dark:bg-black dark:text-white items-center gap-2 px-4 py-2 w-[50%]"
//                   >
//                     <span className="h-5 w-5">
//                       <FaGithub />
//                     </span>
//                     GitHub
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="flex bg-white text-black dark:bg-black dark:text-white items-center gap-2 px-4 py-2 w-[50%]"
//                   >
//                     <span className="h-5 w-5">
//                       <FcGoogle />
//                     </span>
//                     Google
//                   </Button>
//                 </div>

//                 {/* Separator */}
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                   <div className="h-px flex-1 bg-border" />
//                   or
//                   <div className="h-px flex-1 bg-border" />
//                 </div>

//                 <div className="grid gap-6">
//                   {isSignUp && (
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="firstName" className="text-sm">
//                           First name
//                         </Label>
//                         <Input
//                           id="firstName"
//                           placeholder="First name"
//                           className="h-10 text-sm"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="lastName" className="text-sm">
//                           Last name
//                         </Label>
//                         <Input
//                           id="lastName"
//                           placeholder="Last name"
//                           className="h-10 text-sm"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex flex-col gap-2">
//                     <Label htmlFor="email" className="text-sm">
//                       Email address
//                     </Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="your_mail+clerk_test@example.com"
//                       className="h-10 text-sm"
//                     />
//                   </div>

//                   {isSignUp && (
//                     <div className="flex flex-col gap-2">
//                       <Label htmlFor="password" className="text-sm">
//                         Password
//                       </Label>
//                       <Input
//                         id="password"
//                         type="password"
//                         placeholder="Enter your password"
//                         className="h-10 text-sm"
//                       />
//                     </div>
//                   )}

//                   <Button className="w-full flex items-center justify-center gap-2">
//                     Continue
//                     <span className="h-4 w-4">
//                       <MdOutlineArrowRight />
//                     </span>
//                   </Button>
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="bg-muted py-4 text-center flex flex-col items-center gap-3 text-xs text-muted-foreground">
//                 <div className="text-sm text-gray-500">
//                   {isSignUp
//                     ? "Already have an account?"
//                     : "Don’t have an account?"}{" "}
//                   <button
//                     onClick={() => setIsSignUp(!isSignUp)}
//                     className="underline font-semibold text-gray-800"
//                   >
//                     {isSignUp ? "Sign in" : "Sign up"}
//                   </button>
//                 </div>
//                 <hr className="border border-gray-300 w-full" />
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="text-sm px-2 text-muted-foreground text-center">
//               By clicking continue, you agree to our{" "}
//               <a href="#" className="underline">
//                 Terms of Service
//               </a>{" "}
//               and{" "}
//               <a href="#" className="underline">
//                 Privacy Policy
//               </a>
//               .
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignInPage;


// import { useState, type FC } from "react";
// import { useRouter } from "next/router";
// import { FaGithub } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { MdOutlineArrowRight } from "react-icons/md";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const SignInPage: FC = () => {
//   const router = useRouter();

//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleAuth = () => {
//     if (!email) {
//       alert("Please enter email");
//       return;
//     }

//     // FAKE AUTH
//     localStorage.setItem("isAuthenticated", "true");
//     localStorage.setItem("userEmail", email);

//     router.push("/dashboard");
//   };

//   return (
//     <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-white">
//       {/* Left */}
//       <div
//         className="hidden md:flex flex-col justify-between px-10 py-8 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://www.safexpress.com/assets/images/safextension-img.jpg')",
//         }}
//       >
//         <div className="text-white font-semibold text-2xl">⌘ Logo</div>
//       </div>

//       {/* Right */}
//       <div className="flex items-center justify-center px-6">
//         <div className="w-full max-w-md space-y-5">
//           <div className="rounded-lg border shadow bg-white p-6 space-y-4">
//             <div className="text-center">
//               <h1 className="text-lg font-semibold">
//                 {isSignUp ? "Create your account" : "Sign in"}
//               </h1>
//               <p className="text-sm text-gray-500">
//                 {isSignUp
//                   ? "Fill details to get started"
//                   : "Welcome back"}
//               </p>
//             </div>

//             {/* Social buttons (UI only) */}
//             <div className="flex gap-3">
//               <Button variant="outline" className="w-1/2">
//                 <FaGithub className="mr-2" /> GitHub
//               </Button>
//               <Button variant="outline" className="w-1/2">
//                 <FcGoogle className="mr-2" /> Google
//               </Button>
//             </div>

//             <div className="flex items-center gap-2 text-sm text-gray-400">
//               <div className="h-px flex-1 bg-gray-300" />
//               or
//               <div className="h-px flex-1 bg-gray-300" />
//             </div>

//             {/* Form */}
//             <div className="space-y-3">
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <Button onClick={handleAuth} className="w-full">
//                 Continue
//                 <MdOutlineArrowRight className="ml-2" />
//               </Button>
//             </div>
//           </div>

//           <div className="text-center text-sm text-gray-500">
//             {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
//             <button
//               onClick={() => setIsSignUp(!isSignUp)}
//               className="underline font-medium"
//             >
//               {isSignUp ? "Sign in" : "Sign up"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


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
