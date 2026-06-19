import { motion } from "framer-motion";
import { Target, CheckCircle2 } from "lucide-react";

const ObjectivesSlide = () => {
  const specificObjectives = [
    "Implémenter un backend API RESTful robuste avec Laravel 12",
    "Développer un frontend interactif et réactif avec React & TypeScript",
    "Intégrer les passerelles de paiement locales AmanaTa & NITA",
    "Mettre en place une stratégie de tests unitaires et d'intégration",
    "Déployer une chaîne CI/CD via Dokploy et Nixpacks",
    "Documenter l'architecture système et les choix techniques"
  ];

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Objectifs du <span className="text-primary">Projet</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-6 items-stretch w-full">
        {/* Objectif Principal */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-6 rounded-3xl border border-primary/20 shadow-xl w-full"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2.5 bg-primary/20 rounded-2xl">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Objectif Principal</h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Concevoir, développer et documenter <span className="text-foreground font-semibold">TiQuick</span>, 
            une plateforme fullstack de gestion d'événements et de billetterie électronique adaptée au 
            <span className="text-primary font-semibold"> contexte nigérien</span>, garantissant sécurité, 
            traçabilité et accessibilité.
          </p>
        </motion.div>

        {/* Objectifs Spécifiques */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 w-full"
        >
          <h3 className="text-xl font-bold flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Objectifs Spécifiques
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {specificObjectives.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-start gap-3 p-3 bg-secondary/30 rounded-2xl border border-border/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-xs font-medium leading-tight">{obj}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;
