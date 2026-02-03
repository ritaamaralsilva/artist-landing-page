import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MusicPlayer from "../../components/MusicPlayer";
import Navbar from "../../components/Navbar";
import About from "../../components/About";

export default function Home() {
  const tracks = ["/assets/apophenia.mp3", "/assets/wytai.mp3", "/assets/vultures.mp3"];
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  // Update the URL when the active section changes
  useEffect(() => {
    router.push(`#${activeSection}`, undefined, { shallow: true }); // Update the URL without reloading the page
  }, [activeSection]);

  // Ensure the body overflow is updated dynamically
  useEffect(() => {
    if (activeSection === "about") {
      document.body.style.overflow = "auto"; // Allow scrolling
      document.documentElement.style.overflow = "auto"; // Ensure html can scroll
    } else {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
      document.documentElement.style.overflow = "auto"; // Reset on unmount
    };
  }, [activeSection]);


  const sections = {
    home: (
      <section className="relative min-h-screen w-screen flex items-center justify-center">
        <img
          src="/assets/wytai.jpeg"
          alt="Rita Silva"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
            Rita Silva
          </h1>
        </div>
      </section>
    ),
    about: <About />, // aqui substituímos a seção antiga pelo componente About
    music: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Music</h2>
      </section>
    ),
    video: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Video</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    "live-shows": (
      <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Live Shows</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    workshops: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Workshops</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    projects: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
    contact: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),
  };

  return (
    <div className="min-h-screen w-screen">
      {/* Navbar receives the active section */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Render only the active section */}
      {sections[activeSection]}

      {/* Render MusicPlayer ONLY on the home page */}
      {activeSection === "home" && <MusicPlayer tracks={tracks} />}
    </div>
  );
}
