<script>
	//@ts-nocheck
	import {
		Button,
		NumberInput,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarSearch,
		Pagination,
		Grid,
		Row,
		Column,
		DataTableSkeleton,
		PaginationSkeleton
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import UserAnalytics from 'carbon-pictograms-svelte/lib/UserAnalytics.svelte';
	import { enhance } from '$app/forms';
	import AccesoDenagado from '../AccesoDenagado.svelte';
	import { invalidateAll } from '$app/navigation';
	//EXPORTS
	export let data;
	export let form;

	//DataTabble
	$: rows = form?.items ?? data.clientes.items;
	let pageSize = 5;
	let page = 1;
	let filteredRowIds = [];
	let searching = false;
	let page_form;
</script>

<form
	bind:this={page_form}
	hidden
	method="POST"
	action="?/page"
	use:enhance={() => {
		searching = true;
		return async ({ update }) => {
			await update();
			searching = false;
			invalidateAll();
			console.log('updatedata', JSON.stringify(form, null, 4));
		};
	}}
>
	<input type="hidden" name="page" value={page} />
	<input type="hidden" name="pageSize" value={pageSize} />
</form>

<Grid>
	<Row>
		<Column
			><h1>CLIENTES</h1>
			<p>Aqui puede ver, buscar y filtrar todos los clientes registrados en el sistema.</p>
		</Column>
		<Column class="flex justify-end"><UserAnalytics /></Column>
	</Row>
	<Row>
		<Column>
			{#if searching}
				<DataTableSkeleton
					headers={[
						'DNI',
						'NOMBRE',
						'APELLIDO',
						'NACIMIENTO',
						'CREADO',
						'ACTUALIZADO',
						'NACIONALIDAD'
					]}
					showHeader={false}
					rows={pageSize}
				/>
				<PaginationSkeleton />
			{:else}
				<DataTable
					zebra
					sortable
					sortKey="created"
					sortDirection="descending"
					headers={[
						{ key: 'dni', value: 'DNI' },
						{ key: 'nombre', value: 'NOMBRE' },
						{ key: 'apellido', value: 'APELLIDO' },
						{ key: 'fechanacimiento', value: 'NACIMIENTO' },
						{ key: 'created', value: 'CREADO' },
						{ key: 'updated', value: 'ACTUALIZADO' },
						{ key: 'nacionalidad', value: 'NACIONALIDAD' }
					]}
					{rows}
				>
					<Toolbar>
						<ToolbarContent>
							<ToolbarSearch
								persistent
								shouldFilterRows
								placeholder="Buscar..."
								bind:filteredRowIds
							/>
							<ToolbarMenu>
								<NumberInput
									min={1}
									max={100}
									label="Numero de filas por pagina"
									bind:value={pageSize}
								/>
							</ToolbarMenu>
							<Button icon={Add}>Registrar cliente</Button>
						</ToolbarContent>
					</Toolbar>
				</DataTable>
				<Pagination
					bind:pageSize
					bind:page
					totalItems={data.clientes.totalItems}
					pageSizes={[5, 10, 25, 50, 100]}
					forwardText="Siguiente página"
					backwardText="Página anterior"
					itemsPerPageText="Items por página"
					itemRangeText={(min, max, total) =>
						`${min}–${max} de ${total} item${max === 1 ? '' : 's'}`}
					pageRangeText={(current, total) => `de ${total} página${total === 1 ? '' : 's'}`}
					on:change={({ detail }) => {
						page = detail.page;
						page_form.requestSubmit();
					}}
				/>
			{/if}
		</Column>
	</Row>
	<Row />
</Grid>
<h1>FORM</h1>
<pre><code>{JSON.stringify(form, null, 4)}</code></pre>
<h1>DATA</h1>
<pre><code>{JSON.stringify(data, null, 4)}</code></pre>
