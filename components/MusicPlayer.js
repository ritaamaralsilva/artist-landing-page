import { useState, useRef, useEffect } from "react";

export default function MusicPlayer({ tracks = [] }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50">
      <div className="flex items-center justify-center gap-6 rounded-3xl bg-black/40 backdrop-blur-md px-4 py-4 shadow-xl shadow-blue-500/30 w-max max-w-[90%]">
        {/* PREV */}
        <button
          onClick={prevTrack}
          className="p-3 rounded-full bg-[#8ebecd] hover:bg-[#6b919c] shadow-md shadow-[#6b919c] transition-transform duration-300 transform hover:scale-110 active:scale-95"
        >
          <PrevIcon />
        </button>

        {/* PLAY / PAUSE */}
        <button
          onClick={togglePlay}
          className="p-4 rounded-full bg-[#8ebecd] hover:bg-[#6b919c] shadow-md shadow-[#6b919c] transition-transform duration-300 transform hover:scale-110 active:scale-95"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* NEXT */}
        <button
          onClick={nextTrack}
          className="p-3 rounded-full bg-[#8ebecd] hover:bg-[#6b919c] shadow-md shadow-[#6b919c] transition-transform duration-300 transform hover:scale-110 active:scale-95"
        >
          <NextIcon />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={tracks[currentTrack]}
        onEnded={nextTrack}
      />
    </div>
  );
}

/* ---------- ICONS (SVG) ---------- */

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3d5259">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#3d5259">
      <rect x="5" y="3" width="5" height="18" />
      <rect x="14" y="3" width="5" height="18" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#3d5259">
      <polygon points="11,12 21,3 21,21" />
      <rect x="3" y="3" width="4" height="18" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#3d5259">
      <polygon points="13,12 3,3 3,21" />
      <rect x="17" y="3" width="4" height="18" />
    </svg>
  );
}