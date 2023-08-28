<script>
	/** @type {import('./$types').PageData} */

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
		Pagination
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';

	//EXPORTS
	export let data;

	//VARIABLES REACTIVAS

	$: nombre = '';
	$: apellido = '';
	$: email = '';
	$: telefono = '';
	$: dni = null;
	$: nacionalidad = '';
	$: ocupacion = '';

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
		isValidApellido && isValidNombre && dni && nombre.length > 0 && apellido.length > 0
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

	const validateEmail = () => {};

	const validateTelefono = () => {};

	//VARIABLES Y CONSTANTES
	let open = false;

	//DataTables
	let rows = data.clientes;
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
		<ModalHeader label="" title="Registrar cliente" />
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
							nacionalidad = '';
							ocupacion = '';
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
									value={new Date().toISOString()}
									datePickerType="single"
									dateFormat="d/m/Y"
									locale={Spanish}
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
								<Select id="select-1" hideLabel name="nacionalidad">
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

	<h1>Clientes</h1>
	<p>Aqui puede ver, buscar y filtrar todos los clientes registrados en el sistema.</p>
	<DataTable
		zebra
		sortable
		headers={[
			{ key: 'dni', value: 'DNI' },
			{ key: 'nombre', value: 'Nombre' },
			{ key: 'apellido', value: 'Apellido' },
			{ key: 'fechanacimiento', value: 'Nacimiento' },
			{ key: 'created', value: 'Creado' },
			{ key: 'updated', value: 'Actualizado' },
			{ key: 'telefono', value: 'Telefono' },
			{ key: 'nacionalidad', value: 'Nacionalidad' }
		]}
		{rows}
		{pageSize}
		{page}
	>
		<svelte:fragment slot="cell-header" let:header>
			{#if header.key === 'dni'}
				<div class="flex"><i class="bx bx-id-card mr-2 text-blue-600" />DNI</div>
			{:else if header.key === 'nombre'}
				<div class="flex"><i class="bx bx-user mr-2 text-blue-600" />Nombre</div>
			{:else if header.key === 'apellido'}
				<div class="flex"><i class="bx bx-user mr-2 text-blue-600" />Apellido</div>
			{:else if header.key === 'telefono'}
				<div class="flex"><i class="bx bx-phone mr-2 text-blue-600" />Telefono</div>
			{:else if header.key === 'fechanacimiento'}
				<div class="flex"><i class="bx bx-calendar mr-2 text-blue-600" />Nacimiento</div>
			{:else if header.key === 'created'}
				<div class="flex"><i class="bx bx-calendar mr-2 text-blue-600" />Creado</div>
			{:else if header.key === 'updated'}
				<div class="flex"><i class="bx bx-calendar mr-2 text-blue-600" />Actualizado</div>
			{:else if header.key === 'nacionalidad'}
				<div class="flex"><i class="bx bx-globe mr-2 text-blue-600" />Nacionalidad</div>
			{:else}
				{header.value}
			{/if}
		</svelte:fragment>

		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === 'fechanacimiento'}
				{new Date(cell.value).toLocaleDateString('es-ES', {
					day: '2-digit',
					month: 'short',
					year: 'numeric'
				})}
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
			{:else if cell.key === 'dni'}
				<a class="text-sm text-gray-300" href="/clientes/{row.id}">{cell.value}</a>
			{:else if cell.key === 'nombre'}
				<a class="text-sm text-gray-300" href="/clientes/{row.id}">{cell.value}</a>
			{:else if cell.key === 'apellido'}
				<a class="text-sm text-gray-300" href="/clientes/{row.id}">{cell.value}</a>
			{:else if cell.key === 'email'}
				<a class="text-sm text-gray-300" href="/clientes/{row.id}">{cell.value}</a>
			{:else if cell.key === 'telefono'}
				<a class="text-sm text-gray-300" href="/clientes/{row.id}">{cell.value}</a>
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
				<Button icon={Add} on:click={() => (open = true)}>Registrar cliente</Button>
			</ToolbarContent>
		</Toolbar>
	</DataTable>

	<div class="fixed bottom-0 w-2/3">
		<Pagination bind:pageSize bind:page totalItems={filteredRowIds.length} pageSizeInputDisabled />
	</div>
</main>
