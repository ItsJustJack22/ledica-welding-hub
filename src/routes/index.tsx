import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Cog, Cpu, Award, Globe2, Wrench, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-impianto.jpg";
import torciaImg from "@/assets/torcia-tig.jpg";
import laserImg from "@/assets/laser-fibra.jpg";
import progettiImg from "@/assets/progetti-tubi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LE.DI.CA. — Impianti saldatura tubi acciaio" },
      { name: "description", content: "Progettiamo impianti di saldatura TIG, Plasma e Laser per tubi in acciaio. 500+ installazioni nel mondo dal 1989." },
      { property: "og:title", content: "LE.DI.CA. Srl — Tube & Pipe Automatic Welding Systems" },
      { property: "og:description", content: "Impianti di saldatura automatica per acciaio. 500+ installazioni nel mondo." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "https://ledica-sparkle-site.lovable.app/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://ledica-sparkle-site.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Impianto di saldatura automatica per tubi" width={1920} height={1280} fetchPriority="high" decoding="async" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-display tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Tube & Pipe Automatic Welding · Since 1989
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92]">
              Impianti di <span className="text-gradient-arc">saldatura</span> <br />
              per l'<span className="text-muted-foreground">acciaio.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl">
              Progettiamo e costruiamo impianti automatici TIG, Plasma e Laser su misura per le più importanti acciaierie del mondo. Produttività fino al +50%.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contatti" className="inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc hover:scale-[1.02] transition-transform">
                Richiedi un preventivo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/impianti" className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/40 px-7 py-4 font-display tracking-widest backdrop-blur hover:border-accent transition-colors">
                Scopri gli impianti
              </Link>
            </div>
          </div>
        </div>
        <div className="relative border-y border-border bg-card/60 backdrop-blur">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { k: "500+", v: "Impianti installati" },
              { k: "35+", v: "Anni di esperienza" },
              { k: "+50%", v: "Produttività TIG" },
              { k: "30+", v: "Paesi nel mondo" },
            ].map((s) => (
              <div key={s.v} className="px-6 py-8">
                <div className="font-display text-4xl text-gradient-arc">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ COSA FACCIAMO</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tre tecnologie. <br />Un solo standard.</h2>
          </div>
          <Link to="/impianti" className="font-display text-sm tracking-widest text-primary hover:underline">
            Tutti gli impianti →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Saldatura TIG", desc: "Impianti mono e multicatodo per saldature di precisione su acciaio inox, leghe e materiali speciali." , slug: "tig" },
            { icon: Cog, title: "Saldatura Plasma", desc: "Sistemi Plasma + TIG ad altissima penetrazione per spessori importanti e cicli produttivi spinti.", slug: "plasma" },
            { icon: Cpu, title: "Laser Fibra", desc: "Saldatura laser fibra con filo continuo: velocità e qualità mai viste prima nella produzione di tubi.", slug: "laser" },
          ].map((s, i) => (
            <Link
              key={s.title}
              to="/impianti/$slug"
              params={{ slug: s.slug }}
              className="group relative rounded-sm border border-border bg-card p-8 hover:border-primary transition-all hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 px-3 py-1 bg-gradient-arc text-primary-foreground text-xs font-display tracking-widest">
                0{i + 1}
              </div>
              <s.icon className="mt-6 h-10 w-10 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-display tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Scopri <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VANTAGGI */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={torciaImg} alt="Torcia TIG impianto LE.DI.CA." loading="lazy" width={1600} height={1100} className="rounded-sm" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-ember p-6 rounded-sm shadow-ember max-w-xs">
              <div className="font-display text-3xl text-accent-foreground">+50%</div>
              <div className="text-xs uppercase tracking-widest text-accent-foreground/80 mt-1">Produttività TIG (0,8 – 3 mm)</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ PERCHÉ SCEGLIERCI</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Ingegneria <span className="text-gradient-arc">italiana</span><br />su misura.</h2>
            <p className="mt-6 text-muted-foreground">
              Ogni impianto LE.DI.CA. è progettato attorno alle esigenze produttive del cliente. Soluzioni custom, ricambi originali, assistenza in tutto il mondo.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { i: Award, t: "Made in Italy" },
                { i: Cog, t: "Personalizzazione totale" },
                { i: Globe2, t: "Service worldwide" },
                { i: ShieldCheck, t: "Affidabilità certificata" },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-3 text-sm">
                  <b.i className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-display tracking-wider">{b.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGETTI */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ PROGETTI</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Al fianco delle <br />grandi <span className="text-gradient-arc">acciaierie</span>.</h2>
            <p className="mt-6 text-muted-foreground">
              Outokumpu, Marcegaglia, ThyssenKrupp, Hu-Steel: i nostri impianti lavorano nelle linee di produzione delle più importanti realtà internazionali del settore.
            </p>
            <Link to="/progetti" className="mt-8 inline-flex items-center gap-2 font-display tracking-widest text-primary">
              Storie di successo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={progettiImg} alt="Tubi in acciaio inox saldati" loading="lazy" width={1600} height={1100} className="order-1 md:order-2 rounded-sm border border-border" />
        </div>
      </section>

      {/* LASER NEW */}
      <section className="relative overflow-hidden">
        <img src={laserImg} alt="Saldatura laser fibra" loading="lazy" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <div className="inline-block px-3 py-1 bg-gradient-ember text-accent-foreground text-xs font-display tracking-widest mb-6">
            NOVITÀ
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Saldatrice <span className="text-gradient-arc">Laser Fibra</span><br /> con filo continuo.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Velocità e precisione mai viste prima. Una nuova tecnologia di saldatura marchiata LE.DI.CA. per portare la tua produzione al livello successivo.
          </p>
          <Link to="/impianti/$slug" params={{ slug: "laser" }} className="mt-10 inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
            Scopri di più <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-sm border border-border bg-gradient-steel p-12 md:p-20">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative grid md:grid-cols-[2fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Hai un progetto? <br /><span className="text-gradient-arc">Parliamone.</span></h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Raccontaci la tua linea produttiva: ti proporremo l'impianto su misura per ottenere la massima qualità di saldatura.
              </p>
            </div>
            <div className="flex md:flex-col gap-4">
              <Link to="/contatti" className="flex-1 text-center rounded-sm bg-gradient-arc px-6 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
                Contattaci
              </Link>
              <a href="tel:+390289202078" className="flex-1 text-center rounded-sm border border-border bg-background/40 px-6 py-4 font-display tracking-widest hover:border-accent">
                Chiama ora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
