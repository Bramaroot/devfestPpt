import { motion } from "framer-motion";

const sprints = [
  { num: "S1", title: "Auth & OAuth", desc: "Google OAuth · RBAC · 4 rôles" },
  { num: "S2", title: "Événements", desc: "CRUD · Catégories · Médias" },
  { num: "S3", title: "Réservation", desc: "Tickets · QR Codes · PDF" },
  { num: "S4", title: "AmanaTa", desc: "HMAC-SHA256 · Webhooks" },
  { num: "S5", title: "NITA", desc: "Polling 3s · IP whitelist" },
  { num: "S6", title: "Scan QR", desc: "Contrôleur · Dashboard stats" },
  { num: "S7", title: "Tests & CI/CD", desc: "PHPUnit · Dokploy · Staging" },
  { num: "S8", title: "Finalisation", desc: "Optimisation · Documentation" },
];

const nodeColors = [
  "#18636B", "#1A7A82", "#1C8F99", "#43A6B0",
  "#59B9C3", "#78CAD2", "#F0B429", "#F9C74C",
];

const roles = [
  { role: "Product Owner", who: "Étudiant" },
  { role: "Scrum Master", who: "Étudiant" },
  { role: "Stakeholder", who: "M. Almou Bassirou" },
];

interface SprintCardProps {
  sprint: (typeof sprints)[0];
  color: string;
  position: "top" | "bottom";
  delay: number;
}

const SprintCard = ({ sprint, color, position, delay }: SprintCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: position === "top" ? -12 : 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.35 }}
    className="bg-white border border-border rounded-xl p-2.5 shadow-sm w-full"
    style={{ borderTopColor: color, borderTopWidth: 3 }}
  >
    <span
      className="inline-block text-[10px] font-black px-1.5 py-0.5 rounded-md text-white mb-1.5 font-mono"
      style={{ background: color }}
    >
      {sprint.num}
    </span>
    <p className="font-bold text-[11px] text-foreground leading-tight mb-0.5">{sprint.title}</p>
    <p className="text-[10px] text-muted-foreground leading-tight">{sprint.desc}</p>
  </motion.div>
);

const MetricsSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
      >
        Méthodologie <span className="text-primary">Scrum</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-8 text-center text-sm"
      >
        8 sprints × 2 semaines = 16 semaines de développement itératif
      </motion.p>

      {/* Timeline */}
      <div className="w-full mb-6">
        {/* Top cards — S1 S3 S5 S7 (even indices) */}
        <div className="flex gap-2 w-full mb-2">
          {sprints.map((s, i) => (
            <div key={i} className="flex-1">
              {i % 2 === 0 ? (
                <SprintCard sprint={s} color={nodeColors[i]} position="top" delay={0.2 + i * 0.07} />
              ) : (
                <div className="invisible">
                  <SprintCard sprint={s} color={nodeColors[i]} position="top" delay={0} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Top connectors */}
        <div className="flex gap-2 w-full">
          {sprints.map((_, i) => (
            <div key={i} className="flex-1 flex justify-center h-4">
              {i % 2 === 0 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.2 }}
                  className="w-px origin-bottom"
                  style={{ background: nodeColors[i] }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Central timeline line + nodes */}
        <div className="relative flex w-full items-center">
          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-0.5 origin-left"
            style={{ background: "linear-gradient(to right, #18636B, #F9C74C)" }}
          />

          {/* Nodes */}
          {sprints.map((s, i) => (
            <div key={i} className="flex-1 flex justify-center relative z-10">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.45 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shadow-md ring-2 ring-white"
                style={{ background: nodeColors[i] }}
              >
                {i + 1}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom connectors */}
        <div className="flex gap-2 w-full">
          {sprints.map((_, i) => (
            <div key={i} className="flex-1 flex justify-center h-4">
              {i % 2 === 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.35 + i * 0.07, duration: 0.2 }}
                  className="w-px origin-top"
                  style={{ background: nodeColors[i] }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom cards — S2 S4 S6 S8 (odd indices) */}
        <div className="flex gap-2 w-full mt-2">
          {sprints.map((s, i) => (
            <div key={i} className="flex-1">
              {i % 2 === 1 ? (
                <SprintCard sprint={s} color={nodeColors[i]} position="bottom" delay={0.2 + i * 0.07} />
              ) : (
                <div className="invisible">
                  <SprintCard sprint={s} color={nodeColors[i]} position="bottom" delay={0} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Roles */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {roles.map((r, i) => (
          <div key={i} className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-xl shadow-sm text-sm">
            <span className="text-muted-foreground">{r.role} :</span>
            <span className="font-bold text-primary">{r.who}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MetricsSlide;
