<script>
	import {
		Button,
		ComposedModal,
		ModalHeader,
		ModalBody,
		ClickableTile
	} from 'carbon-components-svelte';
	import { ChooseItem, IbmTelehealth } from 'carbon-icons-svelte';
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
		},
		{
			name: 'Dias',
			icon: 'bx-sun',
			value: project.cant_dias
		},
		{
			name: 'Noches',
			icon: 'bx-moon',
			value: project.cant_noches
		}
	];
	let open = false;
</script>

<div
	class=" bg-white shadow-lg shadow-gray-950 dark:bg-gray-800 dark:border-gray-700 hover:scale-125 hover:z-50 transform transition-all duration-500 ease-in-out min-w-[270px]"
>
	<ClickableTile href="/projects/{project.id}" on:click >
		<div class=" p-5 bg-white">
			<a href="/projects/{project.id}">
				<h3 class="mb-2 text-gray-900 dark:text-white">
					{project.nombre}
				</h3>
			</a>

			<div class="flex items-baseline text-gray-900 dark:text-white">
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
							<span class="text-gray-500 dark:text-gray-400">{item.name}:</span>
						</div>

						<!-- Text -->
						<span class="text-gray-900 dark:text-white">{item.value}</span>
					</li>
				{/each}
			</ul>
		</div>
	</ClickableTile>
</div>

<ComposedModal bind:open>
	<ModalHeader>hola</ModalHeader>
	<ModalBody>que tal</ModalBody>
</ComposedModal>
