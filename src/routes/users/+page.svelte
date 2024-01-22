<script>
	import RolesTab from '$lib/components/UsersDashboard/RolesTab.svelte';
	//IMPORTS
	import CreateModal from '../../lib/components/UsersDashboard/CreateModal.svelte';
	import DataTable from '../../lib/components/UsersDashboard/DataTable.svelte';
	import { Grid, Row, Column, Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import TrustedUser from 'carbon-pictograms-svelte/lib/TrustedUser.svelte';
	//EXPORTS
	export let data;
	export let form;

	$: console.log('form desde el +page: ', form);
	//VARIABLES REACTIVAS
	let open = false;
</script>

<Tabs>
	<Tab label="Cuentas de usuario" />
	<Tab label="Roles y permisos" />
	<svelte:fragment slot="content">
		<TabContent
			><Grid>
				<Row>
					<Column
						><h1>Cuentas de usuarios</h1>
						<p>Aqui puede administrar las cuentas de usuarios.</p>
					</Column>
					<Column class="flex justify-end"><TrustedUser /></Column>
				</Row>
				<DataTable bind:open {data} />
			</Grid></TabContent
		>
		<TabContent><RolesTab bind:data bind:form /></TabContent>
	</svelte:fragment>
</Tabs>

<CreateModal bind:open roles={data.roles} />
