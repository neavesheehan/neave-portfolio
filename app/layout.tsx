import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Neave Sheehan | AI Engineer & Data Analyst",
  description: "Turning complex data into clean, decision-ready dashboards and automating the boring bits.",
  keywords: ["AI Engineer", "Data Analyst", "Dashboards", "Analytics", "Power BI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
