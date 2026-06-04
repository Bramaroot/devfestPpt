import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

const screens = [
  {
    emoji: "🏠",
    label: "Page Accueil",
    desc: "tiquick.com",
    img: "/screenshots/accueil.png",
  },
  {
    emoji: "🔧",
    label: "Dashboard Admin",
    desc: "Gestion globale",
    img: "/screenshots/dashboard-admin.png",
  },
  {
    emoji: "📊",
    label: "Dashboard Organisateur",
    desc: "Ventes temps réel",
    img: "/screenshots/dashboard-org.png",
  },
  {
    emoji: "📷",
    label: "Scan QR Code",
    desc: "Interface contrôleur",
    img: "/screenshots/scan-qr.png",
  },
  {
    emoji: "🎫",
    label: "Billet PDF",
    desc: "QR code intégré",
    img: "/screenshots/billet-pdf.png",
  },
  {
    emoji: "📱",
    label: "App Mobile",
    desc: "Flutter iOS + Android",
    img: "/screenshots/app-mobile.png",
  },
];

const DemoSlide = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () => setSelected((s) => (s !== null ? (s - 1 + screens.length) % screens.length : 0));
  const next = () => setSelected((s) => (s !== null ? (s + 1) % screens.length : 0));

  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") { e.stopPropagation(); prev(); }
      if (e.key === "ArrowRight") { e.stopPropagation(); next(); }
    };
    window.addEventListener("keydown", handler, true);
    return () => window.removeEventListener("keydown", handler, true);
  }, [selected]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-2 text-center"
        >
          <span className="text-primary">Réalisation</span> — La plateforme en images
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-7 text-center text-sm"
        >
          Cliquez sur un écran pour l'agrandir
        </motion.p>

        <div className="grid grid-cols-3 gap-4 w-full mb-7">
          {screens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              onClick={() => open(i)}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all group cursor-pointer"
            >
              <div className="h-28 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <span className="text-4xl group-hover:scale-110 transition-transform relative z-10">
                  {s.emoji}
                </span>
                {/* Zoom hint */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-primary font-bold bg-background/80 px-2 py-1 rounded-lg">
                    Agrandir
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-bold text-xs text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl px-6 py-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <Globe className="w-4 h-4 text-primary" />
            <span className="font-bold text-primary font-mono">tiquick.com</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground italic">
            "Tout ceci tourne en production sur tiquick.com"
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
            onClick={close}
          >
            <motion.div
              key={`modal-content-${selected}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{screens[selected].emoji}</span>
                  <div>
                    <p className="font-bold text-foreground">{screens[selected].label}</p>
                    <p className="text-xs text-muted-foreground">{screens[selected].desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {selected + 1} / {screens.length}
                  </span>
                  <button
                    onClick={close}
                    className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image area */}
              <div className="flex-1 overflow-hidden flex items-center justify-center bg-muted/30 min-h-0">
                <img
                  src={screens[selected].img}
                  alt={screens[selected].label}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".placeholder-msg")) {
                      const msg = document.createElement("div");
                      msg.className = "placeholder-msg flex flex-col items-center gap-4 p-12 text-center";
                      msg.innerHTML = `
                        <span style="font-size:5rem">${screens[selected]?.emoji ?? ""}</span>
                        <p style="color:hsl(var(--muted-foreground));font-size:0.875rem">
                          Placez le screenshot ici :<br/>
                          <code style="color:hsl(var(--primary));font-family:monospace">public${screens[selected]?.img ?? ""}</code>
                        </p>
                      `;
                      parent.appendChild(msg);
                    }
                  }}
                />
              </div>

              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 border border-border rounded-xl hover:bg-secondary transition-colors text-foreground"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoSlide;
