import { useState, useRef } from "react";

export default function MusicPlayer({ tracks }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setCurrentTrack((currentTrack + 1) % tracks.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  const handlePrev = () => {
    setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  return (
    <div className="bg-black bg-opacity-50 p-4 rounded text-white flex items-center justify-center gap-4">
      <button onClick={handlePrev}>⏮</button>
      <button onClick={handlePlayPause}>
        {isPlaying ? "⏸" : "▶️"}
      </button>
      <button onClick={handleNext}>⏭</button>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        onEnded={handleNext}
        style={{ display: "none" }} // esconde o player nativo
      />
    </div>
  );
}

