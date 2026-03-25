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
            <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl group hover:border-primary/30 transition-colors duration-500">
              {/* Subtle pulsing glow */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">NOME COMPLETO</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#151D2C]/80 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">E-MAIL</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#151D2C]/80 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">TELEFONE</label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#151D2C]/80 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-body text-muted-foreground tracking-wider">MENSAGEM</label>
                  <textarea
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#151D2C]/80 border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="relative group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary/20 border border-primary/50 text-white font-bold rounded-xl hover:bg-primary/30 transition-all duration-300 overflow-hidden active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
                    <span className="relative flex items-center gap-3">
                      Enviar Mensagem <Send size={18} className="translate-y-px group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
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
