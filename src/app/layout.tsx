'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
// import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [state, setState] = useState(0)
  const disableNav = ['/login', '/register', '/404']
  const path = usePathname()
  console.log(path)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        {!disableNav.includes(path) && <Navbar />}
        {/* <h1>Layout : {state}</h1>
        <button onClick={() => setState(state + 1)} className="block">Click</button> */}
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}