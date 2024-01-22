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
		TextInput,
		InlineLoading,
		ToastNotification,
		Modal
	} from 'carbon-components-svelte';
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	export let data;

	// nombre apellido email telefono dni fechanacimiento nacionalidad ocupacion
	let nombre = data.hotel.nombre;
	let email = data.hotel.email;
	let telefono = data.hotel.telefono;
	let observaciones = data.hotel.observaciones;
	let direccion = data.hotel.direccion;

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
</script>

<main>
	<Tile>
		<div class="flex flex-row justify-between mb-4">
			<h1>Hotel: {data.hotel.nombre}</h1>
			<ButtonSet class="mr-36">
				<Button on:click={() => (open2 = true)} icon={TrashCan} kind="danger">Eliminar</Button>
				<Button icon={Edit} on:click={() => (open = true)}>Editar</Button>
			</ButtonSet>
		</div>
		<StructuredList condensed>
			<StructuredListBody>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nombre:</strong></StructuredListCell>
					<StructuredListCell>{data.hotel.nombre}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Direccion:</strong></StructuredListCell>
					<StructuredListCell>{data.hotel.direccion}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Teléfono:</strong></StructuredListCell>
					<StructuredListCell>{data.hotel.telefono}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Email:</strong></StructuredListCell>
					<StructuredListCell>{data.hotel.email}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Observaciones:</strong></StructuredListCell>
					<StructuredListCell>{data.hotel.observaciones}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Fecha creación:</strong></StructuredListCell>
					<StructuredListCell
						>{new Date(data.hotel.created).toLocaleDateString('es-AR', {
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
	modalHeading="Eliminar hotel"
	primaryButtonText="Eliminar"
	secondaryButtonText="Cancelar"
	on:click:button--secondary={() => (open2 = false)}
	on:click:button--primary={() => deleteForm.requestSubmit()}
	on:open
	on:close
	on:submit
>
	<h5>¿Está seguro que desea eliminar el hotel {data.hotel.nombre}?</h5>
	<p class="mt-4">
		Esta es una accion permanente y los registros asociados al hotel tambien seran eliminados
	</p>
</Modal>

<ComposedModal class="" bind:open>
	<ModalHeader label="" title="Editar hotel" />
	<ModalBody hasForm hasScrollingContent>
		{#if creating}
			<div in:fly={{ y: 100 }} out:slide>
				<InlineLoading description="Guardando hotel..." />
			</div>
		{:else if toast}
			<div in:fly={{ y: 100 }} out:slide>
				<ToastNotification
					lowContrast
					kind="success"
					title="Operación exitosa"
					subtitle={new Date().toLocaleString()}
					caption="El hotel se ha actualizado correctamente."
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
				<div class="flex">
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la primera columna -->

						<FormGroup legendText="Nombre">
							<TextInput
								id="nombre"
								bind:value={nombre}
								name="nombre"
								required
								labelText=""
								placeholder="Ingrese el nombre"
							/>
						</FormGroup>

						<FormGroup legendText="Telefono">
							<TextInput
								id="telefono"
								bind:value={telefono}
								name="telefono"
								labelText=""
								placeholder="Ingrese el teléfono"
							/>
						</FormGroup>
					</div>
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la segunda columna -->

						<FormGroup legendText="Email">
							<TextInput
								id="email"
								bind:value={email}
								name="email"
								labelText=""
								placeholder="Ingrese el email"
							/>
						</FormGroup>

						<FormGroup legendText="Dirección">
							<TextInput
								id="direccion"
								bind:value={direccion}
								name="direccion"
								labelText=""
								placeholder="Ingrese la dirección"
							/>
						</FormGroup>
					</div>
				</div>
				<TextArea
					bind:value={observaciones}
					id="observaciones"
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
			disabled={creating}
			on:click={() => form.requestSubmit()}>Guardar</Button
		>
	</ModalFooter>
</ComposedModal>
