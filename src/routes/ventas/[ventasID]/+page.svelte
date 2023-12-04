<script>
	// @ts-nocheck

	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import {
		Button,
		Grid,
		Row,
		Column,
		Tile,
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		ModalBody,
		ModalFooter,
		FormGroup,
		ComposedModal,
		InlineLoading,
		ModalHeader,
		ToastNotification,
		NumberInput,
		OverflowMenu,
		OverflowMenuItem,
		Accordion,
		AccordionItem
	} from 'carbon-components-svelte';
	import { imprimirComp } from '$lib/trash.js';
	import { logob64 } from '$lib/logob64.js';
	import { Printer, CurrencyDollar, TrashCan } from 'carbon-icons-svelte';
	export let data;
	const created = new Date(data.venta.created).toLocaleString('es-AR');
	const updated = new Date(data.venta.updated).toLocaleString('es-AR');
	const createdMes = new Date(data.venta.created).toLocaleString('es-AR', { month: 'long' });
	const createdDia = new Date(data.venta.created).toLocaleString('es-AR', { day: 'numeric' });
	const createdAnio = new Date(data.venta.created).toLocaleString('es-AR', { year: 'numeric' });
	const precio = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
		data.venta.paquete.precio
	);

	const precio_total = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS'
	}).format(data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas);

	const fechasalida = new Date(data.venta.paquete.fechasalida).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const fecharetorno = new Date(data.venta.paquete.fecharetorno).toLocaleString('es-AR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	const items = [
		{
			name: 'Nombre y Apellido Titular',
			icon: 'bx-user',
			value: data.venta.cliente.nombre + ' ' + data.venta.cliente.apellido
		},
		{
			name: 'Precio paquete actual',
			icon: 'bx-dollar',
			value: precio
		},
		{
			name: 'Destino',
			icon: 'bx-map',
			value: data.venta.paquete.nombre
		},
		{
			name: 'Creado',
			icon: 'bx-calendar',
			value: created
		},
		{
			name: 'Modificado',
			icon: 'bx-calendar-edit',
			value: updated
		},
		{
			name: 'Estado',
			icon: 'bx-check-circle',
			value: data.venta.estado
		},
		{
			name: 'Observaciones',
			icon: 'bx-comment-detail',
			value: data.venta.observaciones
		}
	];

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

	import pdfMake from 'pdfmake/build/pdfmake';

	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	$: creating = false;

	let toast = false;

	let isFormValid = true;

	let open = false;

	let valor = 0;

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};

	const validarPago = () => {
		//si el elemento introducido es un punto o una coma borrarlos
		if (
			valor.toString().includes('.') ||
			valor.toString().includes(',') ||
			valor.toString().includes(' ') ||
			valor.toString().includes('-')
		) {
			valor = valor.toString().replace('.', '');
			valor = valor.toString().replace(',', '');
			valor = valor.toString().replace(' ', '');
			valor = valor.toString().replace('-', '');
		}

		//si valor es mayor a restanteint, restanteint es el valor
		if (valor > restanteint) {
			valor = restanteint;
		}

		//si valor es menor a 0, valor es 0
		if (valor < 0) {
			valor = 0;
		}
	};

	let pagos = [];
	let abonado = 0;
	let restante = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS'
	}).format(data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas);

	let restanteint = data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas;

	let pasajeros = data.ventaExpanded.expand.pasajeros;

	if (pasajeros && pasajeros.length > 0) {
		const resultado = pasajeros.map((pasajero) => {
			return pasajero.nombre + ' ' + pasajero.apellido + ' DNI:' + pasajero.dni + ', ';
		});
		pasajeros = 'y acompañan: ' + resultado.join('').slice(0, -2).toUpperCase();
	} else {
		pasajeros = '';
	}

	if (data.ventaExpanded.expand.pagos != undefined) {
		pagos = data.ventaExpanded.expand.pagos;
		//una constante abonado que es la suma de los pagos
		abonado = new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS'
		}).format(data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0));

		restante = new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS'
		}).format(
			data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas -
				data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0)
		);
		restanteint =
			data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas -
			data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0);
	}

	const docDefinition = {
		pageMargins: [40, 40],
		pageSize: 'A4',
		content: [
			{
				columns: [
					[
						{
							image: `${logob64}`,
							width: 72, // Ajusta el ancho de la imagen según tus necesidades
							alignment: 'left',
							margin: [0, 0]
						},
						{
							text: [
								{ text: 'Del Valle Turismo.\n', fontSize: 14, bold: true },
								{ text: 'Empresa de viajes y turismo \n', fontSize: 10, bold: true },
								{ text: 'Legajo número: ', bold: true },
								'18376. \n',
								{ text: 'Dirección: ', bold: true },
								'La Rioja 2203 - Posadas (3300) - Misiones. \n',
								{ text: 'Teléfonos: ', bold: true },
								'+54 (3764) 222333 / +54 (3764) 424450'
							],
							fontSize: 10,
							alignment: 'left',
							width: 320,
							margin: [0, 0]
						}
					],
					{
						text: `ID CONTRATO: ${data.venta.id.toString().padStart(4, '0').toUpperCase()}`,
						fontSize: 10,
						alignment: 'right',
						margin: [0, 10]
					}
				]
			},

			{
				text: 'CONTRATO DE EXCURSIÓN',
				style: 'header'
			},

			{
				text: [
					'En la ciudad de ',
					{ text: 'POSADAS, PROVINCIA DE MISIONES', fontSize: 10, bold: true },
					`, a los `,
					{ text: `${createdDia.toString().toUpperCase()} DÍAS DEL MES DE `, bold: true },
					{ text: `${createdMes.toString().toUpperCase()}`, bold: true },
					` del año `,
					{ text: `${createdAnio.toString().toUpperCase()}`, bold: true },
					`, entre la empresa de viajes y turismo `,
					{ text: 'DEL VALLE TURISMO', bold: true },
					', con domicilio en la calle ',
					{ text: 'LA RIOJA 2203', bold: true },
					' de la ciudad de Posadas, Provincia de Misiones, y la parte contratante el Sr/a ',
					{
						text: `${data.venta.cliente.nombre
							.toString()
							.toUpperCase()} ${data.venta.cliente.apellido.toString().toUpperCase()}`,
						bold: true
					},
					`, con DNI N° ${data.venta.cliente.dni.toString().toUpperCase()}.`
				],
				style: 'paragraph'
			},
			{
				text: [
					`Contrata una excursión para ${data.venta.cant_personas
						.toString()
						.toUpperCase()} persona/s ${pasajeros}. El precio es por persona en habitaciones dobles, triples o cuádruples, de `,
					{ text: `${precio.toString().toUpperCase()}`, bold: true },
					` con el régimen de `,
					{ text: `${data.venta.paquete.regimen.toString().toUpperCase()}`, bold: true },
					'. Estando la salida prevista para el día ',
					{ text: `${fechasalida.toString().toUpperCase()}`, bold: true },
					' y el regreso para el día ',
					{ text: `${fecharetorno.toString().toUpperCase()}`, bold: true },
					` por ${data.venta.paquete.cant_noches
						.toString()
						.toUpperCase()} noches y ${data.venta.paquete.cant_dias
						.toString()
						.toUpperCase()} días. El precio total de la excursión es de `,
					{ text: `${precio_total.toString().toUpperCase()}`, bold: true },
					'.'
				],

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
					'Traslado: Desde La Empresa Del Valle Turismo al destino elegido y viceversa, en ómnibus o minibús acondicionado para viajes especiales de larga distancia, provisto con Aire Acondicionado, TV, Video, butacas reclinables y/o semi cama, y coordinación permanente.',
					'Alojamiento: De acuerdo a la categoría del hotel según el programa elegido por el/los pasajeros.',
					'Responsabilidad: El pasajero cuenta con seguro de responsabilidad civil durante el viaje a cargo de la Empresa transportadora. El operador de Del Valle Turismo declina toda responsabilidad por cualquier daño o inconveniente que el/los pasajeros o sus pertenencias pudieran sufrir por huelgas, accidentes y sus consecuencias, enfermedades, robos o pérdidas o daños de equipajes u objetos personales, sean cuales fueren sus causas durante los días de la excursión contratada.',
					'Documentación: El operador de Del Valle Turismo declina toda responsabilidad en caso de ser rechazado por las autoridades Policiales, Migratorias y Aduaneras. Cualquier gasto que se origine correrá por cuenta del pasajero. En este caso, se aplicarán las condiciones establecidas para anulaciones o desistimiento voluntario sin derecho a ninguna indemnización.',
					'El pasajero deberá ir provisto de: DNI, Cédula de la Policía Federal o Pasaporte, según corresponda. ARGENTINOS CON DOBLE CIUDADANÍA deberán tener pasaporte argentino válido. EXTRANJEROS RESIDENTES EN EL PAÍS deben presentar el pasaporte del país de origen, cédula de identidad y visado si fuese necesario.',
					'DERECHO DE PERMANENCIA: El operador Del Valle Turismo se reserva el derecho de hacer abandonar el tour en cualquier circunstancia o lugar a toda aquella persona que, por su conducta o modo de obrar, cause malestar al grupo y ponga en peligro el normal desarrollo de la excursión. Esta persona no tendrá derecho alguno a exigir indemnización por los servicios no utilizados.',
					'Cantidad Mínima: El operador Del Valle Turismo se reserva el derecho de cancelar algunas salidas establecidas cuando no se complete la cantidad mínima de (30) treinta personas en ómnibus o en minibús (17) pasajeros inscritos. En este caso, se les reintegrará la totalidad del dinero abonado hasta la fecha, sin ningún tipo de interés u otro tipo de ajuste. La empresa comunicará 5 (cinco) días antes de la salida la suspensión del viaje.',
					'Cancelaciones: Una vez confirmados los servicios, la cancelación de los mismos sufrirá una retención del 10% del total de la excursión si esta se produce con una anticipación de 20 días o más a la fecha de salida. Si la cancelación se realiza entre 20 días y 10 días antes, la retención será del 20%. En caso de cancelación con menos de 10 días de anticipación, la retención será del 50% del valor total de la excursión. Si se produce una cancelación en menos de 5 (cinco) días, la retención será del 100%. Como alternativa, se podrá ceder o transferir a otra persona, con la condición de que no esté inscrita, o la Empresa otorgará una nota de crédito para otra excursión futura.',
					'COSTO DE LA EXCURSIÓN: El precio está expresado en dólares estadounidenses y está sujeto a modificación según la cotización del día. El costo no sufrirá variación una vez abonada la totalidad de la excursión.',
					'DE CONOCIMIENTO DEL PASAJERO: El simple hecho de inscribirse para tomar parte en los viajes detallados en el presente folleto implica la total conformidad, aceptación y conocimiento de todas y cada una de las condiciones generales mencionadas anteriormente. La Empresa Del Valle Turismo.'
				],
				style: 'list'
			},
			{
				text: 'Observaciones:',
				style: 'bold'
			},
			{
				text: data.venta.observaciones,
				style: 'paragraph'
			},
			{
				text: 'Página 1/1',
				style: 'page'
			}
		],
		styles: {
			header: {
				fontSize: 14,
				bold: true,
				alignment: 'center',
				margin: [0, 15, 0, 5]
			},
			paragraph: {
				fontSize: 10,
				alignment: 'justify',
				margin: [0, 2, 0, 2]
			},
			bold: {
				bold: true,
				margin: [0, 5, 0, 5]
			},
			list: {
				fontSize: 9,
				margin: [0, 5, 0, 5]
			},
			page: {
				fontSize: 8,
				alignment: 'right'
			}
		}
	};

	let deleteForm;
</script>

<div class="min-h-screen">
	<div class="flex flex-row flex-wrap justify-between">
		<h2 class="m-4">
			<i class="bx bx-venta text-blue-600 mr-2" /><strong>VENTA </strong>
			{data.venta.id}
		</h2>

		<div class="grid grid-cols-3 gap-4 h-[36px] content-end mt-4 mr-[-115px]">
			<Button
				class="mb-0"
				icon={Printer}
				iconDescription="Imprimir contrato"
				kind="tertiary"
				on:click={() => {
					pdfMake.createPdf(docDefinition, null, pdfFonts).open();
				}}
				size="small"
				tooltipAlignment="end"
				tooltipPosition="right"
			>
				Imprimir contrato
			</Button>
			<Button
				disabled={data.venta.estado == 'FINALIZADA'}
				icon={CurrencyDollar}
				size="small"
				on:click={() => {
					open = true;
				}}
			>
				Generar Pago
			</Button>
			<!-- <OverflowMenu flipped>
				<Button icon={TrashCan} kind="danger" size="small" on:click={() => {}}
					>Cancelar Venta</Button
				>
			</OverflowMenu> -->
		</div>
	</div>

	<Grid>
		<Row class="my-8">
			<Column>
				<Tile>
					<div class="flex flex-row justify-between">
						<h5>Total</h5>
						{#if data.venta.estado == 'FINALIZADA'}
							<p>Venta finalizada</p>
						{:else}
							<p>{precio_total}</p>
						{/if}
					</div>
				</Tile>
			</Column>
			<Column>
				<Tile>
					<div class="flex flex-row justify-between">
						<h5>Abonado</h5>
						<p>{abonado}</p>
					</div>
				</Tile>
			</Column>
			<Column>
				<Tile>
					<div class="flex flex-row justify-between">
						<h5>Restante</h5>
						<p>{restante}</p>
					</div>
				</Tile>
			</Column>
		</Row>
		<Row class="my-8">
			<Column
				><Tile class="">
					<h3>Detalles</h3>
					<StructuredList condensed>
						<StructuredListBody>
							{#each items as item}
								<StructuredListRow>
									<StructuredListCell head
										><i class="mr-2 bx text-blue-600 {item.icon}" />{item.name}</StructuredListCell
									>
									<StructuredListCell>{item.value}</StructuredListCell>
								</StructuredListRow>
							{/each}
							{#if data.ventaExpanded.expand.pasajeros != undefined}
								<StructuredListRow>
									<Accordion>
										<AccordionItem>
											<svelte:fragment slot="title">
												<i class="mr-2 bx text-blue-600 bx-user" />Acompañantes:
											</svelte:fragment>
											{#each data.ventaExpanded.expand.pasajeros as pasajero}
												<StructuredListRow>
													<StructuredListCell
														>{pasajero.nombre}
														{pasajero.apellido} (DNI: {pasajero.dni})</StructuredListCell
													>
												</StructuredListRow>
											{/each}
										</AccordionItem>
									</Accordion>
								</StructuredListRow>
							{/if}
						</StructuredListBody>
					</StructuredList>
				</Tile></Column
			>
			<Column
				><Tile class="">
					<h3>Pagos</h3>
					<StructuredList condensed>
						<StructuredListHead>
							<StructuredListRow head>
								<StructuredListCell head>Fecha y hora</StructuredListCell>
								<StructuredListCell head>Monto</StructuredListCell>
								<StructuredListCell head>Acciones</StructuredListCell>
							</StructuredListRow>
						</StructuredListHead>
						<StructuredListBody>
							{#if data.ventaExpanded.expand.pagos != undefined}
								{#each data.ventaExpanded.expand.pagos as pago}
									<StructuredListRow>
										<StructuredListCell
											>{new Date(pago.created).toLocaleDateString('es-ES', {
												day: '2-digit',
												month: 'short',
												year: 'numeric'
											})}
											<br />
											<div class="text-xs">
												<i class="bx bx-time mr-2 text-blue-600" />
												{new Date(pago.created).toLocaleTimeString('es-ES', {
													hour: '2-digit',
													minute: '2-digit'
												})}
											</div>
										</StructuredListCell>
										<StructuredListCell>
											{pago.valor.toLocaleString('es-AR', {
												style: 'currency',
												currency: 'ARS'
											})}
										</StructuredListCell>
										<StructuredListCell>
											<OverflowMenu size="sm" flipped>
												<Button
													icon={Printer}
													size="small"
													on:click={() => {
														imprimirComp(pago, data.ventaExpanded);
														window.location.reload();
													}}
												>
													Imprimir comprobante</Button
												>
												<Button icon={TrashCan} kind="danger" size="small" on:click={() => {}}>
													Cancelar Pago
												</Button>
											</OverflowMenu>
										</StructuredListCell>
									</StructuredListRow>
								{/each}
							{/if}
						</StructuredListBody>
					</StructuredList>
				</Tile></Column
			>
		</Row>
		<Row class="my-8">
			<Column
				><Tile class="">
					<h3>Contrato</h3>
					<p class="tracking-widest text-justify">
						En la ciudad de <strong class="uppercase tracking-tight"
							>Posadas, Provincia de Misiones,</strong
						>
						a los <strong class="uppercase tracking-tight">{createdDia}</strong>
						días del mes de <strong class="uppercase tracking-tight">{createdMes}</strong>
						del año
						<strong class="uppercase tracking-tight">{createdAnio}</strong>, entre la empresa de
						viajes y turismo <strong class="">DEL VALLE TURISMO</strong>, con domicilio en la calle
						<strong class="uppercase tracking-tight">La Rioja 2203</strong> de la ciudad de
						<strong class="uppercase tracking-tight">Posadas, Provincia de Misiones,</strong>
						y la parte contratante el Sr/a
						<strong class="uppercase tracking-tight">
							{data.venta.cliente.nombre}
							{data.venta.cliente.apellido}
						</strong>, con DNI N°
						<strong class="uppercase tracking-tight"> {data.venta.cliente.dni} </strong>.
						<br />
						Contrata una excursión para
						<strong class="uppercase tracking-tight"> {data.venta.cant_personas} </strong>
						persona/s {pasajeros}. El precio es por persona en habitaciones dobles, triples o
						cuádruples, de
						<strong class="uppercase tracking-tight"> {precio} </strong>
						con el regimen de
						<strong class="uppercase tracking-tight">{data.venta.paquete.regimen} </strong>.
						<br />
						Estando la salida prevista para el día
						<strong class="uppercase tracking-tight"> {fechasalida} </strong> y el regreso para el
						día <strong class="uppercase tracking-tight"> {fecharetorno} </strong>
						por
						<strong class="uppercase tracking-tight">
							{data.venta.paquete.cant_noches}
						</strong>
						noches y
						<strong class="uppercase tracking-tight">
							{data.venta.paquete.cant_dias}
						</strong>
						días. El precio total de la excursión es de
						<strong class="uppercase tracking-tight"> {precio_total} </strong>. <br />
						<strong class="uppercase font-bold">observaciones:</strong>
						{data.venta.observaciones}
						<br />
					</p>
				</Tile></Column
			>
		</Row>
	</Grid>
</div>

<ComposedModal bind:open on:close={() => closeModals()}>
	<ModalHeader label="" title="Nuevo pago" />
	<ModalBody hasForm hasScrollingContent>
		{#if creating}
			<div in:fly={{ y: 100 }} out:slide>
				<InlineLoading description="Registrando Pago..." />
			</div>
		{:else if toast}
			<div in:fly={{ y: 100 }} out:slide>
				<ToastNotification
					lowContrast
					kind="success"
					title="Operación exitosa"
					subtitle={new Date().toLocaleString()}
					caption="Pago registrado correctamente."
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
				action="?/createPago"
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
						<FormGroup legendText="Valores actuales">
							<Row>
								<Column>
									<h5>Total</h5>
									<p>{precio_total}</p>
								</Column>
								<Column>
									<h5>Abonado</h5>
									<p>{abonado}</p>
								</Column>
								<Column>
									<h5>Restante</h5>
									<p>{restante}</p>
								</Column>
							</Row>
						</FormGroup>
					</Row>
					<Row>
						<FormGroup legendText="Nuevos Valores">
							<Row>
								<Column>
									<h5>Total</h5>
									<p>{precio_total}</p>
								</Column>
								<Column>
									<h5>Abonado</h5>
									<p>
										{#if data.ventaExpanded.expand.pagos != undefined}
											{new Intl.NumberFormat('es-AR', {
												style: 'currency',
												currency: 'ARS'
											}).format(
												data.ventaExpanded.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0) +
													valor
											)}
										{:else}
											{new Intl.NumberFormat('es-AR', {
												style: 'currency',
												currency: 'ARS'
											}).format(0)}
										{/if}
									</p>
								</Column>
								<Column>
									<h5>Restante</h5>
									<p>
										{new Intl.NumberFormat('es-AR', {
											style: 'currency',
											currency: 'ARS'
										}).format(restanteint - valor)}
									</p>
								</Column>
							</Row>
						</FormGroup>
					</Row>

					<Row>
						<Column>
							<FormGroup legendText="Ingrese el importe a abonar: (max: {restanteint})">
								<NumberInput
									name="valor"
									label="Importe a pagar"
									invalidText="El valor debe ser mayor a 0 y menor o igual a {restanteint}"
									min={1}
									max={restanteint}
									size="xl"
									step={1}
									hideLabel
									bind:value={valor}
									on:change={() => {
										validarPago();
									}}
									on:input={() => {
										validarPago();
									}}
								/>
							</FormGroup>
						</Column>
					</Row>
				</Grid>
				<input
					class="hidden"
					name="total"
					value={data.ventaExpanded.expand.paquete.precio * data.ventaExpanded.cant_personas}
				/>
				<input class="hidden" name="saldo" value={restanteint - valor} />
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
