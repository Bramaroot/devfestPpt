import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-12 text-center"
      >
        <span className="block text-primary">Démonstration</span>
        pratique
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-10 border border-border shadow-2xl max-w-4xl mb-8"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Nous allons maintenant passer à la partie pratique :
        </h3>
        <div className="space-y-4">
          {[
            { step: "1", text: "Connexion à GitHub", icon: "🔗" },
            { step: "2", text: "Lien du projet avec Vercel", icon: "🔄" },
            { step: "3", text: "Lancement du déploiement", icon: "🚀" },
            {
              step: "4",
              text: "Et test de l'application en ligne 🎉",
              icon: "✨",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-4 bg-secondary/30 rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-primary">{item.step}</span>
              </div>
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DemoSlide;
