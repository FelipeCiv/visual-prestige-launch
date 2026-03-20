import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "150+", label: "Projetos entregues" },
  { value: "4 anos", label: "De experiência" },
  { value: "98%", label: "Clientes satisfeitos" },
];

const About = () => {
  return (
    <section id="sobre" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-xs font-body tracking-[0.4em] uppercase text-muted-foreground">
                Quem somos
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light mt-4 mb-8 text-gradient">
                Excelência em cada
                <br />
                detalhe visual
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                A Visual Agência nasceu da paixão por criar experiências digitais que
                transcendem o comum. Combinamos estratégia, criatividade e dados para
                construir presenças digitais que geram impacto real.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Cada projeto é tratado com a exclusividade que merece — porque acreditamos
                que marcas extraordinárias merecem um trabalho à altura.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 gap-px bg-border">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background p-8 flex items-center gap-8">
                  <span className="font-display text-4xl md:text-5xl font-light text-foreground">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
