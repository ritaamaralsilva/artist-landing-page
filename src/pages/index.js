import Navbar from "../../components/Navbar";
import MusicPlayer from "../../components/MusicPlayer";

export default function Home() {
  const tracks = [
    "/assets/apophenia.mp3",
    "/assets/wytai.mp3",
    "/assets/vultures.mp3",
  ];

  return (
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
  );
}
