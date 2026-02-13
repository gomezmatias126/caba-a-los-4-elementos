<script>
	import Hero from '$lib/components/Hero.svelte';
	import FiltroEtico from '$lib/components/FiltroEtico.svelte';
	import Unidades from '$lib/components/Unidades.svelte';
	import GuiaExplorador from '$lib/components/GuiaExplorador.svelte';
	import PoliticasEstancia from '$lib/components/PoliticasEstancia.svelte';
	import Testimonios from '$lib/components/Testimonios.svelte';
	import Formulario from '$lib/components/Formulario.svelte';
	import Whatsapp from '$lib/components/Whatsapp.svelte';
	let unidadSeleccionada = $state('');
</script>

<svelte:head>
	<title>Cabañas Los 4 Elementos | Santa Rosa de Calamuchita</title>
</svelte:head>

<!-- <Unidades2 /> -->
<Whatsapp />
<Hero />
<FiltroEtico />
<Unidades bind:unidadSeleccionada />
<GuiaExplorador />
<PoliticasEstancia />
<Testimonios />
<Formulario bind:unidadSeleccionada />
