import "./globals.css";
import { token } from "../lib/token";
import { basePath } from "../lib/paths";

const siteUrl = token.websiteUrl || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);

export const metadata = {
  metadataBase,
  title: "Yi Long Musk ($YILONG) | Ethereum Meme Dynasty",
  description: "Same face. Different gas fees. Yi Long Musk is an independent parody meme community on Ethereum.",
  icons: { icon: "favicon-32.png", apple: "apple-touch-icon.png" },
  openGraph: {
    title: "Yi Long Musk / $YILONG",
    description: "Same face. Different gas fees. Independent Ethereum parody.",
    images: ["brand/banner-1280.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yi Long Musk / $YILONG",
    description: "Same face. Different gas fees. Independent Ethereum parody.",
    images: ["brand/banner-1280.jpg"],
  },
};

const clientConfig = { ...token, basePath };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@700;900&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=Ma+Shan+Zheng&display=swap" rel="stylesheet" />
      </head>
      <body data-token-config={JSON.stringify(clientConfig)}>{children}</body>
    </html>
  );
}
