import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

const HypotheseSlide = () => (
  <div className="flex flex-col h-full max-w-4xl mx-auto px-6 py-10 justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center mb-10"
    >
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
        <Lightbulb className="w-12 h-12 text-primary animate-pulse" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-2">
        Hypothèse de <span className="text-primary">Recherche</span>
      </h2>
      <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-primary/20 shadow-2xl relative"
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
        ?
      </div>
      <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground text-center">
        "Il est techniquement et économiquement viable de concevoir et déployer une plateforme de billetterie électronique sécurisée, adaptée au marché nigérien, en capitalisant sur l'infrastructure mobile existante et les passerelles de paiement locales AmanaTa B2B et NITA."
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex justify-center gap-6"
    >
      {[
        "Sécurisation des flux",
        "Inclusion financière",
        "Déployée en production"
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary/40 rounded-full border border-border/50 text-sm font-semibold text-muted-foreground">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>{item}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default HypotheseSlide;
