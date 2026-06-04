import { motion } from "framer-motion";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

const ObservabilitySlide = () => {
  const platforms = ["Eventbrite", "TikeNaWa", "Yala", "TiQuick"];
  const criteria: { label: string; values: (boolean | "partial")[] }[] = [
    { label: "Paiements NE locaux", values: [false, "partial", "partial", true] },
    { label: "AmanaTa + NITA", values: [false, false, false, true] },
    { label: "App mobile native", values: [true, false, true, true] },
    { label: "API documentée", values: [true, false, false, true] },
    { label: "Active en 2026", values: [true, false, true, true] },
    { label: "Devise FCFA", values: [false, true, true, true] },
  ];

  const renderCell = (v: boolean | "partial") => {
    if (v === true) return <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />;
    if (v === false) return <XCircle className="w-5 h-5 text-red-400/50 mx-auto" />;
    return <MinusCircle className="w-5 h-5 text-yellow-400 mx-auto" />;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Pourquoi TiQuick était <span className="text-primary">nécessaire</span>
        </h2>
        <p className="text-muted-foreground mt-1 text-sm">Comparatif des solutions de billetterie</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full overflow-hidden rounded-2xl border border-border"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="text-left px-5 py-4 font-semibold text-muted-foreground">Critère</th>
              {platforms.map((p, i) => (
                <th
                  key={i}
                  className={`px-4 py-4 font-bold text-center ${p === "TiQuick" ? "text-primary" : "text-foreground"}`}
                >
                  {p === "TiQuick" ? (
                    <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">{p}</span>
                  ) : (
                    p
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((c, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className={`border-b border-border/50 ${i % 2 === 0 ? "bg-background" : "bg-card/50"}`}
              >
                <td className="px-5 py-3.5 font-medium text-sm">{c.label}</td>
                {c.values.map((v, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3.5 text-center ${platforms[j] === "TiQuick" ? "bg-primary/5" : ""}`}
                  >
                    {renderCell(v)}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-4 text-sm text-muted-foreground text-center"
      >
        → TiQuick est la seule solution intégrant nativement{" "}
        <span className="text-primary font-semibold">AmanaTa B2B et NITA Achat en ligne</span>
      </motion.p>
    </div>
  );
};

export default ObservabilitySlide;
