<script>
	/** @type {import('../../../routes/users/$types').PageData} */

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

	//EXPORTS
	export let data;

	//DataTables
	let rows = data.roles;
	let pageSize = 10;
	let page = 1;
	/**
	 * @type {never[]}
	 */
	let filteredRowIds = [];

	export let selectedRowId = {};
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
					{ key: 'name', value: 'NOMBRE' },
					{ key: 'created', value: 'CREADO' },
					{ key: 'updated', value: 'ACTUALIZADO' }
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
							on:click={() => (selectedRowId = row)}
							on:keydown={() => (selectedRowId = row)}
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
							on:click={() => (selectedRowId = row)}
							on:keydown={() => (selectedRowId = row)}
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
