import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const LogsSlide = () => {
  const achieved = [
    "API RESTful Laravel 12",
    "Frontend React/TypeScript",
    "AmanaTa B2B intégré",
    "NITA intégré",
    "Scan QR + journalisation",
    "Flutter iOS + Android",
    "CI/CD Dokploy",
    "Déployé sur tiquick.com",
    "8 sprints complétés",
  ];

  const limits = [
    "Pas d'envoi auto de billets par email",
    "Polling NITA (pas de webhook natif)",
    "Tests frontend Playwright manquants",
    "Tests en production réelle à venir",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-7 text-center"
      >
        Bilan & <span className="text-primary">Limites</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 w-full mb-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-green-400">Objectifs atteints</h3>
          </div>
          <div className="space-y-2">
            {achieved.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3 bg-green-500/5 border border-green-500/20 px-3 py-2 rounded-xl"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <p className="text-xs font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-orange-400">Limites identifiées</h3>
          </div>
          <div className="space-y-2 mb-5">
            {limits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="flex items-start gap-3 bg-orange-500/5 border border-orange-500/20 px-3 py-2.5 rounded-xl"
              >
                <XCircle className="w-3.5 h-3.5 text-orange-400/80 flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-card border border-border rounded-2xl p-4"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3 font-semibold">En chiffres</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "1 123", label: "Paragraphes documentés" },
                { value: "15", label: "Écrans mobile" },
                { value: "30", label: "Figures dans le mémoire" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-black text-[#F9C74C]">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogsSlide;
