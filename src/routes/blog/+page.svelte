<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	<title>Blog | My Blog</title>
</svelte:head>

<div class="p-4">
	<h1 class="mb-4 text-center text-2xl font-bold">Blog</h1>
	<ul>
		{#each data.posts as { id, title }}
			<li><a href={`/blog/${id}`}>{title}</a></li>
		{/each}
	</ul>
</div>
