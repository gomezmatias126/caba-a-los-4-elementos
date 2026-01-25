<script>
  // 🎯 DATOS CONFIGURABLES
  const heroData = {
    brandName: "Cabañas Los 4 Elementos",
    title: "Viví Santa Rosa desde su corazón natural", // Título más emocional y activo
    subtitle: "A 50m del río y 250m del centro. Tu auto también descansa.", // Resalta el beneficio de la ubicación
    description: "Cambiá el encierro por la brisa serrana. Una base estratégica en Villa Santarelli para quienes buscan el silencio del río y la cercanía de todo, sin vueltas.", 
    backgroundImage: "/bg/hero.jpeg",
    buttons: {
      primary: { text: "Explorar Unidades", action: "#unidades" }, // "Explorar" invita más a la curiosidad
      secondary: { text: "Reservar mi lugar", action: "#contacto" } // CTA más directo a la conversión
    }
};

  function scrollToSection(e, target) {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }

  import { animate } from 'motion';
  import { onMount } from 'svelte';
  let flecha;

  onMount(() => {
    animate(flecha, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
  });
</script>

<section class="relative h-screen min-h-[600px] w-full overflow-hidden">
  <!-- Background Image -->
  <div 
    class="absolute inset-0 bg-cover bg-right sm:bg-left"
    style="background-image: url({heroData.backgroundImage})"
  >
    <!-- Overlay con tonos tierra y verde -->
    <div class="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/70 to-primary/0 sm:from-primary/50 sm:via-primary/30 sm:to-transparent sm:backdrop-blur-[2px]"></div>
  </div>

  <!-- Contenido Centralizado -->
  <div class="relative z-10 flex h-full items-center justify-center container-custom">
    <div class="max-w-3xl text-center space-y-5 flex flex-col h-full items-center justify-center">
      
      <!-- Nombre de la Marca -->
      <div class="inline-block px-5 py-2 bg-primary/90 backdrop-blur-sm rounded-full mb-2">
        <p class="text-white font-semibold tracking-wide text-sm md:text-base">
          {heroData.brandName}
        </p>
      </div>

      <!-- Título Principal -->
      <h1 class="text-white drop-shadow-lg">
        {heroData.title}
      </h1>

      <!-- Subtítulo -->
      <h3 class="text-slate-200 drop-shadow-md">
        {heroData.subtitle}
      </h3>

      <!-- Descripción -->
      <p class="text-background font-opensans max-w-2xl mx-auto">
        {heroData.description}
      </p>

      <!-- Botones de Acción -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <a
          href={heroData.buttons.primary.action}
          on:click={(e) => scrollToSection(e, heroData.buttons.primary.action)}
          class="btn-primary bg-accent text-white w-full sm:w-auto text-base"
        >
          {heroData.buttons.primary.text}
        </a>

        <a
          href={heroData.buttons.secondary.action}
          on:click={(e) => scrollToSection(e, heroData.buttons.secondary.action)}
          class="px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl shadow-sm hover:bg-white/20 w-full sm:w-auto text-base"
        >
          {heroData.buttons.secondary.text}
        </a>
      </div>

      <div bind:this={flecha} class="w-fit">
        <svg class="w-6 h-6 text-white/70 animate-bounce bottom-10 left-1/2 transform -translate-x-1/2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>

  <!-- Indicador de Scroll -->
</section>