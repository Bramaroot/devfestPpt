import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

const solutions = [
  { 
    name: "Eventbrite", 
    paiement: "✗", 
    fcfa: "✗", 
    active: "✓", 
    api: "✓",
    desc: "Leader mondial, inadapté aux fintechs locales"
  },
  { 
    name: "TikeNaWa",  
    paiement: "Non natif", 
    fcfa: "✓", 
    active: "✗", 
    api: "✗",
    desc: "Plateforme pionnière au Niger, inactive en 2026"
  },
  { 
    name: "Yala",      
    paiement: "Non natif", 
    fcfa: "✓", 
    active: "✓", 
    api: "✗",
    desc: "Service fonctionnel mais API fermée"
  },
  { 
    name: "TiQuick",   
    paiement: "✓", 
    fcfa: "✓", 
    active: "✓", 
    api: "✓",
    isTiQuick: true,
    desc: "Souverain, APIs AmanaTa/NITA & documentation ouverte"
  },
];

const EtatArtSlide = () => {
  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-6 justify-between">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          État de l'art & <span className="text-primary">Positionnement</span>
        </h2>
        <p className="text-muted-foreground italic text-lg">
          Analyse comparative des solutions de billetterie existantes
        </p>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl flex-1 max-h-[380px] flex flex-col justify-center"
      >
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/40 border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-4 px-6 font-bold">Solution</th>
                <th className="py-4 px-4 font-bold text-center">Paiement Mobile Local</th>
                <th className="py-4 px-4 font-bold text-center">Devise FCFA</th>
                <th className="py-4 px-4 font-bold text-center">Active (2026)</th>
                <th className="py-4 px-4 font-bold text-center">API Intégration</th>
                <th className="py-4 px-6 font-bold hidden md:table-cell">Caractéristique</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {solutions.map((s, idx) => (
                <tr 
                  key={idx}
                  className={`transition-all ${
                    s.isTiQuick 
                      ? "bg-primary/5 font-semibold text-primary" 
                      : "hover:bg-muted/50 text-foreground"
                  }`}
                >
                  <td className="py-3 px-6 flex items-center gap-3">
                    {s.isTiQuick ? (
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                      </span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30"></span>
                    )}
                    <span className={s.isTiQuick ? "text-lg font-black text-primary" : "font-bold text-sm"}>
                      {s.name}
                    </span>
                  </td>
                  
                  {/* Paiement Mobile */}
                  <td className="py-3 px-4 text-center">
                    {s.paiement === "✓" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : s.paiement === "✗" ? (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 mx-auto">
                        <AlertTriangle className="w-3 h-3" />
                        {s.paiement}
                      </span>
                    )}
                  </td>
                  
                  {/* FCFA */}
                  <td className="py-3 px-4 text-center">
                    {s.fcfa === "✓" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  
                  {/* Active */}
                  <td className="py-3 px-4 text-center">
                    {s.active === "✓" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  
                  {/* API */}
                  <td className="py-3 px-4 text-center">
                    {s.api === "✓" ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>

                  {/* Desc */}
                  <td className="py-3 px-6 text-xs text-muted-foreground hidden md:table-cell">
                    <span className={s.isTiQuick ? "text-primary/90 font-medium" : ""}>
                      {s.desc}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-secondary/50 p-4 rounded-2xl border border-secondary text-center mt-4"
      >
        <p className="text-sm font-semibold text-primary">
          💡 TiQuick comble un vide technologique en offrant la seule API de billetterie souveraine, ouverte et connectée nativement aux fintechs nigériennes.
        </p>
      </motion.div>
    </div>
  );
};

export default EtatArtSlide;
