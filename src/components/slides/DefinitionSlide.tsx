import { motion } from "framer-motion";
import { Globe, Server, Zap } from "lucide-react";

const DefinitionSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-12 text-center"
      >
        Qu'est-ce que le
        <span className="block text-primary mt-2">Déploiement Web ?</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-10 border border-border shadow-2xl max-w-4xl mb-8"
      >
        <p className="text-xl md:text-2xl leading-relaxed text-center mb-6">
          Le déploiement web est le{" "}
          <span className="font-semibold text-primary">
            processus qui consiste à rendre une application accessible en ligne
          </span>{" "}
          via un serveur ou une plateforme cloud.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-center text-muted-foreground">
          En d'autres termes, c'est le pont entre ton code local et Internet,
          afin que les utilisateurs puissent interagir avec ton application
          depuis n'importe où.
        </p>
      </motion.div>
    </div>
  );
};

export default DefinitionSlide;
