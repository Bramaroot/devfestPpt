import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Theater } from "lucide-react";

const screens = [
  { icon: Home, label: "Accueil", img: "/AppMobile/Accueil.jpeg" },
  { icon: Theater, label: "Détail Événement", img: "/AppMobile/DetaileVENTS.jpeg" },
];

const Phone = ({ Icon, label, img }: { Icon: any; label: string; img: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-40 h-[320px] md:w-48 md:h-[380px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900 flex flex-col">
        {/* Notch / Speaker */}
        <div className="h-5 md:h-6 bg-slate-900 flex items-center justify-center flex-shrink-0">
          <div className="w-12 h-3 md:w-16 md:h-4 bg-black rounded-full" />
        </div>
        <div className="flex-1 bg-slate-950 overflow-hidden relative flex items-center justify-center">
          {!hasError ? (
            <img
              src={img}
              alt={label}
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary bg-secondary/30 p-4 text-center">
              <Icon size={40} className="mb-2" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          )}
        </div>
        {/* Bottom Bar */}
        <div className="h-3 md:h-4 bg-slate-900 flex items-center justify-center flex-shrink-0">
          <div className="w-16 md:w-20 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>
      <p className="text-xs md:text-sm font-bold text-foreground text-center mt-1">{label}</p>
    </div>
  );
};



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


      {/* Phone grid — Flux participant */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="w-full mb-4"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 text-center">
          Flux Participant — Écrans Clés
        </p>
        <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
          {screens.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }}>
              <Phone Icon={s.icon} label={s.label} img={s.img} />
            </motion.div>
          ))}
        </div>
      </motion.div>


    </div>
  );
};

export default MobileSlide;
