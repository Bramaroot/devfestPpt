import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";

const GitHubSlide = () => {
  const challenges = [
    {
      title: "Whitelist IP",
      problem: "L'API NITA n'accepte que des IP préautorisées",
      solution: "Détection auto IP locale → Substitution IP sandbox NITA selon environnement",
      colorTitle: "text-primary",
      bg: "bg-primary/10 border-primary/30",
    },
    {
      title: "Caractères accentués",
      problem: "L'API NITA rejette les accents dans les champs description",
      solution: "Classe de sanitisation appliquée avant chaque appel API",
      colorTitle: "text-[#F9C74C]",
      bg: "bg-[#F9C74C]/10 border-[#F9C74C]/30",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-7">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-3">
          <Network className="w-4 h-4 text-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">Défi Technique 2</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Intégration <span className="text-primary">NITA</span>
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">2 contraintes spécifiques et leurs solutions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 w-full mb-5">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className={`p-6 rounded-2xl border ${c.bg}`}
          >
            <h3 className={`text-xl font-bold mb-4 ${c.colorTitle}`}>{c.title}</h3>
            <div className="space-y-3">
              <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3">
                <p className="text-xs text-red-400 font-semibold mb-1 uppercase tracking-wide">Contrainte</p>
                <p className="text-sm text-foreground">{c.problem}</p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-3">
                <p className="text-xs text-green-400 font-semibold mb-1 uppercase tracking-wide">Solution</p>
                <p className="text-sm text-foreground">{c.solution}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full bg-card border border-border rounded-2xl p-5"
      >
        <div className="flex items-start gap-3">
          <div className="text-primary font-mono font-bold text-sm mt-0.5 flex-shrink-0">+</div>
          <div>
            <p className="font-bold text-sm text-foreground mb-1">Polling frontend toutes les 3s (max 5 min)</p>
            <p className="text-xs text-muted-foreground">
              Contrairement à AmanaTa qui envoie un webhook passif, NITA ne propose pas de callback fiable — le
              frontend interroge donc le statut de paiement en boucle jusqu'à confirmation ou expiration.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubSlide;
