import { motion } from "framer-motion";

const ArchitectureSlide = () => (
  <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground flex-shrink-0"
    >
      Architecture <span className="text-primary">3-Tiers</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.08 }}
      className="text-muted-foreground mb-5 text-center text-sm flex-shrink-0"
    >
      Déploiement VPS · Dokploy · Docker · Cloudflare
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.4 }}
      className="flex-1 min-h-0 w-full flex items-center justify-center"
    >
      <img
        src="/Diagram/archTroisTiers.png"
        alt="Architecture 3-Tiers TiQuick"
        className="max-h-full max-w-full object-contain rounded-2xl shadow-md"
      />
    </motion.div>
  </div>
);

export default ArchitectureSlide;
