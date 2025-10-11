import { motion } from "framer-motion";
import authorImage from "@/assets/author-profile.jpg";
import { Code2, Rocket, Users } from "lucide-react";

const AuthorSlide = () => {
  const highlights = [];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
          <img
            src="public/bramcolor.jpg"
            alt="Nouhou Soumana Ibrahim"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover ring-4 ring-primary/50 shadow-2xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Présentation du Formateur
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-2xl font-semibold text-primary mb-2">
              Nouhou Ibrahim
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Développeur Web
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthorSlide;
