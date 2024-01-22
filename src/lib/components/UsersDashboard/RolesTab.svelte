<script>
	import { Row, Column, Grid } from 'carbon-components-svelte';
	import AccessManagement from 'carbon-pictograms-svelte/lib/AccessManagement.svelte';
	import RolDataTable from './RolDataTable.svelte';
	import RolForm from './RolForm.svelte';
	export let data;
	export let form;
	let selectedRowId = {};
	$: console.log('form desde el RolesTab: ', form);
</script>

<Grid>
	<Row>
		<Column
			><h1>Roles y permisos</h1>
			<p>Aqui puede administrar los roles para cada permiso.</p>
		</Column>
		<Column />
		<Column class="flex justify-end">
			<AccessManagement />
		</Column>
	</Row>
	<Row>
		<Column>
			<RolDataTable {data} bind:selectedRowId />
		</Column>
		<Column>
			<RolForm bind:data={selectedRowId} bind:form />
		</Column>
	</Row>
</Grid>
