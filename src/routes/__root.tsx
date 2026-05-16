import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteHeader, SiteFooter, WhatsAppButton } from "@/components/SiteLayout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-arc">404</h1>
        <p className="mt-4 text-muted-foreground">Pagina non trovata.</p>
        <Link to="/" className="mt-6 inline-block rounded-sm bg-gradient-arc px-5 py-2.5 text-sm font-display tracking-widest text-primary-foreground">
          Torna alla home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Errore di caricamento</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-sm bg-gradient-arc px-5 py-2.5 text-sm font-display tracking-widest text-primary-foreground"
        >
          Riprova
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LE.DI.CA. Srl — Saldatura automatica acciaio" },
      { name: "description", content: "LE.DI.CA. Srl: impianti automatici di saldatura TIG, Plasma e Laser per tubi in acciaio. Dal 1989 a Rozzano (MI)." },
      { property: "og:site_name", content: "LE.DI.CA. Srl" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6b8a3f4d-4c93-4d39-8009-a3e9ebf5cd2c/id-preview-6e187c6e--acb64809-46d9-4ce7-9c0d-b9e5ce16eb5a.lovable.app-1778606616781.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6b8a3f4d-4c93-4d39-8009-a3e9ebf5cd2c/id-preview-6e187c6e--acb64809-46d9-4ce7-9c0d-b9e5ce16eb5a.lovable.app-1778606616781.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://ledica-sparkle-site.lovable.app/#organization",
              name: "LE.DI.CA. Srl",
              url: "https://ledica-sparkle-site.lovable.app",
              logo: "https://ledica-sparkle-site.lovable.app/favicon.ico",
              foundingDate: "1989",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Viale Toscana 46/10",
                addressLocality: "Rozzano",
                addressRegion: "MI",
                postalCode: "20089",
                addressCountry: "IT",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+39 02 8920 2078",
                email: "info@ledica.it",
                contactType: "sales",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://ledica-sparkle-site.lovable.app/#website",
              url: "https://ledica-sparkle-site.lovable.app",
              name: "LE.DI.CA. Srl",
              publisher: { "@id": "https://ledica-sparkle-site.lovable.app/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </div>
    </QueryClientProvider>
  );
}
