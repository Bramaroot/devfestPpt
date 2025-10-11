import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

const Slide = ({ children, className = " " }: SlideProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`min-h-screen w-full flex items-center justify-center p-8 md:p-16 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
