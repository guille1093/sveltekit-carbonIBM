<script>
	/** @type {import('../../routes/changelog/$types').PageData} */
	import { FormGroup, Dropdown, Search } from 'carbon-components-svelte';

	export let legendText;
	export let selectedId;
	export let items;
	export let invalid;
	export let invalidText;

	let filtered = [...items];
	let search = '';
	let dropdownOpen = false;

	selectedId = items[0].id;
</script>

<FormGroup {legendText}>
	<Search
		size="sm"
		placeholder="Buscar..."
		on:input={() => {
			dropdownOpen = true;
			filtered = items.filter((/** @type {{ text: string; }} */ item) =>
				item.text.toLowerCase().includes(search.toLowerCase())
			);
			// si no hay resultados, mostrar un item que diga "No hay resultados"
			if (!filtered.length) {
				filtered = [items[0]];
			}
			if (filtered && filtered.length > 0) {
				selectedId = filtered[0].id;
			} else if (items && items.length > 0) {
				selectedId = items[0].id;
			} else {
				// Asigna un valor predeterminado si ambos arreglos están vacíos o indefinidos
				selectedId = items[0].id; // O cualquier otro valor predeterminado que desees
			}
		}}
		on:clear={() => {
			dropdownOpen = false;
			filtered = [...items];
		}}
		bind:value={search}
	/>
	<Dropdown
		bind:selectedId
		bind:open={dropdownOpen}
		bind:items={filtered}
		{invalid}
		{invalidText}
		on:select={() => {
			dropdownOpen = false;
			search = '';
			filtered = [...items];
		}}
		on:select
	/>
</FormGroup>
