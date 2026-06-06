import { motion } from "framer-motion";
import { Server, Database, Cloud, ArrowRight, Clock, HardDrive, ShieldCheck } from "lucide-react";

const BackupDiagramSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
      >
        Architecture de <span className="text-primary">Sauvegarde Automatique</span>
      </motion.h2>

      <div className="relative w-full flex flex-col items-center">
        {/* Top Level: Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-2 flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span className="text-sm font-bold">Cron Task (Daily @ 03:00)</span>
          </div>
          <div className="h-8 w-0.5 bg-border my-2" />
        </motion.div>

        {/* Middle Level: Process */}
        <div className="flex items-center justify-between w-full max-w-4xl mb-8">
          {/* Source: VPS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-[#1E2A2C] border-2 border-[#43A6B0] rounded-2xl p-6 text-white w-48 shadow-xl">
              <div className="flex justify-center mb-3">
                <Server size={40} className="text-[#43A6B0]" />
              </div>
              <p className="text-center font-bold text-sm">VPS Hetzner</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] bg-white/5 p-1.5 rounded">
                  <Database size={12} />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] bg-white/5 p-1.5 rounded">
                  <HardDrive size={12} />
                  <span>Docker Volumes</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Source des données</span>
          </motion.div>

          {/* Action: Dokploy Backup Script */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-blue-600 rounded-full p-4 text-white shadow-lg animate-pulse">
              <ArrowRight size={32} />
            </div>
            <span className="text-[10px] font-mono mt-2 bg-muted px-2 py-1 rounded">
              dokploy-backup.sh
            </span>
          </motion.div>

          {/* Destination: Cloudflare R2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-[#FEF3E2] border-2 border-[#F6821F] rounded-2xl p-6 text-orange-900 w-48 shadow-xl">
              <div className="flex justify-center mb-3">
                <Cloud size={40} className="text-[#F6821F]" />
              </div>
              <p className="text-center font-bold text-sm">Cloudflare R2</p>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] bg-orange-600/5 p-1.5 rounded border border-orange-200">
                  <ShieldCheck size={12} />
                  <span>Off-site Storage</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] bg-orange-600/5 p-1.5 rounded border border-orange-200">
                  <Clock size={12} />
                  <span>30-day Retention</span>
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-muted-foreground">Destination Sécurisée</span>
          </motion.div>
        </div>

        {/* Benefits Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 w-full max-w-4xl mt-4"
        >
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Automatique</p>
            <p className="text-[10px] text-muted-foreground">Aucune intervention humaine</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Déporté</p>
            <p className="text-[10px] text-muted-foreground">Séparé du serveur principal</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-primary text-sm">Économique</p>
            <p className="text-[10px] text-muted-foreground">Zéro frais d'egress Cloudflare</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BackupDiagramSlide;
