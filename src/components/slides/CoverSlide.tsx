import { motion } from "framer-motion";
import authorImage from "@/assets/author-profile.jpg";

const CoverSlide = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Déploiement des Applications Web
          <span className="block text-primary mt-2">avec Vercel</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default CoverSlide;
