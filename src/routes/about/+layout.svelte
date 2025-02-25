<script lang="ts">
	const { children } = $props();
</script>

<div>
	<h1 class="text-2xl font-bold">About</h1>
	<ul>
		<li><a href="/about/team">Team</a></li>
		<li><a href="/about/contacts">Contacts</a></li>
	</ul>
	{@render children()}
</div>
