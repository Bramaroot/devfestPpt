import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "@/components/Slide";
import NavigationControls from "@/components/NavigationControls";
import SlideSidebar from "@/components/SlideSidebar";

import CoverSlide from "@/components/slides/CoverSlide";
import PlanSlide from "@/components/slides/PlanSlide";
import IntroductionSlide from "@/components/slides/IntroductionSlide";
import ParadoxeSlide from "@/components/slides/ParadoxeSlide";
import EtatArtSlide from "@/components/slides/EtatArtSlide";
import ProblematiqueSlide from "@/components/slides/ProblematiqueSlide";
import HypotheseSlide from "@/components/slides/HypotheseSlide";
import ObjectivesSlide from "@/components/slides/ObjectivesSlide";
import UseCaseModelingSlide from "@/components/slides/UseCaseModelingSlide";
import ClassDiagramSlide from "@/components/slides/ClassDiagramSlide";
import SequenceDiagramSlide from "@/components/slides/SequenceDiagramSlide";
import ValueSlide from "@/components/slides/ValueSlide";
import MetricsSlide from "@/components/slides/MetricsSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import TechStackSlide from "@/components/slides/TechStackSlide";
import ChallengesSlide from "@/components/slides/ChallengesSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import MobileSlide from "@/components/slides/MobileSlide";
import CICDBackupSlide from "@/components/slides/CICDBackupSlide";
import BilanSlide from "@/components/slides/BilanSlide";
import LimitesPerspSlide from "@/components/slides/LimitesPerspSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import ThanksSlide from "@/components/slides/ThanksSlide";

const nopadSlides = new Set([0, 5, 21, 22]);

const slides = [
  <CoverSlide />,            // 01 — Page de titre
  <PlanSlide />,             // 02 — Plan
  <IntroductionSlide />,     // 03 — Introduction
  <ParadoxeSlide />,         // 04 — Le paradoxe nigérien
  <EtatArtSlide />,          // 05 — État de l'art
  <ProblematiqueSlide />,    // 06 — La problématique
  <HypotheseSlide />,        // 07 — Hypothèse de Recherche
  <ObjectivesSlide />,       // 08 — Objectifs du Projet
  <ValueSlide />,            // 09 — TiQuick en 30 secondes
  <MetricsSlide />,          // 10 — Méthodologie Scrum
  <UseCaseModelingSlide />,  // 11 — Cas d'utilisation (Modélisation)
  <ArchitectureSlide />,     // 12 — Architecture 3-tiers
  <ClassDiagramSlide />,     // 13 — Diagramme de classes (Modélisation)
  <SequenceDiagramSlide />,  // 14 — Diagramme de séquence (Modélisation)
  <TechStackSlide />,        // 15 — Stack Technique
  <ChallengesSlide />,       // 16 — Difficultés & Solutions
  <DemoSlide />,             // 17 — Interfaces web
  <MobileSlide />,           // 18 — Application mobile Flutter
  <CICDBackupSlide />,       // 19 — DevOps & Sauvegarde
  <BilanSlide />,            // 20 — Bilan du Projet
  <LimitesPerspSlide />,     // 21 — Limites & Perspectives
  <ConclusionSlide />,       // 22 — Conclusion
  <ThanksSlide />,           // 23 — Questions
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && current < total - 1) setCurrent((p) => p + 1);
      if (e.key === "ArrowLeft" && current > 0) setCurrent((p) => p - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, total]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SlideSidebar current={current} onNavigate={setCurrent} />

      <AnimatePresence mode="wait">
        <Slide
          key={current}
          noPadding={nopadSlides.has(current)}
        >
          {slides[current]}
        </Slide>
      </AnimatePresence>

      <NavigationControls
        currentSlide={current}
        totalSlides={total}
        onNext={() => current < total - 1 && setCurrent((p) => p + 1)}
        onPrevious={() => current > 0 && setCurrent((p) => p - 1)}
        onHome={() => setCurrent(0)}
      />
    </div>
  );
};

export default Index;
