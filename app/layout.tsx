import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './componet/NavBar';
import Foter from './componet/Foter';
import LegalLayout from './componet/LegalLayout';
import FAQPage from './componet/FAQPage';
export const dynamic = "force-dynamic";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Division Wise Lawyer & ITP in Bangladesh | Lawyer Bangladesh",
  description:
    "Find division wise lawyer, ITP, advocate and law firm in Bangladesh. Dhaka, Chattogram, Rajshahi, Sylhet, Khulna, Barisal, Rangpur & Mymensingh division lawyers list.",
  keywords: [
    "Bangladesh Lawyer",
    "Division Wise Lawyer",
    "ITP Lawyer Bangladesh",
    "Dhaka Lawyer",
    "Chattogram Lawyer",
    "Law Firm Bangladesh",
    "Advocate List BD",
  ],
  openGraph: {
    title: "Division Wise Lawyer & ITP in Bangladesh",
    description:
      "Browse verified division wise lawyer and ITP profiles across Bangladesh with chamber details and coordinator contact.",
    url: "https://advocatelistbd.com",
    siteName: "Lawyer Bangladesh",
    images: [
      {
        url: "/og-lawyer.jpg", // public folder image
        width: 1200,
        height: 630,
        alt: "Lawyer Bangladesh",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <div className="m-2">
           {children}
      <LegalLayout></LegalLayout>
      <FAQPage></FAQPage>
      <Foter></Foter>
        </div>
        
      </body>
    </html>
  );
}
