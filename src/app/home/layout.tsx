import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <header>
            <Nav/>
        </header>
        <main className="items-center border-spacing-1">
            {children}
        </main>
        <Footer/>
    </>
  );
}
