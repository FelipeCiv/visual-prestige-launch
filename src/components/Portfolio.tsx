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
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-white mb-6 backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full -translate-x-[150%] animate-[shimmer_2.5s_infinite]" />
              Resultados Práticos
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
              Portfólio Selecionado
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <div className="group relative aspect-[4/5] sm:aspect-square overflow-hidden cursor-pointer rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/30 to-transparent" />

                {/* Text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-bold font-body uppercase text-primary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Hover border accent & glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
