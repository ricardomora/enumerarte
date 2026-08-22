import { ReadingFlow } from "@/components/reading-flow";

export default function Home() {
  return (
    <main className="grain mx-auto w-full max-w-2xl px-5 py-14 sm:py-20">
      <header className="space-y-6 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent-400">Enumerarte</p>
        <h1 className="text-balance text-3xl font-medium leading-tight text-mist-100 sm:text-5xl">
          Entender a alguien es más útil que adivinar su futuro
        </h1>
        <p className="mx-auto max-w-lg text-pretty leading-relaxed text-mist-300">
          Un lenguaje compartido para hablar de por qué chocas con tu pareja, tu mamá o tu jefe. Sin
          predicciones, sin hora de nacimiento y sin registro.
        </p>
      </header>

      <section className="mt-10">
        <ReadingFlow />
      </section>

      <section className="mt-16 space-y-4 rounded-2xl border border-ink-700 bg-ink-900/40 p-6">
        <h2 className="text-lg font-medium text-mist-100">Qué es esto, y qué no es</h2>
        <div className="space-y-4 text-sm leading-relaxed text-mist-300">
          <p>
            La numerología no predice nada, y no vamos a decirte lo contrario. No hay evidencia de
            que tu fecha de nacimiento determine tu personalidad, y los estudios grandes que lo
            buscaron no encontraron nada.
          </p>
          <p>
            Lo que hay debajo es aritmética simple: reducir un número sumando sus dígitos es lo
            mismo que calcular su resto entre nueve. Toda la humanidad cae en nueve casillas más
            tres casos especiales. Puedes verificar cada cuenta tú mismo, y te la mostramos
            completa.
          </p>
          <p className="text-mist-100">
            Entonces para qué sirve. Para lo mismo que sirven el eneagrama o los tipos de
            personalidad: darte un vocabulario para hablar de vos y de los demás. El consejo que te
            damos en cada lectura viene de investigación real sobre comunicación y manejo de
            conflicto, y sigue siendo buen consejo aunque el número que lo eligió no signifique
            nada.
          </p>
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-mist-500">
        Enumerarte · Herramienta de comprensión, no de adivinación
      </footer>
    </main>
  );
}
