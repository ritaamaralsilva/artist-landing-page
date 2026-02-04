import Navbar from "../../components/Navbar";
import MusicPlayer from "../../components/MusicPlayer";

import Head from "next/head";

export default function Home() {
  const tracks = [
    "/assets/apophenia.mp3",
    "/assets/wytai.mp3",
    "/assets/vultures.mp3",
  ];

  return (
    <>
      <Head>
        <title>Rita Silva — Experimental Electronic Music</title>
        <meta
          name="description"
          content="Official artist website of Rita Silva. Experimental electronic music, live performances and workshops."
        />
        <meta property="og:title" content="Rita Silva — Experimental Electronic Music" />
        <meta
          property="og:description"
          content="Official artist website of Rita Silva. Experimental electronic music, live performances and workshops."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />

      <section className="relative min-h-screen w-screen flex items-center justify-center">
        <img
          src="/assets/wytai-v2.jpeg"
          alt="Rita Silva"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center px-4" />
      </section>

      <MusicPlayer tracks={tracks} />
    </div>
    </>
  );
}
