import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-40">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-background/50" />

      <div className="relative z-10 container mx-auto px-6 text-center mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm font-medium text-muted-foreground">
            <Sparkles size={16} className="text-primary" />
            <span>Agência Premium de Marketing Digital</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          Sua Marca
          <br />
          <span className="text-primary">Elevada.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Estratégia, design e conteúdo de alto impacto para marcas que buscam
          <br className="hidden md:block" /> excelência nas redes sociais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-900/40 border border-blue-500/20 text-white font-medium rounded-full hover:bg-blue-900/60 transition-all duration-300"
          >
            Iniciar Projeto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-all duration-300"
          >
            Ver Portfólio
          </button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 w-full border-t border-border bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { value: "150+", label: "CLIENTES ATIVOS" },
              { value: "2M+", label: "ALCANCE MENSAL" },
              { value: "500+", label: "PROJETOS ENTREGUES" },
              { value: "98%", label: "SATISFAÇÃO" },
            ].map((stat, i) => (
              <div key={i} className="text-center pl-0 md:first:pl-0 pl-8">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
