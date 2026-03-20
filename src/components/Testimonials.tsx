import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Marina Costa",
    role: "CEO — Café Aurora",
    quote:
      "A Visual Agência transformou completamente nossa presença digital. Em 6 meses, triplicamos nosso engajamento e nossas vendas pelo Instagram aumentaram 200%. Uma parceria de altíssimo nível.",
    initials: "MC",
  },
  {
    name: "Rafael Mendes",
    role: "Diretor — Fitness Pro",
    quote:
      "Profissionalismo e criatividade em outro patamar. Os stories e reels que produzem geram um engajamento absurdo. Nosso perfil saiu de 2k para 18k seguidores em 4 meses.",
    initials: "RM",
  },
  {
    name: "Camila Ferreira",
    role: "Fundadora — Beauty Studio",
    quote:
      "Desde que começamos com a Visual, nosso faturamento mensal cresceu 150%. Eles entendem exatamente a linguagem visual que nosso público precisa. Recomendo de olhos fechados.",
    initials: "CF",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
              Depoimentos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-4 text-gradient">
              O Que Nossos Clientes Dizem
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="relative border border-border bg-card p-8 md:p-10 h-full flex flex-col hover:border-accent/40 transition-all duration-500">
                {/* Quote mark */}
                <span className="absolute top-6 right-8 font-display text-6xl leading-none text-accent/20 select-none">
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-sm leading-relaxed text-muted-foreground flex-1 mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-xs font-body font-medium text-accent tracking-wide">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
