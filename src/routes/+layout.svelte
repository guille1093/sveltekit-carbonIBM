<script>
  import SideNav from './SideNav.svelte';
	import Notifications from '$lib/components/Notifications.svelte';
  import Header from './Header.svelte';
	import '../app.postcss';
	import 'carbon-components-svelte/css/g100.css';
	import {
		Content,
	} from 'carbon-components-svelte';
	import Toast from '$lib/components/Toast.svelte';
	import { notificationStore } from '$lib/stores/notifications';
	import { onMount } from 'svelte';

	export let data;
</script>

<svelte:head>
	<title>Del Valle Turismo</title>
	<meta
		name="description"
		content="Software de gestión y control de ventas de paquetes turisticos"
	/>
</svelte:head>

{#if !data.user}
	<slot />
{:else}
<Header bind:data/>
<SideNav/>
		<div class="absolute w-full flex justify-end rigth-4 z-10">
			<Toast />
		</div>
	<Content class="z-0"> 
		<slot />
	</Content>
	<button   
		class="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-primary text-white"
		on:click={() =>
			notificationStore.update(() => ({
				title: 'Nueva notificación',
				subtitle: 'Hay un clienasasate interesado en un paquete!',
				open: true
			}))}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16m-7 6h7"
			/>
		</svg>
	</button>
{/if}