<script>
	import { Edit, TrashCan, Save } from 'carbon-icons-svelte';
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
		ToastNotification,
		Modal
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	export let data;
	import { Spanish } from 'flatpickr/dist/l10n/es.js';

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
	let observaciones = data.cliente.observaciones;
	let lugarascenso = data.cliente.lugarascenso;
	let nombremadre = data.cliente.nombremadre;
	let apellidomadre = data.cliente.apellidomadre;

	//AUXILIARES
	$: isValidNombre = true;
	$: isValidApellido = true;
	$: isValidDNI = true;
	$: isValidEmail = true;
	$: isValidTelefono = true;
	$: isValidFechaNacimiento = true;
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

	/**
	 * @type {HTMLFormElement}
	 */
	let deleteForm;

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
		} else if (!/^[a-zA-Z\s\u00C0-\u00FF]+$/.test(ocupacion)) {
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
		} else if (
			data.clientes.findIndex(
				(/** @type {{ dni: any; }} */ cliente) => cliente.dni === dni.toString()
			) > -1
		) {
			isValidDNI = false;
			validartionMessageDNI = 'Ya existe un cliente con este DNI.';
		} else {
			isValidDNI = true;
			validartionMessageDNI = '';
		}
	};

	const validateForm = () => {
		validateNombre();
		validateApellido();
		validateEmail();
		validateTelefono();
		validateOcupacion();
	};

	const validateEmail = () => {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const isValid = regex.test(email);
		isValidEmail = isValid;
		validartionMessageEmail = isValid ? '' : 'El email no es válido.';
	};

	const validateTelefono = () => {};

	//VARIABLES Y CONSTANTES
	let open = false;
	let open2 = false;
</script>

<main>
	<Tile>
		<div class="flex flex-row justify-between mb-4">
			<h1>Cliente: {data.cliente.nombre} {data.cliente.apellido}</h1>
			<ButtonSet class="mr-36">
				<Button disabled on:click={() => (open2 = true)} icon={TrashCan} kind="danger"
					>Eliminar</Button
				>
				<Button icon={Edit} on:click={() => (open = true)}>Editar</Button>
			</ButtonSet>
		</div>
		<StructuredList condensed>
			<StructuredListBody>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nombre:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.nombre}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Apellido:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.apellido}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>DNI:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.dni}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Sexo:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.sexo}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Fecha nacimiento:</strong></StructuredListCell>
					<StructuredListCell
						>{new Date(data.cliente.fechanacimiento).toLocaleDateString('es-AR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</StructuredListCell
					>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Domicilio:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.domicilio}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Teléfono:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.telefono}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Email:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.email}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Ocupación:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.ocupacion}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nacionalidad:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.nacionalidad}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Lugar ascenso:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.lugarascenso}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nombre madre:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.nombremadre}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Apellido madre:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.apellidomadre}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Observaciones:</strong></StructuredListCell>
					<StructuredListCell>{data.cliente.observaciones}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Fecha creación:</strong></StructuredListCell>
					<StructuredListCell
						>{new Date(data.cliente.created).toLocaleDateString('es-AR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</StructuredListCell
					>
				</StructuredListRow>
			</StructuredListBody>
		</StructuredList>
	</Tile>
</main>

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
	modalHeading="Eliminar cliente"
	primaryButtonText="Eliminar"
	secondaryButtonText="Cancelar"
	on:click:button--secondary={() => (open2 = false)}
	on:click:button--primary={() => deleteForm.requestSubmit()}
	on:open
	on:close
	on:submit
>
	<h5>¿Está seguro que desea eliminar el cliente {data.cliente.nombre} {data.cliente.apellido}?</h5>
	<p class="mt-4">
		Esta es una accion permanente y los registros asociados al cliente tambien seran eliminados
	</p>
</Modal>

<ComposedModal class="" bind:open>
	<ModalHeader label="" title="Editar cliente" />
	<ModalBody hasForm hasScrollingContent>
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
								readonly
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
								on:keyup={() => {
									const regex = /^[0-9-()+]{5,18}$/;
									const isValid = regex.test(telefono);
									isValidTelefono = isValid;
									validartionMessageTelefono = isValid ? '' : 'El número de teléfono no es válido.';
								}}
								invalid={!isValidTelefono}
								invalidText={validartionMessageTelefono}
								labelText=""
								placeholder="Ingrese el teléfono"
							/>
						</FormGroup>

						<FormGroup legendText="Lugar Ascenso">
							<TextInput
								bind:value={lugarascenso}
								name="lugarascenso"
								placeholder="Ingrese el lugar de ascenso"
							/>
						</FormGroup>

						<FormGroup legendText="Ocupacion">
							<TextInput
								bind:value={ocupacion}
								name="ocupacion"
								placeholder="Ingrese la ocupacion"
							/>
						</FormGroup>

						<FormGroup legendText="Nombre Madre">
							<TextInput
								bind:value={nombremadre}
								name="nombremadre"
								placeholder="Ingrese el nombre de la madre"
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
								locale={Spanish}
								maxDate={new Date()}
								flatpickrProps={{ position: 'above' }}
								on:change={validateForm}
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
							<Select hideLabel selected={nacionalidad} name="nacionalidad">
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
							<Select id="select-1" hideLabel selected={sexo} name="sexo" on:change={validateForm}>
								<SelectItem value="MASCULINO" text="Masculino" />
								<SelectItem value="FEMENINO" text="Femenino" />
								<SelectItem value="OTRO" text="Otro" />
							</Select>
						</FormGroup>

						<FormGroup legendText="Apellido Madre">
							<TextInput
								bind:value={apellidomadre}
								name="apellidomadre"
								placeholder="Ingrese el apellido de la madre"
							/>
						</FormGroup>
					</div>
				</div>
				<TextArea
					bind:value={observaciones}
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
			icon={Save}
			size="lg"
			type="submit"
			disabled={!isFormValid || creating}
			on:click={() => form.requestSubmit()}>Guardar</Button
		>
	</ModalFooter>
</ComposedModal>
