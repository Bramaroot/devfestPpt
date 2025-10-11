import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const ConclusionSlide = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
          <img
            src="public/bramcolor.jpg"
            alt="Nouhou Ibrahim"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover ring-4 ring-primary/50 shadow-2xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/50">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {" "}
            Merci pour votre attention 💫
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-border"
        >
          <p className="text-xl font-semibold text-primary mb-2">
            Nouhou Ibrahim
          </p>
          <p className="text-muted-foreground">Développeur Web</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;
