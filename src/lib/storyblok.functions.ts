import { createServerFn } from "@tanstack/react-start";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/storyblok";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StoryblokStory<T = Record<string, any>> = {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  content: T;
  published_at: string | null;
};

async function sbFetch(path: string, query: Record<string, string> = {}) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");
  const STORYBLOK_API_KEY = process.env.STORYBLOK_API_KEY;
  if (!STORYBLOK_API_KEY) throw new Error("STORYBLOK_API_KEY missing");

  const params = new URLSearchParams({ version: "published", ...query });
  const res = await fetch(`${GATEWAY_URL}${path}?${params}`, {
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": STORYBLOK_API_KEY,
    },
    redirect: "follow",
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    const txt = await res.text();
    throw new Error(`Storyblok ${res.status}: ${txt.slice(0, 200)}`);
  }
  return res.json();
}

export const getStory = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }) => {
    const safe = data.slug.replace(/[^a-z0-9/_-]/gi, "");
    if (!safe) return null;
    try {
      const json = await sbFetch(`/stories/${safe}`);
      return (json?.story as StoryblokStory) ?? null;
    } catch {
      return null;
    }
  });

export const listStories = createServerFn({ method: "GET" })
  .inputValidator((d: { startsWith: string }) => d)
  .handler(async ({ data }) => {
    const safe = data.startsWith.replace(/[^a-z0-9/_-]/gi, "");
    try {
      const json = await sbFetch(`/stories`, {
        starts_with: safe,
        per_page: "50",
      });
      return (json?.stories as StoryblokStory[]) ?? [];
    } catch {
      return [];
    }
  });
