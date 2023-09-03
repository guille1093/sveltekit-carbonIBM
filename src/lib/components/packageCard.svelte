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
		StructuredListCell
	} from 'carbon-components-svelte';
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
</script>

<div
	class="hover:scale-125 hover:z-50 transform transition-all duration-500 ease-in-out min-w-[270px]"
>
	<ClickableTile on:click={() => (open = true)}>
		<div class=" p-5">
			<h3 class="mb-2">
				{project.nombre}
			</h3>

			<div class="flex items-baseline">
				<span class="text-3xl font-semibold" />
				<h4>{precio}</h4>
			</div>
			<!-- List -->
			<ul role="list" class="space-y-5 my-7">
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

<ComposedModal bind:open>
	<ModalHeader>
		<h2 class="text-2xl font-semibold">
			{project.nombre}
		</h2>
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
