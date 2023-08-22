<script>
	/** @type {import('./$types').PageData} */

	//IMPORTS
	import { gridStyle } from '$lib/utils';
	import es from 'flatpickr/dist/l10n/es.js';
	import Grid from 'gridjs-svelte';
	import { esES } from 'gridjs/l10n';
	import { html } from 'gridjs';
	import {
		Button,
		Modal,
		TextInput,
		Form,
		FormGroup,
		DatePickerInput,
		DatePicker,
		ButtonSet,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		Select,
		SelectItem,
		Tile,
		ToastNotification
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';

	//EXPORTS
	export let data;

	//VARIABLES REACTIVAS
	$: userName = '';
	// nombre apellido email telefono dni fechanacimiento nacionalidad ocupacion
	$: nombre = '';
	$: apellido = '';
	$: email = '';
	$: telefono = '';
	$: dni = '';
	$: fechanacimiento = '';
	$: nacionalidad = '';
	$: ocupacion = '';

	//AUXILIARES
	$: isValidNombre = true;
	$: isValidApellido = true;
	$: isValidDNI = true;
	$: isValidEmail = true;
	$: isValidTelefono = true;
	$: isValidFechaNacimiento = true;
	$: isValidNacionalidad = true;
	$: isValidOcupacion = true;

	//VALIDACIONES
	$: validartionMessageNombre = '';
	$: validartionMessageApellido = '';
	$: validartionMessageDNI = '';
	$: validartionMessageEmail = '';
	$: validartionMessageTelefono = '';
	$: validartionMessageFechaNacimiento = '';
	$: validartionMessageNacionalidad = '';
	$: validartionMessageOcupacion = '';

	$: isValid = true;
	$: validationMessage = '';
	$: isFormValid =
		isValidApellido &&
		isValidNombre &&
		isValidDNI &&
		isValidEmail &&
		isValidTelefono &&
		isValidFechaNacimiento &&
		isValidNacionalidad &&
		isValidOcupacion &&
		nombre.length > 0;
	$: postButton = false;

	let form;
	//FUNCIONES
	const validateUserName = () => {
		if (userName.length < 3) {
			isValid = false;
			validationMessage = 'El nombre debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(userName)) {
			isValid = false;
			validationMessage = 'El nombre solo puede contener letras.';
		} else {
			isValid = true;
			validationMessage = '';
		}
	};

	const validateNombre = () => {
		if (nombre.length < 3) {
			isValidNombre = false;
			validartionMessageNombre = 'El nombre debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(nombre)) {
			isValidNombre = false;
			validartionMessageNombre = 'El nombre solo puede contener letras.';
		} else {
			isValidNombre = true;
			validartionMessageNombre = '';
		}
	};

	const validateApellido = () => {
		if (apellido.length < 3) {
			isValid = false;
			validationMessage = 'El apellido debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(userName)) {
			isValid = false;
			validationMessage = 'El apellido solo puede contener letras.';
		} else {
			isValid = true;
			validationMessage = '';
		}
	};

	const validateDNI = () => {
		if (dni.length < 7) {
			isValid = false;
			validationMessage = 'El DNI debe contener al menos 7 numeros.';
		} else if (!/^[0-9]+$/.test(dni)) {
			isValid = false;
			validationMessage = 'El DNI solo puede contener numeros.';
		} else {
			isValid = true;
			validationMessage = '';
		}
	};

	const validateEmail = () => {
		if (email.length < 3) {
			isValid = false;
			validationMessage = 'El email debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(userName)) {
			isValid = false;
			validationMessage = 'El email solo puede contener letras.';
		} else {
			isValid = true;
			validationMessage = '';
		}
	};

	const validateTelefono = () => {};

	//VARIABLES Y CONSTANTES
	let open = false;
	const columns = [
		{
			id: 'id',
			hidden: true
		},
		{
			id: 'dni',
			name: html(`<div class="flex"><i class="bx bx-id-card mr-2 mt-0.5"></i>DNI </div>`),
			sort: true,
			formatter: (cell, row) =>
				html(`<a class="text-sm text-black" href="/clientes/${row.cells[0].data}">${cell}</a>`)
		},
		{
			id: 'nombre',
			name: html('<div class="flex"><i class="bx bx-user mr-2 mt-0.5"></i>Nombre </div>'),
			sort: true,
			formatter: (cell) =>
				html(`<a class="text-sm text-black" href="/clientes/${cell}">${cell}</a>`)
		},
		{
			name: 'Apellido',
			sort: true,
			formatter: (cell) => {
				return cell;
			}
		},
		{
			id: 'email',
			name: html('<div class="flex"><i class="bx bx-at mr-2 mt-0.5"></i>Email </div>'),
			sort: true,
			formatter: (cell) => {
				return cell;
			}
		},
		{
			id: 'telefono',
			name: html('<div class="flex"><i class="bx bx-phone mr-2 mt-0.5"></i>Telefono </div>'),
			sort: true,
			formatter: (cell) => {
				return cell;
			}
		},
		{
			id: 'fechanacimiento',
			name: html('<div class="flex"><i class="bx bx-calendar mr-2 mt-0.5"></i>Nacimiento </div>'),
			sort: true,
			formatter: (cell) => {
				return new Date(cell).toLocaleDateString('es-ES', {
					day: '2-digit',
					month: 'short',
					year: 'numeric'
				});
			}
		},
		{
			id: 'created',
			name: html('<div class="flex"><i class="bx bx-calendar mr-2 mt-0.5"></i>Creado</div>'),
			sort: true,
			formatter: (cell) => {
				return new Date(cell).toLocaleDateString('es-ES', {
					day: '2-digit',
					month: 'short',
					year: 'numeric'
				});
			}
		}
	];
</script>

<main>
	<div class="flex flex-row justify-between">
		<h1>Clientes</h1>
		<Button icon={Add} on:click={() => (open = true)}>Crear cliente</Button>
	</div>

	<ComposedModal class="min-w-screen" bind:open>
		<ModalHeader label="" title="Registrar cliente" />
		<ModalBody hasForm hasScrollingContent class="bg-white">
			<form
				id="modalForm"
				on:submit={() => {
					open = false;
					postButton = false;
					isFormValid = false;
					console.log('submit');
				}}
				method="post"
				action="?/create"
				bind:this={form}
				use:enhance
			>
				<div class="flex">
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la primera columna -->
						<FormGroup legendText="DNI">
							<TextInput
								id="dni"
								bind:value={dni}
								name="dni"
								on:keyup={validateDNI}
								invalid={!isValidDNI}
								invalidText={validartionMessageDNI}
								labelText=""
								placeholder="Ingrese el DNI"
							/>
						</FormGroup>

						<FormGroup legendText="Fecha Nacimiento">
							<DatePicker
								datePickerType="single"
								dateFormat="d/m/Y"
								locale="es"
								maxDate={new Date()}
								flatpickrProps={{ locale: es, position: 'auto top' }}
								on:change
							>
								<DatePickerInput
									invalid={!isValidFechaNacimiento}
									name="nacimiento"
									placeholder="dd/mm/yyyy"
								/>
							</DatePicker>
						</FormGroup>

						<FormGroup legendText="Nombre">
							<TextInput
								id="nombre"
								bind:value={nombre}
								name="nombre"
								on:keyup={validateNombre}
								invalid={!isValidNombre}
								invalidText={validartionMessageNombre}
								labelText=""
								placeholder="Ingrese el nombre"
							/>
						</FormGroup>

						<FormGroup legendText="Telefono">
							<TextInput
								id="telefono"
								bind:value={telefono}
								name="telefono"
								on:keyup={validateTelefono}
								invalid={!isValidTelefono}
								invalidText={validartionMessageTelefono}
								labelText=""
								placeholder="Ingrese el telefono"
							/>
						</FormGroup>
					</div>
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la segunda columna -->
						<FormGroup legendText="Apellido">
							<TextInput
								id="apellido"
								bind:value={apellido}
								name="apellido"
								on:keyup={validateApellido}
								invalid={!isValidApellido}
								invalidText={validartionMessageApellido}
								labelText=""
								placeholder="Ingrese el apellido"
							/>
						</FormGroup>

						<FormGroup legendText="Nacionalidad">
							<Select id="select-1" hideLabel value="placeholder-item">
								<SelectItem disabled hidden value="Argentina" text="Seleccione la nacionalidad" />
								<SelectItem value="option-1" text="Option 1" />
								<SelectItem value="option-2" text="Option 2" />
								<SelectItem value="option-3" text="Option 3" />
							</Select>
						</FormGroup>

						<FormGroup legendText="Email">
							<TextInput
								id="email"
								bind:value={email}
								name="email"
								on:keyup={validateEmail}
								invalid={!isValidEmail}
								invalidText={validartionMessageEmail}
								labelText=""
								placeholder="Ingrese el email"
							/>
						</FormGroup>

						<FormGroup legendText="Ocupacion">
							<TextInput
								id="ocupacion"
								bind:value={ocupacion}
								name="ocupacion"
								invalid={!isValidOcupacion}
								invalidText={validartionMessageOcupacion}
								labelText=""
								placeholder="Ingrese la ocupacion"
							/>
						</FormGroup>
					</div>
				</div>
			</form>
		</ModalBody>
		<ModalFooter>
			<Button kind="secondary" size="lg" on:click={() => (open = false)}>Cancelar</Button>
			<Button
				id="modalSubmitButton"
				size="lg"
				type="submit"
				disabled={!isFormValid}
				on:click={() => form.requestSubmit()}>Crear</Button
			>
		</ModalFooter>
	</ComposedModal>

	<div class="">
		<Grid
			data={data.clientes}
			{columns}
			sort
			search="nombre, apellido, email, telefono, dni, fechanacimiento, nacionalidad, domicilio"
			pagination={{ enabled: true, limit: 10 }}
			language={esES}
			className={gridStyle}
		/>
	</div>
</main>
