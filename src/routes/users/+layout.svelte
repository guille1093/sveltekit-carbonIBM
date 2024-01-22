<script>
	export let data;
	import AccesoDenagado from '$lib/components/AccesoDenagado.svelte';
</script>

{#if data.user.rol.view_users}
	<slot />
{:else}
	<AccesoDenagado />
{/if}
