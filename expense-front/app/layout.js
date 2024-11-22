"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Header/>
            {children}
            </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
