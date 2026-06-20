import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, RotateCcw } from "lucide-react";

const CARD_H = 220;

const challenges = [
  {
    num: "01",
    title: "APIs locales non documentées",
    desc: "Impossible d'obtenir des environnements de test stables ni des docs à jour pour NITA / AmanaTa.",
    solution: "Reverse-engineering des flux HTTP, tests directs en production avec de petits montants, et contact direct avec les équipes techniques.",
    accent: "#D97706", frontBg: "#FFFBEB", frontBorder: "#FDE68A",
    backBg: "#FEF3C7", backBorder: "#FCD34D",
  },
  {
    num: "02",
    title: "Absence de Dockerfile personnalisé",
    desc: "Utilisation de Nixpacks (auto-détection) — peu de contrôle sur l'environnement de déploiement.",
    solution: "Configuration via nixpacks.toml pour définir les phases de build et variables d'environnement. Migration vers un Dockerfile dédié prévue en V2.",
    accent: "#2563EB", frontBg: "#EFF6FF", frontBorder: "#BFDBFE",
    backBg: "#DBEAFE", backBorder: "#93C5FD",
  },
  {
    num: "03",
    title: "Connexion instable au Niger",
    desc: "Risque de perte de session ou d'interruption durant le tunnel de paiement.",
    solution: "TanStack Query pour le cache optimiste côté frontend + mécanisme d'idempotence sur les endpoints de paiement côté Laravel.",
    accent: "#059669", frontBg: "#F0FDF4", frontBorder: "#A7F3D0",
    backBg: "#D1FAE5", backBorder: "#6EE7B7",
  },
];

const FlipCard = ({ c, index }: { c: typeof challenges[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.12 }}
      onClick={() => setFlipped(f => !f)}
      className="w-full cursor-pointer"
      style={{ height: CARD_H, perspective: 1200 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: CARD_H,
        }}
      >
        {/* FRONT */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: c.frontBg,
            borderColor: c.frontBorder,
            position: "absolute", inset: 0,
          }}
          className="rounded-2xl border flex items-center gap-6 px-8 overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: c.frontBorder }}>
            <AlertTriangle className="w-8 h-8" style={{ color: c.accent }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black font-mono" style={{ color: c.accent }}>#{c.num}</span>
              <h3 className="font-bold text-lg text-foreground">{c.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50 flex-shrink-0 select-none">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>solution</span>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: c.backBg,
            borderColor: c.backBorder,
            position: "absolute", inset: 0,
          }}
          className="rounded-2xl border flex items-center gap-6 px-8 overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: c.backBorder }}>
            <CheckCircle2 className="w-8 h-8" style={{ color: c.accent }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>
              Solution apportée
            </p>
            <p className="text-sm text-foreground leading-relaxed">{c.solution}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50 flex-shrink-0 select-none">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>retour</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ChallengesSlide = () => (
  <div className="flex flex-col max-w-4xl mx-auto px-6 py-6 w-full" style={{ gap: 16 }}>
    <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-3xl md:text-4xl font-bold">
        Difficultés & <span className="text-primary">Solutions</span>
      </h2>
      <p className="text-xs text-muted-foreground mt-0.5">Cliquez sur une carte pour révéler la solution</p>
    </motion.div>

    {challenges.map((c, i) => <FlipCard key={i} c={c} index={i} />)}
  </div>
);

export default ChallengesSlide;
