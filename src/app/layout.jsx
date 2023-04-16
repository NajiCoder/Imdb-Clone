import Header from "@/Components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";

export const metadata = {
  title: "test",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* Search Bar */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
