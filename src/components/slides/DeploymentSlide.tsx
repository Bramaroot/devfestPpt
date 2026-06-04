import { motion } from "framer-motion";

/* ── sub-components ─────────────────────────────────────────────── */

const Port = ({ val }: { val: string }) => (
  <span className="inline-flex items-center gap-1 bg-black/20 rounded px-1.5 py-0.5 text-[9px] font-mono text-white/90">
    :{val}
  </span>
);

const Tag = ({ val, color = "bg-white/15" }: { val: string; color?: string }) => (
  <span className={`inline-flex items-center ${color} rounded px-1.5 py-0.5 text-[9px] font-mono text-white/80`}>
    {val}
  </span>
);

const Arrow = ({ label = "", horizontal = false }: { label?: string; horizontal?: boolean }) => (
  horizontal ? (
    <div className="flex items-center gap-1 px-1">
      {label && <span className="text-[9px] text-muted-foreground font-mono whitespace-nowrap">{label}</span>}
      <div className="text-muted-foreground text-sm">→</div>
    </div>
  ) : (
    <div className="flex flex-col items-center my-0.5">
      {label && <span className="text-[9px] text-muted-foreground font-mono">{label}</span>}
      <div className="text-muted-foreground text-xs">↓</div>
    </div>
  )
);

interface ContainerProps {
  name: string;
  image: string;
  ports?: string[];
  tags?: string[];
  color: string;
  delay: number;
  note?: string;
}

const Container = ({ name, image, ports = [], tags = [], color, delay, note }: ContainerProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 260, damping: 22 }}
    className="rounded-xl overflow-hidden shadow-md flex-1 min-w-0"
  >
    {/* Header bar */}
    <div className="flex items-center gap-2 px-3 py-2" style={{ background: color }}>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white/30" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
      </div>
      <span className="text-white font-black text-xs tracking-tight">{name}</span>
      {ports.map((p, i) => <Port key={i} val={p} />)}
    </div>
    {/* Body */}
    <div className="bg-[#1E2A2C] px-3 py-2 flex flex-col gap-1">
      <span className="text-[10px] font-mono text-[#7ECDD3]">{image}</span>
      <div className="flex flex-wrap gap-1 mt-0.5">
        {tags.map((t, i) => <Tag key={i} val={t} />)}
      </div>
      {note && <span className="text-[9px] text-white/40 mt-0.5 italic">{note}</span>}
    </div>
  </motion.div>
);

/* ── Slide ───────────────────────────────────────────────────────── */
const DeploymentSlide = () => (
  <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
    >
      Diagramme de <span className="text-primary">Déploiement</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}
      className="text-muted-foreground mb-5 text-center text-sm"
    >
      Docker Compose · VPS Hetzner · Dokploy
    </motion.p>

    {/* ── Cloudflare layer ── */}
    <motion.div
      initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
      className="w-full rounded-2xl border-2 px-5 py-3 flex items-center gap-4 mb-1"
      style={{ borderColor: "#F6821F", background: "#FEF3E2" }}
    >
      <span className="text-xl">☁️</span>
      <div>
        <p className="font-black text-sm text-orange-700">Cloudflare</p>
        <p className="text-[10px] text-orange-600/80">DNS · CDN · SSL/TLS · DDoS Protection · IP Whitelisting</p>
      </div>
      <div className="ml-auto flex gap-2">
        <span className="text-[10px] font-mono bg-orange-100 border border-orange-200 px-2 py-0.5 rounded text-orange-700">:80</span>
        <span className="text-[10px] font-mono bg-orange-100 border border-orange-200 px-2 py-0.5 rounded text-orange-700">:443</span>
      </div>
    </motion.div>

    <Arrow label="HTTPS" />

    {/* ── VPS box ── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
      className="w-full rounded-2xl border-2 p-4"
      style={{ borderColor: "#43A6B0", background: "#F4FAFB" }}
    >
      {/* VPS label */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">🖥️</span>
        <p className="font-black text-sm text-primary">VPS Hetzner · Ubuntu 22.04 · Dokploy</p>
        <span className="ml-auto text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded border border-primary/20">
          app-network (bridge)
        </span>
      </div>

      {/* Nginx row */}
      <div className="flex justify-center mb-1">
        <div className="w-64">
          <Container
            name="nginx"
            image="nginx:alpine"
            ports={["80", "443"]}
            tags={["reverse-proxy", "static"]}
            color="#2E7D32"
            delay={0.28}
            note="SSL termination + forward → php:9000"
          />
        </div>
      </div>

      <Arrow label="PHP-FPM :9000" />

      {/* App tier — laravel + horizon */}
      <div className="flex gap-3 mb-1">
        <Container
          name="laravel"
          image="php:8.3-fpm"
          ports={["9000"]}
          tags={["sanctum", "horizon", "pdf"]}
          color="#DC2626"
          delay={0.36}
          note="API REST · RBAC · Génération PDF"
        />
        <div className="flex items-center">
          <Arrow label="queue-connection" horizontal />
        </div>
        <Container
          name="horizon"
          image="php:8.3-cli"
          tags={["queue:work", "supervisor"]}
          color="#B45309"
          delay={0.42}
          note="Emails · PDF async · Webhooks"
        />
      </div>

      <div className="flex gap-3 mt-0.5 mb-0.5">
        <div className="flex-1 flex justify-center"><Arrow label="pgsql:5432" /></div>
        <div className="flex-1" />
        <div className="flex-1 flex justify-center"><Arrow label="redis:6379" /></div>
      </div>

      {/* Data tier — postgres + redis */}
      <div className="flex gap-3">
        <Container
          name="postgres"
          image="postgres:16-alpine"
          ports={["5432"]}
          tags={["volume: pg_data"]}
          color="#1565C0"
          delay={0.50}
          note="Base relationnelle persistante"
        />
        <div className="flex-1" />
        <Container
          name="redis"
          image="redis:7-alpine"
          ports={["6379"]}
          tags={["cache", "sessions", "queues"]}
          color="#B91C1C"
          delay={0.56}
          note="Cache · Sessions · Files Laravel"
        />
      </div>
    </motion.div>

    {/* Bottom legend */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
      className="flex flex-wrap justify-center gap-4 mt-4 text-[10px] text-muted-foreground"
    >
      {[
        { color: "#2E7D32", label: "Web / Proxy" },
        { color: "#DC2626", label: "Application" },
        { color: "#B45309", label: "Worker" },
        { color: "#1565C0", label: "Base de données" },
        { color: "#B91C1C", label: "Cache / Queue" },
      ].map((l, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm inline-block" style={{ background: l.color }} />
          {l.label}
        </span>
      ))}
    </motion.div>
  </div>
);

export default DeploymentSlide;
