<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error!!! | My Blog</title>
</svelte:head>

<h1>{page.error?.message} | {page.status}</h1>
