<script>
	import ClientesDataTable from '$lib/components/ClientesPaginado/ClientesDataTable.svelte';

	export let data;
	export let form;
	$: console.log('form desde +page', form);
</script>

<main>
	<ClientesDataTable bind:data bind:form />
</main>
