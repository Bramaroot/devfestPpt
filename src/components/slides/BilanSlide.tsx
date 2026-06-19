import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Layout, FileText } from "lucide-react";

const BilanSlide = () => {
  const achieved = [
    "API RESTful Laravel 12 — Architecture solide",
    "Frontend React/TypeScript — UI/UX moderne",
    "Paiements AmanaTa B2B & NITA intégrés",
    "Système de Scan QR & journalisation temps réel",
    "Application Mobile Flutter (iOS & Android)",
    "Infrastructure DevOps avec CI/CD (Dokploy)",
    "Déploiement effectif sur tiquick.com",
    "8 sprints Scrum complétés avec succès",
  ];

  const stats = [
    { value: "1 123", label: "Paragraphes documentés", icon: FileText },
    { value: "15", label: "Écrans mobile", icon: Layout },
    { value: "30", label: "Figures & Diagrammes", icon: TrendingUp },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        Bilan du <span className="text-primary">Projet</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-bold text-green-600 uppercase tracking-wide">Objectifs atteints</h3>
          </div>
          <div className="space-y-3">
            {achieved.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3 bg-green-500/5 border border-green-500/10 px-4 py-3 rounded-2xl shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-primary uppercase tracking-wide">Le projet en chiffres</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <s.icon size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </div>
  );
};

export default BilanSlide;
