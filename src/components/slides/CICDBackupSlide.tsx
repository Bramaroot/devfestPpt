import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch, Package, Server, CheckCircle2, ArrowRight, ArrowDown,
  Cloud, ShieldCheck, Clock, HardDrive
} from "lucide-react";

const Logo = ({ src, alt, size = 20 }: { src: string; alt: string; size?: number }) => (
  <img src={src} alt={alt} width={size} height={size} className="object-contain flex-shrink-0" />
);

const pipelineSteps = [
  {
    icon: <GitBranch className="w-4 h-4" />,
    label: "git push",
    sub: "GitHub",
    color: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  },
  {
    icon: <Package className="w-4 h-4" />,
    label: "Nixpacks",
    sub: "Build auto",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  },
  {
    logo: "/Logos/Dopkloy.webp",
    label: "Dokploy",
    sub: "Déploiement",
    color: "text-primary border-primary/30 bg-primary/5",
  },
  {
    icon: <CheckCircle2 className="w-4 h-4" />,
    label: "Live ✓",
    sub: "Production",
    color: "text-green-500 border-green-500/30 bg-green-500/10",
  },
];

const infraStack = [
   { logo: "/Logos/CLOUDFLARE.png.webp",  name: "Cloudflare",      desc: "DNS, DDoS protection & CDN",           border: "border-orange-500/20" },
  { logo: "/Logos/Hostinger_logo.png",   name: "Hostinger VPS",   desc: "Ubuntu — 6 conteneurs Docker isolés",  border: "border-violet-500/20" },
  { logo: "/Logos/postgresql.png",       name: "PostgreSQL",       desc: "Base de données relationnelle",         border: "border-blue-500/20" },
];

const CICDBackupSlide = () => {
  const [activeTab, setActiveTab] = useState<"cicd" | "backup">("cicd");

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-6 justify-between">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 flex-shrink-0">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            DevOps & <span className="text-primary">Sauvegarde</span>
          </h2>
          <p className="text-muted-foreground text-xs">Cycle de vie applicatif et sécurité des données</p>
        </motion.div>

        <div className="flex bg-secondary/80 backdrop-blur-sm p-1 rounded-full border border-border">
          {(["cicd", "backup"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
                activeTab === tab ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "cicd" ? "Pipeline CI/CD" : "Sauvegarde Automatique"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-h-[360px]">
        <AnimatePresence mode="wait">

          {/* ── CI/CD ─────────────────────────────────────────── */}
          {activeTab === "cicd" && (
            <motion.div
              key="cicd-panel"
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Pipeline */}
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4 font-semibold">
                  Pipeline Automatisé de Déploiement
                </p>

                <div className="flex flex-col md:flex-row items-center gap-3 justify-center flex-wrap">
                  {pipelineSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`flex flex-col items-center gap-1 px-4 py-2.5 rounded-xl border text-xs font-bold min-w-[90px] ${step.color}`}>
                        <div className="flex items-center gap-1.5">
                          {"logo" in step
                            ? <Logo src={step.logo} alt={step.label} size={16} />
                            : step.icon}
                          <span>{step.label}</span>
                        </div>
                        <span className="text-[10px] font-normal opacity-70">{step.sub}</span>
                      </div>
                      {i < pipelineSteps.length - 1 && (
                        <>
                          <ArrowRight className="w-4 h-4 text-muted-foreground/40 hidden md:block" />
                          <ArrowDown  className="w-4 h-4 text-muted-foreground/40 md:hidden" />
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Branches */}
                <div className="flex gap-6 mt-4 justify-center text-xs text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Branche <code className="font-mono">dev</code> → dev.tiquick.com (staging)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Branche <code className="font-mono">main</code> → tiquick.com (production)</span>
                  </div>
                </div>

              </div>

              {/* Infra stack */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {infraStack.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className={`bg-card p-3.5 rounded-xl border ${item.border} shadow-sm hover:shadow-md transition-all flex items-start gap-3`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden">
                      <Logo src={item.logo} alt={item.name} size={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-foreground leading-tight truncate">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── BACKUP ─────────────────────────────────────────── */}
          {activeTab === "backup" && (
            <motion.div
              key="backup-panel"
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="relative w-full flex flex-col items-center bg-card border border-border rounded-2xl p-5 shadow-sm">

                {/* Cron header */}
                <div className="w-full flex items-center justify-between border-b border-border pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-primary" />
                    <span className="text-xs font-bold text-foreground">Tâche Cron — tous les jours à 00h00</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <ShieldCheck size={12} className="text-green-500" />
                    Rétention glissante 30 jours
                  </div>
                </div>

                {/* Flow : VPS → Dokploy → Cloudflare R2 */}
                <div className="flex items-center justify-between w-full max-w-3xl gap-2">

                  {/* 1 — VPS */}
                  <div className="bg-[#1E2A2C] border-2 border-[#43A6B0] rounded-2xl p-4 text-white flex-1 shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
                        <Logo src="/Logos/Hostinger_logo.png" alt="Hostinger" size={16} />
                      </div>
                      <p className="font-bold text-xs">VPS Hostinger</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-[10px] text-slate-300">
                      <div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded-lg">
                        <div className="w-4 h-4 bg-white rounded flex items-center justify-center flex-shrink-0">
                          <Logo src="/Logos/postgresql.png" alt="PostgreSQL" size={12} />
                        </div>
                        <span>PostgreSQL — Dump SQL</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-2 py-1.5 rounded-lg">
                        <HardDrive size={11} className="text-[#43A6B0] flex-shrink-0" />
                        <span>Images événements</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="bg-primary text-white rounded-full p-1.5 shadow-md">
                      <ArrowRight size={14} className="animate-pulse" />
                    </div>
                  </div>

                  {/* 2 — Dokploy */}
                  <div className="bg-card border-2 border-primary/40 rounded-2xl p-4 flex-1 shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-white border border-border rounded flex items-center justify-center flex-shrink-0">
                        <Logo src="/Logos/Dopkloy.webp" alt="Dokploy" size={16} />
                      </div>
                      <p className="font-bold text-xs text-foreground">Dokploy</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-2 bg-primary/5 px-2 py-1.5 rounded-lg border border-primary/10">
                        <Clock size={10} className="text-primary flex-shrink-0" />
                        <span>Cron — 00h00 / jour</span>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/5 px-2 py-1.5 rounded-lg border border-primary/10">
                        <ShieldCheck size={10} className="text-primary flex-shrink-0" />
                        <span>Rétention 30 jours</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="bg-primary text-white rounded-full p-1.5 shadow-md">
                      <ArrowRight size={14} className="animate-pulse" />
                    </div>
                  </div>

                  {/* 3 — Cloudflare R2 */}
                  <div className="bg-[#FEF3E2] border-2 border-[#F6821F] rounded-2xl p-4 text-orange-950 flex-1 shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 flex-shrink-0">
                        <Logo src="/Logos/CLOUDFLARE.png.webp" alt="Cloudflare" size={24} />
                      </div>
                      <p className="font-bold text-xs">Cloudflare R2</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-[10px] text-orange-900/80">
                      <div className="flex items-center gap-2 bg-orange-600/5 px-2 py-1.5 rounded-lg border border-orange-200">
                        <Cloud size={10} className="text-[#F6821F] flex-shrink-0" />
                        <span>Stockage objet déporté</span>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-600/5 px-2 py-1.5 rounded-lg border border-orange-200">
                        <ShieldCheck size={10} className="text-[#F6821F] flex-shrink-0" />
                        <span>Egress = 0 FCFA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-xl border-t border-border pt-4 mt-5 text-center text-xs text-muted-foreground">
                  <div><span className="font-bold text-primary block">Sécurité</span>Données chiffrées & isolées</div>
                  <div><span className="font-bold text-primary block">Disponibilité</span>Plan de Reprise d'Activité</div>
                  <div><span className="font-bold text-primary block">Pérennité</span>Sauvegarde automatique</div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      
    </div>
  );
};

export default CICDBackupSlide;
