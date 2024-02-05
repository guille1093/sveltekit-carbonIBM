<script>
	export let data;

	//IMPORTS

	import {
		Button,
		NumberInput,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarSearch,
		Pagination,
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import NewFinancialCustomerExperiences from 'carbon-pictograms-svelte/lib/NewFinancialCustomerExperiences.svelte';
	import CrearVentaModal from '$lib/components/crearVentaModal.svelte';


	//VARIABLES Y CONSTANTES
	let open = false;

	//DataTables
	let rows = data.ventas;
	let pageSize = 10;
	let page = 1;
	/**
	 * @type {never[]}
	 */
	let filteredRowIds = [];


</script>

<main>
	<CrearVentaModal bind:open {data} />
	<Grid>
		<Row>
			<Column>
				<h1>Ventas</h1>
				<p>Aqui puede ver y crear ventas.</p>
			</Column>
			<Column class="flex justify-end">
				<NewFinancialCustomerExperiences />
			</Column>
		</Row>
		<Row>
			<Column>
				<div class="overflow-hidden uppercase">
					<DataTable
						zebra
						sortable
						sortKey="created"
						sortDirection="descending"
						headers={[
							{ key: 'nombrePaquete', value: 'Destino' },
							{ key: 'nombre', value: 'Titular' },
							{ key: 'precioVenta', value: 'Precio' },
							{ key: 'pagado', value: 'Pagado' },
							{ key: 'restante', value: 'Adeudado' },
							{ key: 'estado', value: 'Estado' },
							{ key: 'created', value: 'Creado' }
						]}
						{rows}
						{pageSize}
						{page}
					>
						<!-- {Intl.NumberFormat('es-AR').format(header.value)} -->
						<svelte:fragment slot="cell-header" let:header>
							{#if header.key === 'valor'}
								<div class="flex items-center">
									<i class="bx bx-dollar-circle text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
									<span class="text-xs">ARS</span>
								</div>
							{:else if header.key === 'nombre'}
								<div class="flex items-center">
									<i class="bx bx-user text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
								</div>
							{:else if header.key === 'created'}
								<div class="flex items-center">
									<i class="bx bx-calendar text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
								</div>
							{:else if header.key === 'updated'}
								<div class="flex items-center">
									<i class="bx bx-calendar text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
								</div>
							{:else if header.key === 'estado'}
								<div class="flex items-center">
									<i class="bx bx-check-circle text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
								</div>
							{:else if header.key === 'nombrePaquete'}
								<div class="flex items-center">
									<i class="bx bx-map text-xl mr-2 text-blue-600" />
									<span class="mr-2">{header.value}</span>
								</div>
							{:else}
								{header.value}
							{/if}
						</svelte:fragment>

						<svelte:fragment slot="cell" let:row let:cell>
							{#if cell.key === 'restante'}
								${Intl.NumberFormat('es-AR').format(row.precioVenta - row.pagado)}
							{:else if cell.key === 'precioVenta'}
								${Intl.NumberFormat('es-AR').format(cell.value)}
							{:else if cell.key === 'pagado'}
								${Intl.NumberFormat('es-AR').format(cell.value)}
							{:else if cell.key === 'created'}
								{new Date(cell.value).toLocaleDateString('es-ES', {
									day: '2-digit',
									month: 'short',
									year: 'numeric'
								})}
							{:else if cell.key === 'updated'}
								{new Date(cell.value).toLocaleDateString('es-ES', {
									day: '2-digit',
									month: 'short',
									year: 'numeric'
								})}
							{:else if cell.key === 'precio'}
								<a class="text-sm text-gray-300" href="/ventas/{row.id}">
									$ {Intl.NumberFormat('es-AR').format(cell.value)}
								</a>
							{:else if cell.key === 'nombre'}
								<a class="text-sm text-gray-300" href="/ventas/{row.id}">
									{row.nombre}
									{row.apellido}
								</a>
							{:else if cell.key === 'nombrePaquete'}
								<a class="text-sm text-gray-300" href="/ventas/{row.id}">
									{cell.value}
								</a>
								<br />
								<a class="text-xs text-gray-500" href="/ventas/{row.id}">
									<i class="bx bx-calendar text-xs mr-2 text-blue-600" />
									{new Date(row.paqueteFecha).toLocaleDateString('es-ES', {
										day: '2-digit',
										month: 'short',
										year: 'numeric'
									})}
								</a>
							{:else if cell.key === 'estado'}
								{#if cell.value === 'EN CURSO'}
									<div class="flex">
										<span
											class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
										>
											{cell.value}
										</span>
									</div>
								{:else if cell.value === 'CANCELADA'}
									<div class="flex">
										<span
											class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
										>
											{cell.value}
										</span>
									</div>
								{:else if cell.value === 'FINALIZADA'}
									<div class="flex">
										<span
											class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
										>
											{cell.value}
										</span>
									</div>
								{:else}
									{cell.value}
								{/if}
							{:else}
								{cell.value}
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
										label="Numero de filas por pagina"
										bind:value={pageSize}
									/>
								</ToolbarMenu>
								<Button icon={Add} on:click={() => (open = true)}>Nueva venta</Button>
							</ToolbarContent>
						</Toolbar>
					</DataTable>
				</div>

				<div class="fixed bottom-0 w-2/3">
					<Pagination
						bind:pageSize
						bind:page
						totalItems={filteredRowIds.length}
						pageSizeInputDisabled
					/>
				</div>
			</Column>
		</Row>
	</Grid>
</main>