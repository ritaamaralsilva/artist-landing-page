export default function Music() {
    const links = [
      { name: "Bandcamp", url: "https://ritasilva.bandcamp.com/" },
      { name: "Spotify", url: "https://open.spotify.com/artist/7nQFcS740R6vdJ94v66RgC" },
      { name: "Apple Music", url: "https://music.apple.com/pt/artist/rita-silva/203777568?l=en-GB" },
      { name: "TIDAL", url: "https://tidal.com/artist/51045583" },
      { name: "SoundCloud", url: "https://soundcloud.com/ritasilvamusic" },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BHZL8STZ" },
    ];
  
    return (
      <section id="music" className="relative min-h-screen w-screen bg-black px-4 overflow-y-auto">
        {/* Background */}
        <img
          src="/assets/music.jpeg"
          alt="Music background"
          className="absolute inset-0 min-h-full min-w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center md:justify-center gap-8 py-10 pb-20 translate-y-8">
          {/* Embed principal */}
          <div className="w-full max-w-2xl rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl p-4">
            <p className="text-brand/80 text-sm mb-3 text-center">
              Featured
            </p>
            <iframe
              src="https://open.spotify.com/embed/artist/7nQFcS740R6vdJ94v66RgC?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
              className="rounded-xl w-full"
              title="spotify-embed"
            />
          </div>

          {/* Links estilo “mini linktree” */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/10 hover:bg-[#235f66] border border-white/10 text-brand py-3 px-4 text-center font-medium backdrop-blur-md transition transform scale-80 hover:scale-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
}
  