import Image from "next/image";

export const metadata = {
  title: "Biografía - Arantxa",
  description: "Conoce la historia de Arantxa, cantante pop de Lima, Perú",
};

export default function BiografiaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <Image
          src="/arantxa/arantxa1.jpg"
          alt="Arantxa"
          fill
          className="object-cover object-[center_60%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 w-full pb-12 pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Arantxa
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Cantante y compositora peruana de 22 años. Su primer álbum{" "}
              <span className="italic font-medium">a flor de piel</span> explora
              el amor, el desamor y lo que significa crecer en tus 20s.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Section A: Los Inicios */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Los Inicios
              </h2>
              <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
                <p>
                  Su primer acercamiento con la música fue gracias a su padre,
                  quien la inscribió en clases de piano a los 4 años. Desde
                  pequeña estuvo fascinada con escribir lo que pensaba en
                  cuadernos pequeños que tenía.
                </p>
                <p>
                  A los 13 años empezó a escribir sus primeras canciones, y fue
                  así como su viaje en el mundo de la composición empezó. Más
                  adelante, a los 16 años, empezó la carrera de música.
                </p>
                <p>
                  Su primera canción <span className="text-foreground font-medium">&quot;Quédate&quot;</span> salió
                  en mayo de 2023 cuando tenía 19 años. En diciembre del 2024 se
                  graduó de la carrera de música con especialización en
                  composición de canciones.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/arantxa/arantxa3.jpg"
                  alt="Arantxa en sus inicios"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section B: En el Escenario */}
          <section className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                En el Escenario
              </h2>
              <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
                <p>
                  En estos últimos años, Arantxa ha subido a distintos
                  escenarios como el teatro Ricardo Palma abriéndole el
                  concierto a &quot;Varados&quot;, La Noche de Barranco, Selina
                  Basement, Tierra Baldía, entre otros.
                </p>
                <p>
                  Fue en Selina Basement donde realizó su primer concierto
                  autogestionado e hizo{" "}
                  <span className="text-primary-1 font-semibold">sold out</span>.
                </p>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="bg-background-card rounded-xl px-6 py-4 border border-border">
                    <p className="text-3xl font-bold text-primary-1">5,000+</p>
                    <p className="text-sm text-foreground-muted">
                      oyentes mensuales
                    </p>
                  </div>
                  <div className="bg-background-card rounded-xl px-6 py-4 border border-border">
                    <p className="text-3xl font-bold text-primary-2">87,000+</p>
                    <p className="text-sm text-foreground-muted">
                      escuchas en &quot;Así No&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/arantxa/arantxa5.jpg"
                  alt="Arantxa en concierto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section C: Su Estilo */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Su Estilo
              </h2>
              <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
                <p>
                  Con un estilo musical rock pop y letras que reflejan
                  honestidad, Arantxa expresa su vulnerabilidad y encuentra
                  complicidad con su público como motor para descubrir su
                  autenticidad y superar lo que trae cada día.
                </p>
                <p>
                  A través de sus canciones nos invita a seguir nuestra
                  intuición, a soltar el control y a validar nuestra forma de
                  sentir, para salvarnos a nosotros mismos y atraer con
                  resiliencia lo que realmente merecemos.
                </p>
              </div>
              {/* Quote Highlight */}
              <blockquote className="bg-background-card border-l-4 border-primary-1 rounded-r-xl px-6 py-5">
                <p className="text-xl md:text-2xl font-medium text-foreground italic">
                  &quot;No seas el personaje principal del cuento, sino la
                  escritora&quot;
                </p>
              </blockquote>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/arantxa/arantxa7.jpg"
                  alt="Arantxa - su estilo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section D: A Flor de Piel + Comunidad */}
          <section className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Flor de Piel
              </h2>
              <div className="space-y-4 text-lg text-foreground-muted leading-relaxed">
                <p>
                  Su álbum <span className="text-foreground font-medium italic">&quot;a flor de piel&quot;</span>{" "}
                  es una exploración del amor, el desamor y su choque con la
                  realidad al dejar de ser adolescente, mientras sale de su zona
                  de confort, reafirmando su autenticidad como compositora.
                </p>
                <p>
                  Arantxa tiene una gran presencia en redes sociales que le ha
                  permitido interactuar con su público creando una comunidad que
                  se decidió llamar{" "}
                  <span className="text-primary-1 font-semibold">
                    &quot;Arándanos&quot;
                  </span>
                  .
                </p>
                <p>
                  Arantxa se reúne con su comunidad de fans en picnics y
                  conciertos en parques en los que les cuenta un poco más sobre
                  sus composiciones y comparte canciones inéditas.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/arantxa/arantxa9.jpg"
                  alt="Arantxa con su comunidad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Photo Gallery */}
          <section className="pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Galería
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/arantxa/arantxa2.jpg"
                  alt="Arantxa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/arantxa/arantxa4.jpg"
                  alt="Arantxa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/arantxa/arantxa6.jpg"
                  alt="Arantxa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/arantxa/arantxa8.jpg"
                  alt="Arantxa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg md:col-start-2">
                <Image
                  src="/arantxa/arantxa10.jpg"
                  alt="Arantxa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
