<script>
	//@ts-nocheck
	export let data;
	export let form;
	import {
		Toggle,
		Tile,
		Grid,
		Column,
		Row,
		Button,
		ButtonSet,
		InlineLoading,
		ToastNotification
	} from 'carbon-components-svelte';
	import Save from 'carbon-icons-svelte/lib/Save.svelte';
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	let updateForm;
	let toast = false;
	let creating = false;
	$: toggles = [
		{
			name: 'view_users',
			labelText: 'Acceso a las cuentas',
			formValue: form?.view_users,
			dataValue: data.view_users
		},
		{
			name: 'view_audit',
			labelText: 'Ver registros de auditoria',
			formValue: form?.view_audit,
			dataValue: data.view_audit
		},
		{
			name: 'view_reports',
			labelText: 'Acceso a reportes',
			formValue: form?.view_reports,
			dataValue: data.view_reports
		},
		{
			name: 'view_sales',
			labelText: 'Generar ventas y pagos',
			formValue: form?.view_sales,
			dataValue: data.view_sales
		},
		{
			name: 'view_clients',
			labelText: 'Crear y editar clientes',
			formValue: form?.view_clients,
			dataValue: data.view_clients
		},
		{
			name: 'view_products',
			labelText: 'Crear y editar paquetes',
			formValue: form?.view_products,
			dataValue: data.view_products
		}
	];
</script>

{#if data.id === undefined}
	<h3>SELECCIONE UN ROL <br /> PARA VER SUS PERMISOS</h3>
{:else if creating}
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
		method="post"
		action="?/update"
		bind:this={updateForm}
		use:enhance={() => {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
				toast = true;
				console.log('updatedata', form);
			};
		}}
	>
		<input type="hidden" name="id" value={data.id} />
		<input type="hidden" name="name" value={data.name} />
		<Grid>
			<Row class="mb-1">
				<Column>
					<Tile>
						<h3>{data.name}</h3>
					</Tile>
				</Column>
			</Row>

			<section class="grid grid-cols-2 gap-1">
				{#each toggles as toggle, i}
					<Row>
						<Column>
							<Tile>
								<Toggle
									disabled={data.name === 'ADMINISTRADOR'}
									name={toggle.name}
									toggled={toggle.formValue ?? toggle.dataValue ? true : false}
									labelText={toggle.labelText}
									labelA="NO"
									labelB="SI"
								/>
							</Tile>
						</Column>
					</Row>
				{/each}
			</section>

			<section class="grid grid-cols-2 gap-1 mt-1">
				<Button kind="tertiary" disabled={data.name === 'ADMINISTRADOR'} class="w-full"
					>Desactivar todos</Button
				>
				<Button
					icon={Save}
					disabled={data.name === 'ADMINISTRADOR'}
					on:click={updateForm.requestSubmit()}
					class="w-full">Guardar cambios</Button
				>
			</section>
		</Grid>
	</form>
{/if}
