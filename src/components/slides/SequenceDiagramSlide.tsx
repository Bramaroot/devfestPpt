import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const SequenceDiagramSlide = () => {
  const [activeGateway, setActiveGateway] = useState<"amanata" | "nita">("amanata");
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  const handleReset = () => setScale(1);

  // Réinitialise le zoom à chaque changement de diagramme
  useEffect(() => {
    setScale(1);
  }, [activeGateway]);

  const info = {
    amanata: {
      title: "Diagramme de séquence — AmanaTa B2B",
      desc: "Flux complet · Cas nominal & cas d'erreur · Idempotence webhook",
      src: "/AmanaTa sequence Diagram.svg",
      notes: [
        { icon: "🔐", text: "Signature = HMAC-SHA256(ts + METHOD + URI + body, api_key)" },
        { icon: "♻️", text: "Idempotence Redis — évite le double traitement du webhook" },
        { icon: "⚠️", text: "Pas de sandbox disponible — tests effectués en production" },
      ]
    },
    nita: {
      title: "Diagramme de séquence — NITA API",
      desc: "Flux synchrone · Polling client · Contraintes IP et caractères",
      src: "/Nita sequnce Diagram.svg",
      notes: [
        { icon: "🌐", text: "Whitelist IP obligatoire — Tunnel proxy nécessaire en local" },
        { icon: "🔄", text: "Polling frontend toutes les 3s pendant 5 min max" },
        { icon: "🔤", text: "Sanitisation stricte des descriptions (accents rejetés par l'API)" },
      ]
    }
  };

  const current = info[activeGateway];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6">
      <div className="flex flex-col items-center gap-4 mb-4 flex-shrink-0">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center flex items-center justify-center gap-3"
        >
          <img
            src={activeGateway === "amanata" ? "/Logos/amana.png" : "/Logos/logo.png"}
            alt={activeGateway === "amanata" ? "AmanaTa" : "NITA"}
            className="w-10 h-10 object-contain rounded-xl bg-white p-1 border border-border shadow-sm"
          />
          <span>{current.title}</span>
        </motion.h2>

        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveGateway("amanata")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
              activeGateway === "amanata"
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <img
              src="/Logos/amana.png"
              alt="AmanaTa"
              className="w-4 h-4 object-contain rounded-full bg-white"
            />
            <span>AmanaTa B2B</span>
          </button>
          <button
            onClick={() => setActiveGateway("nita")}
            className={`px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2 ${
              activeGateway === "nita"
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <img
              src="/Logos/logo.png"
              alt="NITA"
              className="w-4 h-4 object-contain rounded-full bg-white"
            />
            <span>NITA API</span>
          </button>
        </div>
      </div>

      <motion.p
        key={`desc-${activeGateway}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-muted-foreground text-center text-sm mb-4 flex-shrink-0"
      >
        {current.desc}
      </motion.p>

      {/* SVG diagram */}
      <div className="relative flex-1 min-h-0 bg-white rounded-2xl border border-border overflow-hidden flex flex-col shadow-sm">
        {/* Barre d'outils de Zoom */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur border border-border rounded-full p-1.5 shadow-sm z-10">
          <button
            onClick={handleZoomOut}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Zoom Arrière"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-medium w-12 text-center text-foreground select-none">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Zoom Avant"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground border-l border-border pl-2 rounded-l-none"
            title="Réinitialiser"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Zone de l'image */}
        <div className="w-full h-full flex justify-center items-center overflow-auto p-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeGateway}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              src={current.src}
              alt={current.title}
              className="max-h-full max-w-full object-contain origin-center"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Notes */}
      <motion.div
        key={`notes-${activeGateway}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-shrink-0 mt-3 grid grid-cols-3 gap-3"
      >
        {current.notes.map((note, i) => (
          <div key={i} className="flex items-start gap-2 bg-[#FFF9E6] border border-[#F9C74C]/50 rounded-xl p-2.5">
            <span className="text-sm flex-shrink-0">{note.icon}</span>
            <p className="text-[10px] text-muted-foreground leading-snug">{note.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SequenceDiagramSlide;
