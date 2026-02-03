export default function Video() {
    return (
      <section
        id="video"
        className="relative h-screen w-screen bg-black flex items-center justify-center px-4"
      >
        {/* Background */}
        <img
          src="/assets/video.jpeg"
          alt="Video background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
  
        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-4xl">
  
          {/* Wrapper responsivo 16:9 (sem depender de plugins) */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-white/10 bg-black/40">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/2HOV7WhGwXM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
  