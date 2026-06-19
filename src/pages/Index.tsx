import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "@/components/Slide";
import NavigationControls from "@/components/NavigationControls";
import SlideSidebar from "@/components/SlideSidebar";

import CoverSlide from "@/components/slides/CoverSlide";
import PlanSlide from "@/components/slides/PlanSlide";
import IntroductionSlide from "@/components/slides/IntroductionSlide";
import ParadoxeSlide from "@/components/slides/ParadoxeSlide";
import ProblematiqueSlide from "@/components/slides/ProblematiqueSlide";
import HypotheseSlide from "@/components/slides/HypotheseSlide";
import ObjectivesSlide from "@/components/slides/ObjectivesSlide";
import UseCaseModelingSlide from "@/components/slides/UseCaseModelingSlide";
import ClassDiagramSlide from "@/components/slides/ClassDiagramSlide";
import ActivityDiagramSlide from "@/components/slides/ActivityDiagramSlide";
import SequenceDiagramSlide from "@/components/slides/SequenceDiagramSlide";
import ValueSlide from "@/components/slides/ValueSlide";
import MetricsSlide from "@/components/slides/MetricsSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import TechStackSlide from "@/components/slides/TechStackSlide";
import ChallengesSlide from "@/components/slides/ChallengesSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import MobileSlide from "@/components/slides/MobileSlide";
import CICDSlide from "@/components/slides/CICDSlide";
import BackupSlide from "@/components/slides/BackupSlide";
import BackupDiagramSlide from "@/components/slides/BackupDiagramSlide";
import BilanSlide from "@/components/slides/BilanSlide";
import LimitesSlide from "@/components/slides/LimitesSlide";
import IntegrationTestsSlide from "@/components/slides/IntegrationTestsSlide";
import FutureEvolutionSlide from "@/components/slides/FutureEvolutionSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import ThanksSlide from "@/components/slides/ThanksSlide";

const nopadSlides = new Set([0, 4, 25, 26]);

const slides = [
  <CoverSlide />,            // 01 — Page de titre
  <PlanSlide />,             // 02 — Plan
  <IntroductionSlide />,     // 03 — Introduction
  <ParadoxeSlide />,         // 04 — Le paradoxe nigérien
  <ProblematiqueSlide />,    // 04B — La problématique
  <HypotheseSlide />,        // 05 — Hypothèse de Recherche
  <ObjectivesSlide />,       // 06 — Objectifs du Projet
  <UseCaseModelingSlide />,  // 07 — Cas d'utilisation (Modélisation)
  <ClassDiagramSlide />,     // 08 — Diagramme de classes (Modélisation)
  <ActivityDiagramSlide />,  // 09 — Diagramme d'activité (Modélisation)
  <SequenceDiagramSlide />,  // 10 — Diagramme de séquence (Modélisation)
  <ValueSlide />,            // 11 — TiQuick en 30 secondes
  <MetricsSlide />,          // 12 — Méthodologie Scrum
  <ArchitectureSlide />,     // 14 — Architecture 3-tiers
  <TechStackSlide />,        // 15 — Stack Technique
  <ChallengesSlide />,       // 16 — Difficultés & Solutions
  <DemoSlide />,             // 17 — Interfaces web
  <MobileSlide />,           // 18 — Application mobile Flutter
  <CICDSlide />,             // 19 — Infrastructure & DevOps
  <BackupSlide />,           // 20 — Stratégie de Sauvegarde
  <BackupDiagramSlide />,    // 22 — Architecture de Sauvegarde
  <BilanSlide />,            // 23 — Bilan du Projet
  <LimitesSlide />,          // 24 — Limites & Perspectives
  <IntegrationTestsSlide />, // 25 — Perspectives (Ancien IntegrationTests)
  <FutureEvolutionSlide />,  // 26 — Perspectives & Évolutions
  <ConclusionSlide />,       // 27 — Conclusion
  <ThanksSlide />,           // 28 — Questions
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
