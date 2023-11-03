<script>
	/** @type {import('./$types').PageData}*/
	export let data;
	import PackageCard from '$lib/components/packageCard.svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import Bus from 'carbon-pictograms-svelte/lib/Bus.svelte';
</script>

<main>
	<Grid>
		<Row>
			<Column>
				<h1>Paquetes</h1>
				<p>Aqui se muestran todos los paquetes disponibles para la venta</p>
			</Column>

			<Column class="flex justify-end">
				<Bus />
			</Column>
		</Row>
	</Grid>
	<div class="flex flex-wrap gap-4 mt-8">
		{#each data.projects as paquete}
			<PackageCard project={paquete} />
		{/each}
	</div>
</main>
