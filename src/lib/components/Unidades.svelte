<script>
  import { onMount } from 'svelte';
  import { animate, stagger, inView } from 'motion';
  import { X, Wifi, Tv, Car, Flame, Shirt, ChevronRight } from 'lucide-svelte';

  let modalAbierto = null;
  let fotoActual = 0;
  let seccionRef;
  let cardsRef;

  const unidades = [
    {
      id: 1,
      nombre: 'Cabaña Familiar Premium',
      capacidad: 'Hasta 5 personas',
      foto: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      tipo: 'Familiar',
      galeria: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
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
      foto: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=300&fit=crop',
      tipo: 'Familiar',
      galeria: [
        'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=600&fit=crop',
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
      foto: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      tipo: 'Matrimonial',
      galeria: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566195992212-5dff2e235eda?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566195992212-5dff2e235eda?w=800&h=600&fit=crop',
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
      foto: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      tipo: 'Matrimonial',
      galeria: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1519167758993-24b0f76a7d6e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1513161455079-7ef1a827e7f7?w=800&h=600&fit=crop',
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
      foto: 'https://images.unsplash.com/photo-1537208185343-c52646db42c3?w=400&h=300&fit=crop',
      tipo: 'Funcional',
      galeria: [
        'https://images.unsplash.com/photo-1537208185343-c52646db42c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1578476326172-270986902471?w=800&h=600&fit=crop',
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

  function abrirModal(id) {
    modalAbierto = id;
    fotoActual = 0;
  }

  function cerrarModal() {
    modalAbierto = null;
  }

  onMount(() => {
    // Animar el título y subtítulo
    const header = seccionRef.querySelector('.header-section');
    if (header) {
      animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });
    }

    // Animar amenidades
    const amenidadesBlock = seccionRef.querySelector('.amenidades-block');
    if (amenidadesBlock) {
      animate(amenidadesBlock, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.6, delay: 0.2 });
    }

    // Animar cards con stagger
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
</script>

<section bind:this={seccionRef} class="py-24 px-4 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="header-section text-center mb-16">
      <h2 class="text-5xl font-bold text-primary mb-4">
        Encontrá tu lugar ideal
      </h2>
      <p class="text-xl text-gray-600">
        5 opciones únicas diseñadas para el descanso y la comodidad
      </p>
    </div>
    <div class="amenidades-block bg-background rounded-lg p-8 mb-16">
      <h3 class="text-center text-lg font-semibold text-primary mb-8">
        Lo que todas incluyen
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
        {#each amenidades as item (item.label)}
          <div class="flex flex-col items-center">
            <svelte:component this={item.icon} class="w-8 h-8 text-accent mb-3" />
            <p class="text-sm text-center text-gray-700">{item.label}</p>
          </div>
        {/each}
      </div>
    </div>

    <div bind:this={cardsRef} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {#each unidades as unidad (unidad.id)}
        <div class="card-unit bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative h-48 overflow-hidden bg-gray-200">
            <img
              src={unidad.foto}
              alt={unidad.nombre}
              class="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-primary mb-2">
              {unidad.nombre}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              {unidad.capacidad}
            </p>
            <button
              on:click={() => abrirModal(unidad.id)}
              class="w-full bg-accent hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
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
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        <div class="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 class="text-3xl font-bold text-primary">
            {unidadActual.nombre}
          </h2>
          <button
            on:click={cerrarModal}
            class="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <svelte:component this={X} class="w-6 h-6" />
          </button>
        </div>


        <div class="p-6 space-y-6">

          <div class="space-y-3">
            <div class="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={unidadActual.galeria[fotoActual]}
                alt={`Foto ${fotoActual + 1}`}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex gap-2">
              {#each unidadActual.galeria as foto, idx (idx)}
                <button
                  on:click={() => (fotoActual = idx)}
                  class={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
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
          </div>


          <div class="bg-background p-4 rounded-lg border-l-4 border-accent">
            <p class="text-gray-700 text-lg italic">
              "{unidadActual.descripcion}"
            </p>
          </div>


          <div class="space-y-4">
            <div>
              <h4 class="text-lg font-bold text-primary mb-2">
                Capacidad
              </h4>
              <p class="text-gray-700">{unidadActual.detalles.capacidad}</p>
            </div>

            <div>
              <h4 class="text-lg font-bold text-primary mb-2">
                Distribución
              </h4>
              <p class="text-gray-700">
                {unidadActual.detalles.distribucion}
              </p>
            </div>

            <div>
              <h4 class="text-lg font-bold text-primary mb-3">
                Equipamiento
              </h4>
              <ul class="space-y-2">
                {#each unidadActual.detalles.equipamiento as item (item)}
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-accent rounded-full"></span>
                    <span class="text-gray-700">{item}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>


          <div class="bg-gray-100 p-4 rounded-lg space-y-3 text-sm">
            <h4 class="font-bold text-gray-800">Especificaciones técnicas</h4>
            <p class="text-gray-700">
              <strong>Climatización:</strong> Ventiladores de alta potencia (Sin aire)
            </p>
            <p class="text-gray-700">
              <strong>Servicios:</strong> WiFi de alta velocidad, TV por cable
            </p>
            <p class="text-gray-700">
              <strong>Check-out:</strong> Recordá que recibimos la unidad limpia tal como se entrega
            </p>
          </div>


          <button class="w-full bg-accent hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg">
            Consultar por esta unidad
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>