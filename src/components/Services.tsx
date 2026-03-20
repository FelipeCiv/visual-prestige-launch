import { Instagram, Palette, BarChart3, Megaphone, Camera, PenTool } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Instagram,
    title: "Social Media",
    desc: "Gestão completa de redes sociais com conteúdo estratégico que gera engajamento e resultados reais.",
  },
  {
    icon: Palette,
    title: "Design Gráfico",
    desc: "Peças visuais impactantes — desde identidade visual até materiais promocionais de alto padrão.",
  },
  {
    icon: Camera,
    title: "Stories & Reels",
    desc: "Criação de stories e reels envolventes que capturam a atenção e fortalecem a narrativa da marca.",
  },
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    desc: "Campanhas otimizadas em Meta Ads e Google Ads para maximizar o retorno do seu investimento.",
  },
  {
    icon: Megaphone,
    title: "Branding",
    desc: "Posicionamento de marca estratégico que diferencia seu negócio no mercado digital.",
  },
  {
    icon: PenTool,
    title: "Criação de Conteúdo",
    desc: "Produção de conteúdo autêntico e relevante, alinhado à identidade e objetivos da sua marca.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              O que fazemos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4 text-gradient">
              Serviços Exclusivos
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500 h-full">
                <service.icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-accent mb-6 group-hover:text-foreground transition-colors duration-500"
                />
                <h3 className="font-display text-2xl font-light text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
