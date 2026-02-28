// Shared font loading for OG image generation
async function loadFont(weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format/);
  if (!match?.[1]) throw new Error(`Failed to load Inter ${weight}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

let fontsPromise: Promise<
  { name: string; data: ArrayBuffer; weight: 400 | 600 | 700; style: "normal" }[]
> | null = null;

export function getFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      loadFont(400).then((data) => ({ name: "Inter" as const, data, weight: 400 as const, style: "normal" as const })),
      loadFont(600).then((data) => ({ name: "Inter" as const, data, weight: 600 as const, style: "normal" as const })),
      loadFont(700).then((data) => ({ name: "Inter" as const, data, weight: 700 as const, style: "normal" as const })),
    ]);
  }
  return fontsPromise;
}
