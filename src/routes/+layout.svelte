<script>
	import '../app.css';
	import "@fontsource/montserrat/500.css";
	import "@fontsource/montserrat/600.css";
	import "@fontsource/montserrat/700.css";
	import "@fontsource/open-sans/400.css";
	import "@fontsource/open-sans/600.css";
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}