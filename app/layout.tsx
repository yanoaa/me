import type {Metadata} from "next";
import {Inter, Open_Sans, Noto_Sans_JP, Noto_Serif_JP, Sedan} from "next/font/google";
import "./globals.css";
import {yourName} from "@/app/property";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const openSans = Open_Sans({subsets: ["latin"], variable: "--font-opensansjp"});
const notoSansJP = Noto_Sans_JP({subsets: ["latin"], variable: "--font-notosansjp"});
const notoSerifJP = Noto_Serif_JP({subsets: ["latin"], weight: "400", variable: "--font-notoserifjp"});
const sedan = Sedan({subsets: ["latin"], weight: "400", variable: "--font-sedan"})

export const runtime = 'nodejs';

export const metadata: Metadata = {
    title: {
        default: `${yourName}.me`,
        template: `%s - ${yourName}.me`
    },
    description: `${yourName}'s portfolio website`,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
        <body className={`${sedan.variable} ${notoSerifJP.variable}`}>{children}</body>
        </html>
    );
}
