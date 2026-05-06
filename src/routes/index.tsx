import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Flame, Wind, Shield, Star, Phone } from "lucide-react";
import heroImg from "@/assets/hero-welding.jpg";
import gasImg from "@/assets/gas-cylinders.jpg";
import equipImg from "@/assets/welding-equipment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LE.DI.CA. Gas Tecnici Srl — Saldatura TIG MIG PLASMA Rozzano" },
      { name: "description", content: "Forniture professionali per saldatura e gas tecnici a Rozzano (MI). Tutto per TIG, MIG, PLASMA." },
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
          <img src={heroImg} alt="Saldatura TIG con scintille" width={1920} height={1280} className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-display tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Rozzano · Milano · Dal 1985
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              Tutto per la <br />
              <span className="text-gradient-arc">saldatura</span> <br />
              <span className="text-muted-foreground">TIG · MIG · PLASMA</span>
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl">
              Gas tecnici, attrezzature e consumabili professionali. Quattro decenni al fianco di carpenterie, officine e maker di tutta la Lombardia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/prodotti" className="inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc hover:scale-[1.02] transition-transform">
                Catalogo Prodotti <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+390289202078" className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/40 px-7 py-4 font-display tracking-widest backdrop-blur hover:border-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" /> 02 8920 2078
              </a>
            </div>
          </div>
        </div>
        {/* stats strip */}
        <div className="relative border-y border-border bg-card/60 backdrop-blur">
          <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { k: "40+", v: "Anni di attività" },
              { k: "5.0", v: "Recensioni Google" },
              { k: "3", v: "Tecnologie · TIG MIG Plasma" },
              { k: "1k+", v: "Articoli a stock" },
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
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tre tecnologie. <br />Una sola eccellenza.</h2>
          </div>
          <Link to="/servizi" className="font-display text-sm tracking-widest text-primary hover:underline">
            Tutti i servizi →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Saldatura TIG", desc: "Precisione assoluta su acciaio inox, alluminio e leghe speciali. Gas argon di altissima purezza." },
            { icon: Flame, title: "Saldatura MIG", desc: "Produttività e resa per carpenteria pesante. Filo, miscele Ar/CO₂ e torce di ogni marca." },
            { icon: Wind, title: "Taglio PLASMA", desc: "Tagli netti su lamiere fino a forti spessori. Consolle, consumabili originali e assistenza." },
          ].map((s, i) => (
            <div key={s.title} className="group relative rounded-sm border border-border bg-card p-8 hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 px-3 py-1 bg-gradient-arc text-primary-foreground text-xs font-display tracking-widest">
                0{i + 1}
              </div>
              <s.icon className="mt-6 h-10 w-10 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT FEATURE */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={gasImg} alt="Bombole gas tecnici" loading="lazy" width={1600} height={1000} className="rounded-sm" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-ember p-6 rounded-sm shadow-ember max-w-xs">
              <div className="font-display text-3xl text-accent-foreground">Argon · CO₂ · He</div>
              <div className="text-xs uppercase tracking-widest text-accent-foreground/80 mt-1">Miscele su misura</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ GAS TECNICI</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Bombole <br />sempre <span className="text-gradient-arc">pronte</span>.</h2>
            <p className="mt-6 text-muted-foreground">
              Argon puro, CO₂, miscele binarie e ternarie, elio, azoto e ossigeno. Ricarica veloce, scambio bombola immediato e consegne dirette in officina nel raggio di 30 km da Rozzano.
            </p>
            <ul className="mt-8 space-y-3">
              {["Argon 5.0 per TIG di precisione", "Miscele Ar/CO₂ per MIG", "Aria compressa per PLASMA", "Servizio scambio bombola"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm">
                  <Shield className="h-4 w-4 text-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ ATTREZZATURE</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Macchine, torce, <br />consumabili.</h2>
          <p className="mt-6 text-muted-foreground">
            Selezioniamo i migliori brand del settore: generatori inverter, torce TIG/MIG, maschere autoscuranti, dispositivi di protezione. Tutto pronto a magazzino o in 24/48h.
          </p>
          <Link to="/prodotti" className="mt-8 inline-flex items-center gap-2 font-display tracking-widest text-primary">
            Sfoglia il catalogo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <img src={equipImg} alt="Saldatrice MIG professionale" loading="lazy" width={1600} height={1000} className="order-1 md:order-2 rounded-sm border border-border" />
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-accent text-accent" />
          ))}
        </div>
        <blockquote className="font-display text-2xl md:text-4xl leading-snug">
          "Equipment is good — really professional service."
        </blockquote>
        <div className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Recensione Google · 5/5</div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-sm border border-border bg-gradient-steel p-12 md:p-20">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative grid md:grid-cols-[2fr_1fr] gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Hai un progetto? <br /><span className="text-gradient-arc">Parliamone.</span></h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Vieni a trovarci in Viale Toscana 46/10 a Rozzano oppure chiamaci. Ti consigliamo gas, attrezzatura e consumabili giusti per il tuo lavoro.
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
