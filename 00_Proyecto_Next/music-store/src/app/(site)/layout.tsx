import type { Metadata } from "next";
import { inter } from "@/app/fonts";
import { SessionProvider } from "next-auth/react";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { SharedStateProvider } from "@/context/useSharedState";
import { auth } from "@/auth";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div
      className={`${inter.className} flex min-h-screen w-full flex-col justify-between items-center`}
    >
      <SessionProvider session={session}>
        <SharedStateProvider>
          <div className="flex flex-col justify-start w-full">
            <Navigation />
            {children}
          </div>
          <Footer />
        </SharedStateProvider>
      </SessionProvider>
    </div>
  );
}
