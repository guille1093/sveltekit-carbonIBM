<script>
	import { OrderedList, ListItem, Link } from 'carbon-components-svelte';
	import { UserProfile, Edit, TrashCan, Save } from 'carbon-icons-svelte';
	import {
		StructuredList,
		TextArea,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		Tile,
		Button,
		ButtonSet,
		ModalHeader,
		ModalBody,
		ModalFooter,
		ComposedModal,
		FormGroup,
		NumberInput,
		TextInput,
		Select,
		SelectItem,
		DatePicker,
		DatePickerInput,
		InlineLoading,
		ToastNotification
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	export let data;

	// nombre apellido email telefono dni fechanacimiento nacionalidad ocupacion
	let nombre = data.cliente.nombre;
	let apellido = data.cliente.apellido;
	let email = data.cliente.email;
	let telefono = data.cliente.telefono;
	let dni = data.cliente.dni;
	let fechanacimiento = data.cliente.fechanacimiento;
	let nacionalidad = data.cliente.nacionalidad;
	let ocupacion = data.cliente.ocupacion;
	let sexo = data.cliente.sexo;

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
		if (nombre.length < 2) {
			isValidNombre = false;
			validartionMessageNombre = 'El nombre debe contener al menos 2 letras.';
		} else if (!/^[a-zA-Z\s\u00C0-\u00FF]+$/.test(nombre)) {
			isValidNombre = false;
			validartionMessageNombre = 'El nombre solo puede contener letras.';
		} else {
			isValidNombre = true;
			validartionMessageNombre = '';
		}
	};

	const validateApellido = () => {
		if (apellido.length < 2) {
			isValidApellido = false;
			validartionMessageApellido = 'El apellido debe contener al menos 2 letras.';
		} else if (!/^[a-zA-Z\s\u00C0-\u00FF]+$/.test(apellido)) {
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
		console.log(dni);
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

	const validateEmail = () => {};

	const validateTelefono = () => {};

	//VARIABLES Y CONSTANTES
	let open = false;

	const tableitems = [
		{
			title: 'Nombres',
			value: data.cliente.nombre
		},
		{
			title: 'Apellido',
			value: data.cliente.apellido
		},
		{
			title: 'DNI',
			value: data.cliente.dni
		},
		{
			title: 'Sexo',
			value: data.cliente.sexo
		},
		{
			title: 'Fecha nacimiento',
			value: new Date(data.cliente.fechanacimiento).toLocaleDateString('es-AR', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		},
		{
			title: 'Domicilio',
			value: data.cliente.domicilio
		},
		{
			title: 'Teléfono',
			value: data.cliente.telefono
		},
		{
			title: 'Email',
			value: data.cliente.email
		},
		{
			title: 'Ocupación',
			value: data.cliente.ocupacion
		},
		{
			title: 'Nacionalidad',
			value: data.cliente.nacionalidad
		},
		{
			title: 'Lugar ascenso',
			value: data.cliente.lugarascenso
		},
		{
			title: 'Nombre madre',
			value: data.cliente.nombremadre
		},
		{
			title: 'Apellido madre',
			value: data.cliente.apellidomadre
		},
		{
			title: 'Observaciones',
			value: data.cliente.observaciones
		}
	];
</script>

<main>
	<Tile>
		<div class="flex flex-row justify-between">
			<h1>Cliente: {data.cliente.nombre} {data.cliente.apellido}</h1>
			<ButtonSet class="mr-36">
				<Button href="/clientes" icon={TrashCan} kind="danger">Eliminar</Button>
				<Button icon={Edit} on:click={() => (open = true)}>Editar</Button>
			</ButtonSet>
		</div>
		<StructuredList condensed>
			<StructuredListBody>
				{#each tableitems as items}
					<StructuredListRow>
						<StructuredListCell noWrap><strong>{items.title}:</strong></StructuredListCell>
						<StructuredListCell>{items.value}</StructuredListCell>
					</StructuredListRow>
				{/each}
			</StructuredListBody>
		</StructuredList>
	</Tile>
</main>

<ComposedModal class="" bind:open>
	<ModalHeader label="" title="Editar cliente" />
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
					caption="El cliente se ha actualizado correctamente."
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
						isValidApellido = true;
						isValidDNI = true;
					};
				}}
			>
				<div class="flex">
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la primera columna -->
						<FormGroup legendText="DNI">
							<NumberInput
								id="dni"
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
								value={fechanacimiento}
								datePickerType="single"
								dateFormat="d/m/Y"
								locale="es"
								maxDate={new Date()}
								flatpickrProps={{ position: 'above' }}
								on:change
							>
								<DatePickerInput
									value={fechanacimiento}
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
							<Select hideLabel selected={nacionalidad} value={nacionalidad} name="nacionalidad">
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

						<FormGroup legendText="Sexo">
							<Select id="select-1" hideLabel value={sexo} selected={sexo} name="sexo">
								<SelectItem value="MASCULINO" text="Masculino" />
								<SelectItem value="FEMENINO" text="Femenino" />
								<SelectItem value="OTRO" text="Otro" />
							</Select>
						</FormGroup>
					</div>
				</div>
				<TextArea
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
			icon={Save}
			size="lg"
			type="submit"
			disabled={!isFormValid || creating}
			on:click={() => form.requestSubmit()}>Guardar</Button
		>
	</ModalFooter>
</ComposedModal>
