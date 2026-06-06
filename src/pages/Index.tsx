import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "@/components/Slide";
import NavigationControls from "@/components/NavigationControls";
import SlideSidebar from "@/components/SlideSidebar";

import CoverSlide from "@/components/slides/CoverSlide";
import PlanSlide from "@/components/slides/PlanSlide";
import IntroductionSlide from "@/components/slides/IntroductionSlide";
import ProblemSlide from "@/components/slides/ProblemSlide";
import ValueSlide from "@/components/slides/ValueSlide";
import ObservabilitySlide from "@/components/slides/ObservabilitySlide";
import MetricsSlide from "@/components/slides/MetricsSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import TechStackSlide from "@/components/slides/TechStackSlide";
import ClassDiagramSlide from "@/components/slides/ClassDiagramSlide";
import ActivityDiagramSlide from "@/components/slides/ActivityDiagramSlide";
import SequenceDiagramSlide from "@/components/slides/SequenceDiagramSlide";
import DockerSlide from "@/components/slides/DockerSlide";
import GitHubSlide from "@/components/slides/GitHubSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import MobileSlide from "@/components/slides/MobileSlide";
import CICDSlide from "@/components/slides/CICDSlide";
import DeploymentSlide from "@/components/slides/DeploymentSlide";
import BackupSlide from "@/components/slides/BackupSlide";
import BackupDiagramSlide from "@/components/slides/BackupDiagramSlide";
import BilanSlide from "@/components/slides/BilanSlide";
import LimitesSlide from "@/components/slides/LimitesSlide";
import IntegrationTestsSlide from "@/components/slides/IntegrationTestsSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import ThanksSlide from "@/components/slides/ThanksSlide";

const nopadSlides = new Set([0, 23, 24]);

const slides = [
  <CoverSlide />,            // 01 — Page de titre
  <PlanSlide />,             // 02 — Plan
  <IntroductionSlide />,     // 03 — Introduction
  <ProblemSlide />,          // 04 — Contexte & Problématique
  <ValueSlide />,            // 05 — TiQuick en 30 secondes
  <ObservabilitySlide />,    // 06 — État de l'art
  <MetricsSlide />,          // 07 — Méthodologie Scrum
  <ArchitectureSlide />,     // 08 — Architecture 3-tiers
  <TechStackSlide />,        // 09 — Stack Technique
  <ClassDiagramSlide />,     // 10 — Diagramme de classes
  <ActivityDiagramSlide />,  // 11 — Diagramme d'activité
  <SequenceDiagramSlide />,  // 12 — Diagramme de séquence
  <DockerSlide />,           // 13 — Défi 1 : AmanaTa HMAC
  <GitHubSlide />,           // 14 — Défi 2 : NITA
  <DemoSlide />,             // 15 — Interfaces web
  <MobileSlide />,           // 16 — Application mobile Flutter
  <CICDSlide />,             // 17 — Infrastructure & DevOps
  <DeploymentSlide />,       // 18 — Diagramme de déploiement
  <BackupSlide />,           // 19 — Stratégie de Sauvegarde
  <BackupDiagramSlide />,    // 20 — Architecture de Sauvegarde
  <BilanSlide />,            // 21 — Bilan du Projet
  <LimitesSlide />,          // 22 — Limites & Perspectives
  <IntegrationTestsSlide />, // 23 — Perspectives (Ancien IntegrationTests)
  <ConclusionSlide />,       // 24 — Conclusion
  <ThanksSlide />,           // 25 — Questions
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
