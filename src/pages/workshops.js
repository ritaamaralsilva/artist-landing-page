import Navbar from "../../components/Navbar";
import Workshops from "../../components/Workshops";

import Head from "next/head";

export default function WorkshopsPage() {
  return (
    <>
      <Head>
        <title>Modular Synthesis workshops by Rita Silva</title>
        <meta
          name="description"
          content="Modular Synthesis workshops by Rita Silva."
        />
        <meta property="og:title" content="Modular Synthesis workshops by Rita Silva" />
        <meta
          property="og:description"
          content="Educational workshops on Modular Synthesis by Rita Silva."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/workshops"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <Workshops />
    </div>
    </>
  );
}