<script>
	import { Edit, TrashCan, Save } from 'carbon-icons-svelte';
	import Error from 'carbon-icons-svelte/lib/Error.svelte';

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
		TextInput,
		InlineLoading,
		ToastNotification,
		Modal,
		Grid,
		Row,
		Column,
		CopyButton,
		Toggle,
		Dropdown,
		Checkbox
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	export let data;

	// nombre apellido email telefono dni fechanacimiento nacionalidad ocupacion
	let nombre = data.user.name;
	let apellido = data.user.apellido;
	let email = data.user.email;

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

	//VARIABLES Y CONSTANTES
	let open = false;
	let open2 = false;

	let toggled = data.user.verified;

	const dropDownItems = data.roles.map((rol) => {
		return { id: rol.id, text: rol.name };
	});

	let dropDownSelected = data.user.expand.rol.id;

	let resetPassword = false;
</script>

<main>
	<Tile>
		<div class="flex flex-row justify-between mb-4">
			<h1>USUARIO: {data.user.username}</h1>
			<CopyButton aria-label="Copiar link" text={data.user.username} />
			<ButtonSet class="mr-36">
				<Button icon={Edit} on:click={() => (open = true)}>Editar</Button>
			</ButtonSet>
		</div>
		<StructuredList condensed>
			<StructuredListBody>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nombre:</strong></StructuredListCell>
					<StructuredListCell>{data.user.name}</StructuredListCell>
				</StructuredListRow>

				<StructuredListRow>
					<StructuredListCell noWrap><strong>Apellido:</strong></StructuredListCell>
					<StructuredListCell>{data.user.apellido}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Email:</strong></StructuredListCell>
					<StructuredListCell>{data.user.email}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Fecha creación:</strong></StructuredListCell>
					<StructuredListCell
						>{new Date(data.user.created).toLocaleDateString('es-AR', {
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
	modalHeading="Eliminar user"
	primaryButtonText="Eliminar"
	secondaryButtonText="Cancelar"
	on:click:button--secondary={() => (open2 = false)}
	on:click:button--primary={() => deleteForm.requestSubmit()}
	on:open
	on:close
	on:submit
>
	<h5>¿Está seguro que desea eliminar el user {data.user.name}?</h5>
	<p class="mt-4">
		Esta es una accion permanente y los registros asociados al user tambien seran eliminados
	</p>
</Modal>

<ComposedModal
	class=""
	bind:open
	on:close={() => {
		open = false;
		toast = false;
		resetPassword = false;
		window.location.reload();
	}}
>
	<ModalHeader label="" title="Editar" />
	<ModalBody hasForm hasScrollingContent>
		{#if creating}
			<div in:fly={{ y: 100 }} out:slide>
				<InlineLoading description="Guardando..." />
			</div>
		{:else if toast}
			<div in:fly={{ y: 100 }} out:slide>
				<ToastNotification
					on:close={() => {
						toast = false;
						window.location.reload();
					}}
					lowContrast
					kind="success"
					title="Operación exitosa"
					subtitle={new Date().toLocaleString()}
					caption="Actualizado correctamente."
					fullWidth
					on:close={() => (toast = false)}
				/>
			</div>
		{:else}
			<form
				id="modalForm"
				on:submit={() => {
					open = true;
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
											value={data.user.name}
										/>
									</Column>
									<Column>
										<TextInput
											required
											id="apellido"
											name="apellido"
											labelText="Apellido"
											placeholder="Ingrese el apellido"
											value={data.user.apellido}
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
											value={data.user.dni}
										/>
									</Column>
								</Row>
							</FormGroup>
						</Column>
					</Row>
					<Row>
						<Column class="bg-neutral-900 py-2 my-2">
							<FormGroup legendText="Datos de cuenta" />
							<input type="hidden" name="rol" value={dropDownSelected} />
							<input type="hidden" id="verified" name="verified" value={toggled} />
							<Row>
								<Column>
									<Dropdown
										titleText="Permisos de usuario"
										name="rol"
										id="rol"
										selectedId={dropDownSelected}
										on:select={(event) => {
											dropDownSelected = event.detail.selectedId;
										}}
										items={dropDownItems}
									/>
								</Column>
								<Column>
									<Toggle
										class="mt-0"
										labelText="Estado de la cuenta"
										labelA="Cuenta inactiva"
										labelB="Cuenta activa"
										bind:toggled
									/>
								</Column>
							</Row>
							<Row>
								<Column>
									<input
										type="hidden"
										id="resetPassword"
										name="resetPassword"
										value={resetPassword}
									/>
									<Checkbox
										labelText="Resetear contraseña"
										on:change={() => ((resetPassword = !resetPassword), console.log(resetPassword))}
									/>
								</Column>
							</Row>
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
			icon={Save}
			size="lg"
			type="submit"
			disabled={creating}
			on:click={() => form.requestSubmit()}>Guardar</Button
		>
	</ModalFooter>
</ComposedModal>
