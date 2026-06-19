import { motion } from "framer-motion";
import { Rocket, Zap, Globe, Smartphone, BarChart3 } from "lucide-react";

const FutureEvolutionSlide = () => {
  const evolutions = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Omnicanalité de paiement",
      desc: "Intégration d'Orange Money et Moov Money via des agrégateurs locaux pour une couverture à 100%."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Mode Offline First",
      desc: "Synchronisation différée des scans via Service Workers pour les zones à faible connectivité."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "App Mobile Organisateur",
      desc: "Extension de l'app Flutter pour permettre aux organisateurs de gérer leurs ventes sur mobile."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: "Business Intelligence",
      desc: "Analytics avancés avec prévisions de vente basées sur l'IA pour optimiser les remplissages."
    }
  ];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
          <Rocket className="w-12 h-12 text-primary animate-bounce" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Perspectives & <span className="text-primary">Évolutions</span>
        </h2>
        <p className="text-xl text-muted-foreground">La feuille de route de TiQuick pour la V2</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {evolutions.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-6 p-8 bg-card border border-border rounded-[2rem] hover:border-primary/50 transition-colors shadow-lg group"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {ev.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{ev.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {ev.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-black text-lg shadow-2xl">
          TiQuick : Redéfinir l'événementiel au Niger 🇳🇪
        </div>
      </motion.div>
    </div>
  );
};

export default FutureEvolutionSlide;
