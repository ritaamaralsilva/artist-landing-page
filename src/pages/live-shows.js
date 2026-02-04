import Navbar from "../../components/Navbar";
import Live from "../../components/Live";

import Head from "next/head";

export default function LiveShowsPage() {
  return (
    <>
      <Head>
        <title>Live performances by Rita Silva</title>
        <meta
          name="description"
          content="Live performances by Rita Silva. Past concerts, festivals, and performance history."
        />
        <meta property="og:title" content="Live performances by Rita Silva" />
        <meta
          property="og:description"
          content="Live performances and concert history of electronic music artist Rita Silva."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/live-shows"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <Live />
    </div>
    </>
  );
}