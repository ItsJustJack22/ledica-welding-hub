import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prodotti")({
  head: () => ({
    meta: [
      { title: "Prodotti — LE.DI.CA. Gas Tecnici" },
      { name: "description", content: "Catalogo: gas tecnici, saldatrici TIG MIG, plasma, torce, fili, elettrodi e DPI." },
    ],
  }),
  component: Prodotti,
});

const categories = [
  {
    title: "Gas Tecnici",
    items: ["Argon puro 5.0", "Anidride carbonica CO₂", "Miscele Ar/CO₂", "Elio · Azoto · Ossigeno", "Aria compressa per plasma"],
  },
  {
    title: "Saldatrici",
    items: ["Generatori TIG inverter", "Saldatrici MIG/MAG", "Consolle al plasma", "Multi-process", "Trainafilo"],
  },
  {
    title: "Torce & Accessori",
    items: ["Torce TIG raffreddate", "Torce MIG ricambi", "Elettrodi tungsteno", "Ugelli e diffusori", "Cavi e attacchi"],
  },
  {
    title: "Materiali d'apporto",
    items: ["Filo MIG acciaio", "Filo inox/alluminio", "Bacchette TIG", "Elettrodi rivestiti", "Fili animati"],
  },
  {
    title: "Protezione DPI",
    items: ["Maschere autoscuranti", "Guanti saldatore", "Giacche e grembiuli", "Occhiali protettivi", "Aspiratori fumi"],
  },
  {
    title: "Consumabili Plasma",
    items: ["Elettrodi originali", "Ugelli", "Cappucci protezione", "Diffusori swirl", "Kit ricambi"],
  },
];

function Prodotti() {
  return (
    <>
      <section className="border-b border-border bg-gradient-steel">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ CATALOGO</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            Oltre <span className="text-gradient-arc">1.000 articoli</span> per ogni saldatura.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-background p-8 hover:bg-card transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-gradient-arc" />
              <h3 className="font-display text-2xl">{cat.title}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {cat.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-sm text-muted-foreground border-b border-border/50 pb-3">
                  <span className="text-accent font-display text-xs">→</span> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <p className="text-muted-foreground">
          Non trovi quello che cerchi? Contattaci: gestiamo richieste su misura e ordini speciali.
        </p>
      </section>
    </>
  );
}
