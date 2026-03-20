import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-xs font-body tracking-[0.4em] uppercase text-silver">
            Marketing Digital &bull; Design &bull; Social Media
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-gradient mb-8"
        >
          Elevamos sua
          <br />
          presença digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Estratégias exclusivas de marketing digital, criação de conteúdo e design
          que transformam marcas em referências nas redes sociais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase hover:bg-navy-light transition-colors duration-300 active:scale-[0.97]"
          >
            Iniciar Projeto
          </button>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 border border-silver/30 text-foreground font-body text-sm tracking-widest uppercase hover:border-foreground transition-colors duration-300 active:scale-[0.97]"
          >
            Ver Portfólio
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-silver/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
