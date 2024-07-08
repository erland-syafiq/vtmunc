import "./bootstrap.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import AuthProvider from "./components/AuthProvider";

export const metadata = {
  title: "VTMUNC",
  description: "Discover VTMUNC: Engage in dynamic debates, connect with global delegates. Over 300 participants in 2024. Join us and be part of international diplomacy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
            {children}
          <Footer />
        </AuthProvider>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
