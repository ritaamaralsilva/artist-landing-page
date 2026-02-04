import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

const GA_MEASUREMENT_ID = "G-E8023R30ZR"; // ID de medição do Google Analytics

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
      <>
      <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
      id="ga4-init"
      strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `}
      </Script>

    <main className={`${montserrat.variable} ${robotoFlex.variable}`}>
  <Component {...pageProps} />
 </main>
</>
  );
}
