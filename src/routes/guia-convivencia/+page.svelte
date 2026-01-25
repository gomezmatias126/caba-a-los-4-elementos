<script>
  // 🎯 DATOS CONFIGURABLES
  const guideData = {
    title: "Compromiso de Convivencia y Descanso",
    subtitle: "Cabañas en Villa Santarelli, Santa Rosa de Calamuchita",
    intro: "Para nosotros, tu descanso es lo más importante. Al elegirnos, te sumás a una propuesta de paz, respeto y cercanía con la naturaleza. Para garantizar una excelente estadía para todos, compartimos nuestras normas de convivencia:",
    pdfUrl: "/docs/compromiso-convivencia.pdf", // Actualizar con tu URL real
    sections: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>`,
        title: "1. Filosofía del Lugar: Silencio y Respeto",
        items: [
          "Ambiente Familiar: Este complejo está destinado exclusivamente a familias y parejas. No se permiten grupos de jóvenes ni eventos/festejos.",
          "Contaminación Sonora: No se permite música a volumen alto en áreas comunes ni ruidos molestos que perturben la paz del barrio, especialmente en horarios de siesta y descanso nocturno (de 22:00 a 08:00 hs)."
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>`,
        title: "2. Política de Limpieza y Cuidado (Autogestión)",
        items: [
          "Entrega y Recepción: Entregamos la unidad desinfectada y en perfectas condiciones. Al no contar con servicio de mucama diario, el huésped se compromete a mantener la higiene y entregar la unidad limpia al finalizar su estadía.",
          "Residuos: Solicitamos retirar la basura diariamente a los contenedores externos para evitar insectos y mantener la higiene del predio."
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>`,
        title: "3. Visitas y Seguridad",
        items: [
          "Uso Exclusivo: Por seguridad y para garantizar la tranquilidad de los huéspedes que pagaron por su estadía, no se admiten visitas externas en las cabañas ni en el predio. Solo pueden ingresar las personas registradas en la reserva.",
          "Cocheras: Cada unidad tiene su espacio asignado. Por favor, respetar el lugar de los demás huéspedes."
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>`,
        title: "4. Mascotas (Bajo Consulta Previa)",
        items: [
          "Condiciones: Solo se aceptan mascotas de tamaño pequeño.",
          "Reglas: No pueden subir a camas o sillones, no pueden quedar solas en la cabaña en ningún momento y el dueño es responsable absoluto de la limpieza de sus necesidades."
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
        title: "5. Check-in y Check-out",
        items: [
          "Ingreso: A partir de las 16:00 hs. (Si la unidad está lista antes, Cristian te avisará vía WhatsApp).",
          "Egreso: Hasta las 10:00 hs puntual, para permitir la desinfección total antes del próximo ingreso."
        ]
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>`,
        title: "6. Reservas y Cancelaciones",
        items: [
          "Seña: La reserva se concreta con el 50% del valor total. El saldo restante se abona al ingresar.",
          "Cancelaciones: La seña no es reembolsable. Sin embargo, si avisás con un mínimo de 15 días de antelación, podés reprogramar tu fecha dentro del año calendario (sujeto a disponibilidad y tarifas vigentes)."
        ]
      }
    ]
  };
</script>

<section id="convivencia" class="w-full bg-white py-section-mobile md:py-section-desktop">
  <div class="max-w-layout mx-auto px-4 md:px-8">
    
    <!-- Título y Subtítulo -->
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-4xl font-semibold text-primary mb-2 font-montserrat">
        {guideData.title}
      </h2>
      <p class="text-xl md:text-2xl font-medium text-accent mb-6 font-montserrat">
        {guideData.subtitle}
      </p>
      <p class="text-lg leading-relaxed text-primary/70 max-w-4xl mx-auto font-opensans">
        {guideData.intro}
      </p>
    </div>

    <!-- Secciones del Compromiso -->
    <div class="space-y-6 mb-12">
      {#each guideData.sections as section}
        <div class="bg-background rounded-2xl p-6 md:p-8 shadow-sm border-2 border-secondary/20">
          
          <!-- Ícono y Título -->
          <div class="flex items-start gap-4 mb-4">
            <div class="w-10 h-10 flex-shrink-0 text-accent">
              {@html section.icon}
            </div>
            <h3 class="text-xl md:text-2xl font-medium text-primary font-montserrat">
              {section.title}
            </h3>
          </div>

          <!-- Lista de Items -->
          <ul class="space-y-3 ml-14">
            {#each section.items as item}
              <li class="text-lg leading-relaxed text-primary/80 font-opensans">
                <span class="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                {item}
              </li>
            {/each}
          </ul>

        </div>
      {/each}
    </div>

    <!-- Volver -->
    <div class="text-center">
      <a
        href="/"
        target="_parent"
        class="inline-flex items-center gap-3 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 bg-primary text-white rounded-2xl shadow-sm hover:shadow-lg font-montserrat"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Volver a Inicio
      </a>
    </div>

  </div>
</section>