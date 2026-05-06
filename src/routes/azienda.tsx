import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/azienda")({
  head: () => ({
    meta: [
      { title: "Azienda — LE.DI.CA. Gas Tecnici Srl" },
      { name: "description", content: "LE.DI.CA. Gas Tecnici Srl: storia e valori di un punto di riferimento per la saldatura a Rozzano (MI)." },
    ],
  }),
  component: Azienda,
});

function Azienda() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ CHI SIAMO</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
              Una <span className="text-gradient-arc">scintilla</span> di esperienza dal 1985.
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            LE.DI.CA. Gas Tecnici Srl nasce a Rozzano come piccola realtà familiare. Quattro decenni dopo, è il riferimento nella Città Metropolitana di Milano per chi salda, taglia e costruisce con il metallo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-px bg-border">
        {[
          { n: "01", t: "Competenza", d: "Quarant'anni di confronto quotidiano con saldatori, carpentieri e tecnici della manutenzione." },
          { n: "02", t: "Selezione", d: "Solo brand affidabili, gas certificati e consumabili originali. Niente compromessi." },
          { n: "03", t: "Servizio", d: "Consigli rapidi, scambio bombola immediato, consegna locale. Lavoriamo come voi: senza tempi morti." },
        ].map((v) => (
          <div key={v.n} className="bg-background p-10">
            <div className="font-display text-5xl text-gradient-arc">{v.n}</div>
            <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl">"Tutto per la saldatura <span className="text-gradient-arc">TIG MIG PLASMA</span>"</h2>
        <p className="mt-6 text-muted-foreground">
          Un motto, una promessa. La nostra missione è semplice: mettere a tua disposizione ogni risorsa per saldare meglio, più velocemente e in sicurezza.
        </p>
      </section>
    </>
  );
}
