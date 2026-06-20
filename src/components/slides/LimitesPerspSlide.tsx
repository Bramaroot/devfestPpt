import { motion } from "framer-motion";
import {
  XCircle, AlertCircle, ShieldAlert, ZapOff,
  Zap, Globe, Smartphone, BarChart3,
  ArrowRight
} from "lucide-react";

const limits = [
  { icon: AlertCircle, title: "Notifications email", desc: "Envoi automatique des billets par email pas encore activé en production." },
  { icon: ZapOff,      title: "Polling NITA",         desc: "Absence de webhook natif — polling constant côté frontend." },
  { icon: ShieldAlert, title: "Tests automatisés",    desc: "Pas de tests dans le pipeline CI/CD — validations manuelles avant chaque merge. E2E Playwright en développement." },
  { icon: XCircle,     title: "Charge réelle",        desc: "Système validé techniquement, en attente d'une montée en charge massive réelle." },
];

const roadmap = [
  {
    priority: "Court terme",
    color: "bg-red-500",
    textColor: "text-red-600",
    bg: "bg-red-50 border-red-200",
    items: ["Envoi automatique des billets par email", "Tests E2E Playwright", "Validation en production avec vrais événements"],
  },
  {
    priority: "Moyen terme",
    color: "bg-amber-400",
    textColor: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
    items: ["Orange Money + Moov Money", "Mode hors-ligne QR (PWA)", "Dashboard organisateur Flutter"],
  },
  {
    priority: "Long terme",
    color: "bg-green-500",
    textColor: "text-green-600",
    bg: "bg-green-50 border-green-200",
    items: ["Expansion régionale (Burkina, Mali, Tchad)", "Business Intelligence + IA", "API publique partenaires"],
  },
];

const evolutions = [
  { icon: Zap,         color: "bg-yellow-100 text-yellow-600", title: "Omnicanalité",    desc: "Orange Money & Moov Money via agrégateurs locaux." },
  { icon: Globe,       color: "bg-blue-100 text-blue-600",     title: "Offline First",   desc: "Synchronisation différée des scans via Service Workers." },
  { icon: Smartphone,  color: "bg-green-100 text-green-600",   title: "App Organisateur",desc: "Gestion des ventes sur mobile Flutter." },
  { icon: BarChart3,   color: "bg-purple-100 text-purple-600", title: "Business Intel.", desc: "Analytics avancés et prévisions IA pour optimiser les remplissages." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item      = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const LimitesPerspSlide = () => (
  <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-6">

    {/* Title */}
    <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex-shrink-0">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Limites & <span className="text-primary">Perspectives</span>
      </h2>
      <p className="text-muted-foreground text-xs mt-0.5">Ce qui reste à faire et où TiQuick va</p>
    </motion.div>

    {/* 3-column layout */}
    <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">

      {/* ── COL 1 : Limites ───────────────────────── */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-5 rounded-full bg-orange-400" />
          <p className="text-xs font-black uppercase tracking-widest text-orange-500">Limites actuelles</p>
        </div>

        {limits.map((l, i) => (
          <motion.div key={i} variants={item}
            className="bg-orange-500/5 border border-orange-500/15 rounded-2xl p-3.5 flex gap-3 hover:border-orange-400/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <l.icon className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <p className="font-bold text-xs text-foreground leading-tight">{l.title}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">{l.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── COL 2 : Roadmap ───────────────────────── */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-5 rounded-full bg-primary" />
          <p className="text-xs font-black uppercase tracking-widest text-primary">Roadmap V2</p>
        </div>

        {roadmap.map((r, i) => (
          <motion.div key={i} variants={item}
            className={`border rounded-2xl p-3.5 flex-1 ${r.bg}`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.color} ${i === 0 ? "animate-pulse" : ""}`} />
              <p className={`font-black text-xs uppercase tracking-wide ${r.textColor}`}>{r.priority}</p>
            </div>
            <ul className="space-y-1.5">
              {r.items.map((it, j) => (
                <li key={j} className="flex items-start gap-1.5">
                  <ArrowRight className="w-3 h-3 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{it}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* ── COL 3 : Évolutions ────────────────────── */}
      <motion.div
        variants={container} initial="hidden" animate="show"
        className="flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1 h-5 rounded-full bg-violet-400" />
          <p className="text-xs font-black uppercase tracking-widest text-violet-500">Évolutions clés</p>
        </div>

        {evolutions.map((ev, i) => (
          <motion.div key={i} variants={item}
            className="bg-card border border-border rounded-2xl p-3.5 flex gap-3 flex-1 hover:border-primary/25 hover:shadow-sm transition-all group"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${ev.color} group-hover:scale-105 transition-transform`}>
              <ev.icon className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-xs text-foreground leading-tight">{ev.title}</p>
              <p className="text-[10px] text-muted-foreground leading-relaxed mt-0.5">{ev.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>

    {/* Footer */}
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
      className="mt-4 bg-secondary/40 border border-secondary rounded-2xl px-5 py-2.5 text-center flex-shrink-0"
    >
      <p className="text-xs font-semibold text-primary">
        TiQuick — Redéfinir l'événementiel et l'inclusion financière par le numérique au Niger
      </p>
    </motion.div>
  </div>
);

export default LimitesPerspSlide;
