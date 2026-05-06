import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — LE.DI.CA. Gas Tecnici Rozzano" },
      { name: "description", content: "Viale Toscana 46/10, 20089 Rozzano (MI). Tel 02 8920 2078. Aperti dal lunedì al venerdì." },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ CONTATTI</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Vieni a <span className="text-gradient-arc">trovarci</span>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Indirizzo", value: "Viale Toscana 46/10\n20089 Rozzano (MI)" },
            { icon: Phone, label: "Telefono", value: "02 8920 2078", href: "tel:+390289202078" },
            { icon: Mail, label: "Email", value: "info@ledica-gastecnici.it", href: "mailto:info@ledica-gastecnici.it" },
            { icon: Clock, label: "Orari", value: "Lun – Ven · 08:00 – 12:30 / 14:00 – 18:00\nSabato e Domenica chiuso" },
          ].map((c) => {
            const Inner = (
              <div className="flex gap-5 rounded-sm border border-border bg-card p-6 hover:border-primary transition-colors">
                <div className="h-12 w-12 shrink-0 rounded-sm bg-gradient-arc grid place-items-center shadow-arc">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-display tracking-widest text-muted-foreground uppercase">{c.label}</div>
                  <div className="mt-2 font-display text-lg whitespace-pre-line">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <div className="rounded-sm overflow-hidden border border-border min-h-[400px]">
          <iframe
            title="Mappa LE.DI.CA. Rozzano"
            src="https://www.google.com/maps?q=Viale+Toscana+46/10,+20089+Rozzano+MI&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
