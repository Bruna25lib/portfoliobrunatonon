export default function ContactSection() {
  return (
    <section className="bg-surface border-t border-b border-border" id="contato">
      <div className="max-w-[1100px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="font-heading text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold leading-tight text-foreground mb-5">
            Vamos construir o<br />futuro <span className="bg-gradient-to-br from-accent-purple-light to-accent-cyan bg-clip-text text-transparent">juntos?</span>
          </h2>
          <p className="text-muted-foreground leading-7 mb-8">
            Se você busca alguém que una visão estratégica, tecnologia de ponta e execução com resultado — vamos conversar.
          </p>
          <a
            href="https://www.linkedin.com/in/bruna-liborio-tonon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded bg-accent-purple text-primary-foreground font-heading text-sm font-semibold tracking-[0.1em] uppercase shadow-[0_0_30px_oklch(0.45_0.28_285/40%)] hover:bg-accent-purple-light transition-all no-underline"
          >
            Conectar no LinkedIn →
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { icon: "💼", label: "LinkedIn", val: "Bruna Liborio Tonon", href: "https://www.linkedin.com/in/bruna-liborio-tonon" },
            { icon: "✉️", label: "E-mail", val: "bruna@descomplicaops.com", href: "mailto:bruna@descomplicaops.com" },
            { icon: "📱", label: "WhatsApp", val: "Fale comigo", href: "https://wa.me/5511989320886?text=Gostaria%20de%20contratar%20o%20seu%20servi%C3%A7o!%20" },
            { icon: "🚀", label: "Empresa", val: "Descomplica Ops", href: "#" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 bg-surface2 border border-border rounded-lg no-underline hover:border-accent-purple-light hover:translate-x-1.5 transition-all"
            >
              <div className="text-2xl">{c.icon}</div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.1em]">{c.label}</div>
                <div className="text-sm text-foreground font-medium mt-0.5">{c.val}</div>
              </div>
              <div className="ml-auto text-accent-purple-light text-lg">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
