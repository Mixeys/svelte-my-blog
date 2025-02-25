<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
