<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import {
		Grid,
		Column,
		Row,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		NumberInput,
		Pagination,
		Header,
        Tile,
	} from 'carbon-components-svelte';

//map reduce the data to a new array of objects
let rows = data.registros.map((item) => {
    let json = {};
    for (let key in item.json) {
		
        json[key] = item.json[key];
    }
    return {
        id: item.id,
        user: item.expand.user.name + ' ' + item.expand.user.apellido,
        rol: 'ADMINISTRADOR',
        action: item.accion,
        date: item.created,
        JSON: json,
        collection: item.collection === 'projects' ? 'PAQUETE' : item.collection,
        created: new Date(item.created).toLocaleString(
            'es-AR',

            {
                timeZone: 'America/Argentina/Buenos_Aires',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        )
    };
});

	let pageSize = 10;
	let page = 1;

	let filteredRowIds = [];
</script>

<Grid>
	<Row>
		<Column>
			<h1>Registros de auditoria</h1>
		</Column>
	</Row>
	<Row>
		<Column>
			<p>Esta página muestra los registros de auditoria de la aplicación.</p>
		</Column>
	</Row>
	<Row>
		<Column>
			<DataTable
			class="uppercase"
				{pageSize}
				{page}
				size="compact"
				expandable
				zebra
				sortable
				sortKey="created"
				sortDirection="descending"
				headers={[
					{ key: 'user', value: 'USUARIO' },
					{ key: 'rol', value: 'ROL' },
					{ key: 'action', value: 'ACCIÓN' },
					{ key: 'created', value: 'FECHA' },
					{ key: 'collection', value: 'TIPO REGISTRO' },
                    { key: 'id', value: 'ID REGISTRO' },
				]}
				{rows}
			>
				<svelte:fragment slot="expanded-row" let:row>
                    <Grid>
                        <Row>
                            <Column>
                                <Tile>
<p>VALORES PREVIOS</p>
                                <ul>
                              {#each Object.keys(row.JSON) as key}
                                        {#if key !== 'created' && key !== 'updated' && key !== 'collectionId' && key !== 'collectionName' && key !== 'id' && row.JSON[key] !== ''}
                                            <li class="justify-between flex border-b-2 border-black"><strong>{key.toUpperCase()}:</strong><i>{row.JSON[key]}</i> </li>
                                        {/if}
                                    {/each}
                                </ul>
                                </Tile>
                                
                            </Column>
                            <Column>
                                <Tile >

                         <ul>
                            <p>VALORES ACTUALIZADOS</p>
                                    {#each Object.keys(row.JSON) as key}
                                        {#if key !== 'created' && key !== 'updated' && key !== 'collectionId' && key !== 'collectionName' && key !== 'id' && row.JSON[key] !== ''}
                                            <li class="justify-between flex border-b-2 border-black"><strong>{key.toUpperCase()}:</strong><i>{row.JSON[key]}</i></li>
                                        {/if}
                                    {/each}
                                </ul>
                                </Tile>
                                
                            </Column>
                        </Row>
                    </Grid>
				</svelte:fragment>

				<svelte:fragment slot="cell-header" let:header>
					<div class="flex items-center"><span>{header.value}</span></div>
				</svelte:fragment>

				<svelte:fragment slot="cell" let:row let:cell>
					{#if cell.key === 'action'}
						{#if cell.value === 'actualizar'}
							<span
								class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
							>
								{cell.value.toUpperCase()}
							</span>
						{:else if cell.value === 'eliminar'}
							<span
								class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
							>
								{cell.value.toUpperCase()}
							</span>
						{:else if cell.value === 'crear'}
							<span
								class="px-2 w-24 justify-center inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
							>
								{cell.value.toUpperCase()}
							</span>
						{/if}
					{:else}
						{cell.value}
					{/if}
				</svelte:fragment>

				<Toolbar>
					<ToolbarContent>
						<ToolbarSearch
							persistent
							shouldFilterRows
							placeholder="Buscar..."
							bind:filteredRowIds
						/>
						<ToolbarMenu>
							<NumberInput
								min={1}
								max={100}
								label="Numero de filas por pagina"
								bind:value={pageSize}
							/>
						</ToolbarMenu>
					</ToolbarContent>
				</Toolbar>
			</DataTable>
			<div class="fixed bottom-0 w-2/3">
				<Pagination
					bind:pageSize
					bind:page
					totalItems={filteredRowIds.length}
					pageSizeInputDisabled
				/>
			</div>
		</Column>
	</Row>
</Grid>
