import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, Cog, Cpu, Layers, Wind, Wrench } from "lucide-react";

export const Route = createFileRoute("/impianti")({
  head: () => ({
    meta: [
      { title: "Impianti di saldatura — LE.DI.CA. Srl" },
      { name: "description", content: "Impianti automatici di saldatura TIG, Plasma, Laser per tubi in acciaio. Cofani di comando, torce multicatodo, accessori." },
      { property: "og:title", content: "Impianti di saldatura — LE.DI.CA." },
      { property: "og:description", content: "TIG, Plasma, Laser: la gamma completa di impianti automatici LE.DI.CA." },
    ],
  }),
  component: ImpiantiLayout,
});

function ImpiantiLayout() {
  const matchRoute = useMatchRoute();
  const isIndex = matchRoute({ to: "/impianti" });
  if (!isIndex) return <Outlet />;
  return <ImpiantiIndex />;
}

export const impianti = [
  { slug: "tig", icon: Zap, title: "Saldatura TIG", short: "Mono e multicatodo per saldature di precisione su tutti gli acciai e leghe speciali." },
  { slug: "plasma", icon: Cog, title: "Plasma + TIG", short: "Combinazioni Plasma-TIG ad alta penetrazione per produttività e qualità." },
  { slug: "laser", icon: Cpu, title: "Laser Fibra", short: "Nuova tecnologia laser fibra con filo continuo: il futuro della saldatura tubi." },
  { slug: "tricatodo", icon: Layers, title: "Sistemi Tricatodo", short: "Torce STX e tricatodo TIG-Plasma-TIG per il massimo della velocità di saldatura." },
  { slug: "cofani", icon: Wrench, title: "Cofani di Comando", short: "Cofani di comando combo PPT-TTT per il controllo completo dell'impianto." },
  { slug: "accessori", icon: Wind, title: "Accessori & Slitte", short: "Gruppi slitta 3 assi, miscelatori gas, oscillatori d'arco magnetici." },
];

function ImpiantiIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ I NOSTRI IMPIANTI</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            La gamma <span className="text-gradient-arc">completa</span> di impianti.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Dalla saldatura TIG mono-torcia ai sistemi tricatodo Plasma-TIG, fino alla nuova tecnologia laser fibra: ogni impianto è progettato e costruito su misura.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impianti.map((s, i) => (
          <Link
            key={s.slug}
            to="/impianti/$slug"
            params={{ slug: s.slug }}
            className="group relative rounded-sm border border-border bg-card p-8 hover:border-primary transition-all hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 px-3 py-1 bg-gradient-arc text-primary-foreground text-xs font-display tracking-widest">
              0{i + 1}
            </div>
            <s.icon className="mt-6 h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-display tracking-widest text-primary">
              Approfondisci <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
