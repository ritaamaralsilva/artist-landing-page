import Navbar from "../../components/Navbar";
import Music from "../../components/Music";

import Head from "next/head";

export default function MusicPage() {
  return (
    <>
      <Head>
        <title>Music by Rita Silva</title>
        <meta
          name="description"
          content="Music by Rita Silva. Explore releases, selected tracks, and listening links across streaming platforms."
        />
        <meta property="og:title" content="Music by Rita Silva" />
        <meta
          property="og:description"
          content="Releases and selected tracks by experimental electronic music artist Rita Silva."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/music"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <Music />
    </div>
    </>
  );
}