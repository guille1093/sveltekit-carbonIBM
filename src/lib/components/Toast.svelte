<script>
	import { fly } from 'svelte/transition';
	import { ToastNotification } from 'carbon-components-svelte';
	import { notificationStore } from '$lib/stores/notifications';

	$: notification = $notificationStore.open;
	$: title = $notificationStore.title;
	$: subtitle = $notificationStore.subtitle;
</script>

{#if notification}
	<div in:fly={{ y: -100 }} out:fly={{ y: -100 }} class="absolute top-10">
		<ToastNotification
		 	kind="info"
		 	bind:title
		 	bind:subtitle
		 	caption={new Date().toLocaleString()}
		 	on:close={() => notificationStore.update(() => ({ title: '', subtitle: '', open: false }))}
		/>
	</div>
{/if}
