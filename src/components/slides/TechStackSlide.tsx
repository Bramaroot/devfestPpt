import { motion } from "framer-motion";

/* ── Inline SVG logos ──────────────────────────────────────────── */
const ReactLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <circle cx="50" cy="50" r="7" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 50 50)" />
  </svg>
);

const LaravelLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M50 8L92 72H8L50 8Z" fill="#FF2D20" opacity="0.15" stroke="#FF2D20" strokeWidth="5" strokeLinejoin="round" />
    <text x="50" y="66" textAnchor="middle" fontSize="34" fontWeight="900" fill="#FF2D20" fontFamily="monospace">L</text>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M50 20C35 20 26 28 23 43C29 35 36 32 44 34C49 35 52 38 56 42C63 49 71 57 86 57C101 57 110 49 113 34C107 42 100 45 92 43C87 42 84 39 80 35C73 28 65 20 50 20Z" fill="#38BDF8" />
    <path d="M23 57C8 57-1 65-4 80C2 72 9 69 17 71C22 72 25 75 29 79C36 86 44 94 59 94C74 94 83 86 86 71C80 79 73 82 65 80C60 79 57 76 53 72C46 65 38 57 23 57Z" fill="#0EA5E9" />
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <ellipse cx="50" cy="38" rx="28" ry="24" fill="#336791" opacity="0.15" stroke="#336791" strokeWidth="4" />
    <path d="M22 38V62C22 76 35 84 50 84C65 84 78 76 78 62V38" stroke="#336791" strokeWidth="4" />
    <circle cx="62" cy="30" r="6" fill="#336791" />
    <path d="M62 24C62 18 70 14 76 18" stroke="#336791" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 84V94" stroke="#336791" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const RedisLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <ellipse cx="50" cy="70" rx="38" ry="14" fill="#DC382D" opacity="0.2" />
    <ellipse cx="50" cy="55" rx="38" ry="14" fill="#DC382D" opacity="0.3" />
    <ellipse cx="50" cy="40" rx="38" ry="14" fill="#DC382D" />
    <path d="M12 40V70C12 78 29 84 50 84C71 84 88 78 88 70V40" stroke="#DC382D" strokeWidth="3" />
    <path d="M12 55C12 63 29 69 50 69C71 69 88 63 88 55" stroke="#DC382D" strokeWidth="3" />
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    {[0,1,2].map(row =>
      [0,1,2,3].map(col => (
        <rect
          key={`${row}-${col}`}
          x={14 + col * 16}
          y={22 + row * 16}
          width="12"
          height="12"
          rx="2"
          fill="#2496ED"
          opacity={row === 0 ? 0.4 : row === 1 ? 0.7 : 1}
        />
      ))
    )}
    <path d="M8 62C8 62 2 56 8 50C14 44 22 48 26 50C28 44 36 40 46 44C48 32 62 30 70 36C76 30 84 32 84 40C90 40 94 46 92 54C90 62 80 66 68 66H18C13 66 9 64 8 62Z" fill="#2496ED" opacity="0.2" stroke="#2496ED" strokeWidth="3" />
  </svg>
);

const CloudflareLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M62 42C60 34 52 28 42 28C32 28 24 36 23 46C18 46 14 50 14 55C14 60 18 64 23 64H74C80 64 85 59 85 53C85 47 80 42 74 42C71 42 68 43 66 45C65 43 64 42 62 42Z" fill="#F6821F" opacity="0.2" stroke="#F6821F" strokeWidth="4" />
    <path d="M68 72C68 72 72 64 80 64C88 64 92 70 90 76" stroke="#F6821F" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="64" x2="50" y2="86" stroke="#F6821F" strokeWidth="4" strokeLinecap="round" />
    <line x1="36" y1="86" x2="64" y2="86" stroke="#F6821F" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const ShadcnLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <rect x="15" y="15" width="30" height="30" rx="6" fill="#18181B" />
    <rect x="55" y="15" width="30" height="30" rx="6" fill="#18181B" opacity="0.5" />
    <rect x="15" y="55" width="30" height="30" rx="6" fill="#18181B" opacity="0.5" />
    <rect x="55" y="55" width="30" height="30" rx="6" fill="#18181B" opacity="0.25" />
  </svg>
);

const TanstackLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M50 10L86 30V70L50 90L14 70V30L50 10Z" fill="#FF4154" opacity="0.15" stroke="#FF4154" strokeWidth="4" strokeLinejoin="round" />
    <text x="50" y="62" textAnchor="middle" fontSize="30" fontWeight="900" fill="#FF4154" fontFamily="monospace">TQ</text>
  </svg>
);

const DokployLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M50 15L58 40H84L64 55L72 80L50 65L28 80L36 55L16 40H42L50 15Z" fill="#6366F1" opacity="0.2" stroke="#6366F1" strokeWidth="4" strokeLinejoin="round" />
  </svg>
);

const VPSLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <rect x="15" y="15" width="70" height="22" rx="5" fill="#D50000" opacity="0.15" stroke="#D50000" strokeWidth="3.5" />
    <rect x="15" y="44" width="70" height="22" rx="5" fill="#D50000" opacity="0.3" stroke="#D50000" strokeWidth="3.5" />
    <rect x="15" y="73" width="70" height="13" rx="5" fill="#D50000" opacity="0.5" stroke="#D50000" strokeWidth="3.5" />
    <circle cx="74" cy="26" r="4" fill="#D50000" />
    <circle cx="74" cy="55" r="4" fill="#D50000" />
  </svg>
);

const HorizonLogo = () => (
  <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
    <path d="M10 60Q25 30 50 30Q75 30 90 60" stroke="#FF2D20" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M20 75Q35 50 50 50Q65 50 80 75" stroke="#FF6B35" strokeWidth="5" strokeLinecap="round" fill="none" />
    <circle cx="50" cy="85" r="6" fill="#FF2D20" />
  </svg>
);

/* ── Tech data ─────────────────────────────────────────────────── */
const techs = [
  { name: "React 18",      role: "SPA · Hooks · Router",        color: "#61DAFB", ring: "#61DAFB", bg: "#E0F7FD", Logo: ReactLogo },
  { name: "Tailwind CSS",  role: "Utility-first CSS",           color: "#38BDF8", ring: "#38BDF8", bg: "#E0F7FE", Logo: TailwindLogo },
  { name: "shadcn/ui",     role: "Composants accessibles",      color: "#18181B", ring: "#64748B", bg: "#F1F5F9", Logo: ShadcnLogo },
  { name: "TanStack Query",role: "Server-state · Cache",        color: "#FF4154", ring: "#FF4154", bg: "#FFF0F1", Logo: TanstackLogo },
  { name: "Laravel 11",    role: "API REST · Sanctum · Horizon",color: "#FF2D20", ring: "#FF2D20", bg: "#FFF1F0", Logo: LaravelLogo },
  { name: "Horizon",       role: "Queue workers · Monitoring",  color: "#FF2D20", ring: "#FF6B35", bg: "#FFF5F0", Logo: HorizonLogo },
  { name: "PostgreSQL",    role: "Base relationnelle",          color: "#336791", ring: "#336791", bg: "#EBF4FD", Logo: PostgresLogo },
  { name: "Redis",         role: "Cache · Sessions · Queues",   color: "#DC382D", ring: "#DC382D", bg: "#FFF0EF", Logo: RedisLogo },
  { name: "Dokploy",       role: "Deploy self-hosted",          color: "#6366F1", ring: "#6366F1", bg: "#EEEFFE", Logo: DokployLogo },
  { name: "VPS Hetzner",   role: "Hébergement cloud",           color: "#D50000", ring: "#D50000", bg: "#FFEAEC", Logo: VPSLogo },
  { name: "Cloudflare",    role: "DNS · CDN · SSL · DDoS",      color: "#F6821F", ring: "#F6821F", bg: "#FEF3E2", Logo: CloudflareLogo },
  { name: "Docker",        role: "Conteneurisation",            color: "#2496ED", ring: "#2496ED", bg: "#E6F4FD", Logo: DockerLogo },
];

interface TechCardProps {
  tech: (typeof techs)[0];
  delay: number;
}

const TechCard = ({ tech, delay }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.35, type: "spring", stiffness: 260, damping: 22 }}
    className="flex flex-col items-center gap-2 bg-white border border-border rounded-2xl px-3 py-3.5 shadow-sm hover:shadow-md transition-shadow"
  >
    {/* Logo with pulse rings */}
    <div className="relative flex items-center justify-center w-14 h-14">
      {/* Outer pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: tech.ring, opacity: 0.12 }}
      />
      {/* Inner glow bg */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: tech.bg, boxShadow: `0 0 0 3px ${tech.ring}22` }}
      >
        <tech.Logo />
      </div>
    </div>

    {/* Name */}
    <p className="text-[11px] font-black text-foreground text-center leading-tight">{tech.name}</p>
    {/* Role */}
    <p className="text-[9px] text-muted-foreground text-center leading-tight">{tech.role}</p>
  </motion.div>
);

const TechStackSlide = () => (
  <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-bold mb-1 text-center text-foreground"
    >
      Stack <span className="text-primary">Technique</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-muted-foreground mb-6 text-center text-sm"
    >
      12 technologies · Robustesse · Autonomie de déploiement · Performance
    </motion.p>

    {/* Grid */}
    <div className="grid grid-cols-6 gap-3 w-full">
      {techs.map((t, i) => (
        <TechCard key={i} tech={t} delay={0.15 + i * 0.05} />
      ))}
    </div>

    {/* Bottom highlights */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.85 }}
      className="mt-5 flex flex-wrap justify-center gap-3"
    >
      {[
        { icon: "🔒", text: "SSL/TLS automatique via Cloudflare" },
        { icon: "⚡", text: "Queues async PDF + webhooks (Horizon)" },
        { icon: "📦", text: "Zero-downtime deploy avec Dokploy" },
      ].map((note, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-secondary border border-border rounded-xl px-4 py-2 text-xs text-muted-foreground"
        >
          <span>{note.icon}</span>
          <span>{note.text}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

export default TechStackSlide;
