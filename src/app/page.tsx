import { ReadingFlow } from "@/components/reading-flow";
import { SiteFooter } from "@/components/site-footer";
import { Starfield } from "@/components/starfield";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <Starfield />
      <ReadingFlow />

      <SiteFooter note="Un espejo para entenderte y conectar — tú decides qué hacer con lo que descubras." />
    </main>
  );
}
