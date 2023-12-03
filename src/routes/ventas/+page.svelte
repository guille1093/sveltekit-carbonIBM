<script>
	/** @type {import('./$types').PageData} */
	export let data;

	//IMPORTS
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import {
		Button,
		NumberInput,
		FormGroup,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		InlineLoading,
		ToastNotification,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarSearch,
		Pagination,
		TextArea,
		Select,
		SelectItem,
		Dropdown,
		Search,
		Tag
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';
	import { MultiSelect } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	import NewFinancialCustomerExperiences from 'carbon-pictograms-svelte/lib/NewFinancialCustomerExperiences.svelte';
import CrearVentaModal from '$lib/components/crearVentaModal.svelte';
	/**
	 * @type {never[]}
	 */
	let selected = [];

	let items = data.clientes.map(
		(/** @type {{ id: any; nombre: any; apellido: string; dni:string}} */ cliente) => ({
			id: cliente.id,
			text: `${cliente.nombre} ${cliente.apellido}`,
			dni: cliente.dni
		})
	);

	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	let paqueteDropdownOpen = false;

	$: creating = false;

	let toast = false;

	let isFormValid = true;
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

	let paquetesItems = data.paquetes.map(
		(/** @type {{ id: any; nombre: any; fechasalida: Date; precio: number }} */ paquete) => ({
			id: paquete.id,
			text: paquete.nombre,
			fecha: paquete.fechasalida,
			precio: paquete.precio
		})
	);

	let paqueteSearch = ''; // Inicializa la variable de búsqueda
	let paquetesFiltered = [...paquetesItems]; // Mantén una copia de los paquetes originales

	let clienteSearch = ''; // Inicializa la variable de búsqueda
	/**
	 * @type {{ id: any; text: string; fecha: Date; dni: string; }[]}
	 */
	let clientesItems = data.clientes.map(
		(
			/** @type {{ id: any; nombre: any; apellido: string; fechanacimiento: Date; dni: string; }} */ cliente
		) => ({
			id: cliente.id,
			text: `${cliente.nombre} ${cliente.apellido}`,
			fecha: cliente.fechanacimiento,
			dni: cliente.dni
		})
	);

	let clientesFiltered = [...clientesItems]; // Mantén una copia de los clientes originales

	//Una copia para filtrar los clientes que ya estan en el paquete
	//let clientesHabilitados = [...clientesItems]; // Mantén una copia de los clientes originales

	let clienteDropdownOpen = false;



	let titular = clientesItems[0].id;

	let paquete = paquetesItems[0].id;
	$: selectCantidad = (selected.length + 1).toString();
	$: precio = (getPrecio(paquete) * (selected.length + 1)).toString();

	//funcion que toma el ID de un paquete y retorna el precio
	const getPrecio = (id) => {
		let precio = 0;
		paquetesItems.forEach((/** @type {{ id: any; precio: any; }} */ paquete) => {
			if (paquete.id === id) {
				precio = paquete.precio;
			}
		});
		return precio;
	};

	let paquetePrecio = paquetesItems[0].precio;
</script>

<main>

<CrearVentaModal bind:open={open} data={data} />
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
				<div class="overflow-hidden">
					<!-- svelte-ignore a11y-missing-attribute -->
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

<style>
	:global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
		height: auto;
	}

	:global(.bx--checkbox-label-text) {
		display: block;
	}
</style>
