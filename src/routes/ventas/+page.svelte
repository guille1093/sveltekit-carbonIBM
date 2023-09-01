<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { MultiSelect } from 'carbon-components-svelte';
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody
	} from 'carbon-components-svelte';
	import { Tile } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	/**
	 * @type {never[]}
	 */
	let selected = [];
	let items = data.clientes.map((/** @type {{ id: any; nombre: any; }} */ cliente) => ({
		id: cliente.id,
		text: cliente.nombre
	}));
	let form;
</script>

<h1>Ventas</h1>

<Grid>
	<Row>
		<Column>
			<h2>Crear venta</h2>
			<Tile>
				<form method="post" action="?/createVenta" bind:this={form}>
					<input type="hidden" name="pasajeros" value={selected} />

					<MultiSelect
						filterable
						bind:selectedIds={selected}
						titleText="Acompañantes"
						label="Seleccione los acompañantes"
						{items}
					/>
					<button type="submit">Enviar</button>
				</form>
			</Tile>
		</Column>
		<Column>
			<Tile>
				{#if selected.length > 0}
					<h2>Seleccionados</h2>
					<StructuredList>
						<StructuredListHead>
							<StructuredListRow>
								<StructuredListCell head>Nombre</StructuredListCell>
								<StructuredListCell head>Apellido</StructuredListCell>
								<StructuredListCell head>DNI</StructuredListCell>
								<StructuredListCell head>Seleccionar</StructuredListCell>
							</StructuredListRow>
						</StructuredListHead>
						<StructuredListBody>
							{#each selected as id}
								{#each data.clientes as cliente}
									{#if cliente.id === id}
										<StructuredListRow>
											<StructuredListCell>{cliente.nombre}</StructuredListCell>
											<StructuredListCell>{cliente.apellido}</StructuredListCell>
											<StructuredListCell>{cliente.dni}</StructuredListCell>
											<StructuredListCell>
												<button
													on:click={() => {
														selected = selected.filter(
															(/** @type {any} */ id) => id !== cliente.id
														);
													}}
												>
													Eliminar
												</button>
											</StructuredListCell>
										</StructuredListRow>
									{/if}
								{/each}
							{/each}
						</StructuredListBody>
					</StructuredList>
				{/if}
			</Tile>
		</Column>
	</Row>
</Grid>
