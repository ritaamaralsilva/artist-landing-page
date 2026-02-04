import Navbar from "../../components/Navbar";
import Video from "../../components/Video";

import Head from "next/head";

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Live Performance Video by Rita Silva</title>
        <meta
          name="description"
          content="Live performance recording by Rita Silva."
        />
        <meta property="og:title" content="Live Performance by Rita Silva" />
        <meta
          property="og:description"
          content="Live performance recording by Rita Silva."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/video"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <Video />
    </div>
    </>
  );
}