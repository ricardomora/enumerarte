import { ReadingFlow } from "@/components/reading-flow";

export default function Home() {
  return (
    <main className="grain mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-12">
      <header className="space-y-3 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">Enumerarte</p>
        <h1 className="text-balance text-2xl font-medium leading-tight text-mist-100 sm:text-4xl">
          Tu mapa. Tus vínculos. Tus señales.
        </h1>
        <p className="mx-auto max-w-md text-pretty text-sm leading-relaxed text-mist-300 sm:text-base">
          Descubre lo que dicen tus números sobre ti y sobre quienes te importan. Sin hora de
          nacimiento. Sin registro.
        </p>
      </header>

      <section className="mt-6 flex-1">
        <ReadingFlow />
      </section>

      <footer className="mt-8 pb-6 text-center text-xs leading-relaxed text-mist-500">
        Un espejo para entenderte y conectar — tú decides qué hacer con lo que descubras.
      </footer>
    </main>
  );
}
