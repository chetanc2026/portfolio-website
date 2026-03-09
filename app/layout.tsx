import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
    title: "Dr. Chetan Choudhary | Product Strategist & MBA @ IIM Bodh Gaya",
    description: "Portfolio of Dr. Chetan Choudhary — Product Strategy, Brand Management, Business Development. MBA at IIM Bodh Gaya, Pharm.D., CAT 97.04%.",
    keywords: ["Chetan Choudhary", "IIM Bodh Gaya", "MBA", "Product Management", "Pharma", "Portfolio", "Brand Strategy"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.className} bg-[#0a0a0f] text-white antialiased`}>{children}</body>
        </html>
    );
}
