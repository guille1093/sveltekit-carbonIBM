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
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	//EXPORTS
	export let data;

	//VARIABLES Y CONSTANTES
	export let open = false;

	//DataTables
	let rows = data.users;
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
					{ key: 'username', value: 'USUARIO' },
					{ key: 'name', value: 'NOMBRE' },
					{ key: 'rol', value: 'PERMISOS' },
					{ key: 'verified', value: 'ESTADO' },
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
							on:click={() => (window.location.href = `/users/${row.id}`)}
							on:keydown={() => (window.location.href = `/users/${row.id}`)}
						>
							{new Date(cell.value).toLocaleDateString('es-ES', {
								day: '2-digit',
								month: 'short',
								year: 'numeric'
							})}
						</div>
					{:else if cell.key === 'name'}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/users/${row.id}`)}
							on:keydown={() => (window.location.href = `/users/${row.id}`)}
						>
							{row.name}
							{row.apellido}
						</div>
					{:else if cell.key === 'rol'}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/users/${row.id}`)}
							on:keydown={() => (window.location.href = `/users/${row.id}`)}
						>
							<!-- hay 3 roles administrador, vendedor y vista quiero se muestre un color diferente para cada uno -->
							{#if row.rol === 'ADMINISTRADOR'}
								<div class="bg-purple-200 text-purple-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else if row.rol === 'SOLO VENDER'}
								<div class="bg-green-200 text-green-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else if row.rol === 'SOLO CREAR'}
								<div class="bg-blue-200 text-blue-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else if row.rol === 'SOLO VER'}
								<div class="bg-yellow-200 text-yellow-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else if row.rol === 'VENDER, CREAR'}
								<div class="bg-cyan-200 text-cyan-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else if row.rol === 'VENDER, CREAR, EDITAR'}
								<div class="bg-orange-200 text-orange-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{:else}
								<div class="bg-red-200 text-red-800 text-center rounded-full px-2 py-1">
									{row.rol}
								</div>
							{/if}
						</div>
					{:else if cell.key === 'verified'}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/users/${row.id}`)}
							on:keydown={() => (window.location.href = `/users/${row.id}`)}
						>
							{#if row.verified}
								<div class="bg-green-200 text-green-800 text-center rounded-full px-2 py-1">
									ACTIVO
								</div>
							{:else}
								<div class="bg-red-200 text-red-800 text-center rounded-full px-2 py-1">
									INACTIVO
								</div>
							{/if}
						</div>
					{:else}
						<div
							role="button"
							tabindex="0"
							on:click={() => (window.location.href = `/users/${row.id}`)}
							on:keydown={() => (window.location.href = `/users/${row.id}`)}
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
