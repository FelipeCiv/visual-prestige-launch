import { Instagram, Palette, BarChart3, Megaphone, Camera, PenTool } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Instagram,
    title: "Stories & Reels",
    desc: "Narrativas visuais que capturam a essência da sua marca e convertem audiência em resultados reais.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Design de Alto Padrão",
    desc: "Identidade visual e artes exclusivas que posicionam sua marca no mais alto nível do mercado.",
    number: "02",
  },
  {
    icon: BarChart3,
    title: "Gestão de Redes Sociais",
    desc: "Estratégia editorial completa, com voz, estética e consistência para construir autoridade digital.",
    number: "03",
  },
  {
    icon: Camera,
    title: "Produção Audiovisual",
    desc: "Vídeos e conteúdos cinematográficos que destacam os diferenciais únicos do seu negócio.",
    number: "04",
  },
  {
    icon: Megaphone,
    title: "Tráfego & Performance",
    desc: "Campanhas pagas de alta conversão que ampliam o alcance e trazem clientes qualificados.",
    number: "05",
  },
  {
    icon: PenTool,
    title: "Relatórios & Insights",
    desc: "Inteligência de dados para tomadas de decisão que potencializam seus resultados online.",
    number: "06",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-medium text-muted-foreground mb-6">
              O Que Fazemos
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white max-w-4xl mx-auto leading-tight">
              Soluções que <span className="text-primary">transformam</span> marcas em referências.
            </h2>
            <p className="mt-6 text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
              Da estratégia à execução, cuidamos de cada detalhe para sua presença digital brilhar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="relative bg-[#0B1120] border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(93,135,255,0.1)] transition-all duration-500 h-full overflow-hidden group">
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none transition-colors duration-500 group-hover:text-white/10">
                  {service.number}
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center mb-10">
                  <service.icon size={20} className="text-primary" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed font-medium">
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
