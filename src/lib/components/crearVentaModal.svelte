<script>
	export let data;

	import SelectSearch from './SelectSearch.svelte';
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import {
		Button,
		FormGroup,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		InlineLoading,
		ToastNotification,
		TextArea,
		Tile,
		Dropdown,
		Search,
		Tag,
		Grid,
		Row,
		Column,
		MultiSelect
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';

	/**
	 * @type {never[]}
	 */
	let selected = [];

	/**
	 * @type {HTMLFormElement}
	 */
	let form;

	let paqueteDropdownOpen = false;

	$: creating = false;

	let toast = false;

	let isFormValid = true;
	//VARIABLES Y CONSTANTES
	export let open;

	let paquetesItems = data.paquetes.map(
		(/** @type {{ id: any; nombre: any; fechasalida: Date; precio: number }} */ paquete) => ({
			id: paquete.id,
			text: paquete.nombre,
			fecha: paquete.fechasalida,
			precio: paquete.precio
		})
	);

	let paqueteSearch = ''; // Inicializa la variable de búsqueda
	let paquetesFiltered = [...paquetesItems]; // Mantén una copia de los paquetes originales

	/**
	 * @type {{ id: any; text: string; fecha: Date; dni: string; }[]}
	 */

	let clientesItems = data.clientes.map(
		(
			/** @type {{ id: any; nombre: any; apellido: string; fechanacimiento: Date; dni: string; }} */ cliente
		) => ({
			id: cliente.id,
			text: `${cliente.nombre} ${cliente.apellido} - ${cliente.dni}`,
			fecha: cliente.fechanacimiento
		})
	);

	let clientesFiltered = [...clientesItems]; // Mantén una copia de los clientes originales

	//Una copia para filtrar los clientes que ya estan en el paquete
	//let clientesHabilitados = [...clientesItems]; // Mantén una copia de los clientes originales

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};

	let paquete = paquetesItems[0].id;
	$: selectCantidad = (selected.length + 1).toString();
	$: precio = (getPrecio(paquete) * (selected.length + 1)).toString();
	$: precioUnitario = getPrecio(paquete).toString();

	//funcion que toma el ID de un paquete y retorna el precio
	const getPrecio = (id) => {
		let precio = 0;
		paquetesItems.forEach((/** @type {{ id: any; precio: any; }} */ paquete) => {
			if (paquete.id === id) {
				precio = paquete.precio;
			}
		});
		return precio;
	};

	let paquetePrecio = paquetesItems[0].precio;

	//funcion que retorna las personas que ya estan en el paquete tomando los titulares y acompañantes de las ventas asociadas al paquete
	/**
	 * @param {any} id
	 */
	const getPersonasEnPaquete = (id) => {
		console.log('paquete selecionado', id);
		let personas = [];
		data.ventas.forEach(
			(
				/** @type {{ expand: { paquete: { id: any; }; cliente: { id: any; }; pasajeros: { id: any; }[]; }; }} */ venta
			) => {
				if (venta.expand.paquete.id === id) {
					//pushear a personas el ID del cliente
					personas.push(venta.expand.cliente.id);
					//pushear a personas el ID de los acompañantes
					if (venta.expand.pasajeros) {
						venta.expand.pasajeros.forEach((/** @type {{ id: any; }} */ pasajero) => {
							personas.push(pasajero.id);
						});
					}
				}
			}
		);
		return personas;
	};

	let titular;

	let selectedId;
	let invalid = false;
	let invalidText = 'El cliente ya esta en el paquete';
	let acompañantes = [];

	$: invalid = getPersonasEnPaquete(paquete).includes(selectedId);
	$: clientesFiltered = clientesItems.filter(
		(cliente) => !getPersonasEnPaquete(paquete).includes(cliente.id) && cliente.id != 'enqogcwrk5re0ly'
	);

	$: acompañantes = [...clientesFiltered, { id: 'enqogcwrk5re0ly', text: 'EXEQUIEL BRITEZ - 42676224' }].filter(
		(/** @type {{ id: any; }} */ cliente) => cliente.id !== selectedId
	);
	
	$: isFormValid = !invalid;
</script>

<ComposedModal bind:open on:close={() => closeModals()}>
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
				<input type="hidden" name="paquete" value={paquete} />
				<input type="hidden" name="cant_personas" value={selectCantidad} />
				<input type="hidden" name="cliente" value={selectedId} />
				<input type="hidden" name="precio" value={precio} />

				<Grid>
					<Row>
						<Column>
							<FormGroup legendText="Paquete">
								<Search
									size="sm"
									placeholder="Buscar paquete"
									on:input={() => {
										paqueteDropdownOpen = true;
										paquetesFiltered = paquetesItems.filter(
											(/** @type {{ text: string; }} */ paquete) =>
												paquete.text.toLowerCase().includes(paqueteSearch.toLowerCase())
										);

										// si el criterio de busqueda no retorna nada queda seleccionado el primer elemento del array
										if (!paquetesFiltered.length) {
											paquetesFiltered = [paquetesItems[0]];
										}

										if (paquetesFiltered && paquetesFiltered.length > 0) {
											paquete = paquetesFiltered[0].id;
											precio =
												selected.length > 0
													? selected.length * paquetesFiltered[0].precio
													: paquetesFiltered[0].precio;
											paquetePrecio = paquetesFiltered[0].precio;
										} else if (paquetesItems && paquetesItems.length > 0) {
											paquete = paquetesItems[0].id;
											precio =
												selected.length > 0
													? selected.length * paquetesItems[0].precio
													: paquetesItems[0].precio;
											paquetePrecio = paquetesItems[0].precio;
										} else {
											// Asigna un valor predeterminado si ambos arreglos están vacíos o indefinidos
											paquete = paquetesItems[0].id;
											precio =
												selected.length > 0
													? selected.length * paquetesItems[0].precio
													: paquetesItems[0].precio;
											paquetePrecio = paquetesItems[0].precio;
										}
									}}
									on:clear={() => {
										paqueteDropdownOpen = false;
										paquetesFiltered = [...paquetesItems];
									}}
									bind:value={paqueteSearch}
								/>
								<Dropdown
									itemToString={(item) => {
										return (
											item.text +
											' - ' +
											new Date(item.fecha).toLocaleDateString('es-ES', {
												day: '2-digit',
												month: 'short',
												year: 'numeric'
											})
										);
									}}
									bind:selectedId={paquete}
									bind:open={paqueteDropdownOpen}
									items={paquetesFiltered}
									on:select={() => {
										paqueteDropdownOpen = false;
										paqueteSearch = '';
										paquetesFiltered = [...paquetesItems];
										clientesFiltered = [...clientesItems];
										getPersonasEnPaquete(paquete);
										console.log('paquete', paquete);
										console.log('precio', precio);
									}}
								/>
							</FormGroup>
						</Column>
					</Row>

					<Row>
						<Column>
							<SelectSearch
								{invalid}
								{invalidText}
								bind:items={clientesFiltered}
								legendText="Titular"
								bind:selectedId
							/>
						</Column>
					</Row>

					<Row>
						<Column>
							<FormGroup legendText="Acompañantes">
								<input type="hidden" name="pasajeros" value={selected} />

								<MultiSelect
									selectionFeedback="top-after-reopen"
									filterable
									direction="top"
									bind:selectedIds={selected}
									label="Seleccione los acompañantes"
									items={acompañantes}
								/>

								{#each selected as id}
									{#each data.clientes as cliente}
										{#if cliente.id === id}
											<Tag
												size="sm"
												filter
												type="blue"
												on:close={() => {
													selected = selected.filter((/** @type {any} */ id) => id !== cliente.id);
												}}>{cliente.nombre} {cliente.apellido}</Tag
											>
										{/if}
									{/each}
								{/each}
							</FormGroup>
						</Column>
					</Row>
					<Row>
						<Column>
							<FormGroup legendText="Valor">
								<Tile light>
									<div class="flex justify-between p-1">
										<p>Cantidad de personas:</p>
										<h5>{selected.length + 1}</h5>
									</div>
									<div class="flex justify-between p-1">
										<p>Precio por persona:</p>
										<h5>${Intl.NumberFormat('es-AR').format(parseInt(precioUnitario))}</h5>
									</div>
									<div class="flex justify-between p-1 bg-blue-600">
										<p>Total:</p>
										<h5>
											${Intl.NumberFormat('es-AR').format(parseInt(precio))}
										</h5>
									</div>
								</Tile>
							</FormGroup>
						</Column>
					</Row>
					<Row>
						<Column>
							<FormGroup legendText="Observaciones">
								<TextArea name="observaciones" placeholder="Observaciones" />
							</FormGroup>
						</Column>
					</Row>
				</Grid>
			</form>
		{/if}
	</ModalBody>

	<ModalFooter>
		{#if toast}
			<Button class="w-full" size="lg" on:click={() => (open = false)}>Aceptar</Button>
		{:else}
			<Button kind="secondary" size="lg" on:click={() => (open = false)}>Cancelar</Button>
			<Button
				id="modalSubmitButton"
				size="lg"
				type="submit"
				disabled={!isFormValid || creating}
				on:click={() => form.requestSubmit()}>Crear</Button
			>
		{/if}
	</ModalFooter>
</ComposedModal>
