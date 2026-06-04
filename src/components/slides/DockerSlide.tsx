import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

const DockerSlide = () => {
  const steps = [
    {
      num: "1",
      title: "Authentification",
      desc: "Client ID + Secret → JWT Token mis en cache Redis",
      color: "text-primary",
      bg: "bg-primary/10 border-primary/30",
    },
    {
      num: "2",
      title: "Signature HMAC-SHA256",
      desc: "Hash de : timestamp + METHOD + URI + body, signé avec api_key",
      color: "text-[#F9C74C]",
      bg: "bg-[#F9C74C]/10 border-[#F9C74C]/30",
    },
    {
      num: "3",
      title: "Webhook de confirmation",
      desc: "POST /webhook (IP whitelistée) → vérif. idempotence Redis → UPDATE statut_paiement → billet disponible",
      color: "text-green-400",
      bg: "bg-green-500/10 border-green-500/30",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-7">
        <div className="inline-flex items-center gap-2 bg-[#F9C74C]/10 border border-[#F9C74C]/30 rounded-full px-4 py-1.5 mb-3">
          <ShieldCheck className="w-4 h-4 text-[#F9C74C]" />
          <span className="text-[#F9C74C] text-xs font-semibold uppercase tracking-wider">Défi Technique 1</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Intégration <span className="text-primary">AmanaTa B2B</span>
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">Flux de paiement sécurisé — HMAC-SHA256</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch gap-3 w-full mb-5">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="flex items-start gap-2 flex-1"
          >
            <div className={`flex-1 flex flex-col p-5 rounded-2xl border ${s.bg}`}>
              <div className={`text-2xl font-black ${s.color} mb-2 font-mono`}>{s.num}</div>
              <p className={`font-bold text-sm mb-2 ${s.color}`}>{s.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center pt-8">
                <ArrowRight className="w-4 h-4 text-muted-foreground/40 flex-shrink-0" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs"
        >
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <p className="text-slate-500">{"// Signature (Laravel)"}</p>
          <p className="text-sky-400 mt-1">
            {"$sig = hash_hmac("}
            <span className="text-orange-300">{'\'sha256\''}</span>
            {","}
          </p>
          <p className="text-sky-400 pl-4">{"$ts.$method.$uri.$body,"}</p>
          <p className="text-sky-400 pl-4">{"$api_key);"}</p>
          <div className="flex items-center gap-1.5 mt-2 text-green-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>Clé jamais exposée au client</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-card border border-orange-500/30 rounded-2xl p-4 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-orange-400 text-sm mb-1">Pas de sandbox disponible</p>
            <p className="text-xs text-muted-foreground">
              Tests effectués directement en production — nécessite une coordination avec l'équipe AmanaTa
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DockerSlide;
