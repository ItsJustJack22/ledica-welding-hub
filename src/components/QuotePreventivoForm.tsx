import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";

const schema = z.object({
  azienda: z.string().trim().min(2, "Inserisci la ragione sociale").max(120),
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(80),
  email: z.string().trim().email("Email non valida").max(160),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  messaggio: z.string().trim().min(10, "Descrivi brevemente la tua esigenza").max(2000),
});

const RECIPIENT = "info@ledica.it";

export function QuotePreventivoForm({ impianto }: { impianto: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const subject = `Richiesta preventivo — ${impianto}`;
    const body = [
      `Impianto: ${impianto}`,
      `Azienda: ${d.azienda}`,
      `Nome: ${d.nome}`,
      `Email: ${d.email}`,
      `Telefono: ${d.telefono || "-"}`,
      "",
      "Messaggio:",
      d.messaggio,
    ].join("\n");
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field = "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none";
  const label = "block text-xs font-display tracking-[0.2em] text-muted-foreground mb-2";

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="azienda">AZIENDA *</label>
          <input id="azienda" name="azienda" className={field} maxLength={120} />
          {errors.azienda && <p className="mt-1 text-xs text-destructive">{errors.azienda}</p>}
        </div>
        <div>
          <label className={label} htmlFor="nome">NOME E COGNOME *</label>
          <input id="nome" name="nome" className={field} maxLength={80} />
          {errors.nome && <p className="mt-1 text-xs text-destructive">{errors.nome}</p>}
        </div>
        <div>
          <label className={label} htmlFor="email">EMAIL *</label>
          <input id="email" name="email" type="email" className={field} maxLength={160} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={label} htmlFor="telefono">TELEFONO</label>
          <input id="telefono" name="telefono" className={field} maxLength={40} />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="messaggio">DETTAGLI RICHIESTA *</label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          className={field}
          maxLength={2000}
          placeholder={`Es. spessore, diametro tubo, materiale, produzione richiesta...`}
        />
        {errors.messaggio && <p className="mt-1 text-xs text-destructive">{errors.messaggio}</p>}
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-sm bg-gradient-arc px-7 py-4 font-display tracking-widest text-primary-foreground shadow-arc"
        >
          Invia richiesta <Send className="h-4 w-4" />
        </button>
        {sent && <span className="text-xs text-muted-foreground">Si aprirà il tuo client email.</span>}
      </div>
    </form>
  );
}
