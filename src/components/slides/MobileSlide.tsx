import { motion } from "framer-motion";

const screens = [
  { emoji: "👋", label: "Onboarding", img: "/screenshots/mobile/onboarding.png" },
  { emoji: "🔑", label: "Connexion", img: "/screenshots/mobile/login.png" },
  { emoji: "🏠", label: "Accueil", img: "/screenshots/mobile/home.png" },
  { emoji: "🎭", label: "Détail événement", img: "/screenshots/mobile/event-detail.png" },
  { emoji: "🛒", label: "Checkout", img: "/screenshots/mobile/checkout.png" },
  { emoji: "💳", label: "Paiement", img: "/screenshots/mobile/payment.png" },
  { emoji: "🎫", label: "Mes Tickets", img: "/screenshots/mobile/my-tickets.png" },
  { emoji: "📱", label: "Détail Ticket / QR", img: "/screenshots/mobile/ticket-detail.png" },
  { emoji: "👤", label: "Profil", img: "/screenshots/mobile/profile.png" },
];

const Phone = ({ emoji, label, img }: { emoji: string; label: string; img: string }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="relative w-16 h-28 rounded-[14px] overflow-hidden shadow-md border-2 border-gray-800 bg-gray-900 flex flex-col">
      <div className="h-2 bg-gray-900 flex items-center justify-center flex-shrink-0">
        <div className="w-5 h-1 bg-gray-700 rounded-full" />
      </div>
      <div className="flex-1 bg-white overflow-hidden relative">
        <img
          src={img}
          alt={label}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xl bg-secondary/30">
          {emoji}
        </div>
      </div>
      <div className="h-1.5 bg-gray-900 flex items-center justify-center flex-shrink-0">
        <div className="w-4 h-0.5 bg-gray-600 rounded-full" />
      </div>
    </div>
    <p className="text-[10px] text-muted-foreground text-center leading-tight max-w-[64px]">{label}</p>
  </div>
);

const stack = ["dio 5.9", "provider 6.1", "go_router 17", "flutter_secure_storage 10", "mobile_scanner 7"];

const MobileSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Application mobile{" "}
          <span className="text-primary">TiQuick</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Flutter — iOS & Android · Développée par{" "}
          <span className="font-semibold text-primary">Agence Capital Humain</span>
        </p>
      </motion.div>

      {/* Tech tokens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap justify-center gap-2 mb-5"
      >
        {[
          { label: "Token Bearer", sub: "vs cookies" },
          { label: "flutter_secure_storage", sub: "AES-256 Android/iOS" },
          { label: "Dio 5.x", sub: "Interceptor HTTP" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-1.5 bg-secondary border border-primary/20 rounded-full px-3 py-1">
            <span className="text-xs font-bold text-primary">{t.label}</span>
            <span className="text-[10px] text-muted-foreground">— {t.sub}</span>
          </div>
        ))}
      </motion.div>

      {/* Phone grid — Flux participant */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full mb-4"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Flux Participant — 9 écrans
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {screens.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.05 }}>
              <Phone emoji={s.emoji} label={s.label} img={s.img} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scanner QR — Flux agent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full flex items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-sm"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#E8F5E9" }}>
          <span className="text-2xl">📷</span>
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-foreground">Flux Agent de Contrôle — Scanner QR Code</p>
          <p className="text-xs text-muted-foreground mt-0.5">Code d'accès temporaire → Caméra activée</p>
        </div>
        <div className="flex gap-2 text-xs">
          {[{ color: "#27AE60", label: "Valide" }, { color: "#F39C12", label: "Déjà scanné" }, { color: "#E74C3C", label: "Invalide" }].map((s, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
              <span className="text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-2 mt-3"
      >
        {stack.map((s, i) => (
          <span key={i} className="text-[10px] font-mono bg-muted border border-border px-2 py-0.5 rounded-full text-muted-foreground">
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MobileSlide;
