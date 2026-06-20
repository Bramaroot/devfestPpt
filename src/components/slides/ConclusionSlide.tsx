import { motion } from "framer-motion";
import { Globe, Lock, Smartphone, Rocket } from "lucide-react";

const ConclusionSlide = () => {
  const points = [
    { icon: Globe, text: "Une réponse locale à un besoin local", color: "text-blue-500" },
    { icon: Lock, text: "Sécurité et traçabilité des transactions", color: "text-green-500" },
    { icon: Smartphone, text: "Mobile-First adapté au contexte nigérien", color: "text-purple-500" },
    { icon: Rocket, text: "En production sur tiquick.com dès aujourd'hui", color: "text-orange-500" },
  ];

  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top header band */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white text-center py-4 flex-shrink-0"
      >
        <h2 className="text-2xl font-black tracking-wide">CONCLUSION</h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-12 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="border-2 rounded-3xl p-8 mb-8 max-w-3xl w-full text-center"
          style={{ borderColor: "#43A6B0", background: "rgba(67, 166, 176, 0.05)" }}
        >
          <p className="text-xl md:text-2xl font-black leading-snug" style={{ color: "#1A2B2C" }}>
            TiQuick démontre qu'il est possible de concevoir une solution logicielle de{" "}
            <span style={{ color: "#18636B" }}>qualité professionnelle</span> dans le cadre d'un mémoire
            académique, adaptée aux réalités d'un{" "}
            <span style={{ color: "#43A6B0" }}>marché local</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mb-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 bg-card border rounded-xl p-4 shadow-sm"
              style={{ borderColor: "#D4E8E9" }}
            >
              <p.icon size={20} className={p.color} />
              <p className="text-sm font-medium" style={{ color: "#1A2B2C" }}>{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
        </div>

       
      </div>
    </div>
  );
};

export default ConclusionSlide;
