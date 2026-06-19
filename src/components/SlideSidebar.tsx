import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, List, Info, HelpCircle, Zap, Search, RefreshCw,
  Layers, Wrench, GitBranch, Shuffle, ArrowLeftRight,
  Lock, Radio, Monitor, Smartphone, Server, Package,
  BarChart2, Rocket, CheckCircle, MessageCircle,
  Menu, X, Target, AlertTriangle
} from "lucide-react";

const slidesMeta = [
  { num: "01", title: "Page de titre",        Icon: Home },
  { num: "02", title: "Plan",                 Icon: List },
  { num: "03", title: "Introduction",         Icon: Info },
  { num: "04", title: "Problématique",        Icon: HelpCircle },
  { num: "05", title: "Hypothèse",            Icon: Search },
  { num: "06", title: "Objectifs du Projet",  Icon: Target },
  { num: "07", title: "Cas d'utilisation",    Icon: Monitor },
  { num: "08", title: "Diag. Classes",        Icon: GitBranch },
  { num: "09", title: "Diag. Activité",       Icon: Shuffle },
  { num: "10", title: "Diag. Séquence",       Icon: ArrowLeftRight },
  { num: "11", title: "TiQuick en 30s",       Icon: Zap },
  { num: "12", title: "Scrum",                Icon: RefreshCw },
  { num: "13", title: "Architecture",         Icon: Layers },
  { num: "14", title: "Stack Technique",      Icon: Wrench },
  { num: "15", title: "Diff. & Solutions",    Icon: AlertTriangle },
  { num: "16", title: "Interfaces web",       Icon: Monitor },
  { num: "17", title: "Mobile Flutter",       Icon: Smartphone },
  { num: "18", title: "DevOps",               Icon: Server },
  { num: "19", title: "Sauvegarde",           Icon: Lock },
  { num: "20", title: "Architecture Sauvegarde", Icon: Layers },
  { num: "21", title: "Bilan du Projet",      Icon: BarChart2 },
  { num: "22", title: "Limites & Perspectives", Icon: Rocket },
  { num: "23", title: "Perspectives",         Icon: Rocket },
  { num: "24", title: "Persp. & Évolutions",  Icon: Rocket },
  { num: "25", title: "Conclusion",           Icon: CheckCircle },
  { num: "26", title: "Questions",            Icon: MessageCircle },
];

interface Props {
  current: number;
  onNavigate: (index: number) => void;
}

const SlideSidebar = ({ current, onNavigate }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed top-5 left-5 z-50 w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-border bg-white/90 backdrop-blur-sm text-foreground transition-colors hover:bg-primary hover:text-white hover:border-primary opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Toggle navigation"
      >
        <motion.div
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </motion.div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40"
            style={{ background: "rgba(10,26,28,0.35)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 left-0 h-full z-50 w-64 flex flex-col shadow-2xl"
            style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)" }}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-4 border-b border-border flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
                style={{ background: "linear-gradient(135deg,#18636B,#43A6B0)" }}>T</div>
              <div>
                <p className="font-black text-sm text-foreground leading-tight">TiQuick</p>
                <p className="text-[10px] text-muted-foreground">Défense mémoire 2025-2026</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Slide list */}
            <div className="flex-1 overflow-y-auto py-3 px-2">
              {slidesMeta.map((s, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={i}
                    onClick={() => { onNavigate(i); setOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all mb-0.5 group ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    {/* Number badge */}
                    <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}>
                      {s.num}
                    </span>

                    {/* Lucide icon */}
                    <s.Icon
                      size={14}
                      className={`flex-shrink-0 ${isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"}`}
                    />

                    {/* Title */}
                    <span className={`text-xs font-semibold leading-tight truncate ${
                      isActive ? "text-white" : "text-foreground"
                    }`}>
                      {s.title}
                    </span>

                    {/* Active dot */}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-border">
              <p className="text-[10px] text-muted-foreground text-center">
                ← → pour naviguer · Échap pour fermer
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SlideSidebar;
