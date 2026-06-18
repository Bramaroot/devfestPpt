import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

const Arrow = ({ label = "" }: { label?: string }) => (
  <div className="flex flex-col items-center my-0.5">
    {label && <span className="text-[9px] font-semibold text-muted-foreground mb-0.5">{label}</span>}
    <div className="text-muted-foreground text-xs leading-none">↓</div>
  </div>
);

const ArchitectureSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
      >
        Architecture <span className="text-primary">3-Tiers</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08 }}
        className="text-muted-foreground mb-6 text-center text-sm"
      >
        Déploiement VPS · Dokploy · Docker · Cloudflare
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full"
      >
        {/* Cloudflare — réseau */}
        <div className="flex justify-center mb-1">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border font-bold text-sm w-full max-w-2xl justify-center"
            style={{ background: "#FEF3E2", borderColor: "#F6821F", color: "#C05621" }}
          >
            <Cloud size={20} className="text-[#F6821F]" />
            <span>Cloudflare — DNS · CDN · SSL/TLS · DDoS Protection</span>
          </div>
        </div>

        <Arrow label="HTTPS" />

        {/* Tier 1 — Présentation */}
        <div
          className="rounded-2xl border p-3 mb-1"
          style={{ background: "#EEF6F7", borderColor: "#43A6B0" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 text-center">
            Tier 1 — Présentation
          </p>
          <div className="flex gap-3">
            <div
              className="flex-1 rounded-xl border px-4 py-2.5 text-center"
              style={{ background: "#DBEAFE", borderColor: "#93C5FD" }}
            >
              <p className="font-bold text-xs text-blue-700">React 18</p>
              <p className="text-[10px] text-blue-600/80 mt-0.5">Tailwind · shadcn/ui · TanStack Query</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2.5 text-center"
              style={{ background: "#E0F2FE", borderColor: "#7DD3FC" }}
            >
              <p className="font-bold text-xs text-sky-700">Flutter</p>
              <p className="text-[10px] text-sky-600/80 mt-0.5">iOS · Android · Dio + Provider</p>
            </div>
          </div>
        </div>

        <Arrow label="REST / JSON" />

        {/* Tier 2 — Application */}
        <div
          className="rounded-2xl border p-3 mb-1"
          style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-green-700 mb-2 text-center">
            Tier 2 — Application · VPS Hetzner · Docker + Dokploy
          </p>
          <div className="flex gap-3">
            {/* Laravel */}
            <div
              className="flex-2 flex-grow rounded-xl border px-4 py-2.5"
              style={{ background: "#FFF1F0", borderColor: "#FECACA" }}
            >
              <p className="font-bold text-xs text-red-700 mb-0.5">Laravel 12 API</p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                Sanctum · RBAC · Génération PDF · Horizon · Queues
              </p>
            </div>
            {/* Nginx */}
            <div
              className="rounded-xl border px-3 py-2.5 text-center flex-shrink-0"
              style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
            >
              <p className="font-bold text-xs text-green-700">Nginx</p>
              <p className="text-[10px] text-muted-foreground">Reverse proxy</p>
            </div>
            {/* External APIs */}
            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#FFFBEB", borderColor: "#FCD34D" }}
              >
                <p className="font-bold text-[10px] text-yellow-700">AmanaTa B2B</p>
                <p className="text-[9px] text-muted-foreground">Paiement · HMAC</p>
              </div>
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#F0FDF4", borderColor: "#86EFAC" }}
              >
                <p className="font-bold text-[10px] text-green-700">NITA</p>
                <p className="text-[9px] text-muted-foreground">Paiement en ligne</p>
              </div>
              <div
                className="rounded-xl border px-3 py-1.5 text-center"
                style={{ background: "#EFF6FF", borderColor: "#BFDBFE" }}
              >
                <p className="font-bold text-[10px] text-blue-700">Maileroo</p>
                <p className="text-[9px] text-muted-foreground">Emails</p>
              </div>
            </div>
          </div>
        </div>

        <Arrow />

        {/* Tier 3 — Données */}
        <div
          className="rounded-2xl border p-3"
          style={{ background: "#FFF3E0", borderColor: "#FFCC80" }}
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-orange-700 mb-2 text-center">
            Tier 3 — Données
          </p>
          <div className="flex gap-3">
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#EFF6FF", borderColor: "#93C5FD" }}
            >
              <p className="font-bold text-xs text-blue-800">PostgreSQL</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Base relationnelle</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#FFF1F0", borderColor: "#FECACA" }}
            >
              <p className="font-bold text-xs text-red-700">Redis</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Cache · Sessions · Queues</p>
            </div>
            <div
              className="flex-1 rounded-xl border px-4 py-2 text-center"
              style={{ background: "#FEF3E2", borderColor: "#FBD38D" }}
            >
              <p className="font-bold text-xs text-orange-700">Cloudflare R2</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">Backups SQL journaliers</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="mt-4 flex flex-wrap justify-center gap-4 text-[10px] text-muted-foreground"
      >
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-px bg-muted-foreground/50" />
          HTTPS / JSON
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-6 h-px border-t border-dashed border-muted-foreground/50" />
          Sauvegarde journalière
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded-full bg-primary/30" />
          Service externe
        </span>
      </motion.div>
    </div>
  );
};

export default ArchitectureSlide;
