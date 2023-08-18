<script>
	export let data;
	import PackageCard from '$lib/components/packageCard.svelte';
	import { Button } from 'carbon-components-svelte';
</script>

<main>
	<h1>Paquetes</h1>
	<div class="flex flex-wrap gap-4">
		{#each data.projects as paquete}
			<PackageCard project={paquete} />
		{/each}
	</div>
</main>
