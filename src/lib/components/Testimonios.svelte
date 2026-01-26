<script>
	import { onMount } from 'svelte';
	import { animate } from 'motion';

	// 🎯 DATOS CONFIGURABLES
	const reviewsData = {
		title: 'Lo que dicen nuestros huéspedes no es casualidad:',
		subtitle: 'La atención, la limpieza, el estilo rústico y la cercanía al río son lo que nos define.',
		rating: {
			score: '4.9',
			maxScore: '5',
			totalReviews: '90+',
			platform: 'Google Maps'
		},
		googleMapsUrl: 'https://maps.app.goo.gl/AytabC6UN8tXm1Sw7',
		reviews: [
			{
				name: 'Analia',
				text: 'Hermosas cabañas, todo limpio y con estilo rustico. El lugar es muy tranquilo y a una cuadra del rio, y cerca del centro. Ideal para ir a relajarte y disfrutar de la Naturaleza.',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/@-32.0694719,-64.5432772,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUM5MWNXTWV3EAE!2m1!1s0x0:0x9e02d3474cdc256a?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D'
			},
			{
				name: 'Gustavo Corrado',
				text: 'Muy lindo todo, atención excelente, bien distribuido los hambientes, limpieza excelente... Recomendable 100 x 100 bien cómodo. Cerca del río y del centro a tan solo 1/2 cuadra del río y 2 y 1/2 cuadra del centro. Una masa💪...😃',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkMlJXbEpObU0xUWtFMVpXNU5iWEIyZDFKMVptYxAB!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CAIQACodChtycF9oOjd2RWlJNmM1QkE1ZW5NbXB2d1J1Zmc%7C0dN06b6-iUn%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=1dc26446-f162-4571-b8cb-b786c46dc585'
			},
			{
				name: 'Martin Pistelli',
				text: 'Maravilloso lugar, el departamento donde nos hospedamos es un lujo, todo moderno y nuevo. Te dan utensilios para que puedas cocinar, la cocina y heladera son nuevas\nPerfecto para relajarse\nUn lugar hermoso donde esta todo cerca, no hay que moverse mucho. Super comodo',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURRb1pLNnJBRRAB!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgMDQoZK6rAE%7CCgwI1Y_BvgYQ-Mq4rgI%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=67a35775-fef2-4b44-938c-630828b820c8'
			},
			{
				name: 'Santiago Sebastian Roth',
				text: 'Cristian un Crack...\nLugar inmejorable a pasos del puente colgante y una paz de noche cosa que ayuda a descansar.\nLas cabañas completísima.\nSi no tenes idea de que ir a recorrer, no dudes en hablar con Cristian!.\nSin duda volveremos a visitar.',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNKeE9PTFRBEAE!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgICJxOOLTA%7CCgwIkNbJpAYQsJC_lgM%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=b90b02d3-2a1b-4efa-963e-34c8ae6cf0d4'
			},
			{
				name: 'Carolina González',
				text: 'Excelente lugar, excelente atención, Cris genio total.\nVolveriamos sin dudarlo.\nNos sentimos como en casa, todos los lugares que nos recomendó fuimos, uno más lindo que otro.\nHasta el prox año Cris!!!!',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURCOGFQMU5REAE!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgIDB8aP1NQ%7CCgwI0Iy1ngYQ6IP-hQM%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=1f75c67f-26c0-48f6-821d-4d96305f9a45'
			},
			{
				name: 'Claudia Pascual',
				text: 'Excelente ubicación, cerca del rio y el puente colgante peatonal. Nos alojamos en el monoambiente. Es muy completo y el complejo está muy bien mantenido. Cristian muy buen anfitrión.',
				stars: 5,
				antiguedad: 'Hace 9 meses',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURJMGZtdzFRRRAB!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgMDI0fmw1QE%7CCgsI1rDgvwYQwPzCbg%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=e0fce4eb-516f-4371-b47c-1ef4496ba217'
			},
			{
				name: 'Emilce Trillini',
				text: 'Pasamos muy lindos días. Estuvimos en la cabaña del frente, para 3. Es pequeña pero para una pareja y un niño está bien. Cálida,  con todo lo necesario. Cochera cubierta. Muy buena ubicación, a media cuadra del rio y puente colgante. Cristian, su dueño super amable y a  disposición en todo momento.',
				stars: 5,
				antiguedad: 'Hace un año',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNfMTlDU0RREAE!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgIC_19CSDQ%7CCgwIhZe1vAYQ0PavzgI%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=693551e3-46bb-4097-bda3-712f7f00d5cc'
			},
			{
				name: 'melanie benitez',
				text: 'Tremenda la belleza del lugar y de las cabañas. Todo es híper moderno y cómodo, la verdad que un lujo\nAdemás está a una cuadra del río y del puente, perfecta ubicación\nLa atención de los dueños es un 10/10, vamos a volver',
				stars: 5,
				antiguedad: 'Hace 10 meses',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURRb2N6cklBEAE!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgMDQoczrIA%7CCgsI8I3BvgYQ-LOnWA%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=a8872048-d4e9-4f3d-ac6b-0779b2dd0581'
			},
			{
				name: 'Celina Ojeda',
				text: 'Hermoso lugar. Súper confortable . Limpio, cuidado. Con todo lo necesario para pasar unas lindas vacaciones. La ubicación excelente. A media cuadra del río. Los dueños siempre atentos a lo que uno pueda necesitar. Lo recomiendo.',
				stars: 5,
				antiguedad: 'Hace 10 meses',
				url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURRNGZHcUNnEAE!2m1!1s0x0:0x9e02d3474cdc256a!3m1!1s2@1:CIHM0ogKEICAgMDQ4fGqCg%7CCgwIyLDBvgYQ-Pz4pAE%7C?coh=277533&entry=tts&g_ep=EgoyMDI2MDEyMS4wIPu8ASoKLDEwMDc5MjA2OUgBUAM%3D&skid=f7dd3f2f-5a25-41f8-b35d-87ce1c512aaa'
			},
		]
	};

	let currentReview = 0;
	let touchStartX = 0;
	let sliderRef;
	let cardRef;

	function nextReview() {
		currentReview = (currentReview + 1) % reviewsData.reviews.length;
	}

	function prevReview() {
		currentReview = (currentReview - 1 + reviewsData.reviews.length) % reviewsData.reviews.length;
	}

	function handleTouchStart(e) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e) {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				nextReview();
			} else {
				prevReview();
			}
		}
	}

	function animateCard() {
		if (cardRef) {
			animate(cardRef, { opacity: [0, 1] }, { duration: 0.5 });
		}
	}

	onMount(() => {
		if (sliderRef) {
			sliderRef.addEventListener('touchstart', handleTouchStart);
			sliderRef.addEventListener('touchend', handleTouchEnd);

			return () => {
				sliderRef.removeEventListener('touchstart', handleTouchStart);
				sliderRef.removeEventListener('touchend', handleTouchEnd);
			};
		}
	});

	$: (currentReview, animateCard());
</script>

<section id="testimonios" class="w-full bg-white py-section-mobile md:py-section-desktop">
	<div class="max-w-layout mx-auto px-4 md:px-8">
		<!-- Título y Subtítulo -->
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-semibold text-primary mb-4 font-montserrat">
				{reviewsData.title}
			</h2>
			<p class="text-xl md:text-2xl font-medium text-primary/70 font-montserrat">
				{reviewsData.subtitle}
			</p>
		</div>

		<!-- Rating General con Logo Google Maps -->
		<div class="flex flex-col items-center mb-12 bg-background rounded-2xl p-8 shadow-sm">
			<!-- Logo Google Maps -->
			<div class="mb-4">
				<svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
						class="fill-background"
						opacity="0.3"
					/>
					<path
						d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
						class="fill-primary"
					/>
				</svg>
			</div>

			<!-- Puntuación -->
			<div class="text-center">
				<div class="flex items-center justify-center gap-2 mb-2">
					<span class="text-5xl font-bold text-primary font-montserrat"
						>{reviewsData.rating.score}</span
					>
					<span class="text-2xl text-primary/60 font-montserrat"
						>/ {reviewsData.rating.maxScore}</span
					>
				</div>

				<!-- Estrellas -->
				<div class="flex justify-center gap-1 mb-2">
					{#each Array(5) as _, i}
						<svg class="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24">
							<path
								d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
							/>
						</svg>
					{/each}
				</div>

				<p class="text-lg text-primary/70 font-opensans">
					Basado en {reviewsData.rating.totalReviews} reseñas verificadas en {reviewsData.rating
						.platform}
				</p>
			</div>
		</div>

		<!-- Slider de Testimonios -->
		<div class="relative max-w-4xl mx-auto" bind:this={sliderRef}>
			<!-- Card del Testimonio -->
			<div
				bind:this={cardRef}
				class="bg-background rounded-2xl p-8 shadow-sm border-2 border-secondary/20 min-h-[280px] flex flex-col justify-between"
			>
				<!-- Estrellas -->

					<div class="flex gap-1 mb-4">
						{#each Array(reviewsData.reviews[currentReview].stars) as _, i}
							<svg class="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/>
							</svg>
						{/each}
					</div>
				<!-- Texto del Testimonio -->
				<p class="text-lg leading-relaxed text-primary mb-6 font-opensans italic">
					"{reviewsData.reviews[currentReview].text}"
				</p>

				<!-- Autor y Verificación -->
				<div class="flex items-center justify-between">
					<p class="font-semibold text-primary font-montserrat">
						— {reviewsData.reviews[currentReview].name}
					</p>
					<a
						target="_blank"
						href={reviewsData.reviews[currentReview].url}
						rel="noopener noreferrer"
						class="text-sm text-primary/60 font-opensans text-balance text-right"
					>
						Reseña verificada en Google Maps
					</a>
				</div>
			</div>

			<!-- Controles del Slider -->
			<div class="flex justify-center gap-4 mt-6">
				<button
					on:click={prevReview}
					class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-all duration-300 shadow-sm"
					aria-label="Testimonio anterior"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<!-- Indicadores -->
				<div class="flex items-center gap-2">
					{#each reviewsData.reviews as _, i}
						<button
							on:click={() => (currentReview = i)}
							class="w-2 h-2 rounded-full transition-all duration-300 {i === currentReview
								? 'bg-accent w-8'
								: 'bg-primary/30'}"
							aria-label="Ir a testimonio {i + 1}"
						></button>
					{/each}
				</div>

				<button
					on:click={nextReview}
					class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-all duration-300 shadow-sm"
					aria-label="Testimonio siguiente"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Botón Ver Todas las Opiniones -->
		<div class="text-center mt-12">
			<a
				href={reviewsData.googleMapsUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 bg-primary text-white rounded-2xl shadow-sm hover:shadow-lg font-montserrat"
			>
				Ver todas las opiniones en Google
			</a>
		</div>
	</div>
</section>
