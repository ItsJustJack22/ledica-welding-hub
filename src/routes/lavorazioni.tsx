import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Settings, Truck, RefreshCcw, Headphones, FileSearch } from "lucide-react";

export const Route = createFileRoute("/lavorazioni")({
  head: () => ({
    meta: [
      { title: "Lavorazioni — LE.DI.CA. Srl" },
      { name: "description", content: "Progettazione, costruzione, installazione e assistenza di impianti di saldatura per acciaio. Servizio completo dal concept al post-vendita." },
      { property: "og:title", content: "Lavorazioni — LE.DI.CA." },
      { property: "og:description", content: "Dalla progettazione al service: il ciclo completo di lavorazione LE.DI.CA." },
      { property: "og:url", content: "https://ledica-sparkle-site.lovable.app/lavorazioni" },
    ],
    links: [{ rel: "canonical", href: "https://ledica-sparkle-site.lovable.app/lavorazioni" }],
  }),
  component: Lavorazioni,
});

const fasi = [
  { icon: FileSearch, title: "Analisi & Studio", text: "Studiamo insieme al cliente la linea produttiva, i materiali, gli spessori e gli obiettivi di produttività per definire la soluzione ottimale." },
  { icon: Settings, title: "Progettazione", text: "Il nostro ufficio tecnico progetta l'impianto su misura: meccanica, elettrica, software di controllo. Tutto disegnato in casa." },
  { icon: Hammer, title: "Costruzione", text: "Costruiamo internamente le componenti chiave: torce, cofani di comando, parti meccaniche di precisione. Made in Italy al 100%." },
  { icon: Truck, title: "Installazione", text: "I nostri tecnici si recano sul posto, in qualunque parte del mondo, per installare e collaudare l'impianto direttamente nello stabilimento del cliente." },
  { icon: Headphones, title: "Formazione", text: "Formiamo gli operatori del cliente all'uso dell'impianto: parametri di processo, manutenzione ordinaria, ottimizzazione produttiva." },
  { icon: RefreshCcw, title: "Service & Ricambi", text: "Garantiamo assistenza post-vendita, ricambi originali e teleassistenza per tutta la vita dell'impianto. Anche su impianti datati." },
];

function Lavorazioni() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ COSA FACCIAMO</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            Dalla <span className="text-gradient-arc">prima idea</span> al collaudo finale.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Non vendiamo solo macchine: ti accompagniamo in ogni fase del progetto. Sei sicuro che la tua linea produttiva sia pronta per fare il salto di qualità?
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {fasi.map((f, i) => (
            <div key={f.title} className="bg-background p-8 hover:bg-card transition-colors">
              <div className="flex items-start justify-between">
                <f.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                <span className="font-display text-xs tracking-widest text-muted-foreground">FASE 0{i + 1}</span>
              </div>
              <h2 className="mt-6 font-display text-2xl">{f.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-sm border border-border bg-gradient-steel p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Pronti a <span className="text-gradient-arc">iniziare</span>?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Raccontaci il tuo progetto: ti risponderemo in 24 ore.
          </p>
          <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
            Richiedi un preventivo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
