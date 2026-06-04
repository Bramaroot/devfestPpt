import { motion } from "framer-motion";

const points = [
  { num: "01", emoji: "🌍", title: "Introduction & Problématique", sub: "Contexte nigérien, enjeux" },
  { num: "02", emoji: "📊", title: "État de l'art & Positionnement", sub: "Comparatif des solutions" },
  { num: "03", emoji: "⚙️", title: "Méthodologie & Conception", sub: "Scrum, architecture, modèles" },
  { num: "04", emoji: "💻", title: "Réalisation Technique", sub: "AmanaTa, NITA, QR code" },
  { num: "05", emoji: "📱", title: "Application Mobile", sub: "Flutter — iOS & Android" },
  { num: "06", emoji: "🚀", title: "DevOps, Tests & Infrastructure", sub: "Dokploy, CI/CD, bilan" },
];

const PlanSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Plan de la <span className="text-primary">présentation</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.09 }}
            className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
          >
            <div
              className="text-2xl font-black w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-mono"
              style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)" }}
            >
              {p.num}
            </div>
            <div className="flex items-start gap-2 flex-1">
              <span className="text-xl mt-0.5">{p.emoji}</span>
              <div>
                <p className="font-bold text-foreground text-sm">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{p.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlanSlide;
