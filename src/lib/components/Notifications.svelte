<script>
	import {
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		ClickableTile,
		Modal
	} from 'carbon-components-svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { pb } from '$lib/service/pb';
	import Phone from 'carbon-icons-svelte/lib/Phone.svelte';
	import Email from 'carbon-icons-svelte/lib/Email.svelte';




	import { notificationStore } from '$lib/stores/notifications';

	let open = false;
	let openModal = false;
	let selectedNotification = null;

	let notifications = [];

	onMount(async () => {
		const records = await pb.collection('notificaciones').getList(1, 50, {
			sort: '-created',
			expand: 'cliente , paquete'
		});
		notifications = records.items;

		console.log('NOTIFICACIONES WTF PORQUE ESTA VACIO ', notifications);

		pb.collection('notificaciones').subscribe('*', async ({ action, record }) => {
			if (action === 'create') {
				//record.isNew = true;
				//notifications.unshift(record);
				//open = true;
		const records = await pb.collection('notificaciones').getList(1, 50, {
			sort: '-created',
			expand: 'cliente , paquete'
		});
		notifications = records.items;

				notificationStore.update(() => ({
					title: 'Nueva notasdasdadsaificación',
					subtitle: 'Hay unsdasdasda cliente interesado en un paquete!',
					open: true
				}));
			}
		});
		
	});

	onDestroy(() => {
		pb.collection('notificaciones').unsubscribe();
	});
</script>


<HeaderAction aria-label="Notificaciones" icon={Notification} >
	<HeaderPanelLinks>
		<HeaderPanelDivider>Notificaciones</HeaderPanelDivider>
		<section class="h-[500px] overflow-scroll">
			{#each notifications as notification}
				<ClickableTile
					light={notification.isNew ? true : false}
					href="/"
					on:click={(e) => {
						e.preventDefault();
						notification.isNew = false;
						openModal = true;
						selectedNotification = notification;
					}}
				>
					<p>
						Cliente interesado en viajar a <strong>{notification.expand.paquete.nombre}</strong>
					</p>
					<small class="text-muted">
						{#if new Date(notification.created).toLocaleDateString( 'es-ES', { day: '2-digit', month: 'short', year: 'numeric' } ) === new Date().toLocaleDateString( 'es-ES', { day: '2-digit', month: 'short', year: 'numeric' } )}
							Hoy {new Date(notification.created).toLocaleTimeString('es-ES', {
								hour: '2-digit',
								minute: '2-digit'
							})}
						{:else}
							{new Date(notification.created).toLocaleDateString('es-ES', {
								day: '2-digit',
								month: 'short',
								year: 'numeric',
								hour: '2-digit',
								minute: '2-digit'
							})}
						{/if}
					</small>
				</ClickableTile>
			{/each}
		</section>
	</HeaderPanelLinks>
</HeaderAction>
<Modal
	bind:open={openModal}
	modalHeading="Hay un cliente interesado en un paquete!"
	primaryButtonText="Aceptar"
	secondaryButtonText="Cancelar"
	on:click:button--secondary={() => (open = false)}
	on:open
	on:close
	on:submit
>
	{#if selectedNotification}
		<p>
			<strong class="uppercase"
				>{selectedNotification.expand.cliente.nombre}
				{selectedNotification.expand.cliente.apellido} (DNI: {selectedNotification.expand.cliente
					.dni} )</strong
			>, se encuentra interesada en el paquete con destino a
			<strong class="uppercase"
				>{selectedNotification.expand.paquete.nombre} (fecha de salida {new Date(
					selectedNotification.expand.paquete.fechasalida
				).toLocaleDateString('es-ES', {
					day: '2-digit',
					month: 'short',
					year: 'numeric'
				})}).</strong
			>
		</p>
		<section class="my-2">
			<p>
				<strong>Información de contacto:</strong>
			</p>
			<p class="flex">
				<Email class="mr-2" />
				{selectedNotification.expand.cliente.email}
			</p>
			<p class="flex">
				<Phone class="mr-2" />
				{selectedNotification.expand.cliente.telefono}
			</p>
		</section>
	{/if}
</Modal>