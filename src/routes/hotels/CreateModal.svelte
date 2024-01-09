<script>
	/** @type {import('./$types').PageData} */
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
		ToastNotification
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

	const closeModals = () => {
		open = false;
		toast = false;
		window.location.reload();
	};
</script>

<ComposedModal class="" bind:open on:close={() => closeModals()}>
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
					caption="El elemento se ha creado correctamente."
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
				<div class="flex">
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la primera columna -->
						<FormGroup legendText="Nombre">
							<TextInput
								required
								id="nombre"
								name="nombre"
								labelText=""
								placeholder="Ingrese el nombre"
							/>
						</FormGroup>

						<FormGroup legendText="Telefono">
							<TextInput
								id="telefono"
								name="telefono"
								labelText=""
								placeholder="Ingrese el telefono"
							/>
						</FormGroup>
					</div>
					<div class="w-[50%] flex-grow p-4">
						<!-- Contenido de la segunda columna -->

						<FormGroup legendText="Email">
							<TextInput id="email" name="email" labelText="" placeholder="Ingrese el email" />
						</FormGroup>

						<FormGroup legendText="Dirección">
							<TextInput
								id="direccion"
								name="direccion"
								labelText=""
								placeholder="Ingrese la dirección"
							/>
						</FormGroup>
					</div>
				</div>
				<FormGroup legendText="Observaciones">
					<TextInput
						id="observaciones"
						name="observaciones"
						labelText=""
						placeholder="Puede ingresar observaciones sobre el hotel"
					/>
				</FormGroup>
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
