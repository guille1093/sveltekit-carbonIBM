<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Ventas</h1>

{#if data && data.total > 0}
	{#each data.ventas as venta}
		<p>{venta.id} - {venta.fecha} - {venta.total}</p>
	{/each}
	<p>Hay {data.total} ventas</p>
{/if}

{#if data && data.total === 0}
	<p>No hay ventas</p>
{/if}

{#if data && data.total === undefined}
	<p>Cargando...</p>
{/if}
