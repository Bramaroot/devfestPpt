import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw, Move } from "lucide-react";

const ClassDiagramSlide = () => {
  const [scale, setScale] = useState(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleZoomIn  = () => setScale((s) => Math.min(s + 0.25, 4));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.25, 0.5));
  const handleReset   = () => { setScale(1); x.set(0); y.set(0); };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          Modélisation : <span className="text-primary">Diagramme de Classes</span>
        </h2>
        <p className="text-muted-foreground italic text-lg">Structure des données et relations (Eloquent ORM)</p>
      </motion.div>

      <div className="relative flex-1 bg-white rounded-[2rem] border border-border shadow-inner max-h-[480px] overflow-hidden flex flex-col">

        {/* Barre d'outils */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 backdrop-blur border border-border rounded-full p-1.5 shadow-sm z-10">
          <button onClick={handleZoomOut} title="Zoom Arrière"
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-medium w-12 text-center text-foreground select-none">
            {Math.round(scale * 100)}%
          </span>
          <button onClick={handleZoomIn} title="Zoom Avant"
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground">
            <ZoomIn className="w-4 h-4" />
          </button>
          <button onClick={handleReset} title="Réinitialiser"
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground border-l border-border pl-2">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Hint déplacement */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-muted-foreground/60 text-[11px] z-10 select-none pointer-events-none">
          <Move className="w-3 h-3" />
          <span>Glissez pour naviguer</span>
        </div>

        {/* Zone draggable */}
        <div className="w-full h-full flex justify-center items-center overflow-hidden cursor-grab active:cursor-grabbing select-none">
          <motion.img
            drag
            dragMomentum={false}
            style={{ x, y, scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src="/Diagram/classDiagrammNewOKWHITE.png"
            alt="Diagramme de Classes TiQuick"
            className="object-contain rounded-xl origin-center max-w-none"
            draggable={false}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector(".placeholder-msg")) {
                const msg = document.createElement("div");
                msg.className = "placeholder-msg flex flex-col items-center gap-4 text-center p-8";
                msg.innerHTML = `<p style="color:hsl(var(--muted-foreground));font-size:0.875rem">
                  Fichier introuvable :<br/>
                  <code style="color:hsl(var(--primary));font-family:monospace">public/Diagram/classDiagrammNewOKWHITE.png</code>
                </p>`;
                parent.appendChild(msg);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassDiagramSlide;
