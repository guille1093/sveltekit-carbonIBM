<script>
	/** @type {import('./$types').PageData} */

	//IMPORTS
	import { fly } from 'svelte/transition';
	import { invalidateAll } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { Spanish } from 'flatpickr/dist/l10n/es.js';
	import {
		Button,
		TextInput,
		NumberInput,
		ComboBox,
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
		Row,
		Column,
		Grid
	} from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import { enhance } from '$app/forms';

	//EXPORTS
	export let data;
	export let form;

	//VARIABLES REACTIVAS

	let nombre = '';
	let precio = 1;
	let cant_dias = 1;
	let cant_noches = 1;
	$: fechasalida = new Date().toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});

	$: fecharetorno = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric'
	});

	$: partesSalida = fechasalida.split("/");
	$: fechaSalidaISO = new Date(parseInt(partesSalida[2]), parseInt(partesSalida[1]) - 1, parseInt(partesSalida[0]));

	$: partesRetorno = fecharetorno.split("/");
	$: fechaRetornoISO = new Date(parseInt(partesRetorno[2]), parseInt(partesRetorno[1]) - 1, parseInt(partesRetorno[0]));

	$:recomendedDays = Math.ceil((fechaRetornoISO.getTime() - fechaSalidaISO.getTime()) / (1000 * 60 * 60 * 24));

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
	let createForm;
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
	$: rows = data.paquetes;
	let pageSize = 10;
	let page = 1;
	/**
	 * @type {never[]}
	 */
	let filteredRowIds = [];

	const closeModals = () => {
		open = false;
		toast = false;
		nombre = '';
		precio = 1;
		cant_dias = 1;
		cant_noches = 1;
		invalidateAll();
	};

	const showPreview = async (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');

			if (preview) {
				const preview = document.getElementById('avatar-preview');
				preview.src = src;
				preview.style.display = 'block';
			}
		}
	};

	import Bus from 'carbon-pictograms-svelte/lib/Bus.svelte';
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
					}}
					enctype="multipart/form-data"
					method="post"
					action="?/create"
					bind:this={createForm}
					use:enhance={() => {
						creating = true;
						return async ({ update }) => {
							await update();
							creating = false;
							toast = true;
							nombre = '';
							isValidNombre = true;
							invalidateAll();
							data.paquetes.push(form?.newPaquete);
						};
					}}
				>
					<div class="flex">
						<div class="w-[50%] flex-grow p-4">
							<FormGroup legendText="Destino">
								<TextInput
									required
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
							<FormGroup legendText="Cantidad de días (MAX: {recomendedDays})">
								<NumberInput
									id="cant_dias"
									min={0}
									max={recomendedDays}
									name="cant_dias"
									placeholder="Ingrese la cantidad de días"
									bind:value={cant_dias}
									invalidText="Valor fuera de rango"
								/>
							</FormGroup>
							<FormGroup legendText="Cantidad de noches (MAX: {recomendedDays})">
								<NumberInput
									id="cant_noches"
									min={0}
									max={recomendedDays}
									name="cant_noches"
									placeholder="Ingrese la cantidad de noches"
									bind:value={cant_noches}
									invalidText="Valor fuera de rango"
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
									<DatePickerInput placeholder="dd/mm/aaa" name="fecharetorno"/>
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

					<!-- <img id="avatar-preview" class="hidden" alt="avatar" />

					<FormGroup legendText="Imagen">
						<input required type="file" name="thumbnail" on:change={showPreview} />
					</FormGroup> -->

					<!-- hotel -->
					<FormGroup legendText="Hotel">
						<Select id="select-hotel" hideLabel name="hotel" selected="PENSION COMPLETA">
							<SelectItem
										disabled
										hidden
										value="Hotel Pensilvania"
										text="Seleccione un Hotel"
									/>
									{#each data.hoteles as hotel}
										<SelectItem
											value={hotel.nombre}
											text="{hotel.nombre} -- {hotel.direccion} {'⭐️'.repeat(Math.floor(Math.random() * 4) + 2)}"
										/>
										
									{/each}
						</Select>
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
				on:click={() => createForm.requestSubmit()}>Crear</Button
			>
		</ModalFooter>
	</ComposedModal>

	<Grid>
		<Row>
			<Column>
				<h1>Paquetes</h1>
				<p>Aqui puede ver, buscar y filtrar todos los paquetes registrados en el sistema.</p>
			</Column>
			<Column class="flex justify-end">
				<Bus />
			</Column>
		</Row>
		<Row>
			<Column>
				<div class="overflow-scroll uppercase">
					<DataTable
						zebra
						sortable
						sortKey="created"
						sortDirection="descending"
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
								{#if new Date(row.fechasalida) < new Date()}
									{#if new Date() >= new Date(row.fechasalida) && new Date() <= new Date(row.fecharetorno)}
										<div class="flex justify-end">
											<span class="px-2 inline-flex w-full justify-center text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
												EN CURSO
											</span>
										</div>
									{:else}
										<div class="flex justify-end">
											<span class="px-2 inline-flex w-full justify-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
												FINALIZADO
											</span>
										</div>
									{/if}
								{:else if cell.value === 'NO DISPONIBLE'}
									<div class="flex justify-end">
										<span class="px-2 inline-flex w-full justify-center text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
											{cell.value}
										</span>
									</div>
								{:else if cell.value === 'DISPONIBLE'}
									<div class="flex justify-end">
										<span class="px-2 inline-flex w-full justify-center text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											{cell.value}
										</span>
									</div>
								{:else if cell.value === 'FINALIZADO'}
									<div class="flex justify-end">
										<span class="px-2 inline-flex w-full justify-center text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
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
								<ToolbarSearch
									persistent
									shouldFilterRows
									placeholder="Buscar..."
									bind:filteredRowIds
								/>
								<ToolbarMenu>
									<NumberInput
										min={1}
										max={100}
										label="Numero de filas por pagina"
										bind:value={pageSize}
									/>

									<ComboBox
										placeholder="Ver"
										selectedId="1"
										items={[
											{ id: '0', text: 'Disponibles' },
											{ id: '1', text: 'Todos' }
										]}
									/>
								</ToolbarMenu>

								<Button icon={Add} on:click={() => (open = true)}>Registrar paquete</Button>
							</ToolbarContent>
						</Toolbar>
					</DataTable>
				</div>

				<div class="fixed bottom-0 w-2/3">
					<Pagination
						bind:pageSize
						bind:page
						totalItems={filteredRowIds.length}
						pageSizeInputDisabled
					/>
				</div>
			</Column>
		</Row>
	</Grid>
</main>
