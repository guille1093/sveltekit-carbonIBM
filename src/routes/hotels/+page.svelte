<script>
	//IMPORTS
	import CreateModal from './CreateModal.svelte';
	import DataTable from './DataTable.svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import Apartment from 'carbon-pictograms-svelte/lib/Apartment.svelte';

	//EXPORTS
	export let data;

	//VARIABLES REACTIVAS
	let open = false;
</script>

<main>
	<Grid>
		<Row>
			<Column
				><h1>Hoteles</h1>
				<p>Aqui puede ver, buscar y filtrar todos los hoteles registrados en el sistema.</p>
			</Column>
			<Column class="flex justify-end"><Apartment /></Column>
		</Row>
		<DataTable bind:open {data} />
	</Grid>
</main>

<CreateModal bind:open />
