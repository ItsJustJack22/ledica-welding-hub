import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import torciaImg from "@/assets/torcia-tig.jpg";
import laserImg from "@/assets/laser-fibra.jpg";
import cofanoImg from "@/assets/cofano-comando.jpg";
import heroImg from "@/assets/hero-impianto.jpg";
import progettiImg from "@/assets/progetti-tubi.jpg";

export const Route = createFileRoute("/progetti")({
  head: () => ({
    meta: [
      { title: "Progetti realizzati — LE.DI.CA. Srl" },
      { name: "description", content: "500+ impianti di saldatura installati nel mondo. Storie di successo con Outokumpu, Marcegaglia, ThyssenKrupp, Hu-Steel." },
      { property: "og:title", content: "Progetti — LE.DI.CA." },
      { property: "og:description", content: "I nostri impianti al lavoro nelle più importanti acciaierie del mondo." },
      { property: "og:image", content: progettiImg },
      { property: "og:url", content: "https://ledica-sparkle-site.lovable.app/progetti" },
    ],
    links: [{ rel: "canonical", href: "https://ledica-sparkle-site.lovable.app/progetti" }],
  }),
  component: Progetti,
});

const progetti = [
  { title: "Torcia SP3 Plasma + TIG STX 600 Amp", cat: "Plasma TIG", img: heroImg },
  { title: "Cofano comando combo PPT TTT", cat: "Cofani", img: cofanoImg },
  { title: "New Combo System Tricathode TIG-Plasma-TIG", cat: "Tricatodo", img: torciaImg },
  { title: "Saldatrice Laser Fibra con filo continuo", cat: "Laser", img: laserImg },
  { title: "Torcia 1000 Amp TIG", cat: "TIG", img: torciaImg },
  { title: "Impianto Tricatodo Torce STX 600 Amp", cat: "Tricatodo", img: progettiImg },
  { title: "Bicatodo TIG 2 x 600 Amp", cat: "TIG", img: heroImg },
  { title: "Apporto filo su Plasma", cat: "Plasma", img: cofanoImg },
];

function Progetti() {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <img src={progettiImg} alt="" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ STORIE DI SUCCESSO</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            <span className="text-gradient-arc">500+ impianti</span><br /> installati nel mondo.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Una selezione dei progetti più significativi realizzati da LE.DI.CA. per le più importanti realtà internazionali del settore acciaio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progetti.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-sm border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="text-xs font-display tracking-widest text-accent">{p.cat}</div>
                <h2 className="mt-2 font-display text-lg leading-tight">{p.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-sm border border-border bg-gradient-steel p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Il prossimo <span className="text-gradient-arc">progetto</span> potrebbe essere il tuo.</h2>
          <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
            Parlaci della tua idea <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
