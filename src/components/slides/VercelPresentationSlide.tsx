import { motion } from "framer-motion";
import vercelLogo from "@/assets/vercel.jpg";

const VercelPresentationSlide = () => {
  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt",
    "Angular",
    "Svelte",
    "Node.js",
    "Astro",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <img
          src={vercelLogo}
          alt="Vercel Logo"
          className="w-48 h-48 object-contain drop-shadow-2xl"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold mb-12 text-center"
      >
        Pourquoi choisir
        <span className="block text-primary mt-2">Vercel ?</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-10 border border-border shadow-2xl max-w-4xl mb-10"
      >
        <p className="text-xl md:text-2xl leading-relaxed text-center mb-4">
          Vercel est une{" "}
          <span className="font-semibold text-primary">
            plateforme de déploiement moderne, rapide
          </span>{" "}
          et pensée pour les développeurs web.
        </p>
        <p className="text-lg text-muted-foreground text-center">
          Elle permet de connecter automatiquement ton projet GitHub et de
          déployer ton site en quelques clics.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="w-full max-w-4xl"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Technologies supportées
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl p-4 text-center border border-border hover:border-primary/50 transition-all"
            >
              <span className="font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VercelPresentationSlide;
