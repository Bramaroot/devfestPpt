import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── SVG Logos (color-aware) ───────────────────────────────────── */
type LogoProps = { size?: number; color?: string };

const ReactLogo = ({ size = 26, color = "#61DAFB" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="7" fill={color} />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke={color} strokeWidth="5" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke={color} strokeWidth="5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke={color} strokeWidth="5" transform="rotate(120 50 50)" />
  </svg>
);

const TailwindLogo = ({ size = 26, color = "#38BDF8" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 18C35 18 26 26 23 41C29 33 36 30 44 32C49 33 52 36 56 40C63 47 71 55 86 55C101 55 110 47 113 32C107 40 100 43 92 41C87 40 84 37 80 33C73 26 65 18 50 18Z" fill={color} />
    <path d="M23 55C8 55 -1 63 -4 78C2 70 9 67 17 69C22 70 25 73 29 77C36 84 44 92 59 92C74 92 83 84 86 69C80 77 73 80 65 78C60 77 57 74 53 70C46 63 38 55 23 55Z" fill={color} opacity="0.75" />
  </svg>
);

const ShadcnLogo = ({ size = 26, color = "#18181B" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="12" y="12" width="33" height="33" rx="6" fill={color} />
    <rect x="55" y="12" width="33" height="33" rx="6" fill={color} opacity="0.5" />
    <rect x="12" y="55" width="33" height="33" rx="6" fill={color} opacity="0.5" />
    <rect x="55" y="55" width="33" height="33" rx="6" fill={color} opacity="0.22" />
  </svg>
);

const TanstackLogo = ({ size = 26, color = "#FF4154" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 8L86 28V72L50 92L14 72V28L50 8Z" fill={color} opacity="0.18" stroke={color} strokeWidth="4" strokeLinejoin="round" />
    <text x="50" y="62" textAnchor="middle" fontSize="26" fontWeight="900" fill={color} fontFamily="monospace">TQ</text>
  </svg>
);

const LaravelLogo = ({ size = 26, color = "#FF2D20" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 8L92 72H8L50 8Z" fill={color} opacity="0.15" stroke={color} strokeWidth="5" strokeLinejoin="round" />
    <text x="50" y="66" textAnchor="middle" fontSize="34" fontWeight="900" fill={color} fontFamily="monospace">L</text>
  </svg>
);

const HorizonLogo = ({ size = 26, color = "#FF2D20" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M10 58Q25 28 50 28Q75 28 90 58" stroke={color} strokeWidth="7" strokeLinecap="round" />
    <path d="M22 74Q36 50 50 50Q64 50 78 74" stroke={color} strokeWidth="5.5" strokeLinecap="round" opacity="0.65" />
    <circle cx="50" cy="84" r="6" fill={color} />
  </svg>
);

const PostgresLogo = ({ size = 26, color = "#336791" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="36" rx="28" ry="22" fill={color} opacity="0.14" stroke={color} strokeWidth="4" />
    <path d="M22 36V62C22 76 35 84 50 84C65 84 78 76 78 62V36" stroke={color} strokeWidth="4" />
    <circle cx="63" cy="28" r="6" fill={color} />
    <path d="M63 22C63 16 71 12 77 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M50 84V94" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const RedisLogo = ({ size = 26, color = "#DC382D" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="72" rx="36" ry="12" fill={color} opacity="0.18" />
    <ellipse cx="50" cy="55" rx="36" ry="12" fill={color} opacity="0.3" />
    <ellipse cx="50" cy="38" rx="36" ry="12" fill={color} />
    <path d="M14 38V72C14 80 30 84 50 84C70 84 86 80 86 72V38" stroke={color} strokeWidth="3.5" />
    <path d="M14 55C14 63 30 67 50 67C70 67 86 63 86 55" stroke={color} strokeWidth="3" />
  </svg>
);

const DokployLogo = ({ size = 26, color = "#6366F1" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 12L60 40H88L66 57L74 85L50 68L26 85L34 57L12 40H40L50 12Z" fill={color} opacity="0.18" stroke={color} strokeWidth="4" strokeLinejoin="round" />
  </svg>
);

const VPSLogo = ({ size = 26, color = "#D50000" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <rect x="14" y="14" width="72" height="22" rx="5" fill={color} opacity="0.14" stroke={color} strokeWidth="3.5" />
    <rect x="14" y="42" width="72" height="22" rx="5" fill={color} opacity="0.28" stroke={color} strokeWidth="3.5" />
    <rect x="14" y="70" width="72" height="16" rx="5" fill={color} opacity="0.48" stroke={color} strokeWidth="3.5" />
    <circle cx="74" cy="25" r="4" fill={color} />
    <circle cx="74" cy="53" r="4" fill={color} />
  </svg>
);

const CloudflareLogo = ({ size = 26, color = "#F6821F" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M62 40C60 32 52 26 42 26C32 26 24 34 23 44C17 44 12 49 12 55C12 61 17 65 23 65H75C81 65 86 60 86 54C86 48 81 43 75 43C72 43 69 44 67 46C66 42 64 40 62 40Z" fill={color} opacity="0.2" stroke={color} strokeWidth="4" />
    <path d="M66 74C66 74 70 65 78 65C86 65 90 72 88 78" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="65" x2="50" y2="87" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="36" y1="87" x2="64" y2="87" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const DockerLogo = ({ size = 26, color = "#2496ED" }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    {([0, 1, 2] as const).map(row =>
      ([0, 1, 2, 3] as const).map(col => (
        <rect key={`${row}-${col}`} x={14 + col * 17} y={16 + row * 17} width="13" height="13" rx="2.5"
          fill={color} opacity={row === 0 ? 0.3 : row === 1 ? 0.6 : 1} />
      ))
    )}
    <path d="M8 62C8 62 2 54 8 48C14 42 23 46 27 48C29 42 38 38 48 42C50 30 64 28 72 34C78 28 87 30 87 40C93 40 97 46 95 54C93 62 82 68 68 68H18C12 68 9 65 8 62Z"
      fill={color} opacity="0.2" stroke={color} strokeWidth="3" />
  </svg>
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
      { name: "Redis",       role: "Cache · Sessions · Queues",  brandColor: "#DC382D", bg: "#FFF0EF", Logo: RedisLogo },
    ],
  },
  {
    id: "devops", label: "DevOps & Infrastructure", subtitle: "Déploiement · Réseau · Hébergement",
    gradient: "linear-gradient(135deg, #18636B 0%, #155860 55%, #0F4347 100%)",
    techs: [
      { name: "Dokploy",     role: "Deploy self-hosted",     brandColor: "#6366F1", bg: "#EEEFFE", Logo: DokployLogo },
      { name: "VPS Hetzner", role: "Hébergement cloud",      brandColor: "#D50000", bg: "#FFEAEC", Logo: VPSLogo },
      { name: "Cloudflare",  role: "DNS · CDN · SSL · DDoS", brandColor: "#F6821F", bg: "#FEF3E2", Logo: CloudflareLogo },
      { name: "Docker",      role: "Conteneurisation",       brandColor: "#2496ED", bg: "#E6F4FD", Logo: DockerLogo },
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
              <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full animate-ping" style={{ background: t.brandColor, opacity: 0.15 }} />
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm"
                  style={{ boxShadow: `0 0 0 2px ${t.brandColor}28` }}>
                  <t.Logo size={30} color={t.brandColor} />
                </div>
              </div>
              <div className="min-w-0">
                <p className="font-black text-sm text-foreground leading-tight">{t.name}</p>
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
        <div key={i} className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <t.Logo size={26} color="white" />
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
