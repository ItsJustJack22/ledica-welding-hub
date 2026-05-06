import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import torciaImg from "@/assets/torcia-tig.jpg";
import laserImg from "@/assets/laser-fibra.jpg";
import cofanoImg from "@/assets/cofano-comando.jpg";
import heroImg from "@/assets/hero-impianto.jpg";

type Impianto = {
  title: string;
  tagline: string;
  intro: string;
  image: string;
  features: string[];
  applicazioni: string[];
};

const data: Record<string, Impianto> = {
  tig: {
    title: "Saldatura TIG",
    tagline: "Precisione assoluta, ripetibilità industriale.",
    intro: "I nostri impianti TIG sono il cuore della produzione di tubi saldati in acciaio inox e leghe speciali. Soluzioni mono-torcia o multicatodo, completamente automatizzate, con incremento della produttività fino al +50% sugli spessori 0,8 – 3,00 mm.",
    image: torciaImg,
    features: [
      "Torce TIG da 600 a 1000 Amp",
      "Sistemi mono e multi-cathode (bicatodo, tricatodo)",
      "Ripresa interna fino a 65 mm",
      "Oscillatore d'arco magnetico integrato",
      "Apporto filo automatico",
      "Saldatura su acciaio inox, alluminio, leghe speciali",
    ],
    applicazioni: ["Tubificio inox", "Industria alimentare", "Petrolchimico", "Settore farmaceutico"],
  },
  plasma: {
    title: "Plasma + TIG",
    tagline: "Penetrazione profonda, finitura perfetta.",
    intro: "I sistemi combinati Plasma + TIG sono la nostra risposta alle esigenze di alta produttività su spessori importanti. Il plasma garantisce la penetrazione, il TIG la finitura: una combinazione vincente che incrementa la produzione fino al +30% sugli spessori 3 – 12 mm.",
    image: heroImg,
    features: [
      "Torce SP3 Plasma + TIG STX 600-1000 Amp",
      "Sistemi combo Plasma-TIG-TIG",
      "New Combo System Tricathode TIG-Plasma-TIG",
      "Apporto filo automatico su plasma",
      "Cofani di comando dedicati",
      "Saldatura su spessori da 3 a 12 mm",
    ],
    applicazioni: ["Tubi spessi inox", "Carpenteria pesante", "Oil & Gas", "Costruzioni navali"],
  },
  laser: {
    title: "Laser Fibra",
    tagline: "Il futuro della saldatura tubi è qui.",
    intro: "La nuova saldatrice laser fibra con filo continuo marchiata LE.DI.CA. porta velocità e precisione mai viste prima nella produzione di tubi in acciaio. Una tecnologia di nuova generazione, integrata nei nostri impianti automatici.",
    image: laserImg,
    features: [
      "Sorgente laser fibra ad alta potenza",
      "Apporto filo continuo automatico",
      "Velocità di saldatura superiori",
      "Zona termicamente alterata ridotta",
      "Saldatura su materiali sottili e medi",
      "Integrabile in linee esistenti",
    ],
    applicazioni: ["Produzione tubi inox sottili", "Componentistica auto", "Elettrodomestici", "Arredo metallico"],
  },
  tricatodo: {
    title: "Sistemi Tricatodo",
    tagline: "Tre archi. Una sola saldatura.",
    intro: "I sistemi tricatodo LE.DI.CA. utilizzano tre archi simultanei per moltiplicare la velocità di saldatura senza perdere in qualità. Disponibili in versione TIG standard, TIG-Plasma-TIG e con torce STX inclinabili.",
    image: torciaImg,
    features: [
      "Impianto Tricatodo TIG Standard",
      "Torce STX TIG 600 Amp inclinabili",
      "Torcia tricatodo 1° e 3° regolabile",
      "New Combo System Tricathode",
      "Combinazioni TIG-Plasma-TIG / TIG-TIG-TIG",
      "Massima velocità di linea",
    ],
    applicazioni: ["Linee ad alta produzione", "Tubificio industriale", "Acciaierie"],
  },
  cofani: {
    title: "Cofani di Comando",
    tagline: "Il cervello dei nostri impianti.",
    intro: "I cofani di comando combo PPT-TTT sono progettati per il controllo completo degli impianti multicatodo TIG e Plasma. Interfaccia chiara, gestione di tutti i parametri di saldatura, parte potenza dedicata.",
    image: cofanoImg,
    features: [
      "Cofano comando combo PPT-TTT",
      "Cofani multicatodo TIG-Plasma",
      "Parte potenza dedicata combo PPT-TTT",
      "Interfaccia operatore touch",
      "Gestione di tutti i parametri di processo",
      "Diagnostica e teleassistenza",
    ],
    applicazioni: ["Impianti multicatodo", "Linee automatiche", "Retrofit di linee esistenti"],
  },
  accessori: {
    title: "Accessori & Slitte",
    tagline: "Tutto quello che serve all'impianto.",
    intro: "Completiamo la nostra offerta con accessori indispensabili per il funzionamento ottimale degli impianti: gruppi slitta a 3 assi, miscelatori gas argon-idrogeno, oscillatori d'arco magnetici e altri componenti dedicati.",
    image: cofanoImg,
    features: [
      "Gruppo slitta 3 assi motorizzato",
      "Miscelatore gas Argon-Idrogeno",
      "Oscillatore d'arco magnetico",
      "Sistemi di ripresa interna",
      "Componenti meccanici di precisione",
      "Ricambi originali sempre disponibili",
    ],
    applicazioni: ["Upgrade impianti esistenti", "Retrofit", "Ricambistica"],
  },
};

export const Route = createFileRoute("/impianti/$slug")({
  loader: ({ params }) => {
    const item = data[params.slug];
    if (!item) throw notFound();
    return { item, slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    return {
      meta: [
        { title: `${loaderData.item.title} — Impianti LE.DI.CA.` },
        { name: "description", content: loaderData.item.intro.slice(0, 160) },
        { property: "og:title", content: `${loaderData.item.title} — LE.DI.CA.` },
        { property: "og:description", content: loaderData.item.tagline },
        { property: "og:image", content: loaderData.item.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl">Impianto non trovato</h1>
      <Link to="/impianti" className="mt-8 inline-block text-primary">← Torna agli impianti</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Errore</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ImpiantoDetail,
});

function ImpiantoDetail() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={item.image} alt={item.title} width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Link to="/impianti" className="inline-flex items-center gap-2 text-xs font-display tracking-widest text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Tutti gli impianti
          </Link>
          <h1 className="mt-6 font-display text-5xl md:text-7xl max-w-4xl leading-[0.95]">
            <span className="text-gradient-arc">{item.title}</span>
          </h1>
          <p className="mt-6 font-display text-xl md:text-2xl text-muted-foreground max-w-2xl">{item.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ DESCRIZIONE</div>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{item.intro}</p>
          <div className="mt-10">
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ APPLICAZIONI</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.applicazioni.map((a) => (
                <span key={a} className="rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-display tracking-wider">{a}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ CARATTERISTICHE</div>
          <ul className="mt-6 space-y-4">
            {item.features.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-border pb-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-sm border border-border bg-gradient-steel p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Vuoi una proposta su misura?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Contattaci: studieremo la soluzione migliore per la tua linea produttiva.</p>
          <Link to="/contatti" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc">
            Richiedi un preventivo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
