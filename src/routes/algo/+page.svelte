<script>
	//@ts-nocheck
	import { DataTable, Pagination } from 'carbon-components-svelte';
	import { invalidateAll } from '$app/navigation';
	let rows = Array.from({ length: 2 }).map((_, i) => ({
		id: i,
		name: 'Load Balancer ' + (i + 1),
		protocol: 'HTTP',
		port: 3000 + i * 10,
		rule: i % 2 ? 'Round robin' : 'DNS delegation'
	}));

	$: unarray = rows.map((row) => {
		return {
			id: row.id,
			name: row.name,
			protocol: row.protocol,
			port: row.port,
			rule: row.rule
		};
	});

	let pageSize = 5;
	let page = 1;
</script>

<DataTable
	sortable
	title="Load balancers"
	description="Your organization's active load balancers."
	headers={[
		{ key: 'name', value: 'Name' },
		{ key: 'protocol', value: 'Protocol' },
		{ key: 'port', value: 'Port' },
		{ key: 'rule', value: 'Rule' }
	]}
	{pageSize}
	{page}
	rows={unarray}
/>
<Pagination bind:pageSize bind:page totalItems={rows.length} pageSizeInputDisabled />

<button
	class="p-4 bg-emerald-200 text-emerald-900 m-4 uppercase font-bold rounded-md"
	on:click={() => {
		//numero aleatorio entre 10 y 10000
		const random = Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
		invalidateAll();
		rows.push({
			id: random,
			name: 'TEST ' + random,
			protocol: 'TEST',
			port: 80,
			rule: 'TEST'
		});
		console.log('rows', rows);
	}}>apretame</button
>
<pre><code>{JSON.stringify(unarray, null, 4)}</code></pre>
{#each unarray as row}
	<div>{row.name}</div>
{/each}
