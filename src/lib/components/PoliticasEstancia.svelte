<script>
  // 🎯 DATOS CONFIGURABLES
  const policiesData = {
    title: "Transparencia total para tu tranquilidad",
    subtitle: "Todo lo que necesitás saber sobre nuestra forma de trabajo y convivencia",
    policies: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>`,
        title: "Reserva Simple",
        description: "Asegurás tu lugar con el 50% de seña. El resto, lo pagás cómodamente al llegar."
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
        title: "Flexibilidad ante Imprevistos",
        description: "Si tus planes cambian y nos avisás con 15 días, guardamos tu seña para otra fecha. No perdés tu inversión."
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
        title: "Ambiente Familiar y Respetuoso",
        description: "Priorizamos el descanso real. Por eso, garantizamos un ambiente libre de ruidos molestos y visitas externas"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>`,
        title: "Pet Friendly Responsable",
        description: "Tu mascota pequeña es bienvenida (consultanos las condiciones para que ella también disfrute)."
      }
    ]
  };
</script>

<section id="politicas" class="w-full bg-background py-section-mobile md:py-section-desktop">
  <div class="max-w-layout mx-auto px-4 md:px-8">
    
    <!-- Título y Subtítulo -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-semibold text-primary mb-4 font-montserrat">
        {policiesData.title}
      </h2>
      <p class="text-xl md:text-2xl font-medium text-primary/70 font-montserrat">
        {policiesData.subtitle}
      </p>
    </div>

    <!-- Grid de Políticas -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each policiesData.policies as policy}
        <div class="bg-white rounded-2xl p-6 shadow-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
          
          <!-- Icono -->
          <div class="w-12 h-12 text-accent mb-4">
            {@html policy.icon}
          </div>

          <!-- Título -->
          <h3 class="text-xl md:text-2xl font-medium text-primary mb-3 font-montserrat">
            {policy.title}
          </h3>

          <!-- Descripción -->
          <p class="text-lg leading-relaxed text-primary/70 font-opensans">
            {policy.description}
          </p>

        </div>
      {/each}
    </div>

  </div>
</section>