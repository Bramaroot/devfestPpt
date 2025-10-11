import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "@/components/Slide";
import NavigationControls from "@/components/NavigationControls";
import CoverSlide from "@/components/slides/CoverSlide";
import AuthorSlide from "@/components/slides/AuthorSlide";
import DefinitionSlide from "@/components/slides/DefinitionSlide";
import VercelPresentationSlide from "@/components/slides/VercelPresentationSlide";
import Avantages from "@/components/slides/Avantages";
import PrerequisSlide from "@/components/slides/PrerequisSlide";
import DemoSlide from "@/components/slides/DemoSlide";
import QuestionsSlide from "@/components/slides/QuestionsSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  const slides = [
    <CoverSlide />,
    <AuthorSlide />,
    <DefinitionSlide />,
    <VercelPresentationSlide />,
    <Avantages />,
    <PrerequisSlide />,
    <DemoSlide />,
    <QuestionsSlide />,
    <ConclusionSlide />,
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleHome = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Slide key={currentSlide}>{slides[currentSlide]}</Slide>
      </AnimatePresence>

      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onHome={handleHome}
      />
    </div>
  );
};

export default Index;
