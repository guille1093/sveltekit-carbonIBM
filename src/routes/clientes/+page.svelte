<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main>
	<h1>Clientes</h1>
	{#each data.clientes as cliente}
		<p>{cliente.nombre}</p>
	{/each}
</main>
