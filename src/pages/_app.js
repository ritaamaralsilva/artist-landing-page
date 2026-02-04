import "../styles/globals.css";
import { Montserrat, Roboto_Flex } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-hero",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${robotoFlex.variable}`}>
  <Component {...pageProps} />
</main>
  );
}
