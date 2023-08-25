<script>
	/** @type {import('./$types').PageData} */

	//IMPORTS
	import { gridStyle } from '$lib/utils';
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import es from 'flatpickr/dist/l10n/es.js';
	import Grid from 'gridjs-svelte';
	import { esES } from 'gridjs/l10n';
	import { html } from 'gridjs';
	import {
		Button,
		Modal,
		TextInput,
		NumberInput,
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
		InlineLoading,
		Tile,
		ToastNotification
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	//EXPORTS
	export let data;

	//VARIABLES REACTIVAS
	$: userName = '';
	// nombre apellido email telefono dni fechanacimiento nacionalidad ocupacion
	$: nombre = '';
	$: apellido = '';
	$: email = '';
	$: telefono = '';
	$: dni = null;
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
	$: validartionMessageOcupacion = '';

	$: isValid = true;
	$: validationMessage = '';
	$: isFormValid =
		isValidApellido && isValidNombre && isValidDNI && nombre.length > 0 && apellido.length > 0
			? true
			: false;
	$: creating = false;

	let toast = false;

	/**
	 * @type {HTMLFormElement}
	 */
	let form;
	//FUNCIONES

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
			isValidApellido = false;
			validartionMessageApellido = 'El apellido debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(apellido)) {
			isValidApellido = false;
			validartionMessageApellido = 'El apellido solo puede contener letras.';
		} else {
			isValidApellido = true;
			validartionMessageApellido = '';
		}
	};

	const validateOcupacion = () => {
		if (ocupacion.length < 3) {
			isValidOcupacion = false;
			validartionMessageOcupacion = 'La ocupacion debe contener al menos 3 letras.';
		} else if (!/^[a-zA-Z]+$/.test(ocupacion)) {
			isValidOcupacion = false;
			validartionMessageOcupacion = 'La ocupacion solo puede contener letras.';
		} else {
			isValidOcupacion = true;
			validartionMessageOcupacion = '';
		}
	};

	const validateDNI = () => {
		if (dni == null) {
			isValidDNI = false;
			validartionMessageDNI = 'El DNI no puede estar vacio.';
		} else if (!/^.{7,8}$/.test(dni)) {
			isValidDNI = false;
			validartionMessageDNI = 'El DNI debe tener entre 7 y 8 caracteres.';
		} else if (!/^[0-9]+$/.test(dni)) {
			isValidDNI = false;
			validartionMessageDNI = 'El DNI solo puede contener numeros.';
		} else if (data.clientes.findIndex((cliente) => cliente.dni === dni.toString()) > -1) {
			isValidDNI = false;
			validartionMessageDNI = 'Ya existe un cliente con este DNI.';
		} else {
			isValidDNI = true;
			validartionMessageDNI = '';
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
		<Button icon={Add} on:click={() => (open = true)}>Registrar cliente</Button>
	</div>

	<ComposedModal class="" bind:open>
		<ModalHeader label="" title="Registrar cliente" />
		<ModalBody hasForm hasScrollingContent class="bg-white">
			{#if creating}
				<div in:fly={{ y: 100 }} out:slide>
					<InlineLoading description="Guardando cliente..." />
				</div>
			{:else if toast}
				<div in:fly={{ y: 100 }} out:slide>
					<ToastNotification
						lowContrast
						kind="success"
						title="Operación exitosa"
						subtitle={new Date().toLocaleString()}
						caption="El cliente se ha creado correctamente."
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
					action="?/create"
					bind:this={form}
					use:enhance={() => {
						creating = true;
						return async ({ update }) => {
							await update();
							creating = false;
							toast = true;
							nombre = '';
							apellido = '';
							email = '';
							telefono = '';
							dni = null;
							fechanacimiento = '';
							nacionalidad = '';
							ocupacion = '';
							isValidNombre = true;
							isValidApellido = true;
							isValidDNI = true;
							invalidateAll();
						};
					}}
				>
					<div class="flex">
						<div class="w-[50%] flex-grow p-4">
							<!-- Contenido de la primera columna -->
							<FormGroup legendText="DNI">
								<NumberInput
									id="dni"
									{$$props}
									bind:value={dni}
									name="dni"
									on:input={validateDNI}
									invalid={!isValidDNI}
									invalidText={validartionMessageDNI}
									placeholder="Ingrese el DNI"
								/>
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

							<FormGroup legendText="Ocupacion">
								<TextInput
									id="ocupacion"
									bind:value={ocupacion}
									name="ocupacion"
									on:keyup={validateOcupacion}
									invalid={!isValidOcupacion}
									invalidText={validartionMessageOcupacion}
									labelText=""
									placeholder="Ingrese la ocupacion"
								/>
							</FormGroup>
						</div>
						<div class="w-[50%] flex-grow p-4">
							<!-- Contenido de la segunda columna -->

							<FormGroup legendText="Fecha Nacimiento">
								<DatePicker
									value={new Date()}
									datePickerType="single"
									dateFormat="d/m/Y"
									locale="es"
									maxDate={new Date()}
									flatpickrProps={{ position: 'above' }}
									on:change
								>
									<DatePickerInput
										invalid={!isValidFechaNacimiento}
										name="nacimiento"
										placeholder="dd/mm/yyyy"
									/>
								</DatePicker>
							</FormGroup>

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
								<Select id="select-1" hideLabel value={nacionalidad} name="nacionalidad">
									<SelectItem disabled hidden value="Argentina" text="Seleccione la nacionalidad" />
									{#each data.nacionalidades as nacionalidad}
										<SelectItem
											value={nacionalidad.destpais}
											text="{nacionalidad.destpais} {nacionalidad.codpais}"
										/>
									{/each}
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
						</div>
					</div>
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
