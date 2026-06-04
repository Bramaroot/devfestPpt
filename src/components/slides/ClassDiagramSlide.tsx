import { motion } from "framer-motion";

interface ClassBoxProps {
  name: string;
  attributes: string[];
  methods: string[];
}

const ClassBox = ({ name, attributes, methods }: ClassBoxProps) => (
  <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm text-xs font-mono min-w-[130px]">
    <div className="px-3 py-2 font-bold text-center text-white text-sm" style={{ background: "#18636B" }}>
      {name}
    </div>
    <div className="px-3 py-2 space-y-0.5 border-t border-border">
      {attributes.map((a, i) => (
        <p key={i} className="text-muted-foreground">{a}</p>
      ))}
    </div>
    {methods.length > 0 && (
      <div className="px-3 py-2 space-y-0.5 border-t border-border">
        {methods.map((m, i) => (
          <p key={i} style={{ color: "#18636B" }}>{m}</p>
        ))}
      </div>
    )}
  </div>
);

const Arrow = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-1 py-0.5 text-muted-foreground text-xs">
    <span>↓</span>
    <span className="font-mono">{label}</span>
  </div>
);

const ClassDiagramSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground"
      >
        Diagramme de classes —{" "}
        <span className="text-primary">Modèle Eloquent TiQuick</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-5 w-full"
      >
        {/* Domaine Identité */}
        <div className="rounded-2xl p-4 border" style={{ background: "#EEF6F7", borderColor: "#B2D8DB" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#18636B" }}>
            Domaine Identité
          </p>
          <div className="space-y-1.5">
            <ClassBox
              name="User"
              attributes={["-uuid id", "-string email", "-string role"]}
              methods={["+reserverBillet()", "+telecharger()"]}
            />
            <Arrow label="1 : 0..*" />
            <ClassBox
              name="Organisateur"
              attributes={["-uuid id", "-string nom", "-enum statut"]}
              methods={["+creerEvent()", "+getStats()"]}
            />
          </div>
        </div>

        {/* Domaine Billetterie */}
        <div className="rounded-2xl p-4 border" style={{ background: "#E8F5E9", borderColor: "#A5D6A7" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#27AE60" }}>
            Domaine Billetterie
          </p>
          <div className="space-y-1">
            <ClassBox
              name="Evenement"
              attributes={["-uuid id", "-string titre", "-timestamp date", "-enum statut"]}
              methods={["+publier()", "+annuler()"]}
            />
            <Arrow label="1 : 0..*" />
            <ClassBox
              name="Reservation"
              attributes={["-decimal montant", "-enum statut"]}
              methods={["+confirmer()", "+genTickets()"]}
            />
            <Arrow label="1 : 1..*" />
            <ClassBox
              name="Ticket"
              attributes={["-string qr_code", "-enum statut"]}
              methods={["+generatePdf()", "+validerAcces()"]}
            />
            <Arrow label="1 : 0..*" />
            <ClassBox
              name="Scan"
              attributes={["-enum result", "-timestamp created_at"]}
              methods={["+scanner()"]}
            />
          </div>
        </div>

        {/* Domaine Paiement + Légende */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl p-4 border" style={{ background: "#FFF3E0", borderColor: "#FFCC80" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E67E22" }}>
              Domaine Paiement
            </p>
            <ClassBox
              name="Paiement"
              attributes={["-string provider", "-string tx_id", "-json data", "-enum statut"]}
              methods={["+initAmanaTa()", "+initNITA()", "+confirmer()"]}
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">← lié à Reservation</p>
          </div>

          <div className="rounded-2xl p-4 border bg-white" style={{ borderColor: "#D4E8E9" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-primary">Légende</p>
            <div className="space-y-2 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <span className="text-base">↓</span><span>Composition (1:0..*)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">←</span><span>Association</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded flex-shrink-0" style={{ background: "#18636B" }} />
                <span>Nom de classe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 rounded flex-shrink-0 border border-border" />
                <span>Attributs / Méthodes</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassDiagramSlide;
