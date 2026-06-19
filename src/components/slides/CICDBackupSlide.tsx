import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GitBranch, Package, Server, CheckCircle2, ArrowRight, ArrowDown,
  Database, Cloud, ShieldCheck, Clock, HardDrive, Cpu
} from "lucide-react";

const CICDBackupSlide = () => {
  const [activeTab, setActiveTab] = useState<"cicd" | "backup">("cicd");

  const infraStack = [
    { name: "Traefik", desc: "TLS automatique Let's Encrypt", color: "text-[#F9C74C]" },
    { name: "Horizon", desc: "Supervision files d'attente Redis", color: "text-primary" },
    { name: "Cloudflare", desc: "DNS + DDoS + R2 (backups SQL)", color: "text-orange-400" },
    { name: "Docker", desc: "6 conteneurs isolés sur VPS Ubuntu", color: "text-blue-400" },
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
            DevOps & <span className="text-primary">Sauvegarde</span>
          </h2>
          <p className="text-muted-foreground text-xs">
            Cycle de vie applicatif et sécurité des données
          </p>
        </motion.div>

        {/* Tabs Control */}
        <div className="flex bg-secondary/80 backdrop-blur-sm p-1 rounded-full border border-border">
          <button
            onClick={() => setActiveTab("cicd")}
            className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
              activeTab === "cicd"
                ? "bg-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Pipeline CI/CD
          </button>
          <button
            onClick={() => setActiveTab("backup")}
            className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
              activeTab === "backup"
                ? "bg-primary text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sauvegarde Automatique
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center min-h-[360px]">
        <AnimatePresence mode="wait">
          {activeTab === "cicd" ? (
            <motion.div
              key="cicd-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Pipeline */}
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4 font-semibold">Pipeline Automatisé de Déploiement</p>
                <div className="flex flex-col md:flex-row items-center gap-2 flex-wrap justify-center">
                  {[
                    { icon: <GitBranch className="w-4 h-4" />, label: "git push", color: "text-orange-400 border-orange-500/30 bg-orange-500/5" },
                    { icon: <Package className="w-4 h-4" />, label: "Nixpacks build", color: "text-blue-400 border-blue-500/30 bg-blue-500/5" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, label: "PHPUnit tests", color: "text-green-400 border-green-500/30 bg-green-500/5" },
                    { icon: <Server className="w-4 h-4" />, label: "Dokploy deploy", color: "text-primary border-primary/30 bg-primary/5" },
                    { icon: <CheckCircle2 className="w-4 h-4" />, label: "Live ✓", color: "text-green-400 border-green-500/30 bg-green-500/10" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold ${step.color}`}>
                        {step.icon}{step.label}
                      </div>
                      {i < 4 && <ArrowRight className="w-4 h-4 text-muted-foreground/40 hidden md:block" />}
                      {i < 4 && <ArrowDown className="w-4 h-4 text-muted-foreground/40 md:hidden" />}
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 mt-4 justify-center text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Branche dev → dev.tiquick.com (staging)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Branche main → tiquick.com (production)</span>
                  </div>
                </div>
              </div>

              {/* Infra stack */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {infraStack.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/20 transition-colors"
                  >
                    <p className={`font-bold text-sm mb-1 ${item.color}`}>{item.name}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="backup-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Backup Diagram */}
              <div className="relative w-full flex flex-col items-center bg-card border border-border rounded-2xl p-5 shadow-sm">
                <div className="w-full flex items-center justify-between border-b border-border pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span className="text-xs font-bold text-foreground">Tâche Cron automatique (Tous les jours à 03h00)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <ShieldCheck size={12} className="text-green-500" /> Rétention glissante 30 jours
                  </div>
                </div>

                <div className="flex items-center justify-between w-full max-w-3xl py-2">
                  {/* Source */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#1E2A2C] border-2 border-[#43A6B0] rounded-xl p-4 text-white w-40 shadow-md">
                      <div className="flex justify-center mb-2">
                        <Server size={28} className="text-[#43A6B0]" />
                      </div>
                      <p className="text-center font-bold text-[11px]">VPS Contabo KVM 2</p>
                      <div className="mt-2.5 flex flex-col gap-1 text-[9px] text-slate-300">
                        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded">
                          <Database size={10} className="text-[#43A6B0]" />
                          <span>PostgreSQL</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded">
                          <HardDrive size={10} className="text-[#43A6B0]" />
                          <span>Images événements</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white rounded-full p-2.5 shadow-md">
                      <ArrowRight size={20} className="animate-pulse" />
                    </div>
                    <span className="text-[9px] font-mono mt-1.5 text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      backup-script.sh
                    </span>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#FEF3E2] border-2 border-[#F6821F] rounded-xl p-4 text-orange-950 w-40 shadow-md">
                      <div className="flex justify-center mb-2">
                        <Cloud size={28} className="text-[#F6821F]" />
                      </div>
                      <p className="text-center font-bold text-[11px]">Cloudflare R2</p>
                      <div className="mt-2.5 flex flex-col gap-1 text-[9px] text-orange-900/80">
                        <div className="flex items-center gap-1.5 bg-orange-600/5 p-1 rounded border border-orange-200">
                          <ShieldCheck size={10} className="text-[#F6821F]" />
                          <span>Stockage déporté</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-orange-600/5 p-1 rounded border border-orange-200">
                          <Cpu size={10} className="text-[#F6821F]" />
                          <span>Frais Egress = 0 FCFA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full max-w-xl border-t border-border pt-3 mt-3 text-center text-xs text-muted-foreground">
                  <div>
                    <span className="font-bold text-primary block">Sécurité</span>
                    Données chiffrées & isolées
                  </div>
                  <div>
                    <span className="font-bold text-primary block">Disponibilité</span>
                    Plan de Reprise d'Activité
                  </div>
                  <div>
                    <span className="font-bold text-primary block">Pérennité</span>
                    Sauvegarde automatique
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Opportunity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-secondary/40 p-3.5 rounded-2xl border border-secondary text-center mt-3 flex-shrink-0"
      >
        <p className="text-xs font-semibold text-primary">
          💡 La combinaison d'un pipeline CI/CD automatisé et d'une stratégie de sauvegarde déportée vers Cloudflare R2 garantit un niveau de sécurité et de robustesse de classe entreprise pour TiQuick.
        </p>
      </motion.div>
    </div>
  );
};

export default CICDBackupSlide;
