<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import '@carbon/charts-svelte/styles.css';
	import { BarChartSimple, DonutChart } from '@carbon/charts-svelte';
	import { Tile, Grid, Row, Column } from 'carbon-components-svelte';

	//obtener el ultimo dia del mes anterior
	let date = new Date();
	date.setDate(0);
	date.setHours(0, 0, 0, 0);
	date.setMonth(date.getMonth() - 1);
	date.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	console.log(date);
	date.toLocaleDateString('es-ES', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	});

	//obtener el primer dia del mes anterior
	let date2 = new Date();
	date2.setDate(1);
	date2.setHours(0, 0, 0, 0);
	date2.setMonth(date2.getMonth() - 1);
	console.log(date2);
	date2.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	//ventas del mes anterior
	let ventasMesAnterior = 0;

	let todasLasVentas = data.ventas;

	todasLasVentas.forEach((venta) => {
		if (venta.expand.pagos !== (undefined || null)) {
			venta.expand.pagos.forEach((pago) => {
				ventasMesAnterior += pago.valor;
			});
		}
	});

	ventasMesAnterior =
		new Intl.NumberFormat('es-AR', {
			style: 'currency',
			currency: 'ARS'
		}).format(ventasMesAnterior) + ' ARS';

	// Primero separamos todos los paquetes por nombre y luego sumamos los valores de los pagos

	let dataForChart = [];

	let paquetes = [];

	data.ventas.forEach((paquete) => {
		paquetes.push(paquete.expand.paquete.nombre + ' ' + paquete.expand.paquete.fechasalida);
	});

	//eliminamos los duplicados
	paquetes = [...new Set(paquetes)];

	//agregamos los valores de los pagos
	paquetes.forEach((paquete) => {
		let valor = 0;
		data.ventas.forEach((venta) => {
			if (venta.expand.paquete.nombre + ' ' + venta.expand.paquete.fechasalida === paquete) {
				if (venta.expand.pagos !== (undefined || null)) {
					venta.expand.pagos.forEach((pago) => {
						valor += pago.valor;
					});
				}
			}
		});
		dataForChart.push({ group: paquete, value: valor });
	});
</script>

<Grid>
	<Row>
		<Column>
			<h1>Reportes</h1>
		</Column>
	</Row>
	<Row class="mt-8">
		<Column>
			<h4>Cierres de caja</h4>
		</Column>
	</Row>

	<Row class="mb-8">
		<Column>
			<Tile>
				<h2>Último mes</h2>
				{#each data.ventas as venta}
					{#if venta.expand.pagos !== (undefined || null)}
						{#each venta.expand.pagos as pago}
							{#if pago.created >= date2 && pago.created <= date}
								<p>Fecha: {pago.fechaPago}</p>
								<p>Monto: {pago.valor}</p>
							{/if}
						{/each}
					{/if}
				{/each}
				<h3>{ventasMesAnterior}</h3>
			</Tile>
		</Column>
		<Column>
			<Tile>
				<h2>Diario</h2>
				{#each data.ventas as venta}
					{#if venta.expand.pagos !== (undefined || null)}
						{#each venta.expand.pagos as pago}
							{#if pago.created >= date2 && pago.created <= date}
								<p>Fecha: {pago.fechaPago}</p>
								<p>Monto: {pago.valor}</p>
							{/if}
						{/each}
					{/if}
				{/each}
				<h3>{ventasMesAnterior}</h3>
			</Tile>
		</Column>
		<Column>
			<Tile>
				<h2>Última semana</h2>
				{#each data.ventas as venta}
					{#if venta.expand.pagos !== (undefined || null)}
						{#each venta.expand.pagos as pago}
							{#if pago.created >= date2 && pago.created <= date}
								<p>Fecha: {pago.fechaPago}</p>
								<p>Monto: {pago.valor}</p>
							{/if}
						{/each}
					{/if}
				{/each}
				<h3>{ventasMesAnterior}</h3>
			</Tile>
		</Column>
	</Row>

		<Row class="mt-8">
		<Column>
			<h4>Gráficos de ventas</h4>
		</Column>
	</Row>
	<Row>
		<Column>
			<Tile>
				<DonutChart
					data={dataForChart}
					options={{
						theme: 'g100',
						title: 'Proporción del total de pagos por paquete',
						height: '400px',
						resizable: true,
						donut: {
							center: {
								label: 'Total'
							}
						}
					}}
				/>
			</Tile>
		</Column>
		<Column>
			<Tile>
				<BarChartSimple
					data={dataForChart}
					options={{
						theme: 'g100',
						title: 'Pagos por paquete',
						height: '400px',
						axes: {
							left: { mapsTo: 'value' },
							bottom: { mapsTo: 'group', scaleType: 'labels' }
						}
					}}
				/>
			</Tile>
		</Column>
	</Row>
</Grid>
