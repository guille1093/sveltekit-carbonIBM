<script>
	/** @type {import('./$types').PageData} */
	export let data;

	//IMPORTS
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
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

	import { Printer } from 'carbon-icons-svelte';
	import pdfMake from 'pdfmake/build/pdfmake';
	const pdfFonts = {
		// download default Roboto font from cdnjs.com
		Roboto: {
			normal:
				'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf',
			bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf',
			italics:
				'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf',
			bolditalics:
				'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf'
		}
	};

	/**
	 * @type {never[]}
	 */
	let selected = [];
	let items = data.clientes.map((/** @type {{ id: any; nombre: any; }} */ cliente) => ({
		id: cliente.id,
		text: `${cliente.nombre} ${cliente.apellido}`,
		dni: cliente.dni
	}));
	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	let paqueteDropdownOpen = false;

	var docDefinition = {
		pageMargins: [40, 40], // Márgenes de la página
		pageSize: 'A4', // Establece el tamaño de página A4
		content: [
			{
				text: 'CONTRATO DE EXCURSIÓN',
				style: 'header'
			},
			{
				text: 'En la ciudad de Posadas, Provincia de Misiones, a los VAR días del mes de VAR del año VAR, entre la empresa de viajes y turismo DEL VALLE TURISMO, con domicilio en la calle La Rioja 2203 de la ciudad de Posadas, Provincia de Misiones, y la parte contratante el Sr/a VAR, con DNI N° VAR.',
				style: 'paragraph'
			},
			{
				text: 'Contrata una excursión para VAR persona/s VAR El precio es por persona en habitaciones dobles, triples o cuádruples, de VAR con el régimen de VAR. Estando la salida prevista para el día VAR y el regreso para el día VAR por VAR noches y VAR días. El precio total de la excursión es de VAR.',
				style: 'paragraph'
			},
			{
				text: 'Incluye:',
				style: 'bold'
			},
			{
				ul: [
					'Todos los servicios que estén expresamente detallados en el programa elegido.',
					'No Incluye: Extras en los hoteles, lavado, planchado, llamadas telefónicas, entradas a los parques y complejos turísticos, así como cualquier otro gasto de carácter personal. El organizador no se hace responsable por problemas de salud en general que padezca el viajero en el transcurso de la excursión, pudiendo este contratar, como servicio adicional, una asistencia de salud a su exclusivo cargo.',
					'Traslado: Desde La Empresa Turismo Valle Hermoso al destino elegido y viceversa, en ómnibus o minibús acondicionado para viajes especiales de larga distancia, provisto con Aire Acondicionado, TV, Video, butacas reclinables y/o semi cama, y coordinación permanente.',
					'Alojamiento: De acuerdo a la categoría del hotel según el programa elegido por el/los pasajeros.',
					'Responsabilidad: El pasajero cuenta con seguro de responsabilidad civil durante el viaje a cargo de la Empresa transportadora. El operador Turismo Valle Hermoso declina toda responsabilidad por cualquier daño o inconveniente que el/los pasajeros o sus pertenencias pudieran sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos o pérdidas o daños de equipajes u objetos personales, sean cuales fueren sus causas durante los días de la excursión contratada.',
					'Documentación: El operador Turismo Valle Hermoso declina toda responsabilidad en caso de ser rechazado por las autoridades Policiales, Migratorias y Aduaneras. Cualquier gasto que se origine correrá por cuenta del pasajero. En este caso, se aplicarán las condiciones establecidas para anulaciones o desistimiento voluntario sin derecho a ninguna indemnización.',
					'El pasajero deberá ir provisto de: DNI, Cédula de la Policía Federal o Pasaporte, según corresponda. ARGENTINOS CON DOBLE CIUDADANÍA deberán tener pasaporte argentino válido. EXTRANJEROS RESIDENTES EN EL PAÍS deben presentar el pasaporte del país de origen, cédula de identidad y visado si fuese necesario.',
					'DERECHO DE PERMANENCIA: El operador Turismo Valle Hermoso se reserva el derecho de hacer abandonar el tour en cualquier circunstancia o lugar a toda aquella persona que, por su conducta o modo de obrar, cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión. Esta persona no tendrá derecho alguno a exigir indemnización por los servicios no utilizados.',
					'Cantidad Mínima: El operador Turismo Valle Hermoso se reserva el derecho de cancelar algunas salidas establecidas cuando no se complete la cantidad mínima de (35) treinta y cinco personas en ómnibus o en minibús (17) pasajeros inscritos. En este caso, se les reintegrará la totalidad del dinero abonado hasta la fecha, sin ningún tipo de interés u otro tipo de ajuste. La empresa comunicará 5 (cinco) días antes de la salida la suspensión del viaje.',
					'Cancelaciones: Una vez confirmados los servicios, la cancelación de los mismos sufrirá una retención del 10% del total de la excursión si esta se produce con una anticipación de 20 días o más a la fecha de salida. Si la cancelación se realiza entre 20 días y 10 días antes, la retención será del 20%. En caso de cancelación con menos de 10 días de anticipación, la retención será del 50% del valor total de la excursión. Si se produce una cancelación en menos de 5 (cinco) días, la retención será del 100%. Como alternativa, se podrá ceder o transferir a otra persona, con la condición de que no esté inscrita, o la Empresa otorgará una nota de crédito para otra excursión futura.',
					'COSTO DE LA EXCURSIÓN: El precio está expresado en dólares estadounidenses y está sujeto a modificación según la cotización del día. El costo no sufrirá variación una vez abonada la totalidad de la excursión.',
					'DE CONOCIMIENTO DEL PASAJERO: El simple hecho de inscribirse para tomar parte en los viajes detallados en el presente folleto implica la total conformidad, aceptación y conocimiento de todas y cada una de las condiciones generales mencionadas anteriormente. La Empresa Turismo Valle Hermoso.'
				],
				style: 'list'
			},
			{
				text: 'Observaciones:',
				style: 'bold'
			},
			'VAR', // Aquí debes reemplazar 'VAR' con el contenido real de las observaciones.
			{
				text: 'Página 1/1',
				style: 'page'
			}
		],
		styles: {
			header: {
				fontSize: 14, // Reduzco el tamaño de fuente del encabezado
				bold: true,
				alignment: 'center'
			},
			paragraph: {
				fontSize: 10, // Reduzco el tamaño de fuente del párrafo
				alignment: 'justify',
				margin: [0, 5, 0, 5]
			},
			bold: {
				bold: true,
				margin: [0, 5, 0, 5]
			},
			list: {
				fontSize: 10, // Reduzco el tamaño de fuente de la lista
				margin: [0, 5, 0, 5]
			},
			page: {
				fontSize: 8,
				alignment: 'right'
			}
		}
	};

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

	let paquetesItems = data.paquetes.map((/** @type {{ id: any; nombre: any; }} */ paquete) => ({
		id: paquete.id,
		text: paquete.nombre,
		fecha: paquete.fechasalida,
		precio: paquete.precio
	}));

	let paqueteSearch = ''; // Inicializa la variable de búsqueda
	let paquetesFiltered = [...paquetesItems]; // Mantén una copia de los paquetes originales

	let clienteSearch = ''; // Inicializa la variable de búsqueda
	let clientesItems = data.clientes.map((/** @type {{ id: any; nombre: any; }} */ cliente) => ({
		id: cliente.id,
		text: `${cliente.nombre} ${cliente.apellido}`,
		fecha: cliente.fechanacimiento,
		dni: cliente.dni
	}));

	let clientesFiltered = [...clientesItems]; // Mantén una copia de los clientes originales

	let clienteDropdownOpen = false;

	$: console.log('filteredRowIds', filteredRowIds);

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};

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

	console.log('precio', precio);
	console.log('selected', selected);
	console.log('paquetesFiltered', paquetesFiltered);
	console.log('paquetesFiltered[0]', paquetesFiltered[0]);
</script>

<main>
	<ComposedModal class="" bind:open on:close={() => closeModals()}>
		<ModalHeader label="" title="Nueva venta" />
		<ModalBody hasForm hasScrollingContent>
			{#if creating}
				<div in:fly={{ y: 100 }} out:slide>
					<InlineLoading description="Guardando venta..." />
				</div>
			{:else if toast}
				<div in:fly={{ y: 100 }} out:slide>
					<ToastNotification
						lowContrast
						kind="success"
						title="Operación exitosa"
						subtitle={new Date().toLocaleString()}
						caption="La venta se ha creado correctamente."
						fullWidth
						on:close={() => (toast = false)}
					/>
				</div>
			{:else}
				<form
					id="modalForm"
					on:submit={() => {
						open = true;
						isFormValid = false;
						console.log('submit');
					}}
					method="post"
					action="?/createVenta"
					bind:this={form}
					use:enhance={() => {
						creating = true;
						return async ({ update }) => {
							await update();
							creating = false;
							toast = true;
						};
					}}
				>
					<Grid>
						<Row>
							<Column>
								<FormGroup legendText="Titular">
									<input type="hidden" name="cliente" value={titular} />
									<Search
										size="sm"
										placeholder="Buscar cliente"
										on:input={() => {
											clienteDropdownOpen = true;
											clientesFiltered = clientesItems.filter(
												(/** @type {{ text: string; }} */ cliente) =>
													cliente.text.toLowerCase().includes(clienteSearch.toLowerCase())
											);

											if (!clientesFiltered.length) {
												clientesFiltered = [clientesItems[0]];
											}
											if (clientesFiltered && clientesFiltered.length > 0) {
												titular = clientesFiltered[0].id;
											} else if (clientesItems && clientesItems.length > 0) {
												titular = clientesItems[0].id;
											} else {
												// Asigna un valor predeterminado si ambos arreglos están vacíos o indefinidos
												titular = clientesItems[0].id; // O cualquier otro valor predeterminado que desees
											}
										}}
										on:clear={() => {
											clienteDropdownOpen = false;
											clientesFiltered = [...clientesItems];
										}}
										bind:value={clienteSearch}
									/>
									<Dropdown
										let:item
										itemToString={(item) => {
											return item.text;
										}}
										bind:selectedId={titular}
										bind:open={clienteDropdownOpen}
										items={clientesFiltered}
										on:select={() => {
											clienteDropdownOpen = false;
											clienteSearch = '';
											clientesFiltered = [...clientesItems];
											//elminar de la lista de acompañantes al titular
											items = items.filter((/** @type {{ id: any; }} */ item) => {
												return item.id !== titular;
											});
										}}
									>
										<div>
											<strong>{item.text}</strong>
										</div>
										<div>
											DNI: {item.dni}
										</div>
									</Dropdown>
								</FormGroup>
							</Column>
							<Column>
								<FormGroup legendText="Paquete">
									<input type="hidden" name="paquete" value={paquete} />
									<Search
										size="sm"
										placeholder="Buscar paquete"
										on:input={() => {
											console.log('paquete', paquete);
											paqueteDropdownOpen = true;
											paquetesFiltered = paquetesItems.filter(
												(/** @type {{ text: string; }} */ paquete) =>
													paquete.text.toLowerCase().includes(paqueteSearch.toLowerCase())
											);

											if (!paquetesFiltered.length) {
												paquetesFiltered = [paquetesItems[0]];
											}

											if (paquetesFiltered && paquetesFiltered.length > 0) {
												paquete = paquetesFiltered[0].id;
												precio =
													selected.length > 0
														? selected.length * paquetesFiltered[0].precio
														: paquetesFiltered[0].precio;
												paquetePrecio = paquetesFiltered[0].precio;
											} else if (paquetesItems && paquetesItems.length > 0) {
												paquete = paquetesItems[0].id;
												precio =
													selected.length > 0
														? selected.length * paquetesItems[0].precio
														: paquetesItems[0].precio;
												paquetePrecio = paquetesItems[0].precio;
											} else {
												// Asigna un valor predeterminado si ambos arreglos están vacíos o indefinidos
												paquete = paquetesItems[0].id;
												precio =
													selected.length > 0
														? selected.length * paquetesItems[0].precio
														: paquetesItems[0].precio;
												paquetePrecio = paquetesItems[0].precio;
											}

											console.log('precio', precio);
										}}
										on:clear={() => {
											paqueteDropdownOpen = false;
											paquetesFiltered = [...paquetesItems];
										}}
										bind:value={paqueteSearch}
									/>
									<Dropdown
										itemToString={(item) => {
											return (
												item.text +
												' - ' +
												new Date(item.fecha).toLocaleDateString('es-ES', {
													day: '2-digit',
													month: 'short',
													year: 'numeric'
												})
											);
										}}
										bind:selectedId={paquete}
										bind:open={paqueteDropdownOpen}
										items={paquetesFiltered}
										on:select={() => {
											paqueteDropdownOpen = false;
											paqueteSearch = '';
											paquetesFiltered = [...paquetesItems];
											console.log('paquete', paquete);
											console.log('precio', precio);
										}}
									/>
								</FormGroup>
							</Column>
						</Row>
						<Row>
							<Column>
								<FormGroup legendText="Acompañantes">
									<input type="hidden" name="pasajeros" value={selected} />

									<MultiSelect
										selectionFeedback="top-after-reopen"
										filterable
										bind:selectedIds={selected}
										label="Seleccione los acompañantes"
										{items}
										let:item
									>
										<div>
											<strong>{item.text}</strong>
										</div>
										<div>
											DNI: {item.dni}
										</div>
									</MultiSelect>

									{#each selected as id}
										{#each data.clientes as cliente}
											{#if cliente.id === id}
												<Tag
													size="sm"
													filter
													type="blue"
													on:close={() => {
														selected = selected.filter(
															(/** @type {any} */ id) => id !== cliente.id
														);
													}}>{cliente.nombre} {cliente.apellido}</Tag
												>
											{/if}
										{/each}
									{/each}
								</FormGroup>
							</Column>
						</Row>
						<Row>
							<Column>
								<FormGroup legendText="Precio: ${Intl.NumberFormat('es-AR').format(precio)}">
									<NumberInput
										name="precio"
										label="Precio por persona: ${Intl.NumberFormat('es-AR').format(paquetePrecio)}"
										min={1}
										step={1}
										bind:value={precio}
										hideLabel
										readOnly
									/>
								</FormGroup>
							</Column>
							<Column>
								<FormGroup legendText="Estado">
									<Select name="estado" hideLabel disabled>
										<SelectItem text="EN CURSO" value="EN CURSO" />
										<SelectItem text="FINALIZADA" value="FINALIZADA" />
										<SelectItem text="CANCELADA" value="CANCELADA" />
									</Select>
								</FormGroup>
							</Column>
						</Row>
						<Row>
							<Column>
								<FormGroup legendText="Observaciones">
									<TextArea name="observaciones" placeholder="Observaciones" />
								</FormGroup>
							</Column>
						</Row>
					</Grid>
				</form>
			{/if}
		</ModalBody>
		<ModalFooter>
			<Button kind="secondary" size="lg" on:click={() => (open = false)}>Cancelar</Button>
			<Button
				id="modalSubmitButton"
				size="lg"
				type="submit"
				disabled={!isFormValid || creating}
				on:click={() => form.requestSubmit()}>Crear</Button
			>
		</ModalFooter>
	</ComposedModal>

	<h1>Ventas</h1>
	<p>Aqui puede ver y crear ventas.</p>
	<div class="overflow-hidden">
		<DataTable
			zebra
			sortable
			headers={[
				{ key: 'nombrePaquete', value: 'Destino' },
				{ key: 'nombre', value: 'Titular' },
				{ key: 'valor', value: 'Precio' },
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
					${Intl.NumberFormat('es-AR').format(row.valor - row.pagado)}
				{:else if cell.key === 'valor'}
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
					<ToolbarSearch persistent shouldFilterRows placeholder="Buscar..." bind:filteredRowIds />
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
		<Pagination bind:pageSize bind:page totalItems={filteredRowIds.length} pageSizeInputDisabled />
	</div>
</main>

<Button
	size="small"
	tooltipPosition="right"
	tooltipAlignment="end"
	iconDescription="Generar PDF"
	icon={Printer}
	on:click={() => {
		pdfMake.createPdf(docDefinition, null, pdfFonts).open();
	}}
/>

<style>
	:global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
		height: auto;
	}

	:global(.bx--checkbox-label-text) {
		display: block;
	}
</style>
