<script>
	/** @type {import('./$types').PageData} */
	export let data;

	//IMPORTS
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import {
		Button,
		TextInput,
		NumberInput,
		FormGroup,
		DatePickerInput,
		DatePicker,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		Select,
		SelectItem,
		InlineLoading,
		ToastNotification,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarMenu,
		ToolbarSearch,
		Pagination,
		TextArea,
		ClickableTile
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import Close from 'carbon-icons-svelte/lib/Close.svelte';
	import { enhance } from '$app/forms';
	import { MultiSelect } from 'carbon-components-svelte';
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody
	} from 'carbon-components-svelte';
	import { Printer } from 'carbon-icons-svelte';
	import { Tile } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	// import pdfFonts from 'pdfmake/build/vfs_fonts';

const pdfFonts = {
  // download default Roboto font from cdnjs.com
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

	import pdfMake from 'pdfmake/build/pdfmake';
	



	/**
	 * @type {never[]}
	 */
	let selected = [];
	let items = data.clientes.map((/** @type {{ id: any; nombre: any; }} */ cliente) => ({
		id: cliente.id,
		text: cliente.nombre
	}));
	/**
	 * @type {HTMLFormElement}
	 */
	let form;

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

	$: console.log('filteredRowIds', filteredRowIds);

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};
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
					<div class="flex">
						<div class="w-[50%] flex-grow p-4">
							<!-- Contenido de la primera columna -->
						</div>
						<div class="w-[50%] flex-grow p-4">
							<!-- Contenido de la segunda columna -->
						</div>
					</div>

					<!-- hotel -->
					<FormGroup legendText="Hotel">
						<TextInput id="hotel" name="hotel" placeholder="Ingrese el hotel" />
					</FormGroup>

					<TextArea
						class="p-4"
						name="observaciones"
						labelText="Observaciones"
						placeholder="Puede ingresar observaciones si lo desea..."
						maxCount={300}
					/>
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

	<!--   "created": "2022-01-01 01:00:00.123Z",
  "updated": "2022-01-01 23:59:59.456Z",
  "cliente": "RELATION_RECORD_ID",
  "paquete": "RELATION_RECORD_ID",
  "pagado": "test",
  "observaciones": "test",
  "estado": "test",
  "cant_personas": 123,
  "pasajeros": [
    "RELATION_RECORD_ID"
  ],
  "valor": 123 -->

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
				<a class="text-sm text-gray-300" href="/paquetes/{row.id}">
					$ {Intl.NumberFormat('es-AR').format(cell.value)}
				</a>
			{:else if cell.key === 'nombre'}
				<a class="text-sm text-gray-300" href="/paquetes/{row.id}">
					{row.nombre}
					{row.apellido}
				</a>
			{:else if cell.key === 'nombrePaquete'}
				<a class="text-sm text-gray-300" href="/paquetes/{row.id}">
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
				{:else if cell.value === 'NO DISPONIBLE'}
					<div class="flex justify-end">
						<span
							class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
						>
							{cell.value}
						</span>
					</div>
				{:else if cell.value === 'DISPONIBLE'}
					<div class="flex justify-end">
						<span
							class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
						>
							{cell.value}
						</span>
					</div>
				{:else if cell.value === 'finalizado'}
					<div class="flex justify-end">
						<span
							class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
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
					<NumberInput min={1} max={100} label="Numero de filas por pagina" bind:value={pageSize} />
				</ToolbarMenu>
				<Button icon={Add} on:click={() => (open = true)}>Registrar paquete</Button>
			</ToolbarContent>
		</Toolbar>
	</DataTable>

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

<h1>Ventas</h1>

<Grid>
	<Row>
		<Column>
			<h2>Crear venta</h2>
			<Tile>
				<form method="post" action="?/createVenta" bind:this={form}>
					<input type="hidden" name="pasajeros" value={selected} />

					<MultiSelect
						selectionFeedback="top-after-reopen"
						filterable
						bind:selectedIds={selected}
						titleText="Acompañantes"
						label="Seleccione los acompañantes"
						{items}
					/>
					<button type="submit">Enviar</button>
				</form>
			</Tile>
		</Column>
		{#if selected.length > 0}
			<Column>
				<Tile>
					<h2>Seleccionados</h2>
					<StructuredList>
						<StructuredListHead>
							<StructuredListRow>
								<StructuredListCell head>Nombre</StructuredListCell>
								<StructuredListCell head>Apellido</StructuredListCell>
								<StructuredListCell head>DNI</StructuredListCell>
								<StructuredListCell head>Seleccionar</StructuredListCell>
							</StructuredListRow>
						</StructuredListHead>
						<StructuredListBody>
							{#each selected as id}
								{#each data.clientes as cliente}
									{#if cliente.id === id}
										<StructuredListRow>
											<StructuredListCell>{cliente.nombre}</StructuredListCell>
											<StructuredListCell>{cliente.apellido}</StructuredListCell>
											<StructuredListCell>{cliente.dni}</StructuredListCell>
											<StructuredListCell>
												<Button
													size="small"
													tooltipPosition="right"
													tooltipAlignment="end"
													iconDescription="Eliminar"
													icon={Close}
													on:click={() => {
														selected = selected.filter(
															(/** @type {any} */ id) => id !== cliente.id
														);
													}}
												/>
											</StructuredListCell>
										</StructuredListRow>
									{/if}
								{/each}
							{/each}
						</StructuredListBody>
					</StructuredList>
				</Tile>
			</Column>
		{/if}
	</Row>
</Grid>

<section class="page">
	<div class="max-w-5xl mx-auto py-8 bg-white">
		<article class="overflow-hidden">
			<div class="bg-[white] rounded-b-md">
				<div class="px-9 flex flex-col">
					<div class="text-slate-700 top-0">
						<div class="flex flex-row justify-between">
							<div>
								<img src="/images/logo.png" class="h-24 mr-3 justify-end" alt="Del Valle Logo" />
								<span class="text-xl font-extrabold tracking-tight uppercase font-body">
									Del Valle Turismo.
								</span>
								<p class="text-sm">Empresa de viajes y turismo.</p>
								<p class="mt-2">
									<i class="bx bx-id-card text-slate-700" /> <strong> Legajo número: </strong> 18376
								</p>
								<p class="">
									<i class="bx bx-map text-slate-700" />
									<strong> Dirección: </strong>
									La Rioja 2203 - Posadas (3360) - Misiones.
								</p>
								<p class="">
									<i class="bx bx-phone-call text-slate-700" /> <strong> Teléfonos: </strong> +54 (3764)
									222333 / +54 (3764) 424450
								</p>
							</div>

							<div class="justify-end">
								<p class="uppercase"><strong>CONTRATO NRO. </strong>VAR</p>
							</div>
						</div>
					</div>
				</div>

				<div class="flex flex-row justify-center px-9 py-9">
					<h1 class="underline text-3xl font-bold text-black">CONTRATO DE EXCURSIÓN</h1>
				</div>

				<p class="px-9 tracking-widest text-justify text-black">
					En la ciudad de <strong class="uppercase tracking-tight"
						>Posadas, Provincia de Misiones,</strong
					>
					a los <strong class="uppercase tracking-tight">VAR</strong>
					días del mes de <strong class="uppercase tracking-tight">VAR</strong> del año
					<strong class="uppercase tracking-tight">VAR</strong>, entre la empresa de viajes y
					turismo <strong class="">DEL VALLE TURISMO</strong>, con domicilio en la calle
					<strong class="uppercase tracking-tight">La Rioja 2203</strong> de la ciudad de
					<strong class="uppercase tracking-tight">Posadas, Provincia de Misiones,</strong>
					y la parte contratante el Sr/a
					<strong class="uppercase tracking-tight"> VAR </strong>, con DNI N°
					<strong class="uppercase tracking-tight"> VAR </strong>. <br />
					Contrata una excursión para
					<strong class="uppercase tracking-tight"> VAR </strong> persona/s
					<strong class="uppercase tracking-tight"> VAR </strong>
					El precio es por persona en habitaciones dobles, triples o cuádruples, de
					<strong class="uppercase tracking-tight"> VAR </strong>
					con el regimen de
					<strong class="uppercase tracking-tight">VAR</strong>. <br />
					Estando la salida prevista para el día
					<strong class="uppercase tracking-tight"> VAR</strong> y el regreso para el día
					<strong class="uppercase tracking-tight"> VAR</strong>
					por <strong class="uppercase tracking-tight"> VAR </strong>
					noches y
					<strong class="uppercase tracking-tight"> VAR</strong>
					días. El precio total de la excursión es de
					<strong class="uppercase tracking-tight"> VAR </strong>. <br />
				</p>

				<div class="px-9 py-4">
					<div class="border-t border-slate-500">
						<div class="text-xs mt-2 font-light text-slate-700">
							<p class="text-justify">
								<strong class="uppercase font-bold">Incluye:</strong> Todos los servicios que estén
								expresamente detallados en el programa elegido.
								<br />
								No Incluye: Extras en los hoteles, lavado, planchado, llamadas telefónicas, entradas
								a los parques y complejos turísticos, así como cualquier otro gasto de carácter personal.
								El organizador no se hace responsable por problemas de salud en general que padezca el
								viajero en el transcurso de la excursión, pudiendo este contratar, como servicio adicional,
								una asistencia de salud a su exclusivo cargo.
								<br />
								<strong class="uppercase font-bold">Traslado:</strong> Desde La Empresa Turismo
								Valle Hermoso al destino elegido y viceversa, en ómnibus o minibús acondicionado
								para viajes especiales de larga distancia, provisto con Aire Acondicionado, TV,
								Video, butacas reclinables y/o semi cama, y coordinación permanente.
								<br />
								<strong class="uppercase font-bold">Alojamiento:</strong> De acuerdo a la categoría
								del hotel según el programa elegido por el/los pasajeros.
								<br />
								<strong class="uppercase font-bold">Responsabilidad:</strong> El pasajero cuenta con
								seguro de responsabilidad civil durante el viaje a cargo de la Empresa
								transportadora. El operador Turismo Valle Hermoso declina toda responsabilidad por
								cualquier daño o inconveniente que el/los pasajeros o sus pertenencias pudieran
								sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos o pérdidas o
								daños de equipajes u objetos personales, sean cuales fueren sus causas durante los
								días de la excursión contratada.
								<br />
								<strong class="uppercase font-bold">Documentación:</strong> El operador Turismo
								Valle Hermoso declina toda responsabilidad en caso de ser rechazado por las
								autoridades Policiales, Migratorias y Aduaneras. Cualquier gasto que se origine
								correrá por cuenta del pasajero. En este caso, se aplicarán las condiciones
								establecidas para anulaciones o desistimiento voluntario sin derecho a ninguna
								indemnización.
								<br />
								El pasajero deberá ir provisto de: DNI, Cédula de la Policía Federal o Pasaporte, según
								corresponda. ARGENTINOS CON DOBLE CIUDADANÍA deberán tener pasaporte argentino válido.
								EXTRANJEROS RESIDENTES EN EL PAÍS deben presentar el pasaporte del país de origen, cédula
								de identidad y visado si fuese necesario.
								<br />
								<strong class="uppercase font-bold">DERECHO DE PERMANENCIA:</strong> El operador
								Turismo Valle Hermoso se reserva el derecho de hacer abandonar el tour en cualquier
								circunstancia o lugar a toda aquella persona que, por su conducta o modo de obrar,
								cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión.
								Esta persona no tendrá derecho alguno a exigir indemnización por los servicios no
								utilizados.
								<br />
								<strong class="uppercase font-bold">Cantidad Mínima:</strong> El operador Turismo
								Valle Hermoso se reserva el derecho de cancelar algunas salidas establecidas cuando
								no se complete la cantidad mínima de (35) treinta y cinco personas en ómnibus o en
								minibús (17) pasajeros inscritos. En este caso, se les reintegrará la totalidad del
								dinero abonado hasta la fecha, sin ningún tipo de interés u otro tipo de ajuste. La
								empresa comunicará 5 (cinco) días antes de la salida la suspensión del viaje.
								<br />
								<strong class="uppercase font-bold">Cancelaciones:</strong> Una vez confirmados los
								servicios, la cancelación de los mismos sufrirá una retención del 10% del total de
								la excursión si esta se produce con una anticipación de 20 días o más a la fecha de
								salida. Si la cancelación se realiza entre 20 días y 10 días antes, la retención
								será del 20%. En caso de cancelación con menos de 10 días de anticipación, la
								retención será del 50% del valor total de la excursión. Si se produce una
								cancelación en menos de 5 (cinco) días, la retención será del 100%. Como
								alternativa, se podrá ceder o transferir a otra persona, con la condición de que no
								esté inscrita, o la Empresa otorgará una nota de crédito para otra excursión futura.
								<br />
								<strong class="uppercase font-bold">COSTO DE LA EXCURSIÓN:</strong> El precio está
								expresado en dólares estadounidenses y está sujeto a modificación según la
								cotización del día. El costo no sufrirá variación una vez abonada la totalidad de la
								excursión.
								<br />
								<strong class="uppercase font-bold">DE CONOCIMIENTO DEL PASAJERO:</strong> El simple
								hecho de inscribirse para tomar parte en los viajes detallados en el presente
								folleto implica la total conformidad, aceptación y conocimiento de todas y cada una
								de las condiciones generales mencionadas anteriormente. La Empresa Turismo Valle
								Hermoso.
								<br />
								<strong class="uppercase font-bold">observaciones:</strong>
								VAR
								<br />
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="px-9 mt-20 flex col-span-2 justify-evenly bottom-0">
				<div class="h-px w-44 bg-gray-400 bottom-0" />
				<div class="h-px w-44 bg-gray-400 bottom-0" />
				<div class="bottom-0 right-0">
					<p class="text-xs text-gray-400">Página 1/1</p>
				</div>
			</div>
		</article>
	</div>
</section>
