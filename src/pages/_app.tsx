import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Manrope } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${manrope.variable} font-poppins`}>
      <Component {...pageProps} />
    </div>
  );
}
