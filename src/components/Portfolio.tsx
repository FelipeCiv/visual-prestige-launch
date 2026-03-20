import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "Lux Cosméticos", category: "Social Media & Branding", metric: "+340% engajamento" },
  { title: "Estúdio Noir", category: "Identidade Visual", metric: "12k seguidores em 3 meses" },
  { title: "Vértice Arquitetura", category: "Tráfego Pago & Conteúdo", metric: "R$ 2.8M em leads" },
  { title: "Maison Gastrô", category: "Stories & Reels", metric: "+520% alcance orgânico" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              Resultados
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4 text-gradient">
              Portfólio Selecionado
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="group relative border border-border p-10 md:p-14 hover:border-accent/40 transition-all duration-500 glow-navy overflow-hidden">
                <div className="absolute top-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-700" />
                
                <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-accent" />
                  <span className="font-body text-sm text-accent font-medium">
                    {project.metric}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
