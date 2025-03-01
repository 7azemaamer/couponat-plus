import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Ads from "@/components/Layout/Ads/Ads";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
  title: {
    default: "كوبونات بلس - أفضل كوبونات وأكواد خصم",
    template: "%s | كوبونات بلس",
  },
  description:
    "احصل على أحدث كوبونات الخصم والعروض من أشهر المتاجر الإلكترونية في المملكة العربية السعودية",
  keywords: [
    "كوبونات",
    "كود خصم",
    "عروض",
    "تخفيضات",
    "كوبونات بلس",
    "متاجر إلكترونية",
    "السعودية",
  ],
  authors: [{ name: "كوبونات بلس" }],
  creator: "كوبونات بلس",
  publisher: "كوبونات بلس",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <AuthProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <Ads />
        </AuthProvider>
      </body>
    </html>
  );
}
