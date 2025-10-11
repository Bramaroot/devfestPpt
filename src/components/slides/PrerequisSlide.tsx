import { motion } from "framer-motion";
import { CheckCircle2, FolderGit2, Github, Cloud, Rocket } from "lucide-react";

const PrerequisSlide = () => {
  const prerequisites = [
    {
      icon: CheckCircle2,
      emoji: "✅",
      title: "Un projet utilisant un langage supporté",
      description: "(ex : React, Next.js, Node, etc.)",
    },
    {
      icon: Github,
      emoji: "🗂️",
      title: "Un dépôt GitHub contenant le code de ton projet",
      description: "Pour le versionnement et l'intégration",
    },
    {
      icon: Cloud,
      emoji: "☁️",
      title: "Un compte Vercel",
      description: "(gratuit sur vercel.com)",
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Et on est prêt à déployer !",
      description: "C'est tout ce qu'il faut",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
      >
        Ce qu'il te faut
        <span className="block text-primary mt-2">avant de déployer</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 w-full mb-12">
        {prerequisites.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
            className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="text-5xl mb-2">{item.emoji}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrerequisSlide;
