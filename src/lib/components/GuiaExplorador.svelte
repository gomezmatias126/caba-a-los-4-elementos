<script>
  // 🎯 DATOS CONFIGURABLES
  const locationData = {
    title: "Todo a tu alcance, caminando",
    subtitle: "Ubicación estratégica en el barrio Villa Santarelli",
    points: [
      {
        title: "El Río y Puente Colgante",
        distance: "50m",
        description: "El balneario más emblemático de Santa Rosa a solo unos pasos de tu puerta."
      },
      {
        title: "Centro Comercial",
        distance: "250m",
        description: "Gastronomía, ferias y comercios cruzando el puente peatonal."
      },
      {
        title: "Logística Fácil",
        distance: "a la vuelta",
        description: "Supermercados, panaderías y carnicerías a la vuelta de la esquina. Ideal si venís en micro o no querés tocar el auto."
      }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8297!2d-64.5394!3d-32.0656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAzJzU2LjIiUyA2NMKwMzInMjEuOCJX!5e0!3m2!1ses!2sar!4v1234567890",
    mapsUrl: "https://maps.google.com/?q=Santa+Rosa+de+Calamuchita+Villa+Santarelli",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000"
  };
</script>

<section id="ubicacion" class="w-full bg-white section-spacing">
  <div class="container-custom">
    
    <!-- Título y Subtítulo -->
    <div class="text-center mb-10 space-y-2">
      <h2 class="text-primary">
        {locationData.title}
      </h2>
      <h3 class="text-primary/70">
        {locationData.subtitle}
      </h3>
    </div>

    <!-- Split Layout -->
    <div class="grid-standard grid-cols-1 lg:grid-cols-2">
      
      <!-- Izquierda: Lista de Puntos Clave -->
      <div class="space-y-5">
        {#each locationData.points as point}
          <div class="bg-background rounded-2xl p-5 shadow-sm border-2 border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <div class="flex items-baseline gap-3 mb-2">
              <h3 class="text-primary flex-1">
                {point.title}
              </h3>
              <span class="text-accent font-semibold text-base whitespace-nowrap">
                {point.distance}
              </span>
            </div>
            <p class="text-primary/70 text-base leading-relaxed">
              {point.description}
            </p>
          </div>
        {/each}

        <!-- Foto del Puente -->
        <div class="rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={locationData.image} 
            alt="Puente Colgante Santa Rosa de Calamuchita"
            class="w-full h-56 object-cover"
          />
        </div>

        <!-- Botón Google Maps -->
        <a
          href={locationData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary block w-full text-center text-base"
        >
          Ver ubicación en Google Maps
        </a>
      </div>

      <!-- Derecha: Mapa Embebido -->
      <div class="rounded-2xl overflow-hidden shadow-sm h-[550px] lg:h-full min-h-[450px]">
        <iframe
          src={locationData.mapEmbed}
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación Cabañas Los 4 Elementos"
        ></iframe>
      </div>

    </div>

  </div>
</section>