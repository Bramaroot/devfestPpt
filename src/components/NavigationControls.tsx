interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onHome?: () => void;
}

const NavigationControls = ({ currentSlide, totalSlides }: NavigationControlsProps) => {
  return (
    <div className="fixed bottom-5 right-6 z-50 flex items-center gap-2">
      <div className="bg-white/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm">
        <div
          className="h-1 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${Math.round(((currentSlide + 1) / totalSlides) * 60)}px` }}
        />
        <span className="text-xs font-semibold text-muted-foreground font-mono">
          {currentSlide + 1}<span className="text-border">/{totalSlides}</span>
        </span>
      </div>
    </div>
  );
};

export default NavigationControls;
