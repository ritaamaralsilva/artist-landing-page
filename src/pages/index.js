import MusicPlayer from "../../components/MusicPlayer";
import Navbar from "../../components/Navbar";

export default function Home() {
  const tracks = [
    "/assets/wytai.mp3",
    "/assets/apophenia.mp3",
    "/assets/vultures.mp3"
  ];

  return (
    <div className="scroll-smooth">
      <Navbar />
      <section id="home" className="relative h-screen w-screen">
        <img
          src="/assets/wytai.jpeg"
          alt="Rita Silva"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 text-center">
            Rita Silva
          </h1>

          <div className="w-full max-w-md">
            <MusicPlayer tracks={tracks} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
        <h2 className="text-4xl font-bold">About</h2>
      </section>

      {/* Music */}
      <section id="music" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Music</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>

      {/* Video */}
      <section id="video" className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Video</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>

      {/* Live Shows */}
      <section id="live-shows" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Live Shows</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>

      {/* Workshops */}
      <section id="workshops" className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Workshops</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-center max-w-xl">under construction...</p>
      </section>
      </div>
  );
}
