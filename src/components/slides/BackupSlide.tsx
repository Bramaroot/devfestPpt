import { motion } from "framer-motion";
import { Database, Cloud, ShieldCheck, Clock } from "lucide-react";

const BackupSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground"
      >
        Stratégie de <span className="text-primary">Sauvegarde</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold">Données Critiques</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Base de données PostgreSQL (Schéma + Données)</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Volumes Docker (Images, PDFs, documents)</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={18} className="text-green-500 mt-1 shrink-0" />
              <span>Fichiers de configuration et variables d'environnement</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
              <Cloud size={32} />
            </div>
            <h3 className="text-xl font-bold">Automatisation R2</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <Clock size={18} className="text-primary mt-1 shrink-0" />
              <span>Tâches Cron quotidiennes configurées via Dokploy</span>
            </li>
            <li className="flex items-start gap-2">
              <Cloud size={18} className="text-orange-500 mt-1 shrink-0" />
              <span>Export chiffré vers Cloudflare R2 (S3 Compatible)</span>
            </li>
            <li className="flex items-start gap-2">
              <Database size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>Rétention glissante sur 30 jours (Auto-cleanup)</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center text-muted-foreground italic"
      >
        "Les données sont le cœur du système. Une sauvegarde automatique et déportée garantit la continuité de service en cas de sinistre sur le VPS."
      </motion.p>
    </div>
  );
};

export default BackupSlide;
