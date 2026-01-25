<script>
  import { onMount } from 'svelte';
  import { animate } from 'motion';

  // 🎯 DATOS CONFIGURABLES
  const reviewsData = {
    title: "Lo que dicen nuestros huéspedes",
    subtitle: "La tranquilidad y la atención son nuestro sello personal",
    rating: {
      score: "4.9",
      maxScore: "5",
      totalReviews: "50+",
      platform: "Google Maps"
    },
    googleMapsUrl: "https://www.google.com/maps/place/Caba%C3%B1as+Los+4+Elementos/@-32.065556,-64.539444,17z",
    reviews: [
      {
        name: "Cecy Bártoli",
        text: "El lugar es hermoso! Nos alojamos en una cabaña para dos, tipo monoambiente. Con cocina, heladera, microondas, parrillero, galería para el auto. Todo nuevo y bien mantenido. La ducha espectacular y el WiFi anda excelente!!!!",
        stars: 5
      },
      {
        name: "Lidia Mabel Olmos",
        text: "Excelente atención de su dueño Cristian. El lugar muy tranquilo y seguro. Cerca del río y del centro comercial. Las cabañas muy cómodas y limpias.",
        stars: 5
      },
      {
        name: "Ezequiel Garay",
        text: "Muy lindo complejo, buena ubicación. Cerca del centro y del río. Cristian excelente anfitrión, muy atento. Todo muy limpio.",
        stars: 5
      },
      {
        name: "Maira Maggi",
        text: "Hermosas cabañas, muy cómodas y frescas. Ubicación privilegiada a metros del puente colgante y el centro. Cristian un genio, siempre predispuesto.",
        stars: 5
      },
      {
        name: "Jose Luis",
        text: "Un lugar soñado para descansar. Cerca de todo pero con una paz increíble. Las cabañas tienen todo lo necesario y están impecables.",
        stars: 5
      }
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

  $: currentReview, animateCard();
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
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#EA4335"/>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#4285F4" opacity="0.3"/>
        </svg>
      </div>

      <!-- Puntuación -->
      <div class="text-center">
        <div class="flex items-center justify-center gap-2 mb-2">
          <span class="text-5xl font-bold text-primary font-montserrat">{reviewsData.rating.score}</span>
          <span class="text-2xl text-primary/60 font-montserrat">/ {reviewsData.rating.maxScore}</span>
        </div>
        
        <!-- Estrellas -->
        <div class="flex justify-center gap-1 mb-2">
          {#each Array(5) as _, i}
            <svg class="w-6 h-6 text-accent fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          {/each}
        </div>

        <p class="text-lg text-primary/70 font-opensans">
          Basado en {reviewsData.rating.totalReviews} reseñas verificadas en {reviewsData.rating.platform}
        </p>
      </div>
    </div>

    <!-- Slider de Testimonios -->
    <div class="relative max-w-4xl mx-auto" bind:this={sliderRef}>
      
      <!-- Card del Testimonio -->
      <div bind:this={cardRef} class="bg-background rounded-2xl p-8 shadow-sm border-2 border-secondary/20 min-h-[280px] flex flex-col justify-between">
        <!-- Estrellas -->
        <div class="flex gap-1 mb-4">
          {#each Array(reviewsData.reviews[currentReview].stars) as _, i}
            <svg class="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
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
          <p class="text-sm text-primary/60 font-opensans">
            Reseña verificada en Google Maps
          </p>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Indicadores -->
        <div class="flex items-center gap-2">
          {#each reviewsData.reviews as _, i}
            <button
              on:click={() => currentReview = i}
              class="w-2 h-2 rounded-full transition-all duration-300 {i === currentReview ? 'bg-accent w-8' : 'bg-primary/30'}"
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
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