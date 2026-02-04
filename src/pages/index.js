import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MusicPlayer from "../../components/MusicPlayer";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Video from "../../components/Video";
import Music from "../../components/Music";
import Live from "../../components/Live";
import Workshops from "../../components/Workshops";
import Contact from "../../components/Contact";


export default function Home() {
  const tracks = ["/assets/apophenia.mp3", "/assets/wytai.mp3", "/assets/vultures.mp3"];
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  // Atualiza a URL quando a seção ativa muda
  useEffect(() => {
    router.push(`#${activeSection}`, undefined, { shallow: true }); // Atualiza a URL sem recarregar a página
  }, [activeSection]);

  // Controla o overflow do body dinamicamente
  useEffect(() => {
    const scrollableSections = ["about", "music", "live-shows", "workshops"];
    if (scrollableSections.includes(activeSection)) {
      document.body.style.overflow = "auto"; // Permite rolagem
      document.documentElement.style.overflow = "auto"; // Permite rolagem
    } else {
      document.body.style.overflow = "hidden"; // Impede rolagem
      document.documentElement.style.overflow = "hidden"; // Impede rolagem
    }
    return () => {
      document.body.style.overflow = "auto"; // Reseta ao desmontar
      document.documentElement.style.overflow = "auto"; // Reseta ao desmontar
    };
  }, [activeSection]);

  const sections = {
    home: (
      <section className="relative min-h-screen w-screen flex items-center justify-center">
        <img
          src="/assets/wytai-v2.jpeg"
          alt="Rita Silva"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center px-4">
        </div>
      </section>
    ),
    about: <About />,
    music: <Music />,
    video: <Video />,
    "live-shows": <Live />,
    workshops: <Workshops />,
    /*projects: (
      <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-center max-w-xl">under construction…</p>
      </section>
    ),*/
    contact: <Contact />,
  };

  return (
    <div className="min-h-screen w-screen">
      {/* Navbar recebe a seção ativa */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Renderiza apenas a seção ativa */}
      {sections[activeSection]}

      {/* Renderiza o MusicPlayer apenas na página inicial */}
      {activeSection === "home" && <MusicPlayer tracks={tracks} />}
    </div>
  );
}
