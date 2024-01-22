<script>
	/** @type {import('../../../routes/users/$types').PageData} */
	//IMPORTS
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import {
		Button,
		TextInput,
		FormGroup,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		InlineLoading,
		ToastNotification,
		Grid,
		Row,
		Column,
		Dropdown
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';

	$: creating = false;

	let toast = false;

	/**
	 * @type {HTMLFormElement}
	 */
	let form;
	//FUNCIONES

	//VARIABLES Y CONSTANTES
	export let open = false;
	export let roles;

	const closeModals = () => {
		open = false;
		toast = false;
		
		window.location.reload();
	};

	//map dropdown items from data.roles rol.id y rol.name
	const dropDownItems = roles.map((rol) => {
		return { id: rol.id, text: rol.name };
	});

	let dropDownSelected = dropDownItems[0].id;
</script>

<ComposedModal class="uppercase" bind:open on:close={() => closeModals()}>
	<ModalHeader label="" title="Registrar nuevo" />
	<ModalBody hasForm hasScrollingContent>
		{#if creating}
			<div in:fly={{ y: 100 }} out:slide>
				<InlineLoading description="Guardando..." />
			</div>
		{:else if toast}
			<div in:fly={{ y: 100 }} out:slide>
				<ToastNotification
					lowContrast
					kind="success"
					title="Operación exitosa"
					subtitle={new Date().toLocaleString()}
					caption="Creado correctamente."
					fullWidth
					on:close={() => (toast = false)}
				/>
			</div>
		{:else}
			<form
				id="modalForm"
				method="post"
				action="?/create"
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
				<Grid class="uppercase">
					<Row>
						<Column class="bg-neutral-900 py-2 my-2">
							<FormGroup legendText="Datos personales (Obligatorios)">
								<Row>
									<Column>
										<TextInput
											required
											id="nombre"
											name="nombre"
											labelText="Nombre"
											placeholder="Ingrese el nombre"
										/>
									</Column>
									<Column>
										<TextInput
											required
											id="apellido"
											name="apellido"
											labelText="Apellido"
											placeholder="Ingrese el nombre"
										/>
									</Column>
								</Row>
								<Row class="py-2 my-2">
									<Column>
										<TextInput
											required
											id="dni"
											name="dni"
											labelText="DNI"
											placeholder="Ingrese el DNI"
										/>
									</Column>
								</Row>
							</FormGroup>
						</Column>
					</Row>

					<Row>
						<Column class="bg-neutral-900 py-2 my-2">
							<input type="hidden" name="rol" value={dropDownSelected} />
							<FormGroup legendText="Permisos">
								<Dropdown
									name="rol"
									id="rol"
									selectedId={dropDownSelected}
									on:select={(event) => {
										dropDownSelected = event.detail.selectedId;
									}}
									items={dropDownItems}
								/>
							</FormGroup>
						</Column>
					</Row>

					<Row>
						<Column class="bg-neutral-900 py-2 my-2">
							<FormGroup legendText="Observaciones">
								<TextInput
									id="observaciones"
									name="observaciones"
									labelText=""
									placeholder="Puede ingresar observaciones"
								/>
							</FormGroup>
						</Column>
					</Row>
				</Grid>
			</form>
		{/if}
	</ModalBody>
	<ModalFooter>
		<Button kind="secondary" size="lg" on:click={() => (open = false)}>Cancelar</Button>
		<Button
			id="modalSubmitButton"
			size="lg"
			type="submit"
			disabled={creating}
			on:click={() => form.requestSubmit()}>Crear</Button
		>
	</ModalFooter>
</ComposedModal>
