import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src={logo} alt="Visual Agência" className="h-8 w-auto opacity-60" />

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
            <Instagram size={18} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>

        <span className="font-body text-xs text-muted-foreground tracking-wide">
          © 2026 Visual Agência. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
