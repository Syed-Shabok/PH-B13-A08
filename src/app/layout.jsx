import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere",
  description: "Best Learning Platform in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoFont.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="container mx-auto px-5">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
