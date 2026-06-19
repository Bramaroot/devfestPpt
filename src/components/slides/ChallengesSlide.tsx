import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

const ChallengesSlide = () => {
  const challenges = [
    {
      title: "APIs locales non documentées",
      desc: "Difficulté à obtenir des sandbox fonctionnels et des docs à jour pour AmanaTa/NITA.",
      solution: "Reverse-engineering des flux, tests directs en production (petits montants) et support direct.",
      color: "amber"
    },
    {
      title: "Contraintes techniques NITA",
      desc: "L'API NITA rejette les accents (UTF-8) et impose un Whitelisting d'IP strict.",
      solution: "Implémentation d'un service de normalisation de texte et tunnel proxy pour les tests locaux.",
      color: "blue"
    },
    {
      title: "Connexion instable au Niger",
      desc: "Risque de perte de session ou d'interruption durant le tunnel d'achat.",
      solution: "Utilisation de TanStack Query pour le cache et mécanisme d'idempotence côté backend.",
      color: "emerald"
    }
  ];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Difficultés & <span className="text-primary">Solutions</span>
        </h2>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid gap-6">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-xl"
          >
            <div className={`md:w-1/3 p-8 flex flex-col justify-center items-center text-center bg-${c.color}-500/10`}>
              <AlertTriangle className={`w-12 h-12 text-${c.color}-500 mb-4`} />
              <h3 className="text-xl font-black leading-tight mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground italic">{c.desc}</p>
            </div>
            
            <div className="flex-1 p-8 flex flex-col justify-center relative">
               <div className="absolute top-4 right-8 opacity-5">
                  <Lightbulb className="w-32 h-32" />
               </div>
               <div className="flex items-center gap-4 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                  <h4 className="text-2xl font-bold text-primary">Solution Apportée</h4>
               </div>
               <p className="text-lg font-medium leading-relaxed">
                  {c.solution}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesSlide;
