import type { Metadata } from "next";
import {IBM_Plex_Mono} from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: "400"
});
const roobertTRIAL = localFont({
  src: [
    {
      path: './fonts/RoobertTRIAL-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-Medium.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/RoobertTRIAL-Medium.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: "--font-robert-trial-medium",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodebriX",
  description: "Optimization of the development process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${roobertTRIAL.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
