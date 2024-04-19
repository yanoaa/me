import type { Metadata } from "next";
import { Inter, Open_Sans, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import {yourName} from "@/app/property";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const notoSerifJP = Noto_Serif_JP({ subsets: [ "latin"], weight: "400" });

export const runtime = 'edge';

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
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
