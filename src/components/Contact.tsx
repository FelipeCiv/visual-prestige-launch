import { Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow for aesthetics */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-white mb-6 backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full -translate-x-[150%] animate-[shimmer_2.5s_infinite]" />
              Contato
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-white max-w-4xl mx-auto leading-tight">
              Vamos criar algo <span className="text-primary">extraordinário.</span>
            </h2>
            <p className="mt-6 text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
              Entre em contato e descubra como elevar sua marca a um novo patamar digital.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-center h-full space-y-12 lg:pl-10">
              <div className="space-y-8">

                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1120] border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <Phone size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-body text-muted-foreground font-medium group-hover:text-white transition-colors">
                    (11) 98374-2911
                  </span>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1120] border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <MapPin size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-body text-muted-foreground font-medium group-hover:text-white transition-colors">
                    São Paulo, Brasil
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-4">
                {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-2xl bg-[#0B1120] border border-border flex items-center justify-center hover:bg-primary hover:border-primary text-muted-foreground hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: WhatsApp CTA */}
          <ScrollReveal delay={0.2}>
            <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-12 shadow-2xl group hover:border-[#25D366]/30 transition-colors duration-500 flex flex-col items-center justify-center text-center h-full min-h-[350px]">
              {/* Subtle pulsing glow */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-6 w-full">
                <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageCircle size={36} />
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Fale com a nossa equipe
                </h3>
                
                <p className="text-muted-foreground font-body max-w-sm mx-auto">
                  Tem um projeto em mente? Clique abaixo para conversar diretamente conosco pelo WhatsApp e receber um atendimento rápido.
                </p>

                <div className="pt-6">
                  <a
                    href="https://wa.me/5511983742911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/btn w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all duration-300 overflow-hidden active:scale-[0.98] shadow-[0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
                  >
                    <span className="relative flex items-center gap-3 text-[15px] tracking-wide">
                      Chamar no WhatsApp <MessageCircle size={20} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
