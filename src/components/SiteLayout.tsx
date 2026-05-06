import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Zap, MessageCircle } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/azienda", label: "Azienda" },
  { to: "/impianti", label: "Impianti" },
  { to: "/lavorazioni", label: "Lavorazioni" },
  { to: "/progetti", label: "Progetti" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-10 rounded-sm bg-gradient-arc grid place-items-center shadow-arc">
            <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-sm bg-gradient-arc opacity-50 blur-md animate-arc -z-10" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider">LE.DI.CA.</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Automatic Welding</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
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
        <Link
          to="/contatti"
          className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-5 py-2.5 text-sm font-display tracking-wider text-primary-foreground shadow-arc hover:scale-105 transition-transform"
        >
          Richiedi preventivo
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display tracking-widest text-base">
              {n.label}
            </Link>
          ))}
          <Link to="/contatti" onClick={() => setOpen(false)} className="mt-2 rounded-sm bg-gradient-arc px-5 py-3 text-center font-display tracking-widest text-sm text-primary-foreground">
            Richiedi preventivo
          </Link>
        </div>
      )}
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/390289202078"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-2xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline font-display text-sm tracking-wider">WhatsApp</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-wider">LE.DI.CA. <span className="text-primary">Srl</span></div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Tube and Pipe Automatic Welding Systems. Progettiamo e costruiamo impianti di saldatura per acciaio dal 1989.
          </p>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest mb-4">Contatti</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Viale Toscana 46/10, 20089 Rozzano (MI)</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> <a href="tel:+390289202078" className="hover:text-foreground">+39 02 8920 2078</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> <a href="mailto:info@ledica.it" className="hover:text-foreground">info@ledica.it</a></li>
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
        © {new Date().getFullYear()} LE.DI.CA. Srl — Automatic Welding Systems · P.IVA Rozzano (MI)
      </div>
    </footer>
  );
}
