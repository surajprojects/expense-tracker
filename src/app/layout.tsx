import { Poppins } from "next/font/google";
import "./globals.css";

import RootWrapper from "@/components/rootWrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Expense Tracker",
  description: "Manage your expenses efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RootWrapper>
        <html lang="en" className={`${poppins.variable} font-poppins`}>
          <body className="px-16 py-8 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      </RootWrapper>
    </>
  );
}
