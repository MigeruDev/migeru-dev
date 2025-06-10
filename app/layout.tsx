import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Macías - Ingeniero de Software & Especialista en Datos",
  description: "Portfolio de Miguel Macías, ingeniero de software con 4+ años de experiencia en sistemas web escalables, pipelines de datos y desarrollo frontend moderno.",
  keywords: "Miguel Macías, software engineer, data specialist, React, Angular, Next.js, Python, Ecuador, portfolio",
  authors: [{ name: "Miguel Macías" }],
  openGraph: {
    title: "Miguel Macías - Ingeniero de Software & Especialista en Datos",
    description: "Portfolio de Miguel Macías, ingeniero de software con 4+ años de experiencia en sistemas web escalables, pipelines de datos y desarrollo frontend moderno.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}