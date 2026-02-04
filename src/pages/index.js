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
        <title>Rita Silva — Electronic Music Artist</title>
        <meta
          name="description"
          content="Official artist website of Rita Silva. Experimental electronic music, live performances and workshops."
        />
        <meta property="og:title" content="Rita Silva — Experimental Electronic Music" />
        <meta
          property="og:description"
          content="Official artist website of Rita Silva. Experimental electronic music, live performances and workshops."
        />
        <meta property="og:image" content="/assets/og.jpeg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.ritasilva.online/#person",
        name: "Rita Silva",
        url: "https://www.ritasilva.online/",
        description:
          "Electronic music artist working at the intersection of sound, performance, and experimentation.",
        image: "https://www.ritasilva.online/assets/og.jpg",
        jobTitle: "Electronic Music Artist",
        knowsAbout: [
          "Electronic music",
          "Experimental music",
          "Live performance",
          "Sound design",
          "Workshops",
          "Modular synthesis",
          "Audio programming",
          "Sound art",
          "Music production",
          "Improvisation",
          "Portuguese artist",
        ],
        sameAs: [

          "https://open.spotify.com/artist/7nQFcS740R6vdJ94v66RgC",
          "https://ritasilva.bandcamp.com/",
          "https://music.apple.com/pt/artist/rita-silva/203777568?l=en-GB",
          "https://instagram.com/ritaamaralsilva",
          "https://soundcloud.com/ritasilvamusic",
          "https://tidal.com/artist/51045583",
          "https://music.amazon.com/albums/B0BHZL8STZ",
        ],
      }),
    }}
  />
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
