import { motion } from "framer-motion";
import { MessageCircle, Globe } from "lucide-react";

const ThanksSlide = () => {
  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      {/* Top header */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white text-center py-4 flex-shrink-0"
      >
        <p className="text-sm font-semibold tracking-wider opacity-90">SOUTENANCE DE MÉMOIRE — 2025–2026</p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="mb-8"
        >
          <p className="text-7xl md:text-8xl font-black tracking-tighter mb-2" style={{ color: "#18636B" }}>
            Ti<span style={{ color: "#43A6B0" }}>Quick</span>
          </p>
          <p className="text-xl font-medium" style={{ color: "#4A6567" }}>Merci de votre attention</p>
        </motion.div>

        <div className="flex items-center gap-4 w-full max-w-xs mb-7">
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "#F9C74C" }} />
          <div className="flex-1 h-px" style={{ background: "#D4E8E9" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-3 rounded-2xl px-8 py-3 mb-8 text-white"
          style={{ background: "linear-gradient(135deg, #18636B, #43A6B0)" }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg font-bold">Place aux questions</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-2 mb-8"
        >
          <p className="font-bold" style={{ color: "#1A2B2C" }}>Nouhou Soumana Ibrahim</p>
          <div className="flex items-center justify-center gap-2">
            <Globe className="w-4 h-4" style={{ color: "#18636B" }} />
            <p className="font-mono font-bold" style={{ color: "#18636B" }}>tiquick.com</p>
          </div>
          <p className="text-sm" style={{ color: "#4A6567" }}>nouhbrama@gmail.com</p>
        </motion.div>
      </div>

      {/* Bottom banner */}
      <div
        style={{ background: "linear-gradient(135deg, #18636B 0%, #43A6B0 100%)" }}
        className="text-white px-10 py-3 flex items-center justify-between flex-shrink-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">H</span>
          </div>
          <span className="text-xs font-bold tracking-wider">HYPE AGENCY</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-wider">CAPITAL HUMAIN</span>
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-[10px] font-black">C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksSlide;
