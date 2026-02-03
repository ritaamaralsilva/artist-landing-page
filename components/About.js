export default function About() {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16 overflow-y-auto"
    >
      {/* Background Image */}
      <img
        src="/assets/about.jpeg"
        alt="Rita Silva"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="relative z-10 max-w-3xl text-center space-y-8">
        <p className="text-lg text-white leading-relaxed">
          The young composer and instrumentalist has been one of the great revelations of the Portuguese experimental scene in recent times. With a degree in electronic composition and studies at the prestigious Institute of Sonology in the Netherlands, the artist stands out for her exploration of modular synthesizers, where she has created her own sonic universe.
        </p>
        <p className="text-lg text-white leading-relaxed">
          She debuted under her own name in 2021 with “Studies Vol. I,” which brought together a series of electroacoustic or algorithmically programmed pieces that laid the groundwork for the artist's discovery. With “The Inflationary Epoch,” released in 2022, she developed a live practice that empowers the meaning of improvised music, heavily influenced by the inherent limitations of her instrument—which the artist argues are, in fact, the master key to a sound in constant transformation.
        </p>
        <p className="text-lg text-white leading-relaxed">
          With “Vultures In A Quantum Space,” the composer paves the way for the exploration of new territories, offering her most personal and introspective work to date, with the introduction of voice and guitar.
        </p>
      </div>
    </section>
  );
}
  