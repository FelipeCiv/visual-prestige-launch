import ScrollReveal from "./ScrollReveal";
import cafeAurora from "@/assets/portfolio/cafe-aurora.jpg";
import fitnessPro from "@/assets/portfolio/fitness-pro.jpg";
import beautyStudio from "@/assets/portfolio/beauty-studio.jpg";
import techSolutions from "@/assets/portfolio/tech-solutions.jpg";
import restauranteSabor from "@/assets/portfolio/restaurante-sabor.jpg";
import fashionBrand from "@/assets/portfolio/fashion-brand.jpg";

const projects = [
  { title: "Café Aurora", category: "Branding & Social Media", image: cafeAurora },
  { title: "Fitness Pro", category: "Instagram Stories", image: fitnessPro },
  { title: "Beauty Studio", category: "Design & Marketing", image: beautyStudio },
  { title: "Tech Solutions", category: "Gestão Completa", image: techSolutions },
  { title: "Restaurante Sabor", category: "Reels & Stories", image: restauranteSabor },
  { title: "Fashion Brand", category: "Social Media Strategy", image: fashionBrand },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <div className="group relative aspect-square overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[10px] font-body tracking-[0.3em] uppercase text-accent">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-light text-foreground mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Hover border accent */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
