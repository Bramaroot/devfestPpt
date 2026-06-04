import { motion } from "framer-motion";

const actors = [
  { name: "Utilisateur", color: "#E3F2FD", border: "#90CAF9", text: "#1565C0" },
  { name: "React Frontend", color: "#F3E5F5", border: "#CE93D8", text: "#6A1B9A" },
  { name: "Laravel API", color: "#E8F5E9", border: "#A5D6A7", text: "#2E7D32" },
  { name: "AmanaTa B2B", color: "#FFF3E0", border: "#FFCC80", text: "#E65100" },
  { name: "PostgreSQL", color: "#FBE9E7", border: "#FFAB91", text: "#BF360C" },
];

const messages = [
  { from: 0, to: 1, label: "Réserver →", phase: "Réservation" },
  { from: 1, to: 2, label: "POST /reservations →", phase: "" },
  { from: 2, to: 4, label: "Vérifier stock →", phase: "" },
  { from: 4, to: 2, label: "← Stock OK", phase: "" },
  { from: 2, to: 4, label: "Créer réservation [en_attente] →", phase: "" },
  { from: 2, to: 1, label: "← {reservation_id}", phase: "Paiement" },
  { from: 0, to: 2, label: "Choisit AmanaTa →", phase: "" },
  { from: 2, to: 3, label: "POST /payment/create [HMAC-SHA256] →", phase: "" },
  { from: 3, to: 2, label: "← {payment_url, tx_id}", phase: "" },
  { from: 2, to: 1, label: "← {redirect_url}", phase: "" },
  { from: 1, to: 0, label: "← Redirection", phase: "Confirmation" },
  { from: 0, to: 3, label: "Saisit code mobile money →", phase: "" },
  { from: 3, to: 2, label: "← POST /webhook [IP whitelistée]", phase: "" },
  { from: 2, to: 4, label: "UPDATE réservation = payé →", phase: "" },
  { from: 4, to: 2, label: "← HTTP 200 OK", phase: "" },
];

const colWidth = 100 / actors.length;

const SequenceDiagramSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground"
      >
        Diagramme de séquence —{" "}
        <span className="text-primary">Paiement AmanaTa B2B</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full overflow-x-auto"
      >
        {/* Actor headers */}
        <div className="flex gap-1 mb-1">
          {actors.map((a, i) => (
            <div
              key={i}
              className="flex-1 text-center py-2 px-1 rounded-xl text-xs font-bold border"
              style={{ background: a.color, borderColor: a.border, color: a.text }}
            >
              {a.name}
            </div>
          ))}
        </div>

        {/* Lifelines + messages */}
        <div className="relative">
          {/* Vertical lifelines */}
          <div className="flex">
            {actors.map((a, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div className="w-px border-l-2 border-dashed" style={{ borderColor: a.border, height: `${messages.length * 28 + 8}px` }} />
              </div>
            ))}
          </div>

          {/* Messages */}
          <div className="absolute top-0 left-0 right-0">
            {messages.map((msg, i) => {
              const fromLeft = (msg.from + 0.5) * colWidth;
              const toLeft = (msg.to + 0.5) * colWidth;
              const isRight = msg.to > msg.from;
              const left = Math.min(fromLeft, toLeft);
              const width = Math.abs(toLeft - fromLeft);
              const top = i * 28 + 4;
              const phaseColor = msg.phase === "Réservation" ? "#43A6B0" : msg.phase === "Paiement" ? "#F9C74C" : msg.phase === "Confirmation" ? "#27AE60" : undefined;

              return (
                <div key={i} className="absolute" style={{ top, left: `${left}%`, width: `${width}%` }}>
                  {msg.phase && (
                    <div className="absolute -left-2 -top-3 text-[9px] font-bold px-1.5 py-0.5 rounded text-white" style={{ background: phaseColor, whiteSpace: "nowrap" }}>
                      {msg.phase}
                    </div>
                  )}
                  <div
                    className="h-px w-full relative"
                    style={{ background: "#43A6B0" }}
                  >
                    {/* Arrowhead */}
                    {isRight ? (
                      <div className="absolute right-0 -top-1 text-xs" style={{ color: "#43A6B0" }}>▶</div>
                    ) : (
                      <div className="absolute left-0 -top-1 text-xs" style={{ color: "#43A6B0" }}>◀</div>
                    )}
                  </div>
                  <p className="text-[9px] font-medium text-center truncate" style={{ color: "#1A2B2C", marginTop: "1px" }}>
                    {msg.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-3 grid grid-cols-3 gap-3">
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
        </div>
      </motion.div>
    </div>
  );
};

export default SequenceDiagramSlide;
