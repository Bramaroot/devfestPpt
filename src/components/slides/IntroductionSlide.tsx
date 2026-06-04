import { motion } from "framer-motion";

const IntroductionSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground"
      >
        Introduction
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted-foreground text-center mb-4 leading-relaxed"
      >
        En Afrique de l'Ouest, la révolution numérique transforme progressivement les usages — mais le secteur
        événementiel nigérien reste encore ancré dans des pratiques informelles qui exposent organisateurs et
        participants à des risques réels de fraude, d'opacité financière et d'exclusion.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-lg text-muted-foreground text-center mb-8 leading-relaxed"
      >
        Face à ce constat, et fort d'une infrastructure de paiement mobile en pleine expansion avec des acteurs
        comme <span className="text-primary font-semibold">AmanaTa B2B</span> et{" "}
        <span className="text-primary font-semibold">NITA Achat en ligne</span>, ce projet ambitionne de
        répondre à une question simple :
      </motion.p>

      <div className="flex items-center gap-4 w-full max-w-2xl mb-8">
        <div className="flex-1 h-px border-t border-border" />
        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <div className="flex-1 h-px border-t border-border" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55 }}
        className="p-8 rounded-3xl text-white text-center max-w-3xl w-full"
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
      >
        <p className="text-xl md:text-2xl font-bold italic leading-relaxed">
          « Comment offrir à chaque Nigérien la possibilité de réserver et payer un billet
          d'événement en toute sécurité, depuis son téléphone ? »
        </p>
      </motion.div>

      <div className="flex items-center gap-4 w-full max-w-2xl mt-8">
        <div className="flex-1 h-px border-t border-border" />
        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
        <div className="flex-1 h-px border-t border-border" />
      </div>
    </div>
  );
};

export default IntroductionSlide;
