import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { AnalyticsScripts, CookieConsentBanner } from "./_components/analytics";

const myFont = localFont({
  src: "./fonts/BebasNeue.ttf",
});

export const metadata: Metadata = {
  title: "GMD Corretora | Seguros, Planos de Saúde e Consórcios Sob Medida",
  description:
    "Consultoria gratuita e personalizada em seguros, planos de saúde e consórcios. Soluções ideais para pessoas e empresas com foco em proteção, economia e planejamento financeiro.",
  keywords: [
    "seguros",
    "plano de saúde empresarial",
    "seguro de vida",
    "seguro auto",
    "consórcio inteligente",
    "seguro empresarial",
    "seguro viagem",
    "seguro fiança",
    "consultoria em seguros",
    "seguro para empresas",
    "corretora de seguros",
    "GMD Corretora",
    "plano de saúde familiar",
  ],
  openGraph: {
    title: "GMD Corretora | Soluções em Seguros, Saúde e Consórcios",
    description:
      "Mais de 12 anos protegendo o que realmente importa. Conte com a GMD Corretora para encontrar o seguro, plano ou consórcio ideal.",
    url: "https://www.gmdcorretora.com.br",
    type: "website",
    siteName: "GMD Corretora",
    images: [
      {
        url: "https://www.gmdcorretora.com.br/logo.png",
        width: 1200,
        height: 630,
        alt: "Família protegida com seguros GMD Corretora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMD Corretora | Proteção e Planejamento Personalizados",
    description:
      "Especialistas em seguros, planos de saúde e consórcios. Atendimento humano e imparcial para garantir sua tranquilidade.",
    images: ["https://www.gmdcorretora.com.br/logo.png"],
  },
  metadataBase: new URL("https://www.gmdcorretora.com.br"),
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={myFont.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <AnalyticsScripts GA_MEASUREMENT_ID="G-Y1T9FPW59X" />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsentBanner />
        <Link
          href="https://api.whatsapp.com/send?phone=5515981377486&text=Olá!+Gostaria+de+falar+com+um+consultor+sobre+seguro,+plano+de+saúde+ou+consórcio+sob+medida"
          target="_blank"
          className="z-1 fixed bottom-2 right-2"
        >
          <Image
            src="/whatsapp.png"
            width={60}
            height={60}
            alt="ícone do WhatsApp para entrar em contato"
          />
        </Link>
      </body>
    </html>
  );
}
