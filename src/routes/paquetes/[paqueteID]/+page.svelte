<script>
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import {
		StructuredList,
		StructuredListHead,
		StructuredListBody,
		StructuredListRow,
		StructuredListCell,
		Tile,
		Grid,
		Row,
		Column,
		Button,
		ButtonSet,
		Modal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		TextInput,
		NumberInput,
		Select,
		SelectItem,
		DatePicker,
		DatePickerInput,
		TextArea,
		FormGroup,
		InlineLoading,
		ComposedModal,
		ToastNotification
	} from 'carbon-components-svelte';

	import { enhance } from '$app/forms';

	import { Edit, TrashCan, Printer } from 'carbon-icons-svelte';

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

	export let data;

	let open = false;
	let open2 = false;
	let creating = false;

	let precio = data.paquetes.precio;

	const items = [
		{
			name: 'Destino',
			icon: 'bx-map',
			value: data.paquetes.nombre
		},
		{
			name: 'Precio',
			icon: 'bx-dollar',
			value: precio
		},
		{
			name: 'Salida',
			icon: 'bx-calendar-heart',
			value: new Date(data.paquetes.fechasalida).toLocaleDateString('es-ES', {
				day: '2-digit',
				month: 'short',
				year: 'numeric'
			})
		},
		{
			name: 'Llegada',
			icon: 'bx-calendar-check',
			value: new Date(data.paquetes.fecharetorno).toLocaleDateString('es-ES', {
				day: '2-digit',
				month: 'short',
				year: 'numeric'
			})
		},
		{
			name: 'Dias',
			icon: 'bx-sun',
			value: data.paquetes.cant_dias
		},
		{
			name: 'Noches',
			icon: 'bx-moon',
			value: data.paquetes.cant_noches
		},
		{
			name: 'Regimen',
			icon: 'bx-food-menu',
			value: data.paquetes.regimen
		},
		{
			name: 'Hotel',
			icon: 'bx-bed',
			value: data.paquetes.hotel
		},
		{
			name: 'Estado',
			icon: 'bx-check-circle',
			value: data.paquetes.estado
		},
		{
			name: 'Creado',
			icon: 'bx-calendar',
			value: new Date(data.paquetes.created).toLocaleDateString('es-ES', {
				day: '2-digit',
				month: 'short',
				year: 'numeric'
			})
		},
		{
			name: 'Modificado',
			icon: 'bx-calendar-edit',
			value: new Date(data.paquetes.updated).toLocaleDateString('es-ES', {
				day: '2-digit',
				month: 'short',
				year: 'numeric'
			})
		},
		{
			name: 'Observaciones',
			icon: 'bx-notepad',
			value: data.paquetes.descripcion
		}
	];

	//VALIDACIONES
	$: isValidNombre = true;
	$: validartionMessageNombre = '';
	$: isFormValid = isValidNombre ? true : false;
	$: creating = false;

	let nombre = data.paquetes.nombre;
	let cant_dias = data.paquetes.cant_dias;
	let cant_noches = data.paquetes.cant_noches;
	let hotel = data.paquetes.hotel;
	let regimen = data.paquetes.regimen;
	let estado = data.paquetes.estado;
	let fechasalida = data.paquetes.fechasalida;
	let fecharetorno = data.paquetes.fecharetorno;
	let observaciones = data.paquetes.descripcion;
	let pais_destino = data.paquetes.pais_destino;

	let toast = false;

	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	/**
	 * @type {HTMLFormElement}
	 */
	let deleteForm;

	const validateNombre = () => {
		if (nombre.length < 3) {
			isValidNombre = false;
			validartionMessageNombre = 'El destino debe contener al menos 3 letras.';
		} else {
			isValidNombre = true;
			validartionMessageNombre = '';
		}
	};

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};

	const docDefinition = {
		pageMargins: [40, 40],
		pageSize: 'A4',
		content: [
			{
				columns: [
					[
						{
							image: `data:image/jpeg;base64,${data.logo}`,
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
								'La Rioja 2203 - Posadas (3360) - Misiones. \n',
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
						text: `ID PAQUETE: ${data.paquetes.id.toString().padStart(4, '0').toUpperCase()}`,
						fontSize: 10,
						alignment: 'right',
						margin: [0, 10]
					}
				]
			},

			{
				text: `MANIFIESTO DE PASAJEROS Y TRIPULACIÓN \n ${data.paquetes.nombre.toUpperCase()}  ${new Date(
					data.paquetes.fechasalida
				)
					.toLocaleDateString('es-ES', {
						day: '2-digit',
						month: 'short',
						year: 'numeric'
					})
					.toUpperCase()} \n \n`,
				style: 'header'
			},

			//una tabla con los campos nombre y apellido, fecha de nacimiento, nacionalidad, dni
			// Tabla dinámica con los campos: nombre y apellido, fecha de nacimiento, nacionalidad, dni
			// ...

			{
				table: {
					headerRows: 1,
					widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
					body: [
						// Encabezado de la tabla
						[
							{ text: 'NRO.', style: 'tableHeader' },
							{ text: 'APELLIDO Y NOMBRE', style: 'tableHeader' },
							{ text: 'NACIMIENTO', style: 'tableHeader' },
							{ text: 'NACIONALIDAD', style: 'tableHeader' },
							{ text: 'OCUPACIÓN', style: 'tableHeader' },
							{ text: 'SEXO', style: 'tableHeader' },
							{ text: 'DNI', style: 'tableHeader' },
							{ text: 'PAIS RESIDENCIA', style: 'tableHeader' }
						],
						// Datos de los pasajeros
						...data.ventas.reduce((rows, venta) => {
							// Agregar cada pasajero como una fila en la tabla
							venta.pasajeros.forEach((pasajero) => {
								rows.push([
									{ text: rows.length + 1, fontSize: 8 }, // Tamaño de fuente de la celda
									{ text: pasajero.apellido + ' ' + pasajero.nombre || '', fontSize: 8 },
									{
										text:
											new Date(pasajero.fechanacimiento)
												.toLocaleDateString('es-ES', {
													day: '2-digit',
													month: '2-digit',
													year: 'numeric'
												})
												.toUpperCase() || '',
										fontSize: 8
									},
									{ text: pasajero.nacionalidad || '', fontSize: 8 },
									{ text: pasajero.ocupacion || '', fontSize: 8 },
									{
										text:
											pasajero.sexo === 'MASCULINO'
												? 'M'
												: (pasajero.sexo === 'FEMENINO' ? 'F' : '') || '',
										fontSize: 8
									},
									{ text: pasajero.dni || '', fontSize: 8 },
									{ text: pasajero.nacionalidad || '', fontSize: 8 }
								]);
							});
							return rows;
						}, [])
					]
				}
			}

			// ...
		],
		styles: {
			tableFont: {
				fontSize: 6 // Ajusta el tamaño de fuente deseado para la tabla
			},

			header: {
				fontSize: 14,
				bold: true,
				alignment: 'center',
				margin: [0, 15, 0, 5]
			},
			// Estilo para el encabezado de la tabla
			tableHeader: {
				bold: true,
				fontSize: 8,
				alignment: 'center',
				fillColor: '#eeeeee' // Color de fondo del encabezado de la tabla
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
				fontSize: 8,
				margin: [0, 5, 0, 5]
			},
			page: {
				fontSize: 8,
				alignment: 'right'
			}
		}
	};
</script>

<form
	id="deleteForm"
	bind:this={deleteForm}
	action="?/delete"
	method="post"
	class="hidden"
	use:enhance
/>

<Modal
	danger
	bind:open={open2}
	modalHeading="Eliminar paquete"
	primaryButtonText="Eliminar"
	secondaryButtonText="Cancelar"
	on:click:button--secondary={() => (open2 = false)}
	on:click:button--primary={() => deleteForm.requestSubmit()}
	on:open
	on:close
	on:submit
>
	<h5>¿Está seguro que desea eliminar el paquete de {data.paquetes.nombre}?</h5>
	<p class="mt-4">
		Esta es una accion permanente y los registros asociados al paquete tambien seran eliminados
	</p>
</Modal>

<Grid>
	<Row class="justify-between p-4">
		<h1>Paquete: {data.paquetes.nombre}</h1>
		<ButtonSet class="mr-36 p-4">
			<Button size="small" on:click={() => (open2 = true)} icon={TrashCan} kind="danger"
				>Eliminar</Button
			>
			<Button size="small" icon={Edit} on:click={() => (open = true)}>Editar</Button>
			<Button
				size="small"
				kind="tertiary"
				icon={Printer}
				on:click={() => {
					pdfMake.createPdf(docDefinition, null, pdfFonts).open();
				}}>Imprimir Manifiesto</Button
			>
		</ButtonSet>
	</Row>
	<Row>
		<Column
			><Tile>
				<h2 class="">Información del paquete</h2>
				<ul class="mt-4">
					{#each items as item}
						<li class="flex space-x-3 space-y-2 justify-between">
							<div>
								<!-- Icon -->
								<i class="bx text-blue-600 {item.icon}" />
								<!-- Name -->
								<span>{item.name}:</span>
							</div>

							<!-- Text -->
							<span>{item.value}</span>
						</li>
					{/each}
				</ul>
			</Tile></Column
		>
		<Column>
			<Tile>
				<h2 class="">Pasajeros</h2>
				<div class="flex justify-between">
					<p class=" mb-6 pb-2">
						Total de pasajeros: <strong class="font-mono text-2xl"
							>{data.ventas.reduce(
								(/** @type {any} */ acc, /** @type {{ pasajeros: string | any[]; }} */ venta) =>
									acc + venta.pasajeros.length,
								0
							)}</strong
						>
					</p>
				</div>

				{#each data.ventas as venta}
					<div class="mt-4 p-2">
						<h4><a class="" href="/ventas/{venta.id}"><strong>CONTRATO:</strong> {venta.id}</a></h4>
						<StructuredList>
							<StructuredListBody>
								<StructuredListRow>
									<StructuredListCell
										><strong>Titular:</strong>
										{venta.cliente.nombre}
										{venta.cliente.apellido}</StructuredListCell
									>
								</StructuredListRow>
								{#each venta.pasajeros as pasajero}
									<StructuredListRow>
										<StructuredListCell>{pasajero.dni}</StructuredListCell>
										<StructuredListCell>{pasajero.nombre} {pasajero.apellido}</StructuredListCell>
									</StructuredListRow>
								{/each}
							</StructuredListBody>
						</StructuredList>
					</div>
				{/each}
			</Tile></Column
		>
	</Row>
</Grid>

<ComposedModal class="" bind:open on:close={() => closeModals()}>
	<ModalHeader label="" title="Editar paquete" />
	<ModalBody hasForm hasScrollingContent>
		{#if creating}
			<div in:fly={{ y: 100 }} out:slide>
				<InlineLoading description="Guardando paquete..." />
			</div>
		{:else if toast}
			<div in:fly={{ y: 100 }} out:slide>
				<ToastNotification
					lowContrast
					kind="success"
					title="Operación exitosa"
					subtitle={new Date().toLocaleString()}
					caption="El paquete se ha actualizado correctamente."
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
				action="?/update"
				bind:this={form}
				use:enhance={() => {
					creating = true;
					return async ({ update }) => {
						await update();
						creating = false;
						toast = true;
						isValidNombre = true;
					};
				}}
			>
				<div class="flex">
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la primera columna -->
						<FormGroup legendText="Destino">
							<TextInput
								id="nombre"
								bind:value={nombre}
								name="nombre"
								on:keyup={validateNombre}
								invalid={!isValidNombre}
								invalidText={validartionMessageNombre}
								labelText=""
								placeholder="Ingrese el destino"
							/>
						</FormGroup>

						<FormGroup legendText="Precio">
							<NumberInput
								id="precio"
								min={1}
								name="precio"
								invalid={precio < 0}
								invalidText="El precio debe ser mayor a 0"
								placeholder="Ingrese el precio"
								bind:value={precio}
							/>
						</FormGroup>

						<FormGroup legendText="Cantidad de días">
							<NumberInput
								id="cant_dias"
								min={1}
								name="cant_dias"
								placeholder="Ingrese la cantidad de días"
								bind:value={cant_dias}
								invalidText="La cantidad de días debe ser mayor a 0"
							/>
						</FormGroup>

						<FormGroup legendText="Cantidad de noches">
							<NumberInput
								id="cant_noches"
								min={1}
								name="cant_noches"
								placeholder="Ingrese la cantidad de noches"
								bind:value={cant_noches}
								invalidText="La cantidad de noches debe ser mayor a 0"
							/>
						</FormGroup>
					</div>
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la segunda columna -->

						<FormGroup legendText="Fechas salida y retorno">
							<DatePicker
								datePickerType="range"
								dateFormat="d/m/Y"
								locale={Spanish}
								bind:valueFrom={fechasalida}
								bind:valueTo={fecharetorno}
								on:change
							>
								<DatePickerInput placeholder="dd/mm/aaa" name="fechasalida" />
								<DatePickerInput placeholder="dd/mm/aaa" name="fecharetorno" />
							</DatePicker>
						</FormGroup>

						<FormGroup legendText="Pais de destino">
							<Select id="select-1" hideLabel name="pais_destino" selected={pais_destino}>
								<SelectItem disabled hidden value="Argentina" text="Seleccione un país" />
								{#each data.nacionalidades as nacionalidad}
									<SelectItem
										value={nacionalidad.destpais}
										text="{nacionalidad.destpais} {nacionalidad.codpais}"
									/>
								{/each}
							</Select>
						</FormGroup>

						<FormGroup legendText="Regimen">
							<Select id="select-1" hideLabel name="regimen" selected={regimen}>
								<SelectItem disabled hidden value="PENSION COMPLETA" text="Seleccione un regimen" />

								<SelectItem value="PENSION COMPLETA" text="PENSION COMPLETA" />
								<SelectItem value="MEDIA PENSION" text="MEDIA PENSION" />
								<SelectItem value="DESAYUNO" text="DESAYUNO" />
							</Select>
						</FormGroup>

						<FormGroup legendText="Estado">
							<Select id="select-1" hideLabel name="estado" selected={estado}>
								<SelectItem disabled hidden value="DISPONIBLE" text="Seleccione un estado" />
								<SelectItem value="NO DISPONIBLE" text="NO DISPONIBLE" />
								<SelectItem value="DISPONIBLE" text="DISPONIBLE" />
							</Select>
						</FormGroup>
					</div>
				</div>
				<!-- obervaciones -->

				<FormGroup legendText="Hotel">
					<TextInput id="hotel" name="hotel" placeholder="Ingrese el hotel" bind:value={hotel} />
				</FormGroup>

				<TextArea
					class="p-4"
					name="observaciones"
					labelText="Observaciones"
					placeholder="Puede ingresar observaciones si lo desea..."
					maxCount={300}
					bind:value={observaciones}
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
			on:click={() => form.requestSubmit()}>Actualizar</Button
		>
	</ModalFooter>
</ComposedModal>
