import { motion } from "framer-motion";
import { XCircle, ArrowDown } from "lucide-react";

const ProblemSlide = () => {
  const problems = [
    "Billets papier → contrefaçon facile",
    "Vente en espèces → opacité financière",
    "Aucune traçabilité des transactions",
    "Passerelles bancaires inaccessibles",
    "Pas de gestion des capacités en temps réel",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground"
      >
        Contexte & <span className="text-primary">Problématique</span>
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 w-full items-start">
        {/* Left — problems */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Le secteur événementiel nigérien
          </p>
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.07 }}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-3 shadow-sm"
            >
              <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-foreground leading-snug">{p}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Center — stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col items-center gap-5"
        >
          <div
            className="w-full text-center p-6 rounded-2xl shadow-md"
            style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)" }}
          >
            <p className="text-5xl font-black mb-1" style={{ color: "#F9C74C" }}>14M+</p>
            <p className="text-sm font-medium text-white/90">abonnements mobiles actifs au Niger</p>
            <p className="text-xs text-white/60 mt-1">ARCEP 2024</p>
          </div>

          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <div className="w-px h-8" style={{ background: "#D4E8E9" }} />
            <ArrowDown size={24} className="text-[#43A6B0]" />
          </div>

          <div className="bg-secondary border border-primary/20 rounded-xl p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">Opportunité</p>
            <p className="text-sm text-foreground font-medium">Une infrastructure mobile prête, sans solution billetterie locale</p>
          </div>
        </motion.div>

        {/* Right — problematique */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-primary/30 rounded-2xl p-6 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Problématique</p>
          <p className="text-sm font-semibold text-foreground leading-relaxed italic">
            "Comment concevoir une plateforme web sécurisée de billetterie électronique adaptée aux contraintes
            du contexte nigérien, garantissant l'intégrité des transactions et une expérience fluide pour tous
            les acteurs de l'écosystème ?"
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSlide;
