<script>
	/** @type {import('./$types').PageData} */
	export let data;
	export let titulo;

	import '@carbon/charts-svelte/styles.css';
	import {
		Tile,
		Accordion,
		AccordionItem,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button
	} from 'carbon-components-svelte';
	import Printer from 'carbon-icons-svelte/lib/Printer.svelte';
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';

	//Total
	let ventasMesAnterior = 0;

	data.ventas.forEach((venta) => {
		if (venta.expand.pagos) {
			venta.expand.pagos.forEach((pago) => {
				ventasMesAnterior += parseInt(pago.valor);
			});
		}
	});

	ventasMesAnterior = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS'
	}).format(ventasMesAnterior);

	//para mandar a la tabla
	import { DataTable, Pagination } from 'carbon-components-svelte';

	let rows = data.ventas.map((venta) => {
		if (venta.expand.pagos) {
			return {
				id: venta.expand.pagos[0].id,
				Paquete:
					venta.expand.paquete.nombre +
					' ' +
					new Date(venta.expand.paquete.fechasalida).toLocaleDateString('es-AR', {
						year: 'numeric',
						month: 'numeric',
						day: 'numeric'
					}),
				Titular: venta.expand.cliente.nombre + ' ' + venta.expand.cliente.apellido,
				Importe: new Intl.NumberFormat('es-AR', {
					style: 'currency',
					currency: 'ARS'
				}).format(venta.expand.pagos.reduce((acc, pago) => acc + pago.valor, 0)),
				Fecha: new Date(venta.expand.pagos[0].created).toLocaleDateString('es-AR', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric'
				})
			};
		}
	});

	//eliminar pagos nulls de row
	rows = rows.filter((row) => row !== undefined);

	let pageSize = 5;
	let page = 1;
	// fin de las cosas para pasar a la tabla xd
</script>

<div in:fly={{ y: 100 }} out:slide>
	<Tile>
		<Accordion size="sm">
			<AccordionItem>
				<svelte:fragment slot="title">
					<h5>{titulo}</h5>
					<h3>{ventasMesAnterior}</h3>
				</svelte:fragment>
				<DataTable
					useStaticWidth
					stickyHeader
					class="w-full"
					sortKey="Fecha"
					sortDirection="descending"
					sortable
					headers={[
						{ key: 'Paquete', value: 'Paquete' },
						{ key: 'Titular', value: 'Titular' },
						{ key: 'Importe', value: 'Importe' },
						{ key: 'Fecha', value: 'Fecha' }
					]}
					{pageSize}
					{page}
					{rows}
				>
					<Toolbar size="sm">
						<ToolbarContent>
							<ToolbarSearch placeholder="Buscar" persistent shouldFilterRows />
							<ToolbarMenu>
								<ToolbarMenuItem primaryFocus>Restart all</ToolbarMenuItem>
								<ToolbarMenuItem href="https://cloud.ibm.com/docs/loadbalancer-service"
									>API documentation</ToolbarMenuItem
								>
								<ToolbarMenuItem hasDivider danger>Stop all</ToolbarMenuItem>
							</ToolbarMenu>
							<Button icon={Printer}>Imprimir reporte</Button>
						</ToolbarContent>
					</Toolbar>
				</DataTable>
				<Pagination bind:pageSize bind:page totalItems={rows.length} pageSizeInputDisabled />
			</AccordionItem>
		</Accordion>
	</Tile>
</div>
