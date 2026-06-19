import { motion } from "framer-motion";

const ProblematiqueSlide = () => {
  return (
    <div className="w-full h-full min-h-screen bg-white flex flex-col items-center justify-center p-8 md:p-16 text-foreground absolute inset-0">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Contexte fintechs */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light"
        >
          Alors que les fintechs locales{" "}
          <span className="font-bold text-primary">AmanaTa</span> et{" "}
          <span className="font-bold text-primary">NITA</span> transforment les usages mobiles,
          le secteur événementiel nigérien reste sans solution numérique adaptée.
        </motion.p>

        {/* Ligne séparatrice */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-0.5 bg-primary mb-10"
        />

        {/* Question centrale */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-extrabold mb-10 leading-snug tracking-tight text-foreground max-w-3xl"
        >
          Comment offrir à chaque Nigérien la possibilité de réserver et payer un billet d'événement
          en toute sécurité, depuis son téléphone ?
        </motion.h3>

        {/* Ligne séparatrice */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-0.5 bg-primary mb-10"
        />

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl md:text-3xl text-muted-foreground font-light">→</span>
          <span 
            className="text-3xl md:text-5xl font-black tracking-wider drop-shadow-sm bg-gradient-to-r from-[#18636B] to-[#43A6B0] bg-clip-text text-transparent"
          >
            TiQuick
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblematiqueSlide;
