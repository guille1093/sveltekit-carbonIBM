<script>
	import {
		Button,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ClickableTile,
		StructuredList,
		StructuredListBody,
		StructuredListRow,
		StructuredListCell,
		AspectRatio
	} from 'carbon-components-svelte';

	import { getImageURL } from '$lib/utils';
	/**
	 * @type {{ precio: number | bigint; fechasalida: string | number | Date; fecharetorno: string | number | Date; cant_dias: any; cant_noches: any; id: any; nombre: any; }}
	 */
	export let project;
	let pesoARLocale = Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 0
	});
	const precio = pesoARLocale.format(project.precio);
	let fechaSalida = new Date(project.fechasalida).toLocaleDateString('es-ES', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});

	let fechaRetorno = new Date(project.fecharetorno).toLocaleDateString('es-ES', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});

	const items = [
		{
			name: 'Salida',
			icon: 'bx-calendar-event',
			value: fechaSalida
		},
		{
			name: 'Llegada',
			icon: 'bx-calendar-check',
			value: fechaRetorno
		}
	];
	let open = false;

	import { truncate } from 'carbon-components-svelte';
</script>

<ComposedModal bind:open>
	<ModalHeader>
		<h3 class="text-2xl font-semibold">
			{project.nombre}
		</h3>
		<p>
			{precio}
		</p>
	</ModalHeader>

	<ModalBody>
		<StructuredList condensed>
			<StructuredListBody>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Nombre del paquete:</strong></StructuredListCell>
					<StructuredListCell>{project.nombre}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Pais destino:</strong></StructuredListCell>
					<StructuredListCell>{project.pais_destino}</StructuredListCell>
				</StructuredListRow>

				<StructuredListRow>
					<StructuredListCell noWrap><strong>Regimen:</strong></StructuredListCell>
					<StructuredListCell>{project.regimen}</StructuredListCell>
				</StructuredListRow>

				<StructuredListRow>
					<StructuredListCell noWrap><strong>Salida:</strong></StructuredListCell>
					<StructuredListCell>{fechaSalida}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Llegada:</strong></StructuredListCell>
					<StructuredListCell>{fechaRetorno}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Dias:</strong></StructuredListCell>
					<StructuredListCell>{project.cant_dias}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Noches:</strong></StructuredListCell>
					<StructuredListCell>{project.cant_noches}</StructuredListCell>
				</StructuredListRow>
				<StructuredListRow>
					<StructuredListCell noWrap><strong>Descripción:</strong></StructuredListCell>
					<StructuredListCell>{project.descripcion}</StructuredListCell>
				</StructuredListRow>
			</StructuredListBody>
		</StructuredList>
		<div class="flex justify-end">
			<Button kind="primary" href="/paquetes/{project.id}">Ver más</Button>
			<Button kind="secondary" on:click={() => (open = false)}>Cerrar</Button>
		</div>
	</ModalBody>
</ComposedModal>

<div class="hover:scale-125 hover:z-50 transform transition-all duration-500 ease-in-out w-[320px]">
	<ClickableTile on:click={() => (open = true)} class="">
		{#if project.thumbnail}
			<AspectRatio ratio="16x9">
				<img
					class="h-[220px] w-[300px] object-cover"
					src={getImageURL(project.collectionId, project.id, project.thumbnail)}
					alt="logo"
				/>
			</AspectRatio>
		{/if}
		<div class="mt-16">
			<h2 use:truncate class="text-md">
				{project.nombre}
			</h2>

			<div class="flex items-baseline mb-4">
				<span class="" />
				<h3>{precio}</h3>
			</div>
			<!-- List -->
			<ul role="list" class="space-y-4">
				{#each items as item}
					<li class="flex space-x-3 justify-between">
						<div>
							<!-- Icon -->
							<i class="bx text-blue-600 {item.icon}" />
							<!-- Name -->
							<span>{item.name}:</span>
						</div>

						<!-- Text -->
						<span>{item.value}</span>
					</li>
				{/each}
			</ul>
		</div>
	</ClickableTile>
</div>

