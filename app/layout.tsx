import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: "Chetan Choudhary | Product Strategy & Growth",
    description: "Product Strategy, Healthcare Markets & Data-Driven Growth. MBA Candidate at IIM Bodh Gaya, PharmD, CAT 97.04%.",
    keywords: ["Chetan Choudhary", "IIM Bodh Gaya", "Product Strategy", "MBA", "Pharma", "Growth Strategy"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#121212] text-white antialiased`}>{children}</body>
        </html>
    );
}
