<script>
	import { onMount } from 'svelte';
	import { unidades } from '$lib/stores/unidadesStore';
	const guideData = {
    title: "Compromiso de Convivencia y Descanso",
    subtitle: "Cabañas en Villa Santarelli, Santa Rosa de Calamuchita",
    intro: "Para nosotros, tu descanso es lo más importante. Al elegirnos, te sumás a una propuesta de paz, respeto y cercanía con la naturaleza. Para garantizar una excelente estadía para todos, compartimos nuestras normas de convivencia:",
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
	let { unidadSeleccionada = $bindable() } = $props();
	// 🎯 DATOS CONFIGURABLES (Constantes, no necesitan Runes)
	const contactData = {
		title: '¿Consultar disponibilidad?',
		subtitle: 'Completá los datos y Cristian te responderá por WhatsApp a la brevedad',
		whatsappNumber: '5491140876426',
		ownerImage: '/fotos/dueño.jpeg',
		ownerText: 'Te respondo personalmente',
		petOptions: ['No traigo mascota', 'Traigo mascota pequeña (sujeto a política)']
	};
	// --- ESTADO REACTIVO (Runes) ---
	let formData = $state({
		name: '',
		unit: '',
		dateFrom: '',
		dateTo: '',
		adults: 2,
		children: 0,
		pet: '',
		acceptPolicies: false
	});

	// Referencias a los nodos de los inputs
	let nodeFrom = $state();
	let nodeTo = $state();
	let showPolíticas = $state(false); // Svelte 5 Rune
	let aceptoPolíticas = $state(false);

	function toggleModal() {
		showPolíticas = !showPolíticas;
		document.body.style.overflow = showPolíticas ? 'hidden' : 'auto';
	}
	// --- LÓGICA ---
	function generateWhatsAppMessage() {
		const message = `¡Hola Cristian!
Me llamo *${formData.name}* y vi la web. 
Consulto por: ${unidadSeleccionada ? $unidades.find((u) => u.id === unidadSeleccionada).nombre : 'Indistinto'}
Fechas: *del ${formData.dateFrom} al ${formData.dateTo}*
Huéspedes: ${formData.adults} adultos y ${formData.children} niños
Mascota: ${formData.pet}
---
He leído y acepto las Políticas de Estancia.`;

		return encodeURIComponent(message);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (!formData.acceptPolicies) {
			alert('Debes aceptar las Políticas de Estancia para continuar.');
			return;
		}

		if (!formData.name || !formData.unit || !formData.dateFrom || !formData.dateTo) {
			alert('Por favor completá todos los campos requeridos.');
			return;
		}

		const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${generateWhatsAppMessage()}`;
		window.open(whatsappUrl, '_blank');
	}

	onMount(() => {
		// Inicialización de Flatpickr vinculada al estado de Runes
		const fpFrom = flatpickr(nodeFrom, {
			minDate: 'today',
			altInput: true,
			altFormat: 'd/m/Y',
			dateFormat: 'Y-m-d',
			locale: 'es',
			onChange: (selectedDates, dateStr) => {
				formData.dateFrom = dateStr;
				fpTo.set('minDate', dateStr);
			}
		});

		const fpTo = flatpickr(nodeTo, {
			minDate: 'today',
			altInput: true,
			altFormat: 'd/m/Y',
			dateFormat: 'Y-m-d',
			locale: 'es',
			onChange: (selectedDates, dateStr) => {
				formData.dateTo = dateStr;
			}
		});
	});
</script>

<section
	id="contacto"
	class="w-full bg-primary py-section-mobile md:py-section-desktop !pb-0 sm:!pb-0"
>
	<div class="max-w-3xl mx-auto px-4 md:px-8">
		<div class="w-full flex flex-row justify-center items-center mb-4">
			<div class="inline-block mx-auto px-5 py-2 bg-accent/90 backdrop-blur-sm rounded-full mb-2">
				<p class="text-white text-center font-semibold tracking-wide text-sm md:text-base">
					Cabaña Los 4 Elementos
				</p>
			</div>
		</div>
		<!-- Título y Subtítulo -->
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-semibold text-white mb-4 font-montserrat">
				{contactData.title}
			</h2>
			<p class="text-xl md:text-2xl font-medium text-secondary font-montserrat">
				{contactData.subtitle}
			</p>
		</div>

		<!-- Foto del Propietario -->
		<div class="flex items-center justify-center gap-4 mb-8">
			<img
				src={contactData.ownerImage}
				alt="Cristian - Propietario"
				class="w-16 h-16 rounded-full object-cover border-4 border-accent shadow-sm"
			/>
			<p class="text-lg font-medium text-white font-opensans">
				{contactData.ownerText}
			</p>
		</div>

		<!-- Formulario -->
		<form
			onsubmit={handleSubmit}
			id="form_contact"
			class="bg-white rounded-2xl px-4 py-5 md:p-8 shadow-sm space-y-6"
		>
			<!-- Campo: Nombre -->
			<div>
				<label for="name" class="block text-lg font-medium text-primary mb-2 font-montserrat">
					Nombre *
				</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
					placeholder="Tu nombre completo"
				/>
			</div>

			<!-- Campo: Unidad de Interés -->
			<div>
				<label for="unit" class="block text-lg font-medium text-primary mb-2 font-montserrat">
					¿Qué unidad te gustaría consultar? (Sujeto a disponibilidad)
				</label>
				<select
					id="unit"
					bind:value={unidadSeleccionada}
					required
					class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
				>
					<option value="" disabled selected>Seleccioná una opción</option>
					{#each $unidades as unidad}
						<option value={unidad.id}>{unidad.nombre}</option>
					{/each}
					<option value="9">Indistinto</option>
				</select>
			</div>

			<!-- Campos: Fechas -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label for="dateFrom" class="block text-lg font-medium text-primary mb-2 font-montserrat">
						Desde *
					</label>
					<input
						bind:this={nodeFrom}
						placeholder="Seleccioná fecha"
						required
						class="w-full cursor-default px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans bg-white"
					/>
				</div>
				<div>
					<label for="dateTo" class="block text-lg font-medium text-primary mb-2 font-montserrat">
						Hasta *
					</label>
					<input
						bind:this={nodeTo}
						placeholder="Seleccioná fecha"
						required
						class="w-full cursor-default px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans bg-white"
					/>
				</div>
			</div>

			<!-- Campos: Huéspedes -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label for="adults" class="block text-lg font-medium text-primary mb-2 font-montserrat">
						Adultos
					</label>
					<input
						type="number"
						id="adults"
						bind:value={formData.adults}
						min="1"
						max="10"
						class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
					/>
				</div>
				<div>
					<label for="children" class="block text-lg font-medium text-primary mb-2 font-montserrat">
						Niños
					</label>
					<input
						type="number"
						id="children"
						bind:value={formData.children}
						min="0"
						max="10"
						class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
					/>
				</div>
			</div>

			<!-- Campo: Mascota -->
			<div>
				<label for="pet" class="block text-lg font-medium text-primary mb-2 font-montserrat">
					Mascota
				</label>
				<select
					id="pet"
					bind:value={formData.pet}
					class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
				>
					<option value="" disabled selected>Selecciona una Opcion</option>
					{#each contactData.petOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>

			<!-- Checkbox: Aceptación de Políticas -->
			<div class="flex items-center gap-2 mt-4">
				<input
					type="checkbox"
					id="policies"
					bind:checked={formData.acceptPolicies}
					required
					class="w-4 h-4 text-emerald-600"
				/>
				<label for="policies" class="text-sm text-gray-600">
					He leído y acepto las
					<button
						type="button"
						onclick={toggleModal}
						class="text-emerald-700 underline font-semibold hover:text-emerald-900"
					>
						Políticas de Estancia
					</button>
				</label>
			</div>

			<!-- Botón de Envío -->
			<button
				type="submit"
				class="w-full px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 bg-accent text-white rounded-2xl shadow-sm hover:shadow-lg font-montserrat text-lg flex items-center justify-center gap-2"
			>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
					/>
				</svg>
				Enviar consulta por WhatsApp
			</button>
		</form>
		{#if showPolíticas}
			<div
				class="fixed inset-0 h-screen w-screen top-0 left-0 z-50 flex items-center rounded-xl justify-center mt-!0 bg-black/50 backdrop-blur-sm"
			>
				<div
					class="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-2 shadow-2xl relative"
				>
					<button
						onclick={toggleModal}
						aria-label="Cerrar políticas"
						class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					<h3 class="text-2xl font-bold text-center text-emerald-800 mb-4 mt-2">Políticas de Estancia</h3>

					<div class="space-y-4 text-gray-700 text-sm leading-relaxed">
						<div id="convivencia" class="relative w-full">
							<div class="relative max-w-layout mx-auto px-2 md:px-4">
								<!-- Título y Subtítulo -->
								<div class="text-center mb-8">
									<h3 class="text-3xl md:text-4xl font-semibold text-primary mb-2 font-montserrat">
										{guideData.title}
									</h3>
									<p class="text-xl md:text-2xl font-medium text-accent mb-6 font-montserrat">
										{guideData.subtitle}
									</p>
									<p
										class="text-lg leading-relaxed text-primary/70 max-w-4xl mx-auto font-opensans"
									>
										{guideData.intro}
									</p>
								</div>

								<!-- Secciones del Compromiso -->
								<div class="space-y-6 mb-12">
									{#each guideData.sections as section}
										<div
											class="bg-background rounded-2xl p-6 md:p-8 shadow-sm border-2 border-secondary/20"
										>
											<!-- Ícono y Título -->
											<div class="flex items-start gap-4 mb-4">
												<div class="w-10 h-10 flex-shrink-0 text-accent">
													{@html section.icon}
												</div>
												<h4 class="text-xl md:text-2xl font-medium text-primary font-montserrat">
													{section.title}
												</h4>
											</div>

											<!-- Lista de Items -->
											<ul class="space-y-3">
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
							</div>
						</div>
					</div>

					<button
						onclick={toggleModal}
						class="w-full mt-6 bg-emerald-700 text-white py-2 rounded-lg font-bold hover:bg-emerald-800 transition-colors"
					>
						Entendido
					</button>
				</div>
			</div>
		{/if}
	</div>
	<div
		class="w-full flex flex-row justify-center sm:justify-end items-center mt-16 pb-2 px-4 opacity-30 hover:opacity-50 transition-opacity duration-300"
	>
		<a
			class="text-sm text-background text-center"
			href="https://gomezmatias.com.ar"
			target="_blank"
			rel="noopener noreferrer">Diseñado por Matias Gomez</a
		>
	</div>
</section>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
	<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/es.js"></script>
</svelte:head>

<style>
	/* 1. Días del mes siguiente (que marcaste en rojo) con color normal */
	:global(.flatpickr-day.nextMonthDay) {
		color: #3f3f46 !important; /* El color de tu texto primary */
		opacity: 1 !important;
	}

	/* 2. Días anteriores al mínimo (deshabilitados) más grises */
	:global(.flatpickr-day.flatpickr-disabled, .flatpickr-day.prevMonthDay) {
		color: #d1d5db !important; /* Un gris claro (Tailwind gray-300) */
		opacity: 0.5 !important;
		cursor: not-allowed !important;
	}

	/* 3. El día seleccionado (para mantener coherencia con tu marca) */
	:global(.flatpickr-day.selected) {
		background: #ff8c00 !important; /* Tu color accent */
		border-color: #ff8c00 !important;
	}
</style>
