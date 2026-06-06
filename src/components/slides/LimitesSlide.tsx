import { motion } from "framer-motion";
import { XCircle, AlertCircle, ShieldAlert, ZapOff } from "lucide-react";

const LimitesSlide = () => {
  const limits = [
    {
      title: "Automatisation des Notifications",
      desc: "L'envoi automatique des billets par email n'est pas encore activé en production.",
      icon: AlertCircle,
    },
    {
      title: "Dépendance au Polling (NITA)",
      desc: "L'absence de webhook natif chez NITA impose un polling constant côté frontend.",
      icon: ZapOff,
    },
    {
      title: "Couverture de Tests",
      desc: "Les tests bout-en-bout (Playwright) pour le frontend sont encore en phase de développement.",
      icon: ShieldAlert,
    },
    {
      title: "Charge Réelle",
      desc: "Bien que testé techniquement, le système attend une montée en charge massive réelle.",
      icon: XCircle,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Limites & <span className="text-orange-500">Perspectives</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {limits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-3xl flex items-start gap-4 shadow-sm"
          >
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-600 shrink-0">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 p-6 bg-secondary border border-primary/20 rounded-2xl max-w-2xl text-center"
      >
        <p className="text-sm font-medium text-foreground italic">
          "Ces limites ne sont pas des échecs, mais des points d'amélioration identifiés pour la future version 2.0 de TiQuick."
        </p>
      </motion.div>
    </div>
  );
};

export default LimitesSlide;
