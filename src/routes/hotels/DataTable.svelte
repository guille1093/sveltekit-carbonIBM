<script>
	/** @type {import('./$types').PageData} */

	import {
		Button,
		NumberInput,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarSearch,
		Pagination,
		Row,
		Column
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	//EXPORTS
	export let data;

	//VARIABLES Y CONSTANTES
	export let open = false;

	//DataTables
	let rows = data.hotels;
	let pageSize = 10;
	let page = 1;
	/**
	 * @type {never[]}
	 */
	let filteredRowIds = [];
</script>

<Row>
	<Column>
		<div class="overflow-scroll uppercase">
			<DataTable
				zebra
				sortable
				sortKey="created"
				sortDirection="descending"
				headers={[
					{ key: 'nombre', value: 'Nombre' },
					{ key: 'direccion', value: 'Dirección' },
					{ key: 'email', value: 'Email' },
					{ key: 'telefono', value: 'Teléfono' },
					{ key: 'created', value: 'Creado' },
					{ key: 'updated', value: 'Actualizado' }
				]}
				{rows}
				{pageSize}
				{page}
			>
				<svelte:fragment slot="cell" let:row let:cell>
					{#if cell.key === 'created' || cell.key === 'updated'}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/hotels/${row.id}`)}
							on:keydown={() => (window.location.href = `/hotels/${row.id}`)}
						>
							{new Date(cell.value).toLocaleDateString('es-ES', {
								day: '2-digit',
								month: 'short',
								year: 'numeric'
							})}
						</div>
					{:else}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/hotels/${row.id}`)}
							on:keydown={() => (window.location.href = `/hotels/${row.id}`)}
						>
							{cell.value}
						</div>
					{/if}
				</svelte:fragment>

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
								label="Numero de filas por página"
								bind:value={pageSize}
							/>
						</ToolbarMenu>
						<Button icon={Add} on:click={() => (open = true)}>Registrar nuevo</Button>
					</ToolbarContent>
				</Toolbar>
			</DataTable>
		</div>

		<div class="fixed bottom-0 sm:w-2/3 ml-8">
			<Pagination
				bind:pageSize
				bind:page
				totalItems={filteredRowIds.length}
				pageSizeInputDisabled
			/>
		</div>
	</Column>
</Row>
