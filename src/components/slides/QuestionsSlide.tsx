import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Lightbulb } from "lucide-react";

const QuestionsSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-lg shadow-primary/50">
          <MessageCircle className="w-16 h-16 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        Des questions ? 💭
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-12 border border-border shadow-2xl mb-12 max-w-3xl"
      >
        <p className="text-2xl md:text-3xl font-light leading-relaxed">
          C'est le moment d'échanger !
        </p>
        <p className="text-xl text-muted-foreground mt-4">
          Pose toutes tes questions sur le processus, les erreurs possibles ou
          les bonnes pratiques.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mb-12"
      >
        <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-border">
          <HelpCircle className="w-10 h-10 text-primary mb-3 mx-auto" />
          <p className="text-lg font-medium">Questions techniques</p>
        </div>
        <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-border">
          <Lightbulb className="w-10 h-10 text-primary mb-3 mx-auto" />
          <p className="text-lg font-medium">Bonnes pratiques</p>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionsSlide;
