<script>
	import { onMount } from 'svelte';
	import { animate, stagger } from 'motion';
	import { X, Wifi, Scroll, Tv, Fan, Car, Flame, Refrigerator, ChevronRight, ChevronLeft, Bed, WashingMachine } from 'lucide-svelte';
	import { unidades } from '$lib/stores/unidadesStore';
    let { 
    unidadSeleccionada = $bindable(''),
    unidadesFiltradas = null // Nueva prop para recibir datos filtrados
	} = $props();

	let datosAMostrar = $derived(unidadesFiltradas ? unidadesFiltradas : $unidades);
    // Desestructuramos las props y asignamos el valor del store como default
	let modalAbierto = $state(null);
	let fotoActual = $state(0);
	let sliderFullscreen = $state(false);
	let seccionRef = $state();
	let cardsRef = $state();
	let modalRef = $state();
	let touchStartX = 0; // No necesita ser $state si no se usa en el HTML
	// --- ESTADO (Runes) ---
	let isDown = false;
	let startX;
	let scrollLeft;
	let sliderRef = $state(); // Referencia al div contenedor

	function handleMouseDown(e) {
		if (!sliderRef) return; // Protección
		isDown = true;
		startX = e.pageX - sliderRef.offsetLeft;
		scrollLeft = sliderRef.scrollLeft;
	}

	function handleMouseLeave() {
		isDown = false;
	}

	function handleMouseUp() {
		isDown = false;
	}

	function handleMouseMove(e) {
		if (!isDown || !sliderRef) return; // Protección
		e.preventDefault();
		const x = e.pageX - sliderRef.offsetLeft;
		const walk = (x - startX) * 2;
		sliderRef.scrollLeft = scrollLeft - walk;
	}

	

	const amenidades = [
		{ icon: Wifi, label: 'Internet WiFi' },
		{ icon: Tv, label: 'TV por Cable' },
		{ icon: Car, label: 'Cochera' },
		{ icon: Flame, label: 'Asador' },
		{ icon: Scroll, label: 'Sábanas, toallas y toallones' },
		{ icon: Refrigerator, label: 'Heladera' },
		{ icon: Fan, label: 'Ventilador' },
	];

	// --- LÓGICA DERIVADA (Runes) ---
	let unidadActual = $derived(datosAMostrar.find(u => u.id === modalAbierto));
	let indiceActual = $derived(datosAMostrar.findIndex(u => u.id === modalAbierto));

	// --- FUNCIONES ---
	function abrirModal(id) {
        modalAbierto = id;
        fotoActual = 0;
        document.body.style.overflow = 'hidden';
        
        // Empujamos un estado al historial para interceptar el botón "Atrás"
        history.pushState({ modalOpen: true }, '');
    }

    function cerrarModal() {
        if (!modalAbierto) return; // Evita bucles si ya está cerrado
        modalAbierto = null;
        document.body.style.overflow = 'auto';
        
        // Si el usuario cerró el modal manualmente (X o click fuera),
        // quitamos el estado del historial para que el "Atrás" no lo saque de la web después
        if (history.state?.modalOpen) {
            history.back();
        }
    }

	function siguienteUnidad() {
		if (indiceActual < datosAMostrar.length - 1) {
			modalAbierto = datosAMostrar[indiceActual + 1].id;
			fotoActual = 0;
			if (modalRef) modalRef.scrollTop = 0;
		}
	}

	function unidadAnterior() {
		if (indiceActual > 0) {
			modalAbierto = datosAMostrar[indiceActual - 1].id;
			fotoActual = 0;
			if (modalRef) modalRef.scrollTop = 0;
		}
	}

	function fotoAnterior() {
		if (fotoActual > 0) fotoActual--;
	}

	function fotoSiguiente() {
		if (unidadActual && fotoActual < unidadActual.galeria.length - 1) {
			fotoActual++;
		}
	}

	function toggleSliderFullscreen() {
        sliderFullscreen = !sliderFullscreen;
        
        if (sliderFullscreen) {
            history.pushState({ fullscreen: true }, '');
            // BLOQUEA el scroll cuando entra a pantalla completa
            document.body.style.overflow = 'hidden';
			// Bloquea el pull-to-refresh y el rebote
			document.body.style.overscrollBehavior = 'none';
        } else {
            if (history.state?.fullscreen) history.back();
            // REVIERTE el bloqueo al salir. 
            // Si el modal sigue abierto, lo mantenemos en 'hidden'
            document.body.style.overflow = modalAbierto ? 'hidden' : 'auto';
			// Restauramos el comportamiento normal
			document.body.style.overscrollBehavior = 'auto';
        }
    }

	function handleTouchStart(e) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e) {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;
		if (Math.abs(diff) > 50) {
			diff > 0 ? fotoSiguiente() : fotoAnterior();
		}
	}

	function irAlFormulario() {
		if (!unidadActual) return;

		const idParaSeleccionar = unidadActual.id; // Guardamos el ID antes de cerrar
		cerrarModal();

		// Asignamos el ID a la prop bindable
		unidadSeleccionada = idParaSeleccionar;

		// Aumentamos un poco el delay para asegurar que el DOM esté listo
		setTimeout(() => {
			const formularioElement = document.getElementById('contacto');
			if (formularioElement) {
				formularioElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			} else {
				console.error('No se encontró el elemento #contacto');
			}
		}, 200);
	}

	onMount(() => {
		// --- Manejo del botón Atrás ---
		const handlePopState = (event) => {
        if (sliderFullscreen) {
            sliderFullscreen = false;
            // Si el modal sigue atrás, mantenemos el scroll bloqueado
            document.body.style.overflow = modalAbierto ? 'hidden' : 'auto';
			document.body.style.overscrollBehavior = 'auto'; // Limpiar aquí
        } else if (modalAbierto) {
            modalAbierto = null;
            document.body.style.overflow = 'auto'; // Liberamos el scroll total
			document.body.style.overscrollBehavior = 'auto'; // Y aquí
        }
    };

		window.addEventListener('popstate', handlePopState);

		if (seccionRef) {
			const header = seccionRef.querySelector('.header-section');
			if (header) animate(header, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });

			const amenidadesBlock = seccionRef.querySelector('.amenidades-block');
			if (amenidadesBlock)
				animate(
					amenidadesBlock,
					{ opacity: [0, 1], scale: [0.95, 1] },
					{ duration: 0.6, delay: 0.2 }
				);
		}

		if (cardsRef) {
			const cards = cardsRef.querySelectorAll('.card-unit');
			animate(cards, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.1) });
		}

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	});
</script>

<section id="unidades" bind:this={seccionRef} class="py-20 px-4 bg-white">
	<div class="max-w-6xl mx-auto">
		<div class="header-section text-center mb-12">
			<h2 class="text-5xl font-bold text-primary mb-3">Encontrá tu lugar ideal</h2>
			<p class="text-xl text-gray-600">
				5 opciones únicas diseñadas para el descanso y la comodidad
			</p>
		</div>

		<div class="amenidades-block bg-background rounded-xl p-7 mb-12">
			<h3 class="text-center text-xl font-semibold text-primary mb-6">Tenes a tu disposición</h3>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
				{#each amenidades as item (item.label)}
					<div class="flex flex-col items-center">
						<item.icon class="w-6 h-6 text-accent mb-2" />
						<p class="text-center font-medium font-montserrat text-sm text-gray-700 text-balance">{item.label}</p>
					</div>
				{/each}
			</div>
		</div>

		<div bind:this={cardsRef} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each datosAMostrar as unidad (unidad.id)}
				<div
					class="card-unit aspect-[9/12] w-full h-auto min-h-80 rounded-2xl relative bg-white border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
				>
					<div class="relative z-10 w-full h-full object-cover overflow-hidden bg-gray-200">
						<img
							src={unidad.foto}
							alt={unidad.nombre}
							class="w-full h-full object-cover hover:scale-105 transition-transform"
						/>
					</div>

					<div
						class="absolute bg-gradient-to-tr from-black via-transparent to-transparent top-0 left-0 z-30 p-4 h-full w-full flex flex-col justify-end items-start"
					>
						<h3 class="text-xl font-bold text-background mb-2 text-balance">
							{unidad.nombre}
						</h3>
						<p class="text-sm text-background mb-4">
							{unidad.capacidad}
						</p>
						<button
							onclick={() => abrirModal(unidad.id)}
							class="w-full rounded-xl bg-accent hover:bg-orange-700 text-white font-semibold py-3 px-3 transition-colors flex items-center justify-center gap-1 text-base"
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
			class="fixed w-full h-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
		>
			<button onclick={cerrarModal} class="bg-black bg-opacity-50 w-full h-full absolute z-10"
				>Cerrar Modal</button
			>
			<div
				bind:this={modalRef}
				class="overflow-y-auto scrollbar-thick scrollbar-thumb-accent scrollbar-track-secondary/20 bg-background md:max-w-2xl w-full h-full max-h-full sm:max-h-[90vh] rounded-none md:rounded-lg md:max-h-[95vh] overflow-x-hidden scroll-smooth z-30"
			>
				<div
					class="flex z-50 justify-between items-center p-5 md:p-7 border-b border-gray-200 sticky top-0 bg-background"
				>
					<h2 class="text-2xl md:text-3xl font-bold text-primary">
						{unidadActual.nombre}
					</h2>
					<button
						onclick={cerrarModal}
						class="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0 ml-2"
					>
						<X class="w-8 h-8" />
					</button>
				</div>

				<div class="space-y-6">
					<!-- Slider de fotos -->
					<div class="relative h-64 md:h-80 bg-gray-200 overflow-hidden group cursor-pointer">
						<img
							src={unidadActual.galeria[fotoActual]}
							alt={`Foto ${fotoActual + 1}`}
							class="w-full h-full object-cover transition-opacity duration-300 z-10"
						/>
						<button
							ontouchstart={handleTouchStart}
							ontouchend={handleTouchEnd}
							onclick={toggleSliderFullscreen}
							class="z-20 w-full h-full absolute left-0 top-1/2 transform opacity-5 -translate-y-1/2 bg-red-500"
						>
						</button>
						<button
							onclick={fotoAnterior}
							disabled={fotoActual === 0}
							class={`z-40 absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-2 rounded-full transition-all ${
								fotoActual === 0
									? 'opacity-30 cursor-not-allowed'
									: 'opacity-0 group-hover:opacity-100'
							}`}
						>
							<ChevronLeft class="w-6 h-6" />
						</button>

						<button
							onclick={fotoSiguiente}
							disabled={fotoActual === unidadActual.galeria.length - 1}
							class={`z-40 absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-2 rounded-full transition-all ${
								fotoActual === unidadActual.galeria.length - 1
									? 'opacity-30 cursor-not-allowed'
									: 'opacity-0 group-hover:opacity-100'
							}`}
						>
							<ChevronRight class="w-6 h-6" />
						</button>

						<div
							class="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full"
						>
							{fotoActual + 1} / {unidadActual.galeria.length}
						</div>

						<div
							class="absolute top-3 left-0 ml-2 transform text-white text-xs bg-black bg-opacity-40 px-2 py-1 rounded"
						>
							Desliza para más fotos
						</div>

						<div
							class="absolute top-3 right-0 mr-2 text-white text-xs bg-black bg-opacity-40 px-2 py-1 rounded"
						>
							Click para ampliar
						</div>
					</div>

					<!-- Miniaturas -->
					<div
						bind:this={sliderRef}
						onmousedown={handleMouseDown}
						onmouseleave={handleMouseLeave}
						onmouseup={handleMouseUp}
						onmousemove={handleMouseMove}
						class="relative scroll-smooth flex gap-2 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing select-none no-scrollbar"
					>
						{#each unidadActual.galeria as foto, idx (idx)}
							<button
								onclick={() => (fotoActual = idx)}
								class={`${idx === 0 ? 'ml-4' : ''} w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${
									fotoActual === idx ? 'border-accent' : 'border-gray-300 hover:border-gray-400'
								}
									${idx === unidadActual.galeria.length - 1 ? 'mr-4' : ''}
								`}
							>
								<img src={foto} alt={`Miniatura ${idx + 1}`} class="w-full h-full object-cover" />
							</button>
						{/each}
					</div>
					<div class="flex flex-col px-4 sm:px-6 gap-8 pb-4 sm:pb-8">
						<div class="bg-background p-2 rounded-lg border-l-4 border-accent">
							<p class="text-gray-700 text-lg italic">
								"{unidadActual.descripcion}"
							</p>
						</div>

						<div class="space-y-5">
							<div>
								<h4 class="text-lg font-bold text-primary mb-2">Capacidad</h4>
								<p class="text-base text-gray-700">{unidadActual.detalles.capacidad}</p>
							</div>

							<div>
								<h4 class="text-lg font-bold text-primary mb-2">Distribución</h4>
								<p class="text-base text-gray-700">
									{unidadActual.detalles.distribucion}
								</p>
							</div>

							<div>
								<h4 class="text-lg font-bold text-primary mb-3">Equipamiento</h4>
								<ul class="space-y-3">
									{#each unidadActual.detalles.equipamiento as item (item)}
										<li class="flex items-center gap-3">
											<span class="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
											<span class="text-base text-gray-700">{item}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<div class="bg-secondary/20 p-4 rounded-lg space-y-3">
							<h4 class="font-bold text-lg text-gray-800">Especificaciones técnicas</h4>
							<p class="text-base text-gray-700">
								<strong>Climatización:</strong> Frescura natural y ventiladores de alta potencia 
							</p>
							<p class="text-base text-gray-700">
								<strong>Servicios:</strong> WiFi Internet y TV por cable
							</p>
							<p class="text-base text-gray-700">
								<strong>Check-out:</strong> Compromiso de entrega limpia (ayudamos a mantener la tarifa
								baja para vos)
							</p>
						</div>

						<div class="flex flex-col gap-3">
							<button
								onclick={irAlFormulario}
								class="w-full bg-accent hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
							>
								Consultar por esta unidad
							</button>

							<div class="flex gap-3">
								<button
									onclick={unidadAnterior}
									disabled={indiceActual === 0}
									class={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-colors text-base ${
										indiceActual === 0
											? 'bg-gray-200 text-gray-400 cursor-not-allowed'
											: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
									}`}
								>
									<ChevronLeft class="w-4 h-4" />
									Anterior Unidad
								</button>
								<button
									onclick={siguienteUnidad}
						disabled={indiceActual === datosAMostrar.length - 1}
									class={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-colors text-base ${
										indiceActual === datosAMostrar.length - 1
											? 'bg-gray-200 text-gray-400 cursor-not-allowed'
											: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
									}`}
								>
									Siguiente Unidad
									<ChevronRight class="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}

	{#if sliderFullscreen && unidadActual}
		<div class="fixed h-screen w-screen touch-none inset-0 bg-black z-[100] flex items-center justify-center overflow-y-hidden">
			<button
				onclick={toggleSliderFullscreen}
				class="absolute top-4 right-4 text-white hover:text-gray-300 z-[101]"
			>
				<X class="w-10 h-10" />
			</button>
			<button
				ontouchstart={handleTouchStart}
				ontouchend={handleTouchEnd}
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
					onclick={fotoAnterior}
					disabled={fotoActual === 0}
					class={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-3 rounded-full transition-all ${
						fotoActual === 0
							? 'md:opacity-10 opacity-0 cursor-not-allowed'
							: 'md:opacity-100 opacity-0'
					}`}
				>
					<ChevronLeft class="w-8 h-8" />
				</button>

				<button
					onclick={fotoSiguiente}
					disabled={fotoActual === unidadActual.galeria.length - 1}
					class={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 disabled:bg-opacity-20 text-white p-3 rounded-full transition-all ${
						fotoActual === unidadActual.galeria.length - 1
							? 'md:opacity-10 opacity-0 cursor-not-allowed'
							: 'md:opacity-100 opacity-0'
					}`}
				>
					<ChevronRight class="w-8 h-8" />
				</button>

				<div
					class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-full"
				>
					{fotoActual + 1} / {unidadActual.galeria.length}
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	/* Personalización del scroll para Webkit */
	div::-webkit-scrollbar {
		width: 6px;
	}

	div::-webkit-scrollbar-track {
		/* Usamos el color base sin el modificador de opacidad complejo */
		background: theme('colors.secondary');
		border-radius: 10px;
		opacity: 0.1;
	}

	div::-webkit-scrollbar-thumb {
		/* Accedemos al color de acento de forma directa */
		background: theme('colors.accent');
		border-radius: 10px;
	}

	div::-webkit-scrollbar-thumb:hover {
		/* Si no tienes .dark, Tailwind por defecto no lo encontrará */
		filter: brightness(0.9);
	}

	/* Soporte para Firefox */
	div {
		scrollbar-width: auto;
		scrollbar-color: theme('colors.accent') transparent;
	}

	.no-scrollbar {
		-ms-overflow-style: none; /* IE y Edge */
		scrollbar-width: none; /* Firefox */
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none; /* Chrome, Safari y Opera */
	}
</style>
