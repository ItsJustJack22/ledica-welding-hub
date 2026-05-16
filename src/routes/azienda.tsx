import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import progettiImg from "@/assets/progetti-tubi.jpg";

export const Route = createFileRoute("/azienda")({
  head: () => ({
    meta: [
      { title: "Azienda — LE.DI.CA. Srl | Storia dal 1989" },
      { name: "description", content: "LE.DI.CA. Srl: dal 1989 progettiamo impianti di saldatura automatica per tubi in acciaio. Oltre 500 installazioni nel mondo." },
      { property: "og:title", content: "Azienda — LE.DI.CA. Srl" },
      { property: "og:description", content: "La storia di LE.DI.CA., punto di riferimento mondiale per la saldatura automatica di tubi in acciaio." },
      { property: "og:url", content: "https://ledica-sparkle-site.lovable.app/azienda" },
    ],
    links: [{ rel: "canonical", href: "https://ledica-sparkle-site.lovable.app/azienda" }],
  }),
  component: Azienda,
});

const valori = [
  { v: "100", t: "Passione" },
  { v: "95", t: "Problem solving" },
  { v: "90", t: "Esperienza" },
  { v: "90", t: "Competenza" },
  { v: "85", t: "Innovazione" },
];

const numeri = [
  { k: "500+", v: "Impianti installati" },
  { k: "30+", v: "Paesi nel mondo" },
  { k: "1989", v: "Anno di fondazione" },
  { k: "100+", v: "Collaborazioni attive" },
];

function Azienda() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ LA NOSTRA STORIA</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Dal 1989 <br />
              <span className="text-gradient-arc">scriviamo</span> <br />
              il futuro della saldatura.
            </h1>
          </div>
          <div className="text-muted-foreground text-lg space-y-4">
            <p>
              LE.DI.CA. Srl Automatic Welding Systems nasce nel 1989 dall'intuizione di <strong className="text-foreground">Leone Francesco</strong>, attivo nel settore della saldatura tubi in acciaio inox dal 1967.
            </p>
            <p>
              Trentacinque anni dopo, l'azienda è presente nel mondo con oltre <strong className="text-foreground">500 impianti installati</strong>, scelta dalle più importanti multinazionali dell'acciaio.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img src={progettiImg} alt="Tubi inox" loading="lazy" width={1600} height={1100} className="rounded-sm border border-border" />
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ I NOSTRI CLIENTI</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Un network <br />internazionale.</h2>
            <p className="mt-6 text-muted-foreground">
              Tra i nostri clienti figurano alcune delle più note multinazionali dell'acciaio:
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-border border border-border">
              {["OUTOKUMPU", "MARCEGAGLIA", "THYSSENKRUPP", "HU-STEEL"].map((b) => (
                <div key={b} className="bg-background py-6 text-center font-display tracking-widest text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ I NUMERI</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Risultati misurabili.</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {numeri.map((n) => (
              <div key={n.v} className="bg-card p-8">
                <div className="font-display text-5xl text-gradient-arc">{n.k}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{n.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-xs font-display tracking-[0.3em] text-accent">/ I NOSTRI VALORI</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Cosa ci muove ogni giorno.</h2>
        <div className="mt-12 space-y-6 max-w-3xl">
          {valori.map((v) => (
            <div key={v.t}>
              <div className="flex justify-between font-display tracking-widest text-sm mb-2">
                <span>{v.t}</span>
                <span className="text-primary">{v.v}%</span>
              </div>
              <div className="h-2 bg-card rounded-sm overflow-hidden">
                <div className="h-full bg-gradient-arc" style={{ width: `${v.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">Vuoi <span className="text-gradient-arc">collaborare</span> con noi?</h2>
        <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
          Contattaci <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
