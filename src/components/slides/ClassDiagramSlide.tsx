import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

const ClassDiagramSlide = () => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  const handleReset = () => setScale(1);

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
        {/* Barre d'outils de Zoom */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/80 backdrop-blur border border-border rounded-full p-1.5 shadow-sm z-10">
          <button
            onClick={handleZoomOut}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Zoom Arrière"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-medium w-12 text-center text-foreground select-none">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            title="Zoom Avant"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground border-l border-border pl-2 rounded-l-none"
            title="Réinitialiser"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Zone de l'image */}
        <div className="w-full h-full flex justify-center items-center overflow-auto p-8">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ scale }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            src="/Diagram/classDiagrammNewOKWHITE.png" 
            alt="Diagramme de Classes TiQuick" 
            className="max-w-full max-h-[400px] object-contain rounded-xl origin-center"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector(".placeholder-msg")) {
                const msg = document.createElement("div");
                msg.className = "placeholder-msg flex flex-col items-center gap-4 text-center p-8";
                msg.innerHTML = `
                  <p style="color:hsl(var(--muted-foreground));font-size:0.875rem">
                    Le fichier du diagramme de classes est introuvable au chemin :<br/>
                    <code style="color:hsl(var(--primary));font-family:monospace">public/Diagram/classDiagrammNewOKWHITE.png</code>
                  </p>
                `;
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
