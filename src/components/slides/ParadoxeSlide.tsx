import { motion } from "framer-motion";
import { XCircle, Smartphone } from "lucide-react";

const ParadoxeSlide = () => {
  const problems = [
    { text: "Billets papier", detail: "Contrefaçon & fraudes" },
    { text: "Vente en espèces", detail: "Opacité financière totale" },
    { text: "Pas de gestion des capacités", detail: "Surréservation incontrôlable" },
    { text: "Cartes bancaires", detail: "Inaccessibles à la majorité" },
  ];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6 justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Un <span className="text-primary">paradoxe nigérien</span>
        </h2>
        <p className="text-muted-foreground italic text-lg">Le contraste entre connectivité et pratiques événementielles</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 items-center mb-6 flex-1">
        {/* Left Side: Connectivité */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center shadow-sm h-full justify-center"
        >
          <Smartphone className="w-16 h-16 text-primary mb-4 animate-pulse" />
          <p className="text-4xl md:text-5xl font-black text-primary mb-2">14 MILLIONS</p>
          <p className="text-lg font-bold text-foreground">d'abonnés mobiles actifs au Niger</p>
          <span className="text-xs text-muted-foreground mt-2 block">(Source : ARCEP 2024)</span>
        </motion.div>

        {/* Right Side: Secteur Event */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center p-8 rounded-3xl bg-destructive/5 border border-destructive/20 text-center shadow-sm h-full justify-center"
        >
          <XCircle className="w-16 h-16 text-destructive mb-4" />
          <p className="text-2xl font-bold text-destructive mb-2">Secteur Événementiel</p>
          <p className="text-lg text-foreground">
            Reste prisonnier des formats physiques et de la vente informelle en espèces.
          </p>
        </motion.div>
      </div>

      {/* Grid of issues */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {problems.map((prob, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="flex items-center justify-between p-4 bg-white border border-border rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🎟️</span>
              <span className="font-bold text-foreground text-sm">{prob.text}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium">{prob.detail}</span>
              <XCircle className="w-4 h-4 text-destructive shrink-0" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Opportunity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-secondary/50 p-4 rounded-2xl border border-secondary text-center"
      >
        <p className="text-sm font-semibold text-primary">
          💡 Infrastructure mobile prête. Solution de billetterie locale : absente.
        </p>
      </motion.div>
    </div>
  );
};

export default ParadoxeSlide;
