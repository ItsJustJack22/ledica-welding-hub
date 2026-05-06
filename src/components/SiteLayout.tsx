import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Flame } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/prodotti", label: "Prodotti" },
  { to: "/azienda", label: "Azienda" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-sm bg-gradient-arc grid place-items-center shadow-arc">
            <Flame className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-sm bg-gradient-arc opacity-50 blur-md animate-arc -z-10" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">LE.DI.CA.</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Gas Tecnici Srl</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground border-b-2 border-primary pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+390289202078"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-gradient-ember px-5 py-2.5 text-sm font-display tracking-wider text-accent-foreground shadow-ember hover:scale-105 transition-transform"
        >
          <Phone className="h-4 w-4" /> 02 8920 2078
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display tracking-widest text-sm">
              {n.label}
            </Link>
          ))}
          <a href="tel:+390289202078" className="font-display tracking-widest text-sm text-accent">
            02 8920 2078
          </a>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-wider">LE.DI.CA. <span className="text-primary">Gas Tecnici</span></div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Tutto per la saldatura TIG, MIG e PLASMA. Forniture professionali e gas tecnici a Rozzano dal cuore della Città Metropolitana di Milano.
          </p>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest mb-4">Contatti</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Viale Toscana 46/10, 20089 Rozzano MI</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> 02 8920 2078</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> Lun–Ven 08:00 – 18:00</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest mb-4">Esplora</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} LE.DI.CA. Gas Tecnici Srl — P.IVA Rozzano (MI)
      </div>
    </footer>
  );
}
