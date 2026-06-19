import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Image Logos ────────────────────────────────────────────────── */
const ReactLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/reactjs.webp" width={size} height={size} alt="React" className="object-contain" />
);

const TailwindLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/tailwind-css-logo-vector.png" width={size} height={size} alt="Tailwind" className="object-contain" />
);

const ShadcnLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/Shadcdn.png" width={size} height={size} alt="Shadcn" className="object-contain" />
);

const TanstackLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/tanstack.png" width={size} height={size} alt="TanStack" className="object-contain" />
);

const LaravelLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/laravel-featured.png" width={size} height={size} alt="Laravel" className="object-contain" />
);

const HorizonLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/laravel-featured.png" width={size} height={size} alt="Horizon" className="object-contain grayscale brightness-150" />
);

const PostgresLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/postgresql.png" width={size} height={size} alt="PostgreSQL" className="object-contain" />
);

const DokployLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/Dopkloy.webp" width={size} height={size} alt="Dokploy" className="object-contain" />
);

const VPSLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/Hostinger_logo.png" width={size} height={size} alt="Hetzner" className="object-contain" />
);

const CloudflareLogo = ({ size = 32 }: LogoProps) => (
  <img src="/Logos/CLOUDFLARE.png.webp" width={size} height={size} alt="Cloudflare" className="object-contain" />
);


/* ── Data ───────────────────────────────────────────────────────── */
type Tech = { name: string; role: string; brandColor: string; bg: string; Logo: React.ComponentType<LogoProps> };
type Category = { id: string; label: string; subtitle: string; gradient: string; techs: Tech[] };

const categories: Category[] = [
  {
    id: "frontend", label: "Frontend", subtitle: "Interface · UX · Composants",
    gradient: "linear-gradient(135deg, #18636B 0%, #1C8F99 55%, #43A6B0 100%)",
    techs: [
      { name: "React 18",        role: "SPA · Hooks · Router",      brandColor: "#61DAFB", bg: "#E0F7FD", Logo: ReactLogo },
      { name: "Tailwind CSS",    role: "Utility-first CSS",         brandColor: "#38BDF8", bg: "#E0F7FE", Logo: TailwindLogo },
      { name: "shadcn/ui",       role: "Composants accessibles",    brandColor: "#18181B", bg: "#F1F5F9", Logo: ShadcnLogo },
      { name: "TanStack Query",  role: "Server-state · Cache",      brandColor: "#FF4154", bg: "#FFF0F1", Logo: TanstackLogo },
    ],
  },
  {
    id: "backend", label: "Backend", subtitle: "API REST · Logique métier · Données",
    gradient: "linear-gradient(135deg, #D4920A 0%, #F0B429 55%, #F9C74C 100%)",
    techs: [
      { name: "Laravel 12",  role: "API REST · Sanctum · RBAC",  brandColor: "#FF2D20", bg: "#FFF1F0", Logo: LaravelLogo },
      { name: "Horizon",     role: "Queue workers · Monitoring", brandColor: "#FF6B35", bg: "#FFF5F0", Logo: HorizonLogo },
      { name: "PostgreSQL",  role: "Base relationnelle",         brandColor: "#336791", bg: "#EBF4FD", Logo: PostgresLogo },
    ],
  },
  {
    id: "devops", label: "DevOps & Infrastructure", subtitle: "Déploiement · Réseau · Hébergement",
    gradient: "linear-gradient(135deg, #18636B 0%, #155860 55%, #0F4347 100%)",
    techs: [
      { name: "Dokploy",     role: "Deploy self-hosted",     brandColor: "#6366F1", bg: "#EEEFFE", Logo: DokployLogo },
      { name: "VPS Hetzner", role: "Hébergement cloud",      brandColor: "#D50000", bg: "#FFEAEC", Logo: VPSLogo },
      { name: "Cloudflare",  role: "DNS · CDN · SSL · DDoS", brandColor: "#F6821F", bg: "#FEF3E2", Logo: CloudflareLogo },
    ],
  },
];

/* ── Modal ───────────────────────────────────────────────────────── */
const Modal = ({ cat, onClose }: { cat: Category; onClose: () => void }) => {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); onClose(); } };
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: "blur(14px)", background: "rgba(10,26,28,0.6)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.80, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 18 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        className="w-full max-w-2xl mx-4 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-10 pt-8 pb-6" style={{ background: cat.gradient }}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors font-bold text-base"
          >✕</button>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1.5">{cat.subtitle}</p>
          <h3 className="text-3xl font-black text-white">{cat.label}</h3>
        </div>

        {/* Cards */}
        <div className="bg-white p-7 grid grid-cols-2 gap-4">
          {cat.techs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + i * 0.07, type: "spring", stiffness: 260, damping: 22 }}
              className="flex items-center gap-4 rounded-2xl border border-border/60 p-4"
              style={{ background: t.bg }}
            >
              {/* Logo + pulse */}
              <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full animate-ping" style={{ background: t.brandColor, opacity: 0.15 }} />
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm"
                  style={{ boxShadow: `0 0 0 2px ${t.brandColor}28` }}>
                  <t.Logo size={36} color={t.brandColor} />
                </div>
              </div>
              <div className="min-w-0">
                <p className="font-black text-base text-foreground leading-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground leading-tight mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ── Category card ───────────────────────────────────────────────── */
const CatCard = ({ cat, delay, onClick }: { cat: Category; delay: number; onClick: () => void }) => (
  <motion.button
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.38, type: "spring", stiffness: 240, damping: 22 }}
    whileHover={{ scale: 1.018, y: -4 }}
    whileTap={{ scale: 0.975 }}
    onClick={onClick}
    className="relative w-full rounded-3xl px-8 py-8 flex flex-col gap-6 shadow-xl cursor-pointer overflow-hidden text-left"
    style={{ background: cat.gradient }}
  >
    {/* Inner glow blobs */}
    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/8 blur-2xl pointer-events-none" />

    {/* Label */}
    <div>
      <p className="text-white font-black text-2xl leading-tight">{cat.label}</p>
      <p className="text-white/55 text-xs mt-1">{cat.subtitle}</p>
    </div>

    {/* White logos row */}
    <div className="flex items-center gap-4">
      {cat.techs.map((t, i) => (
        <div key={i} className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <t.Logo size={32} color="white" />
        </div>
      ))}
      <span className="ml-auto text-white/40 text-2xl font-light">→</span>
    </div>
  </motion.button>
);

/* ── Slide ───────────────────────────────────────────────────────── */
const TechStackSlide = () => {
  const [open, setOpen] = useState<string | null>(null);
  const active = categories.find((c) => c.id === open) ?? null;
  const [front, back, devops] = categories;

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
      >
        Stack <span className="text-primary">Technique</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.08 }}
        className="text-muted-foreground mb-7 text-center text-sm"
      >
        Cliquez sur une catégorie pour explorer les technologies
      </motion.p>

      {/* Row 1 — Frontend + Backend */}
      <div className="flex gap-5 w-full mb-5">
        <div className="flex-1"><CatCard cat={front} delay={0.15} onClick={() => setOpen(front.id)} /></div>
        <div className="flex-1"><CatCard cat={back} delay={0.25} onClick={() => setOpen(back.id)} /></div>
      </div>

      {/* Row 2 — DevOps centered (triangle apex) */}
      <div className="w-[55%]">
        <CatCard cat={devops} delay={0.35} onClick={() => setOpen(devops.id)} />
      </div>

      <AnimatePresence>
        {active && <Modal cat={active} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default TechStackSlide;
