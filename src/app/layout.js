import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import { Toaster } from "react-hot-toast";
import Ads from "@/components/Layout/Ads/Ads";
import Footer from "@/components/Layout/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "كوبونات",
  description: "أحدث كوبونات وخصومات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`relative antialiaseds`}>
        <Header />
        <div className="mt-28">{children}</div>
        <Ads />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
