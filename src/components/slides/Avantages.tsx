import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Avantages = () => {
  const avantages = [
    "Déploiement ultra-rapide en quelques clics",
    "Intégration native avec GitHub",
    "CI/CD automatique à chaque push",

    "Support excellent de Next.js et React",
    "Certificats SSL gratuits et automatiques",
    "Pouvoir connecter un nom de domaine gratuitement",
  ];

  const inconvenients = [
    "Plan gratuit limité en bande passante",
    "Coûts élevés pour les projets à fort trafic",
    "Dépendance à une plateforme propriétaire",
    "Moins flexible que des serveurs dédiés",
    "Pas de gestion de base de données integrée",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Avantages et Inconvénients
        <span className="block text-primary mt-2">de Vercel</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        {/* Avantages */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/30 h-full">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold text-green-500">Avantages</h3>
              </div>
              <ul className="space-y-4">
                {avantages.map((avantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg">{avantage}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Inconvénients */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/30 h-full">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">
                  Inconvénients
                </h3>
              </div>
              <ul className="space-y-4">
                {inconvenients.map((inconvenient, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-lg">{inconvenient}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-muted-foreground text-center mt-10 text-lg italic max-w-3xl"
      >
        💡 Malgré quelques limitations, Vercel reste un excellent choix pour
        déployer rapidement des applications web modernes, surtout en phase de
        développement et pour les projets de taille moyenne.
      </motion.p>
    </div>
  );
};

export default Avantages;
