import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fortt Construções & Reformas",
  description: "Construção é a arte de como gastar espaço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
