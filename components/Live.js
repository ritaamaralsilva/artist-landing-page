export default function Live() {
    return (
      <section
        id="live-shows"
        className="relative min-h-screen w-screen bg-black text-brand"
      >
        {/* Background */}
        <img
          src="/assets/live.jpeg"
          alt="Live background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
  
        {/* Scrollable Content */}
        <div className="relative z-10 min-h-screen overflow-y-auto px-6 pt-24 pb-28">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#737dcd" }}>
              Live Shows
            </h2>
  
            {/* 2026 */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#737dcd" }}>2026</h3>
              <p className="text-white/85 leading-relaxed">
                — 18/01/2026 Lisboa, Portugal — Entangled Waves @ Alvine
              </p>
            </div>
  
            {/* 2025 */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#737dcd" }}>2025</h3>
              <p className="text-white/85 leading-relaxed" style={{ color: "#cbd9df" }}>
                — 06/12/2025 Braga, Portugal — Ocupa Festival @ gnrATION
                <br />
                — 29/11/2025 Lisboa, Portugal — Safra
                <br />
                — 19/10/2025 Lisboa, Portugal — Entangled Waves @ Alvine
                <br />
                — 11/09/2025 Malpartida de Cáceres, Spain — with Mbye Ebrima @ Museo Vostell
                <br />
                — 10/09/2025 Malpartida de Cáceres, Spain — Concert for Deaf People @ Museo Vostell
                <br />
                — 23/02/2025 Lisboa, Portugal — PYROMANIA @ Musicbox
                <br />
                — 22/02/2025 Massamá, Portugal — INCÓMODO Festival @ Mercado Municipal de Massamá
                <br />
                — 06/02/2025 Barcelos, Portugal — Triciclo
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }