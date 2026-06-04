import { motion } from "framer-motion";

const Step = ({ text, color }: { text: string; color: string }) => (
  <div className="px-3 py-2 rounded-xl border text-xs font-medium text-center leading-tight" style={{ background: color, borderColor: "rgba(0,0,0,0.08)" }}>
    {text}
  </div>
);

const Diamond = ({ text }: { text: string }) => (
  <div className="flex justify-center my-1">
    <div className="relative px-4 py-2 text-xs font-bold text-center text-white rounded-lg" style={{ background: "#F9C74C", color: "#1A2B2C" }}>
      ◇ {text}
    </div>
  </div>
);

const Dot = ({ fill = "#1A2B2C" }: { fill?: string }) => (
  <div className="flex justify-center my-1">
    <div className="w-4 h-4 rounded-full" style={{ background: fill }} />
  </div>
);

const Down = ({ label = "" }: { label?: string }) => (
  <div className="flex flex-col items-center my-0.5">
    {label && <span className="text-[10px] text-muted-foreground font-semibold mb-0.5">{label}</span>}
    <div className="text-muted-foreground text-xs">↓</div>
  </div>
);

const ActivityDiagramSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-5 text-center text-foreground"
      >
        Diagramme d'activité —{" "}
        <span className="text-primary">Flux de réservation</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4 w-full"
      >
        {/* Column headers */}
        {[
          { label: "Utilisateur", color: "#E3F2FD", border: "#90CAF9", text: "#1565C0" },
          { label: "Système TiQuick", color: "#E8F5E9", border: "#A5D6A7", text: "#2E7D32" },
          { label: "Passerelle", color: "#FFF3E0", border: "#FFCC80", text: "#E65100" },
        ].map((col, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="text-center py-2 rounded-xl text-xs font-bold uppercase tracking-wide" style={{ background: col.color, border: `1px solid ${col.border}`, color: col.text }}>
              {col.label}
            </div>

            {i === 0 && (
              <>
                <Dot />
                <Down />
                <Step text="Consulte événement" color="#E3F2FD" />
                <Down />
                <Step text="Clique Réserver" color="#E3F2FD" />
                <div className="h-8" />
                <Down label="Stock OK" />
                <Step text="Saisit infos (nom, email)" color="#E3F2FD" />
                <Down />
                <Step text="Sélectionne paiement" color="#E3F2FD" />
                <Down label="PAYANT" />
                <div className="h-5" />
                <div className="h-5" />
                <Down />
                <Step text="Redirigé → saisit code" color="#E3F2FD" />
                <div className="h-5" />
                <div className="h-5" />
                <Down />
                <Step text="Accède à Mes tickets" color="#E3F2FD" />
                <Down />
                <Step text="Télécharge PDF 🎫" color="#E3F2FD" />
                <Down />
                <Dot fill="#27AE60" />
              </>
            )}

            {i === 1 && (
              <>
                <div className="h-4" />
                <Step text="Vérifie le stock" color="#E8F5E9" />
                <Diamond text="Stock dispo ?" />
                <Down label="OUI" />
                <Step text="Crée Réservation [en_attente]" color="#E8F5E9" />
                <Down />
                <div className="h-4" />
                <Step text="Initie paiement API" color="#E8F5E9" />
                <Down />
                <Step text="Calcule HMAC-SHA256" color="#E8F5E9" />
                <Down />
                <Step text="Reçoit {payment_url}" color="#E8F5E9" />
                <Down />
                <div className="h-4" />
                <Down label="webhook" />
                <Step text="UPDATE statut = payé" color="#E8F5E9" />
                <Down />
                <Step text="Billet disponible ✓" color="#E8F5E9" />
              </>
            )}

            {i === 2 && (
              <>
                <div className="h-36" />
                <Step text="Génère {payment_url}" color="#FFF3E0" />
                <Down />
                <Step text="Interface paiement tiers" color="#FFF3E0" />
                <Down />
                <Step text="Confirme paiement" color="#FFF3E0" />
                <Down />
                <Step text="POST /webhook" color="#FFF3E0" />
                <Down />
                <Step text="HTTP 200 OK" color="#FFF3E0" />
              </>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ActivityDiagramSlide;
