import { useState } from "react";
import MusicPlayer from "../../components/MusicPlayer";
import Navbar from "../../components/Navbar";

export default function Home() {
  const tracks = ["/assets/apophenia.mp3", "/assets/wytai.mp3", "/assets/vultures.mp3"];
  const [activeSection, setActiveSection] = useState("home");

  // Todas as seções
  const sections = {
    home: (
      <section className="relative h-screen w-screen">
        <img
          src="/assets/wytai.jpeg"
          alt="Rita Silva"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
            Rita Silva
          </h1>
        </div>
      </section>
    ),
    about: (
      <section className="h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold">About</h2>
      </section>
    ),
    music: (
      <section className="h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Music</h2>
        <MusicPlayer tracks={tracks} />
      </section>
    ),
    video: (
      <section className="h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Video</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    "live-shows": (
      <section className="h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Live Shows</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    workshops: (
      <section className="h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Workshops</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    projects: (
      <section className="h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    contact: (
      <section className="h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
  };

  return (
    <div className="overflow-hidden h-screen w-screen">
      {/* Navbar recebe o estado ativo */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Renderiza apenas a seção ativa */}
      {sections[activeSection]}

      {/* Player fixo global */}
      <MusicPlayer tracks={tracks} />
    </div>
  );
}

