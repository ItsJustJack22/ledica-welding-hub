import { createFileRoute } from "@tanstack/react-router";
import { Zap, Flame, Wind, Wrench, Truck, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — LE.DI.CA. Gas Tecnici" },
      { name: "description", content: "Servizi di fornitura per saldatura TIG, MIG, PLASMA. Consulenza tecnica, scambio bombole e consegne in zona Milano." },
    ],
  }),
  component: Servizi,
});

const services = [
  { icon: Zap, title: "Saldatura TIG", text: "Soluzioni complete per saldature di precisione su inox, alluminio, titanio e leghe speciali. Argon ad altissima purezza, torce e consumabili originali." },
  { icon: Flame, title: "Saldatura MIG/MAG", text: "Tutto per la produttività in carpenteria: fili animati e pieni, miscele Ar/CO₂, generatori inverter e accessori per ogni applicazione." },
  { icon: Wind, title: "Taglio al Plasma", text: "Tagli precisi su lamiere sottili e spessori importanti. Consolle, ricambi originali e aria compressa di qualità." },
  { icon: Wrench, title: "Assistenza tecnica", text: "Riparazione e manutenzione di saldatrici, torce e accessori. Consulenza nella scelta della tecnologia più adatta al tuo lavoro." },
  { icon: Truck, title: "Consegne in zona", text: "Consegna diretta di bombole, attrezzature e consumabili nel raggio di 30 km da Rozzano. Servizio rapido per officine e cantieri." },
  { icon: GraduationCap, title: "Formazione & DPI", text: "Maschere autoscuranti, abbigliamento ignifugo, guanti e occhiali. Consigli pratici per lavorare in sicurezza ogni giorno." },
];

function Servizi() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ I NOSTRI SERVIZI</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            Forniture <span className="text-gradient-arc">complete</span> per il professionista.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Dalla bombola al consumabile, dalla saldatrice al DPI: in LE.DI.CA. trovi tutto ciò che serve per saldare e tagliare con qualità.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="rounded-sm border border-border bg-card p-8 hover:border-primary transition-colors">
            <div className="flex items-start justify-between">
              <s.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
              <span className="font-display text-xs tracking-widest text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
