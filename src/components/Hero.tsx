import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-background overflow-x-hidden">
      {/* Dynamic Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            y: [0, -40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[50vw] rounded-full bg-accent/10 blur-[120px]"
        />
      </div>

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-background/20 mix-blend-multiply pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 md:mb-8"
        >
          <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-[10px] sm:text-sm font-medium backdrop-blur-md overflow-hidden group">
            <motion.div 
               animate={{ x: ["-100%", "200%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2"
            />
            <Sparkles size={14} className="text-primary relative z-10" />
            <span className="text-white/90 relative z-10 uppercase tracking-widest font-bold">Agência Premium</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1.1] tracking-tight text-white mb-6"
        >
          Sua Marca
          <br />
          <span className="relative inline-block group cursor-default">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:from-blue-300 group-hover:to-blue-500 group-hover:drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500">
              Elevada.
            </span>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ 
                x: ["-100%", "200%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut"
              }}
              className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full pointer-events-none"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4"
        >
          Estratégia, design e conteúdo de alto impacto para marcas que buscam
          <br className="hidden md:block" /> excelência nas redes sociais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[280px] sm:max-w-none"
        >
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            className="relative group flex items-center justify-center gap-2 px-8 py-4 bg-primary/20 border border-primary/50 text-white font-bold rounded-xl hover:bg-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
            <span className="relative flex items-center gap-2">
              Iniciar Projeto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-border/50 text-foreground font-bold rounded-xl hover:bg-white/5 transition-all duration-300"
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
        className="relative md:absolute md:bottom-0 w-full border-t border-primary/20 bg-background/80 backdrop-blur-md"
      >
        {/* Subtle glow on the top edge */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        <div className="container mx-auto px-0 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "150+", label: "CLIENTES ATIVOS" },
              { value: "2M+", label: "ALCANCE MENSAL" },
              { value: "500+", label: "PROJETOS ENTREGUES" },
              { value: "98%", label: "SATISFAÇÃO" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`
                  text-center py-8 md:py-10 px-4
                  ${i % 2 === 0 ? "border-r" : ""} 
                  ${i < 2 ? "border-b" : ""}
                  md:border-b-0 md:border-r md:last:border-r-0
                  border-primary/10
                `}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

export default Hero;
