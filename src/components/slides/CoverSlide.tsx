import { motion } from "framer-motion";

const CoverSlide = () => {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-center gap-8 flex-shrink-0"
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white flex-shrink-0">
          <img src="/Logos/logoOCI.jpg" alt="OCI Logo" className="w-10 h-10 object-contain rounded-full" />
        </div>
        <div className="text-center">
          <p className="font-black text-[10px] tracking-widest text-white/90">ORGANISATION DE LA COOPÉRATION ISLAMIQUE</p>
          <p className="font-black text-sm tracking-wide mt-0.5">UNIVERSITÉ ISLAMIQUE DU NIGER</p>
          <p className="text-xs text-white/80 mt-0.5">Faculté des Sciences et Techniques — Département Informatique</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md border-2 border-white flex-shrink-0">
          <img src="/Logos/logoUIN.jpg" alt="UIN Logo" className="w-10 h-10 object-contain rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-3xl"
        >
          {/* TiQuick logo */}
          <div>
            <div
              className="inline-flex items-center gap-1 mb-2"
              style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              <span className="text-7xl font-black tracking-tight" style={{ color: "#18636B" }}>Ti</span>
              <span className="text-7xl font-black tracking-tight" style={{ color: "#43A6B0" }}>Quick</span>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          </div>

          {/* Title */}
          <div className="space-y-1">
            <p className="text-sm font-medium leading-relaxed" style={{ color: "#4A6567" }}>
              Soutenance de mémoire de fin de cycle en vue d'obtention du diplôme de Bachelor de Sciences de l'Informatique, option Technologie de l'Information
            </p>
            <h1 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#1A2B2C" }}>
              Conception et développement d'une plateforme web sécurisée
              de billetterie électronique adaptée au contexte nigérien
            </h1>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
            <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          </div>

          {/* Author info */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-sm" style={{ color: "#1A2B2C" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Présenté par</p>
              <p className="font-bold mt-1">Nouhou Soumana Ibrahim</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Encadreur</p>
              <p className="font-bold mt-1">M. Almou Bassirou</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">Ingénieur en Informatique</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#4A6567" }}>Année</p>
              <p className="font-bold mt-1">2025 – 2026</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-between flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">H</span>
          </div>
          <span className="text-xs font-bold tracking-wider">HYPE AGENCY</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-wider">CAPITAL HUMAIN</span>
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
