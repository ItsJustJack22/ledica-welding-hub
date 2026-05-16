import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — LE.DI.CA. Srl Rozzano (MI)" },
      { name: "description", content: "Viale Toscana 46/10, 20089 Rozzano (MI). Tel +39 02 8920 2078. Richiedi un preventivo per il tuo impianto di saldatura." },
      { property: "og:title", content: "Contatti — LE.DI.CA." },
      { property: "og:description", content: "Vieni a trovarci a Rozzano (MI) o richiedi un preventivo online." },
      { property: "og:url", content: "https://ledica-sparkle-site.lovable.app/contatti" },
    ],
    links: [{ rel: "canonical", href: "https://ledica-sparkle-site.lovable.app/contatti" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "LE.DI.CA. Srl",
          image: "https://ledica-sparkle-site.lovable.app/favicon.ico",
          url: "https://ledica-sparkle-site.lovable.app/contatti",
          telephone: "+39 02 8920 2078",
          email: "info@ledica.it",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Viale Toscana 46/10",
            addressLocality: "Rozzano",
            addressRegion: "MI",
            postalCode: "20089",
            addressCountry: "IT",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "12:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "14:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Contatti,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  azienda: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email non valida").max(255),
  telefono: z.string().trim().max(40).optional(),
  messaggio: z.string().trim().min(10, "Scrivi almeno 10 caratteri").max(2000),
});

function Contatti() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    // mailto fallback
    const body = `Nome: ${result.data.nome}\nAzienda: ${result.data.azienda ?? ""}\nEmail: ${result.data.email}\nTelefono: ${result.data.telefono ?? ""}\n\n${result.data.messaggio}`;
    window.location.href = `mailto:info@ledica.it?subject=${encodeURIComponent("Richiesta preventivo dal sito")}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="text-xs font-display tracking-[0.3em] text-accent">/ CONTATTI</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[0.95]">
            Parliamo del tuo <span className="text-gradient-arc">progetto</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Compila il form, scrivici una mail o passa a trovarci in sede a Rozzano. Ti risponderemo entro 24 ore lavorative.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        {/* Info */}
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Sede", value: "Viale Toscana 46/10\n20089 Rozzano (MI)" },
            { icon: Phone, label: "Telefono", value: "+39 02 8920 2078", href: "tel:+390289202078" },
            { icon: MessageCircle, label: "WhatsApp", value: "Scrivici subito", href: "https://wa.me/390289202078" },
            { icon: Mail, label: "Email", value: "info@ledica.it", href: "mailto:info@ledica.it" },
            { icon: Clock, label: "Orari", value: "Lun – Ven · 08:00 – 12:30 / 14:00 – 18:00" },
          ].map((c) => {
            const Inner = (
              <div className="flex gap-5 rounded-sm border border-border bg-card p-5 hover:border-primary transition-colors">
                <div className="h-11 w-11 shrink-0 rounded-sm bg-gradient-arc grid place-items-center shadow-arc">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-[10px] font-display tracking-widest text-muted-foreground uppercase">{c.label}</div>
                  <div className="mt-1 font-display text-base whitespace-pre-line">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}

          <div className="rounded-sm overflow-hidden border border-border h-72 mt-6">
            <iframe
              title="Mappa LE.DI.CA. Rozzano"
              src="https://www.google.com/maps?q=Viale+Toscana+46/10,+20089+Rozzano+MI&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 md:p-10 space-y-5 h-fit">
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-accent">/ RICHIEDI PREVENTIVO</div>
            <h2 className="mt-2 font-display text-3xl">Scrivici.</h2>
          </div>

          {(["nome", "azienda"] as const).map((f) => (
            <Field key={f} name={f} label={f === "nome" ? "Nome e cognome *" : "Azienda"} error={errors[f]} />
          ))}
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="email" label="Email *" type="email" error={errors.email} />
            <Field name="telefono" label="Telefono" type="tel" error={errors.telefono} />
          </div>
          <div>
            <label htmlFor="messaggio" className="block text-xs font-display tracking-widest text-muted-foreground uppercase mb-2">Messaggio *</label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows={5}
              required
              className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-y"
              placeholder="Raccontaci della tua linea produttiva, dei materiali e degli spessori che lavori..."
            />
            {errors.messaggio && <p className="mt-1 text-xs text-destructive">{errors.messaggio}</p>}
          </div>

          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc hover:scale-[1.01] transition-transform">
            Invia richiesta <Send className="h-4 w-4" />
          </button>

          {status === "ok" && (
            <p className="text-sm text-primary text-center">Stiamo aprendo il tuo client di posta. Grazie!</p>
          )}
          <p className="text-[11px] text-muted-foreground text-center">
            Inviando il form acconsenti al trattamento dei dati ai sensi del GDPR.
          </p>
        </form>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-display tracking-widest text-muted-foreground uppercase mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
