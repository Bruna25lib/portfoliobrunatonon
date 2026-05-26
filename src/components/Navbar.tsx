interface NavbarProps {
  onTabChange: (tab: string) => void;
}

export default function Navbar({ onTabChange }: NavbarProps) {
  const links = [
    { label: "Sobre", tab: "sobre" },
    { label: "Trajetória", tab: "trajetoria" },
    { label: "Projetos", tab: "projetos" },
    { label: "Eventos", tab: "eventos" },
    { label: "Formação", tab: "formacao" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-background/75 backdrop-blur-xl border-b border-border">
      <div className="font-heading font-extrabold text-lg tracking-wider text-foreground">
        BLT<span className="text-accent-purple-light">.</span>
      </div>
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.tab}>
            <button
              onClick={() => onTabChange(l.tab)}
              className="text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors relative group bg-transparent border-none cursor-pointer"
            >
              {l.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-px bg-accent-purple-light group-hover:w-full transition-all duration-300" />
            </button>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="text-xs font-medium tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
