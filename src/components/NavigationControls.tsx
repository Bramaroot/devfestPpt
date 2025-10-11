import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome?: () => void;
}

const NavigationControls = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onHome,
}: NavigationControlsProps) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <div className="container mx-auto px-8">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            size="icon"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="rounded-full h-12 w-12 backdrop-blur-sm bg-secondary/50 hover:bg-secondary/80 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {currentSlide === totalSlides - 1 && onHome && (
            <Button
              variant="secondary"
              onClick={onHome}
              className="rounded-full backdrop-blur-sm bg-secondary/50 hover:bg-secondary/80 transition-all"
            >
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Button>
          )}

          <Button
            variant="secondary"
            size="icon"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="rounded-full h-12 w-12 backdrop-blur-sm bg-secondary/50 hover:bg-secondary/80 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationControls;
