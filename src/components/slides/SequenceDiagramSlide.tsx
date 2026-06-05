import { motion } from "framer-motion";

const SequenceDiagramSlide = () => (
  <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-bold mb-1 text-center text-foreground flex-shrink-0"
    >
      Diagramme de séquence —{" "}
      <span className="text-primary">Paiement AmanaTa B2B</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
      className="text-muted-foreground text-center text-sm mb-4 flex-shrink-0"
    >
      Flux complet · Cas nominal & cas d'erreur · Idempotence webhook
    </motion.p>

    {/* SVG diagram */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      className="flex-1 min-h-0 rounded-2xl border border-border overflow-auto bg-white shadow-sm"
    >
      <img
        src="/AmanaTa sequence Diagram.svg"
        alt="Diagramme de séquence AmanaTa B2B"
        className="w-full h-auto"
        style={{ minWidth: "600px" }}
      />
    </motion.div>

    {/* Notes */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
      className="flex-shrink-0 mt-3 grid grid-cols-3 gap-3"
    >
      {[
        { icon: "🔐", text: "Signature = HMAC-SHA256(ts + METHOD + URI + body, api_key)" },
        { icon: "♻️", text: "Idempotence Redis — évite le double traitement du webhook" },
        { icon: "⚠️", text: "Pas de sandbox disponible — tests effectués en production" },
      ].map((note, i) => (
        <div key={i} className="flex items-start gap-2 bg-[#FFF9E6] border border-[#F9C74C]/50 rounded-xl p-2.5">
          <span className="text-sm flex-shrink-0">{note.icon}</span>
          <p className="text-[10px] text-muted-foreground leading-snug">{note.text}</p>
        </div>
      ))}
    </motion.div>
  </div>
);

export default SequenceDiagramSlide;
