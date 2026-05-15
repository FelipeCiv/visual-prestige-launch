import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = ["Serviços", "Portfólio", "Depoimentos", "Contato"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      {/* Subtle glow edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <img src={logo} alt="Visual Agência" className="h-10 w-auto" />

        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-medium font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contato")}
          className="hidden md:block relative group text-sm font-medium font-body px-6 py-2 border border-primary/30 bg-primary/10 rounded-full text-white transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 overflow-hidden active:scale-[0.97]"
        >
          <div className="absolute inset-0 bg-primary/20 blur-md group-hover:bg-primary/40 transition-all duration-500" />
          <span className="relative z-10">Fale Conosco</span>
        </button>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-primary/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.filter(item => item !== "Portfólio").map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
