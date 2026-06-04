import { motion } from "framer-motion";

const IntegrationTestsSlide = () => {
  const perspectives = [
    {
      priority: "Court terme",
      dot: "bg-red-400",
      items: [
        "Envoi automatique des billets par email",
        "Tests Playwright (end-to-end frontend)",
        "Validation en production réelle avec vrais événements payants",
      ],
    },
    {
      priority: "Moyen terme",
      dot: "bg-yellow-400",
      items: [
        "Intégration Orange Money + Moov Money",
        "Mode hors-ligne pour le scan QR (PWA / Service Worker)",
        "Dashboard organisateur sur mobile Flutter",
      ],
    },
    {
      priority: "Long terme",
      dot: "bg-green-400",
      items: [
        "Expansion régionale (Burkina, Mali, Tchad)",
        "Business Intelligence + prévisions IA",
        "API publique pour partenaires tiers",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-center"
      >
        <span className="text-primary">Perspectives</span> — Et après TiQuick ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8 text-center text-sm"
      >
        Roadmap à 3 niveaux de priorité
      </motion.p>

      <div className="grid md:grid-cols-3 gap-5 w-full">
        {perspectives.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${p.dot} flex-shrink-0`} />
              <h3 className="font-bold text-base text-foreground">{p.priority}</h3>
            </div>
            <ul className="space-y-3">
              {p.items.map((item, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 + i * 0.15 + j * 0.07 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-muted-foreground/60 text-xs mt-0.5 flex-shrink-0">→</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationTestsSlide;
