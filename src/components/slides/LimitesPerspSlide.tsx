import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  XCircle, AlertCircle, ShieldAlert, ZapOff, 
  Rocket, Zap, Globe, Smartphone, BarChart3, 
  CheckCircle2, ArrowRight
} from "lucide-react";

const LimitesPerspSlide = () => {
  const [activeTab, setActiveTab] = useState<"limits" | "roadmap" | "evolutions">("limits");

  const limits = [
    { title: "Automatisation des Notifications", desc: "L'envoi automatique des billets par email n'est pas encore activé en production.", icon: AlertCircle },
    { title: "Dépendance au Polling (NITA)", desc: "L'absence de webhook natif chez NITA impose un polling constant côté frontend.", icon: ZapOff },
    { title: "Couverture de Tests", desc: "Les tests bout-en-bout (Playwright) pour le frontend sont encore en phase de développement.", icon: ShieldAlert },
    { title: "Charge Réelle", desc: "Bien que testé techniquement, le système attend une montée en charge massive réelle.", icon: XCircle },
  ];

  const roadmap = [
    {
      priority: "Court terme",
      dot: "bg-red-400 animate-pulse",
      items: [
        "Envoi automatique des billets par email",
        "Tests Playwright (end-to-end frontend)",
        "Validation en production réelle avec vrais événements payants",
      ],
    },
    {
      priority: "Moyen terme",
      dot: "bg-yellow-400",
      items: [
        "Intégration Orange Money + Moov Money",
        "Mode hors-ligne pour le scan QR (PWA / Service Worker)",
        "Dashboard organisateur sur mobile Flutter",
      ],
    },
    {
      priority: "Long terme",
      dot: "bg-green-400",
      items: [
        "Expansion régionale (Burkina, Mali, Tchad)",
        "Business Intelligence + prévisions IA",
        "API publique pour partenaires tiers",
      ],
    },
  ];

  const evolutions = [
    { icon: <Zap className="w-5 h-5 text-yellow-500" />, title: "Omnicanalité de paiement", desc: "Intégration d'Orange Money et Moov Money via des agrégateurs locaux pour une couverture à 100%." },
    { icon: <Globe className="w-5 h-5 text-blue-500" />, title: "Mode Offline First", desc: "Synchronisation différée des scans via Service Workers pour les zones à faible connectivité." },
    { icon: <Smartphone className="w-5 h-5 text-green-500" />, title: "App Mobile Organisateur", desc: "Extension de l'app Flutter pour permettre aux organisateurs de gérer leurs ventes sur mobile." },
    { icon: <BarChart3 className="w-5 h-5 text-purple-500" />, title: "Business Intelligence", desc: "Analytics avancés avec prévisions de vente basées sur l'IA pour optimiser les remplissages." }
  ];

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-6 justify-between">
      {/* Title */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Limites & <span className="text-primary">Perspectives</span>
          </h2>
          <p className="text-muted-foreground text-xs font-medium">Le futur de TiQuick et la roadmap d'évolution</p>
        </motion.div>

        {/* Tabs Control */}
        <div className="flex bg-secondary/80 backdrop-blur-sm p-1 rounded-full border border-border">
          <button
            onClick={() => setActiveTab("limits")}
            className={`px-3 py-1.5 rounded-full font-bold text-xs transition-all ${
              activeTab === "limits"
                ? "bg-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Limites Techniques
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-3 py-1.5 rounded-full font-bold text-xs transition-all ${
              activeTab === "roadmap"
                ? "bg-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Roadmap V2
          </button>
          <button
            onClick={() => setActiveTab("evolutions")}
            className={`px-3 py-1.5 rounded-full font-bold text-xs transition-all ${
              activeTab === "evolutions"
                ? "bg-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Évolutions Clés
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center min-h-[350px]">
        <AnimatePresence mode="wait">
          {activeTab === "limits" ? (
            <motion.div
              key="limits-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-4 w-full"
            >
              {limits.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-500/5 border border-orange-500/10 p-5 rounded-2xl flex items-start gap-3 shadow-sm hover:border-orange-500/20 transition-colors"
                >
                  <div className="p-2.5 bg-orange-500/10 rounded-xl text-orange-600 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-0.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : activeTab === "roadmap" ? (
            <motion.div
              key="roadmap-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-3 gap-4 w-full"
            >
              {roadmap.map((p, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${p.dot} flex-shrink-0`} />
                    <h3 className="font-bold text-xs uppercase tracking-wider text-foreground">{p.priority}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className="text-muted-foreground/60 text-xs mt-0.5 flex-shrink-0">→</span>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="evolutions-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-4 w-full"
            >
              {evolutions.map((ev, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors shadow-sm group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ev.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1">{ev.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      {ev.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Opportunity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-secondary/40 p-3 rounded-2xl border border-secondary text-center mt-3 flex-shrink-0"
      >
        <p className="text-xs font-semibold text-primary">
          🇳🇪 TiQuick : Redéfinir l'événementiel et l'inclusion financière par le numérique au Niger.
        </p>
      </motion.div>
    </div>
  );
};

export default LimitesPerspSlide;
