<script>
  // 🎯 DATOS ACTUALIZADOS: Enfoque tecnológico y autosustentable
  const ecoData = {
    title: "Innovación y Respeto por el Entorno",
    subtitle: "Energía Limpia para un Confort Superior",
    description: "Estamos comprometidos con el futuro. Contamos con un sistema de energía solar de última generación que garantiza una estadía autosustentable y eficiente, manteniendo los más altos estándares de comodidad.",
    icons: [
      {
        name: "Energía Solar",
        // Icono de Panel Solar / Sol Tecnológico
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v7.5m3.75-3.75h-7.5" /></svg>`
      },
      {
        name: "Sustentabilidad",
        // Icono de Hoja / Eficiencia
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`
      },
      {
        name: "Autosustentable",
        // Icono de Red / Sistema
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`
      }
    ]
  };
</script>

<section class="w-full bg-background py-12 md:py-16">
  <div class="container-custom">
    <div class="bg-white rounded-2xl shadow-sm p-6 md:p-10 border-2 border-accent/20">
      
      <h2 class="text-primary text-center mb-2 font-bold uppercase tracking-wide">
        {ecoData.title}
      </h2>

      <h3 class="text-accent text-center mb-8 font-medium italic">
        {ecoData.subtitle}
      </h3>

      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-8">
        {#each ecoData.icons as icon}
          <div class="flex flex-col items-center gap-3 group">
            <div class="w-12 h-12 md:w-14 md:h-14 text-accent transition-transform group-hover:scale-110">
              {@html icon.svg}
            </div>
            <span class="text-xs md:text-sm font-bold text-primary uppercase tracking-tighter">
              {icon.name}
            </span>
          </div>
        {/each}
      </div>

      <p class="text-base leading-relaxed text-primary/80 text-center max-w-3xl mx-auto border-t border-accent/10 pt-6">
        {ecoData.description}
      </p>

    </div>
  </div>
</section>