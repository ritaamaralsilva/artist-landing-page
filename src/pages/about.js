import Navbar from "../../components/Navbar";
import About from "../../components/About";

import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Rita Silva</title>
        <meta
          name="description"
          content="About Rita Silva — experimental electronic music artist working at the intersection of sound, performance, and technology."
        />
        <meta property="og:title" content="About — Rita Silva" />
        <meta
          property="og:description"
          content="Experimental electronic music artist working at the intersection of sound, performance, and technology."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/about"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <About />
    </div>
    </>
  );
}