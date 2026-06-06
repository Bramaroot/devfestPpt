import { motion } from "framer-motion";
import { Globe, Check, Smartphone } from "lucide-react";

const ValueSlide = () => {
  const stats = [
    { value: "4", label: "Acteurs", detail: "Visiteur · Utilisateur · Organisateur · Admin", color: "text-primary" },
    { value: "2", label: "Passerelles", detail: "AmanaTa B2B + NITA Achat en ligne", color: "text-[#F9C74C]" },
    { value: "3", label: "Sous-domaines", detail: "web · api · scan", color: "text-purple-400" },
    { value: "8", label: "Sprints", detail: "Scrum — 2 semaines chacun", color: "text-green-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-5xl font-black text-[#F9C74C]">Ti</span>
          <span className="text-5xl font-black text-primary">Quick</span>
        </div>
        <p className="text-primary font-mono text-sm">tiquick.com</p>
        <p className="text-muted-foreground mt-1">La billetterie électronique du Niger</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card p-5 rounded-2xl border border-border text-center"
          >
            <p className={`text-5xl font-black mb-1 ${s.color}`}>{s.value}</p>
            <p className="font-bold text-sm text-foreground mb-2">{s.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="flex items-center gap-3 bg-card border border-[#F9C74C]/30 rounded-2xl px-6 py-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <Globe className="w-4 h-4 text-primary" />
          <span className="font-bold text-primary font-mono">tiquick.com</span>
          <span className="text-muted-foreground text-sm">— Déployé en production</span>
          <Check className="w-4 h-4 text-green-400" />
        </div>
        <div className="flex items-center gap-3 bg-card border border-purple-500/30 rounded-2xl px-6 py-3">
          <Smartphone className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm">Application mobile Flutter</span>
          <Check className="w-4 h-4 text-green-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default ValueSlide;
