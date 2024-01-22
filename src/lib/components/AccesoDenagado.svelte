<script>
	import Lock_01 from 'carbon-pictograms-svelte/lib/Lock_01.svelte';
	import { Grid, Row, Column, Button } from 'carbon-components-svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';
</script>

<Grid class="uppercase">
	<Row>
		<Column><h1>Acceso denegado</h1></Column>
		<Column class="flex justify-end"><Lock_01 /></Column>
	</Row>
	<Row>
		<Column><h4>Usted no tiene permisos para acceder a esta página.</h4></Column>
	</Row>
	<Row>
		<Column class="mt-4">
			<Button kind="tertiary" href="/" icon={Home}>VOLVER AL INICIO</Button>
		</Column>
	</Row>
</Grid>
