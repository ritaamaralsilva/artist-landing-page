import MusicPlayer from "../../components/MusicPlayer";

export default function Home() {
  const tracks = [
    "/assets/wytai.mp3",
    "/assets/apophenia.mp3",
    "/assets/vultures.mp3"
  ];

  return (
    <div className="relative h-screen w-screen">
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
    </div>
  );
}
