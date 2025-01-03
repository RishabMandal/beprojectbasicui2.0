// "use-client";

import GlobalState from "@/context";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Army Project",
  description: "Thermal and Night Vision Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar />
          {children}
        </GlobalState>
      </body>
    </html>
  );
}
