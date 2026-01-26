<script>
  // 🎯 DATOS CONFIGURABLES
  const locationData = {
    title: "Villa Santarelli, un lugar tranquilo a un paso del centro",
    subtitle: "Todo a tu alcance, caminando",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3380.991749229103!2d-64.5432772!3d-32.0694719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2bb442697cc15%3A0x9e02d3474cdc256a!2sCaba%C3%B1as%20Los%204%20Elementos!5e0!3m2!1ses-419!2sar!4v1769357833374!5m2!1ses-419!2sar0",
    mapsUrl: "https://maps.app.goo.gl/oTXC3oDSNeiBHevy5",
    image: "fotos//general/centro.jpeg"
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