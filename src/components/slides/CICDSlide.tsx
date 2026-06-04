import { motion } from "framer-motion";
import { GitBranch, Package, Server, CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";

const CICDSlide = () => {
  const infraStack = [
    { name: "Traefik", desc: "TLS automatique Let's Encrypt", color: "text-[#F9C74C]" },
    { name: "Horizon", desc: "Supervision files d'attente Redis", color: "text-primary" },
    { name: "Cloudflare", desc: "DNS + DDoS + R2 (backups SQL)", color: "text-orange-400" },
    { name: "Docker", desc: "6 conteneurs isolés sur VPS Ubuntu", color: "text-blue-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-center"
      >
        Infrastructure & <span className="text-primary">DevOps</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-7 text-center text-sm"
      >
        Du code au déploiement — pipeline automatisé
      </motion.p>

      {/* Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-card border border-border rounded-2xl p-5 mb-5"
      >
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4 font-semibold">Pipeline CI/CD</p>
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
            <span>Branche main → tiquick.com (prod)</span>
          </div>
        </div>
      </motion.div>

      {/* Infra stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        {infraStack.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="bg-card p-4 rounded-xl border border-border"
          >
            <p className={`font-bold text-sm mb-1 ${item.color}`}>{item.name}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CICDSlide;
