<script>
	import { onMount } from 'svelte';
	let { unidadSeleccionada = $bindable() } = $props();
    // 🎯 DATOS CONFIGURABLES (Constantes, no necesitan Runes)
    const contactData = {
        title: '¿Consultar disponibilidad?',
        subtitle: 'Completá los datos y Cristian te responderá por WhatsApp a la brevedad',
        whatsappNumber: '5491140876426',
        ownerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
        ownerText: 'Te respondo personalmente',
        units: [
            { id: 1, name: 'Cabaña Familiar El Tilo (5 pers)' },
            { id: 2, name: 'Cabaña Familiar El Sauce (5 pers)' },
            { id: 3, name: 'Departamento Matrimonial Zen (2 pers)' },
            { id: 4, name: 'Departamento Matrimonial Vista (2 pers)' },
            { id: 5, name: 'Estudio Funcional Serrano (2 pers)' }
        ],
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

    // --- LÓGICA ---
    function generateWhatsAppMessage() {
        const message = `¡Hola Cristian!
Me llamo *${formData.name}* y vi la web. 
Consulto por: ${unidadSeleccionada ? contactData.units.find(u => u.id === unidadSeleccionada).name : 'Error No especificada'}
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

<section id="contacto" class="w-full bg-primary py-section-mobile md:py-section-desktop !pb-0 sm:!pb-0">
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
			on:submit={handleSubmit}
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
					Unidad de Interés *
				</label>
				<select
					id="unit"
					bind:value={unidadSeleccionada}
					required
					class="w-full px-4 py-3 rounded-2xl border-2 border-secondary/30 focus:border-accent focus:outline-none transition-all duration-300 font-opensans"
				>
					<option value="" disabled selected>Seleccioná una opción</option>
					{#each contactData.units as unit}
						<option value={unit.id}>{unit.name}</option>
					{/each}
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
			<div class="flex items-start gap-3">
				<input
					type="checkbox"
					id="policies"
					bind:checked={formData.acceptPolicies}
					required
					class="w-5 h-5 mt-1 rounded border-2 border-secondary/30 text-accent focus:ring-accent cursor-pointer"
				/>
				<label
					for="policies"
					class="text-base leading-relaxed text-primary/80 font-opensans cursor-pointer"
				>
					He leído y acepto las <a
						href="/guia-convivencia"
						class="text-accent font-semibold hover:underline">Políticas de Estancia</a
					> (seña, limpieza y convivencia) *
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
	</div>
	<div class="w-full flex flex-row justify-center sm:justify-end items-center mt-16 pb-2 px-4 opacity-30 hover:opacity-50 transition-opacity duration-300">
		<a class="text-sm text-background text-center" href="https://gomezmatias.com.ar" target="_blank" rel="noopener noreferrer">Diseñado por Matias Gomez</a>
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
