export default function Workshops() {
    return (
      <section
        id="workshops"
        className="relative min-h-screen w-screen bg-black text-brand"
      >
        {/* Background */}
        <img
          src="/assets/contact.jpeg"
          alt="Workshops background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
  
        {/* Scrollable Content */}
        <div className="relative z-10 min-h-screen overflow-y-auto px-6 pt-24 pb-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#737dcd" }}>
              Modular Synthesis Workshop
            </h2>
  
            {/*sinopse workshop*/}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#737dcd" }}></h3>
              <p className="text-white/85 leading-relaxed">
              This workshop is aimed at those who want to take their first steps in music creation using modular synthesizers (Eurorack).
              <br />
              <br />
              </p>
              <p className="text-white/85 leading-relaxed" style={{ color: "#cbd9df" }}>
              As a tool for sound exploration, modular synthesizers are light-years ahead, as they generate and process sound through voltage carried by cables that connect each component to one another. Current spikes, temperature fluctuations, humidity, and other factors affect this instrument in surprising ways, which is why it is almost like a living organism: something that can be operated, but never fully tamed.
              <br />
              <br />
              </p>
              <p className="text-white/85 leading-relaxed" style={{ color: "#cbd9df" }}>
              VCV Rack is a modular synthesis simulation software that can be used for free and offers a library with hundreds of modules to choose from, which can be downloaded.
              </p>
              <br />
              <br />
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#737dcd" }}>Past Workshops</h3>
              <p className="text-white/85 leading-relaxed">
              - 10/11/2024 @ Albardeira, Ourém, Portugal<br />
              - 16/10/2022 @ Casa Amarela, Lisboa, Portugal<br />
              - 30/07/2022 @ Funchal City Sessions, Madeira, Portugal<br />
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }