import { 
  Instagram, 
  Camera, 
  Palette, 
  Globe, 
  Film, 
  MonitorPlay, 
  Video, 
  Radio, 
  BarChart3, 
  Rocket, 
  Scissors, 
  Aperture 
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Instagram,
    title: "Social Media",
    desc: "Gestão completa de redes sociais, focada em engajamento, conexão e construção de autoridade digital da sua marca.",
    number: "01",
  },
  {
    icon: Camera,
    title: "Filmmaker e Fotógrafo",
    desc: "Produção de fotos e vídeos de altíssimo padrão, pensados para valorizar a sua imagem e a do seu negócio.",
    number: "02",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Artes visuais e materiais gráficos que transmitem profissionalismo e se destacam em qualquer plataforma.",
    number: "03",
  },
  {
    icon: Globe,
    title: "Criação de Sites e Páginas",
    desc: "Desenvolvimento de sites institucionais e landing pages de vendas otimizadas para a mais alta conversão.",
    number: "04",
  },
  {
    icon: Film,
    title: "Edição de Vídeos",
    desc: "Edições dinâmicas para anúncios, reels, youtube e materiais institucionais, retendo a atenção do seu público.",
    number: "05",
  },
  {
    icon: MonitorPlay,
    title: "Painel de LED",
    desc: "Configuração completa e operação ao vivo de painel de LED para proporcionar experiências visuais imersivas.",
    number: "06",
  },
  {
    icon: Video,
    title: "Câmeras para Eventos",
    desc: "Equipe de operadores de câmera qualificados para captar cada momento e detalhe do seu evento ao vivo.",
    number: "07",
  },
  {
    icon: Radio,
    title: "Transmissão ao Vivo",
    desc: "Streaming profissional (OBS ou vMix) para eventos, palestras e cultos com a máxima estabilidade e qualidade.",
    number: "08",
  },
  {
    icon: BarChart3,
    title: "Gestão de Tráfego",
    desc: "Anúncios e campanhas otimizadas que geram leads qualificados e potencializam suas vendas diárias.",
    number: "09",
  },
  {
    icon: Rocket,
    title: "Estratégia de Lançamentos",
    desc: "Planejamento e estruturação de funis de vendas para lançamentos de produtos ou produtos perpétuos.",
    number: "10",
  },
  {
    icon: Scissors,
    title: "Operação de Cortes (DTV)",
    desc: "Direção de imagem e cortes precisos ao vivo, tornando a sua transmissão extremamente dinâmica e profissional.",
    number: "11",
  },
  {
    icon: Aperture,
    title: "Captação de Eventos",
    desc: "Casamentos, festas de 15, empresariais, shows, corporativos e chá revelação. Registramos o inesquecível.",
    number: "12",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-white mb-6 backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite]" />
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
              <div className="relative bg-[#0B1120]/80 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8 hover:bg-[#0B1120] hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 h-full overflow-hidden group">
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none transition-all duration-500 group-hover:text-primary/10 group-hover:scale-110">
                  {service.number}
                </div>
                
                <div className="relative w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <service.icon size={24} className="text-primary relative z-10" />
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
