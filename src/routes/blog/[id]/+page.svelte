<script lang="ts">
	const { data } = $props();
</script>

<svelte:head>
	{#await data.post then value}
		<title>{value.title} | My Blog</title>
	{:catch error}
		<title>Error | My Blog</title>
	{/await}
</svelte:head>

<div class="p-4">
	<a href="/blog">Back to Blog</a>

	{#await data.post}
		<p>loading...</p>
	{:then post}
		<h1 class="mb-4 text-center text-2xl font-bold">{post.title}</h1>
		<p>{post.body}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>
