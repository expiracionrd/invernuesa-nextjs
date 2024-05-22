import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";




// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ["latin"]

})

export const metadata: Metadata = {
  title: "INVERNUESA - Inicio",
  description: "Inversiones Nueva Salida",
  keywords: "préstamos, préstamos comerciales, financieras, bancos, BHD, RD",
  authors: [{ name: 'Yordy Almánzar', url: 'https://github.com/expiracionrd' }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={raleway.className}>

      <Navbar/>
        {children}
      <Footer/>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
