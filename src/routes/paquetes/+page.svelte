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
		Pagination,
		TextArea,
		ClickableTile
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';

	//EXPORTS
	export let data;

	//VARIABLES REACTIVAS

	let nombre = '';
	let precio = 1;
	let cant_dias = 1;
	let cant_noches = 1;

	//AUXILIARES
	$: isValidNombre = false;

	//VALIDACIONES
	$: validartionMessageNombre = '';
	$: isFormValid = isValidNombre ? true : false;
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
			validartionMessageNombre = 'El destino debe contener al menos 3 letras.';
		} else {
			isValidNombre = true;
			validartionMessageNombre = '';
		}
	};

	//VARIABLES Y CONSTANTES
	let open = false;

	//DataTables
	let rows = data.paquetes;
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
		<ModalHeader label="" title="Registrar paquete" />
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
						caption="El paquete se ha creado correctamente."
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
									value={new Date().toISOString()}
									on:change
								>
									<DatePickerInput placeholder="dd/mm/aaa" name="fechasalida" />
									<DatePickerInput placeholder="dd/mm/aaa" name="fecharetorno" />
								</DatePicker>
							</FormGroup>

							<FormGroup legendText="Pais de destino">
								<Select id="select-1" hideLabel name="pais_destino" selected="ARGENTINA">
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
								<Select id="select-1" hideLabel name="regimen" selected="PENSION COMPLETA">
									<SelectItem
										disabled
										hidden
										value="PENSION COMPLETA"
										text="Seleccione un regimen"
									/>

									<SelectItem value="PENSION COMPLETA" text="PENSION COMPLETA" />
									<SelectItem value="MEDIA PENSION" text="MEDIA PENSION" />
									<SelectItem value="DESAYUNO" text="DESAYUNO" />
								</Select>
							</FormGroup>

							<FormGroup legendText="Estado">
								<Select id="select-1" hideLabel name="estado" selected="DISPONIBLE">
									<SelectItem disabled hidden value="DISPONIBLE" text="Seleccione un estado" />
									<SelectItem value="NO DISPONIBLE" text="NO DISPONIBLE" />
									<SelectItem value="DISPONIBLE" text="DISPONIBLE" />
								</Select>
							</FormGroup>
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

	<h1>Paquetes</h1>
	<p>Aqui puede ver, buscar y filtrar todos los paquetes registrados en el sistema.</p>
	<div class="overflow-scroll">
	<DataTable
		zebra
		sortable
		headers={[
			{ key: 'nombre', value: 'Destino' },
			{ key: 'precio', value: 'Precio' },
			{ key: 'fechasalida', value: 'Salida' },
			{ key: 'fecharetorno', value: 'Llegada' },
			{ key: 'cant_dias', value: 'Dias' },
			{ key: 'cant_noches', value: 'Noches' },
			{ key: 'regimen', value: 'Regimen' },
			{ key: 'created', value: 'Creado' },
			{ key: 'estado', value: 'Estado' }
		]}
		{rows}
		{pageSize}
		{page}
	>
		<!-- {Intl.NumberFormat('es-AR').format(header.value)} -->
		<svelte:fragment slot="cell-header" let:header>
			{#if header.key === 'precio'}
				<div class="flex items-center">
					<i class="bx bx-dollar-circle text-xl mr-2 text-blue-600" />
					<span class="mr-2">{header.value}</span>
					<span class="text-xs">ARS</span>
				</div>
			{:else if header.key === 'fechasalida'}
				<div class="flex items-center">
					<i class="bx bx-calendar text-xl mr-2 text-blue-600" />
					<span class="mr-2">{header.value}</span>
				</div>
			{:else if header.key === 'fecharetorno'}
				<div class="flex items-center">
					<i class="bx bx-calendar text-xl mr-2 text-blue-600" />
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
			{:else if header.key === 'nombre'}
				<div class="flex items-center">
					<i class="bx bx-map text-xl mr-2 text-blue-600" />
					<span class="mr-2">{header.value}</span>
				</div>
			{:else if header.key === 'cant_dias'}
				<div class="flex items-center">
					<i class="bx bx-sun text-xl mr-2 text-blue-600" />
					<span class="mr-2">{header.value}</span>
				</div>
			{:else if header.key === 'cant_noches'}
				<div class="flex items-center">
					<i class="bx bx-moon text-xl mr-2 text-blue-600" />
					<span class="mr-2">{header.value}</span>
				</div>
			{:else}
				{header.value}
			{/if}
		</svelte:fragment>

		<svelte:fragment slot="cell" let:row let:cell>
			{#if cell.key === 'fechasalida'}
				{new Date(cell.value).toLocaleDateString('es-ES', {
					day: '2-digit',
					month: 'short',
					year: 'numeric'
				})}
			{:else if cell.key === 'fecharetorno'}
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
			{:else if cell.key === 'precio'}
				<a class="text-sm text-gray-300" href="/paquetes/{row.id}">
					$ {Intl.NumberFormat('es-AR').format(cell.value)}
				</a>
			{:else if cell.key === 'nombre'}
				<a class="text-sm text-gray-300" href="/paquetes/{row.id}">
					{cell.value}
				</a>
			{:else if cell.key === 'estado'}
				{#if cell.value === 'activo'}
					<div class="flex justify-end">
						<span
							class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
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
	</div>

	<div class="fixed bottom-0 w-2/3">
		<Pagination bind:pageSize bind:page totalItems={filteredRowIds.length} pageSizeInputDisabled />
	</div>
</main>
