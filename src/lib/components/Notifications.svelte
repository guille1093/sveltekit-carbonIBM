<script>
	import {
		HeaderAction,
		HeaderPanelLinks,
		HeaderPanelDivider,
		ToastNotification
	} from 'carbon-components-svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import NotificationNew from 'carbon-icons-svelte/lib/NotificationNew.svelte';
	import { fly, slide } from 'svelte/transition';
	let isOpen = false;
	import { onMount, onDestroy } from 'svelte';
	import { pb } from '$lib/service/pb';

	let icon = Notification;
	let open = false;

	$: notifications = [];

	onMount(async () => {
		const records = await pb.collection('notificaciones').getList(1, 50, {
			sort: '-created'
		});
		notifications = records.items;

		pb.collection('notificaciones').subscribe('*', async ({ action, record }) => {
			if (action === 'create') {
				record.isNew = true;
				notifications.unshift(record);
				//isOpen = true;
				icon = NotificationNew;
				open = true;
			}
		});
	});

	onDestroy(() => {
		pb.collection('notificaciones').unsubscribe();
	});
</script>

{#if open}
	<div in:fly={{ y: 100 }} out:slide>
		<ToastNotification
			kind="info"
			title="Nueva notificación"
			subtitle="Hay un cliente interesado!"
			caption={new Date().toLocaleString()}
			on:close={() => (open = false)}
		/>
	</div>
{/if}
<HeaderAction aria-label="Notificaciones" bind:icon closeIcon={Notification} bind:isOpen>
	<HeaderPanelLinks>
		<HeaderPanelDivider>Notificaciones</HeaderPanelDivider>
		<section class="h-[500px] overflow-scroll">
			{#each notifications as notification}
				<div class={notification.isNew ? 'bg-blue-600 p-4 m-4' : 'bg-neutral-950 p-4 m-4'}>
					<h5 class="">{notification.title}</h5>
					<small class="text-muted">{notification.created.toLocaleString()}</small>
					<p class="text-wrap">{notification.isNew}</p>
				</div>
			{/each}
		</section>
	</HeaderPanelLinks>
</HeaderAction>
