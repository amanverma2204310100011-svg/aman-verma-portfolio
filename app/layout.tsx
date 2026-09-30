import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Verma | Full Stack Developer",
  description: "Portfolio of Aman Verma, a Full Stack Developer specializing in React, Next.js, Node.js, Laravel, databases and scalable web applications.",
  keywords: ["Aman Verma", "Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "Laravel Developer"],
  authors: [{ name: "Aman Verma" }],
  openGraph: {
    title: "Aman Verma | Full Stack Developer",
    description: "Building modern, scalable and user-focused web applications.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}