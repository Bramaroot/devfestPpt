import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const achieved = [
  { label: "API RESTful Laravel 12 — Architecture solide",             done: true },
  { label: "Frontend React/TypeScript — UI/UX moderne",               done: true },
  { label: "Paiement NITA intégré & opérationnel",                    done: true },
  { label: "Système de Scan QR & journalisation temps réel",          done: true },
  { label: "Application Mobile Flutter (iOS & Android)",              done: true },
  { label: "Infrastructure DevOps avec CI/CD (Dokploy)",              done: true },
  { label: "Déploiement effectif sur tiquick.com",                    done: true },
  { label: "8 sprints Scrum complétés avec succès",                   done: true },
  { label: "Paiement AmanaTa — en cours (problème technique côté AmanaTa)", done: false },
];

const BilanSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <CheckCircle2 className="w-7 h-7 text-green-500" />
        <h2 className="text-4xl md:text-5xl font-bold">
          Bilan du <span className="text-primary">Projet</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-3 w-full">
        {achieved.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-sm ${
              item.done
                ? "bg-green-500/5 border-green-500/15"
                : "bg-amber-500/5 border-amber-500/25"
            }`}
          >
            {item.done
              ? <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              : <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
            }
            <p className={`text-sm font-medium ${item.done ? "text-foreground" : "text-amber-700"}`}>
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BilanSlide;
