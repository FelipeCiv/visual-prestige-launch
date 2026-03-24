import { useState } from "react";
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow for aesthetics */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-bold text-muted-foreground mb-6">
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
                    <Mail size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-body text-muted-foreground font-medium group-hover:text-white transition-colors">
                    contato@visualagencia.com.br
                  </span>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1120] border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <Phone size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-body text-muted-foreground font-medium group-hover:text-white transition-colors">
                    (11) 99999-9999
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

          {/* Right Column: Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[#0B1120] border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">NOME COMPLETO</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#151D2C] border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">E-MAIL</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#151D2C] border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">TELEFONE</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#151D2C] border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">MENSAGEM</label>
                  <textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#151D2C] border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 active:scale-[0.98]"
                  >
                    Enviar Mensagem <Send size={18} className="translate-y-px" />
                  </button>
                </div>
                
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
