export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 border-t border-border gap-4">
      <div className="font-heading font-extrabold text-sm text-foreground">
        BLT<span className="text-accent-purple-light">.</span>
      </div>
      <div className="text-xs text-muted-foreground text-center">
        © 2026 Bruna Liborio Tonon · Founder & Consultora da Descomplica Ops
      </div>
    </footer>
  );
}
