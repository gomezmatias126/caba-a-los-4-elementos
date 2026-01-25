<script>
  import { onMount } from 'svelte';
  import { animate, stagger } from 'motion';
  import { X, Wifi, Tv, Car, Flame, Shirt, ChevronRight, ChevronLeft } from 'lucide-svelte';

  let modalAbierto = null;
  let fotoActual = 0;
  let sliderFullscreen = false;
  let seccionRef;
  let cardsRef;
  let touchStartX = 0;
  let modalRef;

  const unidades = [
    {
      id: 1,
      nombre: 'Cabaña Familiar Premium',
      capacidad: 'Hasta 5 personas',
      foto: '/fotos/familiar/1.jpeg',
      tipo: 'Familiar',
      galeria: [
        '/fotos/familiar/1.jpeg',
        '/fotos/familiar/2.jpeg',
        '/fotos/familiar/3.jpeg',
        '/fotos/familiar/4.jpeg',
        '/fotos/familiar/5.jpeg',
        '/fotos/familiar/6.jpeg',
        '/fotos/familiar/7.jpeg',
        '/fotos/familiar/8.jpeg',
        '/fotos/familiar/9.jpeg',
        '/fotos/familiar/10.jpeg',
        '/fotos/familiar/11.jpeg',
        '/fotos/familiar/12.jpeg',
        '/fotos/familiar/13.jpeg',
        '/fotos/familiar/14.jpeg',
      ],
      descripcion: 'Ideal para familias que buscan sentirse como en casa, con espacio de sobra para los chicos y un asador listo para el asado del domingo.',
      detalles: {
        capacidad: 'Hasta 5 personas',
        distribucion: 'Dormitorios separados para privacidad de los padres',
        equipamiento: [
          'Heladera con freezer',
          'Cocina con horno completo',
          'Amplio asador individual',
          'Sala comedor integrada',
          'Baño completo con ducha'
        ]
      }
    },
    {
      id: 2,
      nombre: 'Cabaña Familiar Confort',
      capacidad: 'Hasta 5 personas',
      foto: '/fotos/familiar2/1.jpeg',
      tipo: 'Familiar',
      galeria: [
        '/fotos/familiar2/1.jpeg',
        '/fotos/familiar2/2.jpeg',
        '/fotos/familiar2/3.jpeg',
        '/fotos/familiar2/4.jpeg',
        '/fotos/familiar2/5.jpeg',
        '/fotos/familiar2/6.jpeg',
        '/fotos/familiar2/7.jpeg',
        '/fotos/familiar2/8.jpeg',
        '/fotos/familiar2/9.jpeg',
        '/fotos/familiar2/10.jpeg',
        '/fotos/familiar2/11.jpeg',
      ],
      descripcion: 'Ideal para familias que buscan sentirse como en casa, con espacio de sobra para los chicos y un asador listo para el asado del domingo.',
      detalles: {
        capacidad: 'Hasta 5 personas',
        distribucion: 'Dormitorios separados para privacidad de los padres',
        equipamiento: [
          'Heladera con freezer',
          'Cocina con horno completo',
          'Amplio asador individual',
          'Sala comedor integrada',
          'Baño completo con ducha'
        ]
      }
    },
    {
      id: 3,
      nombre: 'Departamento Matrimonial Zen',
      capacidad: '2 personas',
      foto: '/fotos/matrimonial/1.jpeg',
      tipo: 'Matrimonial',
      galeria: [
        '/fotos/matrimonial/1.jpeg',
        '/fotos/matrimonial/2.jpeg',
        '/fotos/matrimonial/3.jpeg',
        '/fotos/matrimonial/4.jpeg',
        '/fotos/matrimonial/5.jpeg',
        '/fotos/matrimonial/6.jpeg',
        '/fotos/matrimonial/7.jpeg',
        '/fotos/matrimonial/8.jpeg',
        '/fotos/matrimonial/9.jpeg',
        '/fotos/matrimonial/10.jpeg',
        '/fotos/matrimonial/11.jpeg',
        '/fotos/matrimonial/12.jpeg',
        '/fotos/matrimonial/13.jpeg',
        '/fotos/matrimonial/14.jpeg',
        '/fotos/matrimonial/15.jpeg',
      ],
      descripcion: 'El refugio perfecto para parejas. Todo el confort necesario en un espacio íntimo y tranquilo a metros del río.',
      detalles: {
        capacidad: '2 personas exclusivamente',
        distribucion: 'Ambiente integrado optimizado para la comodidad de la pareja',
        equipamiento: [
          'Heladera con freezer',
          'Vajilla completa para dos',
          'Ubicación en zona silenciosa',
          'Balcón con vista al río',
          'Baño en suite'
        ]
      }
    },
    {
      id: 4,
      nombre: 'Departamento Matrimonial Vista',
      capacidad: '2 personas',
      foto: '/fotos/matrimonial2/1.jpeg',
      tipo: 'Matrimonial',
      galeria: [
        '/fotos/matrimonial2/1.jpeg',
        '/fotos/matrimonial2/2.jpeg',
        '/fotos/matrimonial2/3.jpeg',
        '/fotos/matrimonial2/4.jpeg',
        '/fotos/matrimonial2/5.jpeg',
        '/fotos/matrimonial2/6.jpeg',
        '/fotos/matrimonial2/7.jpeg',
        '/fotos/matrimonial2/8.jpeg',
        '/fotos/matrimonial2/9.jpeg',
        '/fotos/matrimonial2/10.jpeg',
        '/fotos/matrimonial2/11.jpeg',
        '/fotos/matrimonial2/12.jpeg',
        '/fotos/matrimonial2/13.jpeg',
        '/fotos/matrimonial2/14.jpeg',
        '/fotos/matrimonial2/15.jpeg',
      ],
      descripcion: 'El refugio perfecto para parejas. Todo el confort necesario en un espacio íntimo y tranquilo a metros del río.',
      detalles: {
        capacidad: '2 personas exclusivamente',
        distribucion: 'Ambiente integrado optimizado para la comodidad de la pareja',
        equipamiento: [
          'Heladera con freezer',
          'Vajilla completa para dos',
          'Ubicación en zona silenciosa',
          'Balcón con vista al río',
          'Baño en suite'
        ]
      }
    },
    {
      id: 5,
      nombre: 'Cabaña Tipo Habitación',
      capacidad: '2 personas',
      foto: '/fotos/habitacion/1.jpeg',
      tipo: 'Funcional',
      galeria: [
        '/fotos/habitacion/1.jpeg',
        '/fotos/habitacion/2.jpeg',
        '/fotos/habitacion/3.jpeg',
        '/fotos/habitacion/4.jpeg',
        '/fotos/habitacion/5.jpeg',
        '/fotos/habitacion/6.jpeg',
        '/fotos/habitacion/7.jpeg',
        '/fotos/habitacion/8.jpeg',
        '/fotos/habitacion/9.jpeg',
        '/fotos/habitacion/10.jpeg',
      ],
      descripcion: 'Nuestra opción más ágil. Pensada para quienes pasan el día recorriendo Santa Rosa y buscan una base cómoda, segura y económica para descansar.',
      detalles: {
        capacidad: '2 personas',
        distribucion: 'Monoambiente estilo habitación de hotel pero con cocina',
        equipamiento: [
          'Heladera con congelador compacta',
          'Cocina con horno',
          'Asador individual frente a la unidad',
          'Cama matrimonial',
          'Baño privado'
        ]
      }
    }
  ];

  const amenidades = [
    { icon: Wifi, label: 'WiFi Alta Velocidad' },
    { icon: Tv, label: 'TV por Cable' },
    { icon: Car, label: 'Cochera' },
    { icon: Flame, label: 'Asador' },
    { icon: Shirt, label: 'Ropa Blanca' }
  ];

  function cerrarModal() {
    modalAbierto = null;
    document.body.style.overflow = 'auto';
  }

  function handleClickFuera(e) {
    if (e.target === e.currentTarget && window.innerWidth >= 768) {
      cerrarModal();
    }
  }

  function abrirModal(id) {
    modalAbierto = id;
    fotoActual = 0;
    document.body.style.overflow = 'hidden';
  }

  function siguienteUnidad() {
    const indiceActual = unidades.findIndex(u => u.id === modalAbierto);
    if (indiceActual < unidades.length - 1) {
      modalAbierto = unidades[indiceActual + 1].id;
      fotoActual = 0;
      if (modalRef) modalRef.scrollTop = 0;
    }
  }

  function unidadAnterior() {
    const indiceActual = unidades.findIndex(u => u.id === modalAbierto);
    if (indiceActual > 0) {
      modalAbierto = unidades[indiceActual - 1].id;
      fotoActual = 0;
      if (modalRef) modalRef.scrollTop = 0;
    }
  }

  function fotoAnterior() {
    if (fotoActual > 0) {
      fotoActual--;
    }
  }

  function fotoSiguiente() {
    if (fotoActual < unidadActual.galeria.length - 1) {
      fotoActual++;
    }
  }

  function toggleSliderFullscreen() {
    sliderFullscreen = !sliderFullscreen;
  }

  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        fotoSiguiente();
      } else {
        fotoAnterior();
      }
    }
  }

  onMount(() => {
    const header = seccionRef.querySelector('.header-section');
    if (header) {
      animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });
    }

    const amenidadesBlock = seccionRef.querySelector('.amenidades-block');
    if (amenidadesBlock) {
      animate(amenidadesBlock, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.6, delay: 0.2 });
    }

    if (cardsRef) {
      const cards = cardsRef.querySelectorAll('.card-unit');
      animate(
        cards,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: stagger(0.1), offset: 0.3 }
      );
    }
  });

  $: unidadActual = unidades.find(u => u.id === modalAbierto);
  $: indiceActual = unidades.findIndex(u => u.id === modalAbierto);
</script>

<section bind:this={seccionRef} class="py-20 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="header-section text-center mb-12">
      <h2 class="text-5xl font-bold text-primary mb-3">
        Encontrá tu lugar ideal
      </h2>
      <p class="text-xl text-gray-600">
        5 opciones únicas diseñadas para el descanso y la comodidad
      </p>
    </div>

    <div class="amenidades-block bg-background rounded-lg p-7 mb-12">
      <h3 class="text-center text-xl font-semibold text-primary mb-6">
        Lo que todas incluyen
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        {#each amenidades as item (item.label)}
          <div class="flex flex-col items-center">
            <svelte:component this={item.icon} class="w-6 h-6 text-accent mb-2" />
            <p class="text-center text-sm text-gray-700">{item.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div bind:this={cardsRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {#each unidades as unidad (unidad.id)}
        <div class="card-unit bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div class="relative h-40 overflow-hidden bg-gray-200">
            <img
              src={unidad.foto}
              alt={unidad.nombre}
              class="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>

          <div class="p-4 flex flex-col justify-start h-fit sm:justify-between sm:h-48">
            <h3 class="text-xl font-bold text-primary mb-2">
              {unidad.nombre}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {unidad.capacidad}
            </p>
            <button
              on:click={() => abrirModal(unidad.id)}
              class="w-full bg-accent hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded transition-colors flex items-center justify-center gap-1 text-sm"
            >
              Ver Detalles
              <svelte:component this={ChevronRight} class="w-4 h-4" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>

  {#if modalAbierto && unidadActual}
    <div 
      class="fixed w-full h-full inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 z-50"
    >
      <button on:click={cerrarModal} class="bg-black bg-opacity-50 w-full h-full absolute z-10">Cerrar Modal</button>
      <div bind:this={modalRef} class="bg-background rounded-lg w-full md:max-w-2xl max-h-[90vh] md:max-h-[95vh] overflow-y-auto overflow-x-hidden scroll-smooth z-30">

        <div class="flex justify-between items-center p-5 md:p-7 border-b border-gray-200 sticky top-0 bg-background z-20">
          <h2 class="text-2xl md:text-3xl font-bold text-primary">
            {unidadActual.nombre}
          </h2>
          <button
            on:click={cerrarModal}
            class="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0 ml-2"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <div class="p-5 md:p-7 space-y-6">

          <!-- Slider de fotos -->
          <div 
            class="relative h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={unidadActual.galeria[fotoActual]}
              alt={`Foto ${fotoActual + 1}`}
              class="w-full h-full object-cover transition-opacity duration-300 z-10"
            />
            <button
              on:touchstart={handleTouchStart}
              on:touchend={handleTouchEnd}
              on:click={toggleSliderFullscreen}
              on:click|stopPropagation
              class="z-20 w-full h-full absolute left-0 top-1/2 transform opacity-5 -translate-y-1/2 bg-red-500"
            >
            </button>
            <button
              on:click|stopPropagation={fotoAnterior}
              disabled={fotoActual === 0}
              class={`z-40 absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-2 rounded-full transition-all ${
                fotoActual === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <ChevronLeft class="w-6 h-6" />
            </button>

            <button
              on:click|stopPropagation={fotoSiguiente}
              disabled={fotoActual === unidadActual.galeria.length - 1}
              class={`z-40 absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-2 rounded-full transition-all ${
                fotoActual === unidadActual.galeria.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <ChevronRight class="w-6 h-6" />
            </button>

            <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">
              {fotoActual + 1} / {unidadActual.galeria.length}
            </div>

            <div class="absolute top-3 left-0 ml-2 transform text-white text-xs bg-black bg-opacity-40 px-2 py-1 rounded">
              Desliza para más fotos
            </div>

            <div class="absolute top-3 right-0 mr-2 text-white text-xs bg-black bg-opacity-40 px-2 py-1 rounded">
              Click para ampliar
            </div>
          </div>

          <!-- Miniaturas -->
          <div class="flex gap-2 overflow-x-auto pb-2">
            {#each unidadActual.galeria as foto, idx (idx)}
              <button
                on:click={() => (fotoActual = idx)}
                class={`w-14 h-14 md:w-16 md:h-16 rounded overflow-hidden border-2 transition-colors flex-shrink-0 ${
                  fotoActual === idx
                    ? 'border-accent'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={foto}
                  alt={`Miniatura ${idx + 1}`}
                  class="w-full h-full object-cover"
                />
              </button>
            {/each}
          </div>

          <div class="bg-background p-5 rounded-lg border-l-4 border-accent">
            <p class="text-gray-700 text-lg italic">
              "{unidadActual.descripcion}"
            </p>
          </div>

          <div class="space-y-5">
            <div>
              <h4 class="text-2xl font-bold text-primary mb-2">
                Capacidad
              </h4>
              <p class="text-lg text-gray-700">{unidadActual.detalles.capacidad}</p>
            </div>

            <div>
              <h4 class="text-2xl font-bold text-primary mb-2">
                Distribución
              </h4>
              <p class="text-lg text-gray-700">
                {unidadActual.detalles.distribucion}
              </p>
            </div>

            <div>
              <h4 class="text-2xl font-bold text-primary mb-3">
                Equipamiento
              </h4>
              <ul class="space-y-3">
                {#each unidadActual.detalles.equipamiento as item (item)}
                  <li class="flex items-center gap-3">
                    <span class="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                    <span class="text-lg text-gray-700">{item}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

          <div class="bg-gray-100 p-5 rounded-lg space-y-3">
            <h4 class="font-bold text-base text-gray-800">Especificaciones técnicas</h4>
            <p class="text-base text-gray-700">
              <strong>Climatización:</strong> Ventiladores de alta potencia (Sin aire)
            </p>
            <p class="text-base text-gray-700">
              <strong>Servicios:</strong> WiFi de alta velocidad, TV por cable
            </p>
            <p class="text-base text-gray-700">
              <strong>Check-out:</strong> Recordá que recibimos la unidad limpia tal como se entrega
            </p>
          </div>

          <button class="w-full bg-accent hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg">
            Consultar por esta unidad
          </button>

          <div class="flex gap-3 pt-2">
            <button
              on:click={unidadAnterior}
              disabled={indiceActual === 0}
              class={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-colors text-base ${
                indiceActual === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft class="w-4 h-4" />
              Anterior
            </button>
            <button
              on:click={siguienteUnidad}
              disabled={indiceActual === unidades.length - 1}
              class={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-colors text-base ${
                indiceActual === unidades.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Siguiente
              <ChevronRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}

  {#if sliderFullscreen && unidadActual}
    <div class="fixed w-full h-full inset-0 bg-black z-[100] flex items-center justify-center">
      <button
        on:click={toggleSliderFullscreen}
        class="absolute top-4 right-4 text-white hover:text-gray-300 z-[101]"
      >
        <X class="w-10 h-10" />
      </button>
      <button
              on:touchstart={handleTouchStart}
              on:touchend={handleTouchEnd}
              on:click|stopPropagation
              class="sm:z-0 z-20 w-full h-full absolute left-0 top-1/2 transform opacity-5 -translate-y-1/2 bg-red-500"
            >
            </button>
      <div class="relative w-full h-full flex items-center justify-center">
        <img
          src={unidadActual.galeria[fotoActual]}
          alt={`Foto ${fotoActual + 1}`}
          class="max-w-full max-h-full object-contain"
        />

        <button
          on:click|stopPropagation={fotoAnterior}
          disabled={fotoActual === 0}
          class={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-3 rounded-full transition-all ${
            fotoActual === 0 ? 'md:opacity-10 opacity-0 cursor-not-allowed' : 'md:opacity-100 opacity-0'
          }`}
        >
          <ChevronLeft class="w-8 h-8" />
        </button>

        <button
          on:click|stopPropagation={fotoSiguiente}
          disabled={fotoActual === unidadActual.galeria.length - 1}
          class={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-3 rounded-full transition-all ${
            fotoActual === unidadActual.galeria.length - 1 ? 'md:opacity-10 opacity-0 cursor-not-allowed' : 'md:opacity-100 opacity-0'
          }`}
        >
          <ChevronRight class="w-8 h-8" />
        </button>

        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-full">
          {fotoActual + 1} / {unidadActual.galeria.length}
        </div>
      </div>
    </div>
  {/if}
</section>