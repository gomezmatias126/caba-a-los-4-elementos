<script>
  // 🎯 DATOS CONFIGURABLES
  const filterData = {
    title: "Tu descanso es nuestra prioridad",
    subtitle: "Un espacio diseñado para la armonía y el respeto",
    description: "Para garantizar una estadía de paz, somos un complejo exclusivo para familias y parejas. No admitimos grupos de jóvenes ni ruidos molestos.",
    icons: [
      {
        name: "Silencio",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>`
      },
      {
        name: "Familia",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`
      },
      {
        name: "Pareja",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`
      }
    ]
  };
</script>

<section class="w-full bg-background py-12 md:py-16">
  <div class="container-custom">
    <div class="bg-white rounded-2xl shadow-sm p-6 md:p-10 border-2 border-secondary/20">
      
      <!-- Título -->
      <h2 class="text-primary text-center mb-3">
        {filterData.title}
      </h2>

      <!-- Subtítulo -->
      <h3 class="text-primary/80 text-center mb-5">
        {filterData.subtitle}
      </h3>

      <!-- Iconos -->
      <div class="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-5">
        {#each filterData.icons as icon}
          <div class="flex flex-col items-center gap-2">
            <div class="w-14 h-14 md:w-16 md:h-16 text-accent">
              {@html icon.svg}
            </div>
            <span class="text-sm font-medium text-primary">
              {icon.name}
            </span>
          </div>
        {/each}
      </div>

      <!-- Descripción -->
      <p class="text-base leading-relaxed text-primary/70 text-center max-w-2xl mx-auto">
        {filterData.description}
      </p>

    </div>
  </div>
</section>