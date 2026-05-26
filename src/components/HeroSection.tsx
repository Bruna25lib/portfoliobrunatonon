import { motion } from "framer-motion";
import brunaImg from "@/assets/bruna.png";

interface HeroSectionProps {
  onTabChange: (tab: string) => void;
}

export default function HeroSection({ onTabChange }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-16 overflow-hidden">
      {/* BG gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,oklch(0.45_0.28_285/18%),transparent_60%),radial-gradient(ellipse_50%_50%_at_80%_20%,oklch(0.65_0.15_195/10%),transparent_50%),radial-gradient(ellipse_40%_40%_at_60%_80%,oklch(0.6_0.25_295/8%),transparent_50%)]" />
      </div>
      {/* Orbs */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-purple/15 blur-[80px] -top-[10%] -left-[5%] animate-[float_8s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-cyan/10 blur-[80px] top-[60%] -right-[5%] animate-[float_8s_ease-in-out_infinite] pointer-events-none" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Content */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-accent-cyan mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-10 h-px bg-accent-cyan" />
            Founder & Consultora · Engenheira · IA & Automação
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading font-extrabold text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight mb-4"
          >
            <span className="block text-foreground">Bruna</span>
            <span className="block bg-gradient-to-br from-accent-purple-light to-accent-cyan bg-clip-text text-transparent">
              Liborio Tonon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-light text-muted-foreground mb-6 tracking-wide"
          >
            Founder & Consultora da <strong className="text-accent-purple-light font-medium">Descomplica Ops</strong> · Conectando negócios ao futuro com <strong className="text-accent-purple-light font-medium">IA & Automação</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-base leading-7 text-muted-foreground font-light mb-8"
          >
            Engenheira formada pelo Instituto Mauá de Tecnologia, com mais de 5 anos transformando complexidade em resultados escaláveis. A Descomplica Ops gera escalabilidade para operações comerciais e administrativas por meio de IA e automação inteligente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 flex-wrap"
          >
            <button
              onClick={() => onTabChange("eventos")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded bg-accent-purple text-primary-foreground font-heading text-sm font-semibold tracking-[0.1em] uppercase shadow-[0_0_30px_oklch(0.45_0.28_285/40%)] hover:bg-accent-purple-light hover:shadow-[0_0_50px_oklch(0.6_0.25_295/50%)] hover:-translate-y-0.5 transition-all cursor-pointer border-none"
            >
              Ver Eventos →
            </button>
            <a
              href="https://wa.me/5511989320886?text=Gostaria%20de%20contratar%20o%20seu%20servi%C3%A7o!%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded bg-transparent text-foreground font-heading text-sm font-semibold tracking-[0.1em] uppercase border border-border hover:border-accent-purple-light hover:text-accent-purple-light hover:-translate-y-0.5 transition-all no-underline"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex-shrink-0 lg:mr-48 xl:mr-56"
        >
          <div className="relative w-[280px] h-[350px] md:w-[340px] md:h-[430px] rounded-lg overflow-hidden border border-border">
            <img
              src={brunaImg}
              alt="Bruna Liborio Tonon"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-accent-purple-light" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-accent-purple-light" />
        </motion.div>
      </div>

      {/* Stats strip - desktop */}
      <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-8 animate-[fadeUp_1s_0.5s_ease_both]">
        {[
          { num: "5", suffix: "+", label: "Anos de Exp." },
          { num: "30", suffix: "+", label: "Projetos Entregues" },
          { num: "60", suffix: "+", label: "Consultorias Aplicadas" },
        ].map((s) => (
          <div key={s.label} className="text-right border-r-2 border-accent-purple-light pr-6">
            <div className="font-heading text-[2.5rem] font-extrabold text-foreground leading-none">
              {s.num}<span className="text-accent-purple-light">{s.suffix}</span>
            </div>
            <div className="text-xs text-muted-foreground tracking-[0.1em] uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-[fadeUp_1.5s_1s_ease_both]">
        <div className="w-px h-12 bg-gradient-to-b from-accent-purple-light to-transparent animate-[scrollPulse_2s_ease_infinite]" />
        <span className="text-[0.7rem] tracking-[0.15em] uppercase">scroll</span>
      </div>
    </section>
  );
}
